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

function sortItemsArr(itemsArr, sort) {
    if (sort === "input-order") {
        return itemsArr;
    }

    if (sort === "description") {
        itemsArr.sort(function (item1, item2) {
            return item1.name.localeCompare(item2.name);
        });
        return itemsArr;
    }

    if (sort === "status") {
        itemsArr.sort(function (item1, item2) {
            if (item1.packed === item2.packed) return 0;
            if (item1.packed === true && item2.packed === false) return 1;
            if (item1.packed === false && item2.packed === true) return -1;
        });
        return itemsArr;
    }
}

function App() {
    const [items, setItems] = useState({});
    const [sort, setSort] = useState("input-order");
    // drived
    const itemsArr = sortItemsArr(Object.values(items), sort);

    const totalItems = itemsArr.length;
    const packedItem = itemsArr.reduce(function (acc, item) {
        if (item.packed) acc++;
        return acc;
    }, 0);

    const packedPersentage = ((packedItem / totalItems) * 100).toFixed(2);

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

    function clearList() {
        setItems({});
    }

    function filterItems(sortValue) {
        setSort(sortValue);
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
                items={itemsArr}
            />
            <Filter clearList={clearList} filterItems={filterItems} />

            <Footer
                totalItems={totalItems}
                packedItem={packedItem}
                packedPersentage={packedPersentage}
            />
        </div>
    );
}

export default App;
