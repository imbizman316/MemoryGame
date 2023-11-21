import Logo from '../airbnb_exp/Airbnb_Logo_Bélo.svg.png';

export default function Header() {

  return (
    <div className='logo-container'>
      <img className='logo' src={Logo}></img>
    </div>
  )

}