import styles from "../styles/Item.module.css";
import Emoji from "./Emoji";

function Item({ count, name, packed }) {
    return (
        <div className={styles.item}>
            <input
                type="checkbox"
                id={name}
                checked={packed}
                onChange={() => console.log(`${name} toggled`)}
            />
            <label htmlFor={name}>
                <span>{count}</span> {name}
            </label>
            <button>
                <Emoji txt="❌" />
            </button>
        </div>
    );
}

export default Item;
