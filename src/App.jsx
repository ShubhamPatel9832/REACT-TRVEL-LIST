import { useState } from "react";

import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";

import "./index.css";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 5rem 1fr 4rem auto",
};

function App() {
    const [items, setItems] = useState({});

    let itemsArr = Object.values(items);

    function addItem(item) {
        setItems(function (items) {
            items[item.name] = item;

            return { ...items };
        });
    }

    function updateItem(namekey, packed) {
        setItems(function (items) {
            // update value

            items[namekey].packed = packed;
            return { ...items };
        });
    }

    function deleteItem(namekey) {
        setItems(function (items) {
            delete items[namekey];
            return { ...items };
        });
    }

    // function filterItems(type) {
    //     if (type === "input-order") {
    //         itemsArr = Object.values(items);
    //     }
    //     if (type === "description") {
    //         itemsArr.sort(function (item1, item2) {
    //             return item1.name.localCompare(item2.name);
    //         });
    //     }
    //     if (type === "status") {
    //         itemsArr.sort(function (item1, item2) {
    //             if (item1.packed === item2.packed) return 0;
    //             if (item1.packed === true && item2.packed === false) return -1;
    //             if (item1.packed === false && item2.packed === true) return 1;
    //         });
    //     }
    // }

    function clearList() {
        setItems({});
    }

    // prop -drilling

    // app -> itemList -> Item

    return (
        <div style={appStyle}>
            <Header />
            <AddItem addItem={addItem} />
            <ItemList
                deleteItem={deleteItem}
                updateItem={updateItem}
                items={Object.values(items)}
            />
            <Filter clearList={clearList} />

            <Footer />
        </div>
    );
}

export default App;
