import Twitter from '../bizcard/twitter.png';
import Facebook from '../bizcard/Facebook.png';
import Instagram from './instagram.png';
import Github from './github.png';

export default function Footer() {
  return (
    <div className='footer-container'>
      <img src={Twitter}></img>
      <img src={Facebook}></img>
      <img src={Instagram}></img>
      <img src={Github}></img>
    </div>
  )
}