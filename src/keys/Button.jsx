function Button({text="YOyo", color="green", fontSize=12, backgroundColor="yellow", handleClick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
    backgroundColor: backgroundColor,
  };
  
  return <button onClick={() => handleClick('https://www.allkpop.com')} style={buttonStyle}>{text}</button>;
}



export default function AppButton() {

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}