import style from "../styles/Filter.module.css";

function Filter(props) {
    const { filterItems, clearList } = props;

    function handleChange(e) {
        filterItems(e.target.value);
    }

    return (
        <div className={style.filter}>
            <select onChange={handleChange}>
                <option value="input-order"> short by input order </option>
                <option value="description"> short by descrption </option>
                <option value="status"> short by Status </option>
            </select>

            <button onClick={clearList}>Clear List </button>
        </div>
    );
}

export default Filter;
