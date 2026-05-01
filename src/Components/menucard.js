import '../App.css';

const MenuCard = ({title, description, price, menuimage}) => {
  return (
    <>
<div>
<img 
src={menuimage} 
alt={title}
 style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  }}
 /> 
<h3>{title}</h3>
<h5>${price}</h5>
<p>{description}</p>
  <button
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          background: "#334e4a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>

    </div>
    </>
  );
}

export default MenuCard;
