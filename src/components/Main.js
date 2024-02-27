import { CHECKBOX_PNG, DROP_DOWN_PNG, INFO_PNG } from "../utils/constants";
import { arrayOfData } from "../utils/data";
import ItemCards from "./ItemCards";
import RelatedDeals from "./RelatedDeals";


const Main = ()=>{

    const data = arrayOfData; 
console.log(data);   


    return (
        <main>
            <div className="heading">
            <h1> Best Website builders in the US</h1>
            </div>
            <div className="updates">
                <ul>
                    <li><img src={CHECKBOX_PNG}></img> Last Updated - February 22, 2020</li>
                    <li><img src={INFO_PNG}></img> Advertising Disclosure</li>
                </ul>
                <span>Top Relevant <img src={DROP_DOWN_PNG}></img></span>
            </div>
            <div className="tools">
                <ul>
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                </ul>
            </div>
            <div className="page">
                <ul>
                <li>Home   </li>
                <li>Hosting for all   </li>
                <li>Hosting </li>
                <li>Hosting 6  </li>
                <li>Hosting 5</li>
                </ul>
            </div>
                  {data.map((i)=><ItemCards data={i} />)}
                  <h2 className="headingofdeals">Related deals you might like for</h2>
                 <RelatedDeals />
            <div className="signUpInfo">
                <h1>Sign up and get exclusive special deals</h1>
                <span className="signUpButton"><input></input>
                <button>Sign up</button></span>
            </div>
        
        </main>
    )
}

export default Main; 