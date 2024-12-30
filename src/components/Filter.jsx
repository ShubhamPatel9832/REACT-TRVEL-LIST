import style from "../styles/Filter.module.css";

function Filter() {
    return (
        <div className={style.filter}>
            <select>
                <option value="input-order"> short by input order </option>
                <option value="description"> short by descrption </option>
                <option value="status"> short by Status </option>
            </select>

            <button>Clear List </button>
        </div>
    );
}

export default Filter;
