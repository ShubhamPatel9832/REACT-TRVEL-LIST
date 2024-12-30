import { useState } from "react";
import Additem from "./components/Additem";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import "./index.css";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 5rem  1fr 4rem auto",
};

function App() {
    const [items, setItems] = useState([]);
    return (
        <div style={appStyle}>
            <Header />
            <Additem setItems={setItems} />
            <ItemList items={items} />
            <Filter />

            <Footer />
        </div>
    );
}

export default App;
