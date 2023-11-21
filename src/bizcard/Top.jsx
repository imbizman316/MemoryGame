import Email from './email.png';
import Linkedin from './linkedin.png';

export default function Top() {
  return (
    <div className='top-container'>
      <div className='title'>
        <h2>Mike Lee</h2>
        <h5>Fullstack Developer</h5>
        <h6>www.mikeymike.com</h6>
      </div>
      <div className='contact-container'>
        <div className='email-container'>
          <img className='email-icon' src={Email}></img>
          Email
        </div>
        <div className='linkedin-container'>
          <img className='linkedin-icon' src={Linkedin}></img>
          LinkedIn
        </div>
      </div>
    </div>
  )
}