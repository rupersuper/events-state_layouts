import style from "./ListView.module.css";

export default function ListView({ item }) {
  return (
    <>
      {item.map((value, i) => {
        return (
          <div className={style.card} key={i}>
            <div className={style.image}>
              <img
                className={style.card_image}
                src={value.img}
                alt={value.name}
              />
            </div>
            <span className={style.title}>{value.name}</span>
            <span className={style.color}>{value.color}</span>
            <span className={style.price}>${value.price}</span>
            <button className={style.btn}>Add to cart</button>
          </div>
        );
      })}
    </>
  );
}
