import Additem from "./components/Additem";
// import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import "./index.css";

const appStyle = {
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "3rem 2rem  1fr  1rem",
};

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <Additem />
      <ItemList />
      {/* <Filter /> */}
      <Footer />
    </div>
  );
}

export default App;
