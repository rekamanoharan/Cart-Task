import './App.css';
import AddCart from './Components/AddCart/AddCart';
import {useState,useEffect} from "react";
const cartDetails=[
  {
  id:1,
  image:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  productName:"Samsung S21",
  price: "2500",
},
{
  id:2,
  image:"https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
  productName:"Iphone 12",
  price: "90500",
},
{
  id:3,
  image:"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
  productName:"Redmi 9",
  price: "3500",
},
{
  id:4,
  image:"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  productName:"Samsung M21",
  price: "2300",
},
{
  id:5,
  image:"https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
  productName:"TRQ White Shoes",
  price: "1999",
},
{
  id:6,
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU",
  productName:"Watch Pink",
  price: "2000",
},
{
  id:7,
  image:"https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
  productName:"LOREM Watch Black",
  price: "2599",
},
{
  id:8,
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
  productName:"AMZ Laptop 8GB RAM",
  price: "50000",
},
];

function App() {
  const [cartItems,setCartItems] = useState([]);
  const handleOnClickAddItem = (e,data,isInCart)=>{
    e.preventDefault();
    if(isInCart){
      const updateCartItems = cartItems.filter((item)=>item.id !== data.id);
      setCartItems(updateCartItems);
      }else{
        setCartItems((prevState)=>{
          return [...prevState,data];
          })
      }
    }
    useEffect(()=>{
      window.location.href='#';
      },[cartItems])
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active"  aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link"  href="#!">About</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item"  href="#!">All Products</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item"  href="#!">Popular Items</a></li>
                        <li><a className="dropdown-item"  href="#!">New Arrivals</a></li>
                    </ul>
                </li>
            </ul>
            <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}</span>
                </button>
            </form>
        </div>
    </div>
</nav>
<header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
    </div>
</header>
<footer className="py-5 bg-dark">
    <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
    </div>
</footer>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        
        {cartDetails.map((d, i) => (
              <AddCart data={d} onClickHandler={handleOnClickAddItem} cartItems={cartItems} key={`adding-cart-${i}`} />
            ))}
     </div>
     </div>
     </section>
    </div>
  );
}

export default App;
