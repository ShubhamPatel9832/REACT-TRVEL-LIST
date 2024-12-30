import styles from "../styles/Item.module.css";
import Emoji from "./Emoji";

function Item(prop) {
    const { count, name, packed, updateItem, deleteItem } = prop;

    function handleOnchange() {
        updateItem(name, !packed);
    }

    function handleDelete() {
        deleteItem(name);
    }

    return (
        <div className={styles.item}>
            <input
                type="checkbox"
                id={name}
                checked={packed}
                onChange={handleOnchange}
            />
            <label htmlFor={name}>
                <span>{count}</span> {name}
            </label>
            <button onClick={handleDelete}>
                <Emoji txt="❌" />
            </button>
        </div>
    );
}

export default Item;
