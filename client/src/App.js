import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards"
// import styles from "./components/cards/cards."
// import Savecards from "./components/cards/Savecards.js"

//delete this line in future
const inlineStyle = {
  height: "400px",
  backgroundColor: "blue",
  color: "white",
  margin: "10px",
};

function App() {
  return (
    <>
      <Navbar />
      <br />
      <div style={inlineStyle}>
        <h1>Please delete this section </h1>
      </div>
      <br />
      <Cards />
      <Footer>

      </Footer>
    </>
  );
}

export default App;
