import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
