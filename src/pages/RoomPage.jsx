const RoomPage = ({ setIsAuth, setRoom }) => {
  // çıkış yap
  const logout = () => {
    // yetki state'ini false'a çek
    setIsAuth(false);

    // localdeki kaydı kaldır
    localStorage.removeItem("TOKEN");
  };

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilemeyi engelle
    e.preventDefault();

    // inputtaki degeri al
    const room = e.target[0].value;

    // oda ismini state'e aktar
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Which room would you like to enter?</p>
      <input type="text" placeholder="ex:weekdays" required />
      <button type="submit">Enter the room</button>
      <button onClick={logout} type="button">
        Log out
      </button>
    </form>
  );
};

export default RoomPage;
