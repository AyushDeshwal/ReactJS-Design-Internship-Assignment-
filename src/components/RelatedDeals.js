import { IMAGE_URL } from "../utils/constants";

const RelatedDeals = ()=>{
  const numberOfDivs = 3;

  const divs = Array.from({ length: numberOfDivs }, (_, index) => index);

  return (
    
    <div className="discountOffers">
      {divs.map((index) => (
        <div className="relateddeals">
        <div className="deals">
           <span className="productImage" ><img src={IMAGE_URL}></img></span> 
           <span className="offers">
           <span className="discountOffer">20% Off</span>
           <span className="discountOffer">Limited time</span>
           </span>
           <span className="productName">Webbuilder 1</span>
           <span className="productInfo">Computer Modern classic with wix support </span>
            <span className="price">
                <span className="discountedPrice">$39.96</span>
                <span className="actualPrice">$49.96</span>
                <span className="discount">(20% Off)</span>
            </span>
            <button>View Deal</button>
        </div>
        
    </div>
      ))}
    </div>
  );
}

export default RelatedDeals;