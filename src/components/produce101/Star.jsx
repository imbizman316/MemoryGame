export default function Star(props) {


  let starIcon = props.isFilled? "https://img.lovepik.com/element/40150/3002.png_1200.png" : "https://icons.veryicon.com/png/o/commerce-shopping/jinfeng-technology-icon-library/start-14.png";

  return (
    <img src={starIcon} width="30px"></img>
  )

}