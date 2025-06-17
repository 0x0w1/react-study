import "./Main.css";

const Main = () => {
  const user = {
    name: "황금별",
    isLogin: true,
  };

  // return <>{user.isLogin ? <div>Log-Out</div> : <div>Log-In</div>}</>;
  if (user.isLogin) {
    return <div className="logout">LogOut</div>;
  } else {
    return <div>LogIn</div>;
  }
};

export default Main;
