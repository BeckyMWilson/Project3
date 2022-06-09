// intergrate apollo to front end
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import Homepage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import "./AppStyles.css";


// link to graphql
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const inlineStyle = {
  height: "400px",
  backgroundColor: "blue",
  color: "white",
  margin: "10px",
};

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Navbar />
      <main>

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </main>
      <Footer />

    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
