import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  //butona tiklayinca
  const handleClick = () => {
    // google ile giriş yap
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa
      .then((data) => {
        console.log(data.user);
        // kullanıcın yetkisini true'ya çeker
        setIsAuth(true);

        // kullanıcın tokenini lokale kaydet
        localStorage.setItem("TOKEN", data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1> Chat Room</h1>
        <p>Log in to continue</p>
        <button onClick={handleClick}>
          <img src="g-logo.png" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
