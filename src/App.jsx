import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("TOKEN"));
  const [room, setRoom] = useState(null);
  //kullanicinin yetkisi yoksa login sayfasi
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  //kullanicinin yetkisi varsa
  return (
    <div className="container">
      {!room ? (
        // oda secilmediyse: oda secme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      ) : (
        // oda secildiyse: sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
