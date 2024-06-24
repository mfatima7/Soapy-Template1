import {image} from "../Image/Image"
import '../Css of components/Header.css'
function Header() {
  return (
    <section className="header">
     <a className="head">About</a>
     <a className="head">Shop</a>
     <a className="head">Pages <i class="fa-solid fa-chevron-down"></i> </a>
     <img className="logo" src={image.logo} ></img>
     <a className="head">Search</a>
     <a className="head">Account</a>
     <a className="head">Cart</a>
    </section>
  )};
export default Header;
