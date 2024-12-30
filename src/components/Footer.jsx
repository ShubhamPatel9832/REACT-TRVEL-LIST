import style from "../styles/Footer.module.css";

function Footer(prop) {
    const { totalItems, packedItem, packedPersentage } = prop;
    return (
        <div className={style.footer}>
            you have {totalItems} item left on your list and you have alredy
            packed {packedItem} ({packedPersentage}%)
        </div>
    );
}

export default Footer;
