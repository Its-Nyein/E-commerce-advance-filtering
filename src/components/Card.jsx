import { FaShoppingBag } from "react-icons/fa";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <>
      <div className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </div>
          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <FaShoppingBag className="bag-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
