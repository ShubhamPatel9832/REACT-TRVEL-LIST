import style from "../styles/ItemList.module.css";
import Item from "./Item";

function ItemList(props) {
    const { items } = props;

    return (
        <div className={style.itemList}>
            {items.map(function (item, index) {
                return (
                    <Item
                        name={item.name}
                        count={item.count}
                        packed={item.packed}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
