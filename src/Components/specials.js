import '../App.css';
import MenuCard from './menucard';
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
const menuItems = [
  {
    title: 'Greek Salad',
    description: 'A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: 12.99,
    menuimage:img1
  },
  {
    title: 'Lemon Dessert',
    description: 'A tangy and sweet lemon dessert to finish your meal.',
    price: 8.99,
    menuimage: img2
  },
  {
    title: 'Bruschetta',
    description: 'Grilled bread topped with fresh tomatoes, garlic, and basil.',
    price: 10.99,
    menuimage:img3
  }
];

function Specials() {

  return (
    <section 
     style={{
        backgroundColor: "#eef7f1",
        minHeight: "100vh",
        padding: "32px",
        color: "white",
      }}
    className="specials">
    <h1
    style={{
      marginBottom: "40px",
      textAlign: "center",
      color: "#334e4a",
    }}
    >
      This weeks specials
    </h1>
    <div
     style={{
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      flexWrap: "wrap",
        }}
        >
    {menuItems.map((item) => (
      <MenuCard
        key={item.title}
        title={item.title}
        description={item.description}
        price={item.price}
        menuimage={item.menuimage}
      />
    ))}
    </div>
    </section>
  );
}

export default Specials;
