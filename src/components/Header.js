import { SEARCH_PNG } from "../utils/constants";

const Header = () => {
    return (
        <nav> 
        <div>
        <img src={SEARCH_PNG}></img>
        <input></input>
        </div>
        <ul>
        <li>Categories </li>
        <li>Website Builders</li>
        <li>Today's deals</li>
        </ul>
        </nav>
    )
}

export default Header ; 