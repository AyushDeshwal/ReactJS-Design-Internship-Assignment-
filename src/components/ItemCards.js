import { DROP_DOWN_PNG, IMAGE_URL, STAR_PNG } from "../utils/constants";
import { arrayOfData } from "../utils/data"; 


const ItemCards =(data) => {

return (
    <div className="serviceContent">
        <span>{data.data.number}</span>
        <div className="imgOfService">
        
        <img className="productImage" src={IMAGE_URL}></img>
        <span>{data.data.imageCaption}</span>
        </div>
        <div className="aboutService">
            <p className="intro"><span>{data.data.name} </span> - {data.data.about}</p>
            <span className="mainHighlights">Main highlights</span>
            <p className="highlights">{data.data.highlights}</p>
            <span className="showMore">Show more <img src={DROP_DOWN_PNG}></img></span>
        </div>
        <div className="review">
            <div className="grid">
            <span className="rating">{data.data.rating}</span>
            <span className="comment">{data.data.comment}</span>
            <span className="star"><img src={STAR_PNG}></img></span>
            </div>
            <div className="button">
            <button>View</button>
            </div>
        </div>
    </div>

)


}


export default ItemCards; 