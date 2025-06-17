import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  // Parent Component
  const buttonProps = {
    text: "mail",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* <Button text={"mail"} color={"red"} /> */}
      <Button {...buttonProps} />
      <Button text={"cafe"} />
      <Button text={"blog"}>
        <div> 자식요소 </div>
      </Button>
      <Button text={"test"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
