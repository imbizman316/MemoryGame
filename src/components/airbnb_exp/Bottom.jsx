import Redstar from '../airbnb_exp/redstar.png';

export default function Bottom(props) {

  const image = props.image;
  const title = props.title;
  const review = props.stats.review;
  const soldout = props.soldout;
  const reviewCount = props.stats.reviewCount;
  const country = props.country;
  const location = props.location;
  const descr = props.descr;
  const price = props.price;

  let badgeText;
  let backColor = "white";

  if (soldout === 0) {
    badgeText = "SOLD OUT";
    backColor = "blue";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
 
  return (
    <div className="bottom">
      <div className="bottom-image-container">
        { badgeText && <div className="soldout" style={{backgroundColor: `${backColor}`}}> {badgeText} </div>}
        <div className="bottom-image" style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <span className='model-title'>{title}</span>
      <div className='info-container'>
        <div className='top-info'>
          <img className='redstar' src={Redstar}></img>
          <p>{review}</p>
          <p>({reviewCount})</p>
          <p className='greytext'>- {country}</p>
        </div>
        <p className='greysmall'>{descr}</p>
        <div className='bottom-info'>
          <p className='bottom-price'>From ${price}</p>
          <p>/ person</p>
        </div>        
      </div>
    </div>
  )
}