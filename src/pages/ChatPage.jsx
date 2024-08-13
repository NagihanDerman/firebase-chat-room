import {
  addDoc,
  serverTimestamp,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  // mesaj gonderme fonksiyonu
  const sendMessage = async (e) => {
    e.preventDefault();

    // kolleksiyonun referansını alma
    const messagesCol = collection(db, "messages");

    // kolleksiyona yeni dokuman ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    // inputu temizle
    e.target.reset();
  };

  // mevcut odada gonderilen mesajları anlık olarak al
  useEffect(() => {
    // abone olunucak kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // onSnapshot anlık olarak kolleksiyondaki  değişimleri izler,kolleksiyon her değiştiğinde yazdigimiz fonksiyon ile kolleksiyondaki guncel dokumanlara erişir.
    onSnapshot(messagesCol, (snapshot) => {
      // veirlerin geçici olarak tutulduğu dizi
      const tempMsg = [];

      // dokumanlari dov ve verilerine eris
      snapshot.docs.forEach((doc) => tempMsg.push(doc.data()));

      // mesajları state'e aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Different Room</button>
      </header>

      <main>
        {messages.map((data, i) => (
          <Message data={data} key={i} />
        ))}
      </main>

      <form onSubmit={sendMessage}>
        <input placeholder="write your message..." type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
