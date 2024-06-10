import style from "./CardView.module.css";

export default function CardView({ item }) {
  return (
    <div className={style.wrapper}>
      {item.map((value, i) => {
        return (
          <div className={style.card} key={i}>
            <div className={style.image}>
              <img className={style.card_image} src={value.img} alt="" />
            </div>
            <span className={style.title}>{value.name}</span>
            <span className={style.color}>{value.color}</span>
            <div className={style.wrap_block}>
              <span className={style.price}>${value.price}</span>
              <button className={style.btn}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
