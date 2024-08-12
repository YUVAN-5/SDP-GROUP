import React from 'react'
import '../../assets/css/Home.css'
import Landing from '../../assets/img/metal.avif'
import San from '../../assets/img/rosewoodresid.webp'
import Vancouver from '../../assets/img/vancouver.webp'
import Koolina from '../../assets/img/koolina.jpg'
import Westin from '../../assets/img/westin.webp'
import Aboutus from '../../assets/img/about.jpg'


const About = () => {
  return (
   <>
    <div className="home-container">
      <div className="image-container">
        <img src={Aboutus} alt="Description of image" className="background-image" />
        <div className="centered-text">A LEADER IN THE WORLD OF LUXURY LIVING</div>
      </div>
    </div>
    <div className="center-text" >
      <h1>OUR SERVICE
      </h1>
    </div>
      <hr className='divider'/>
      <div className='txt'>
       
      <p>SkyScraper is an international real estate boutique specializing in the design, marketing and sale of branded residences, legacy masterplanned communities, destination resorts and urban super prime real estate developments. We provide world-class developers with a one-stop, fully integrated service that guides our projects from vision to closing.</p>
      </div>
      {/* <div className="link-images">
        <div className="link-image-container">
          <a href="https://example.com">
            <img src={San} alt="Description of link image 1" className="link-image" />
            <div className="link-image-text">ROSEWOOD RESIDENCIES SAN FRANCISCO</div>
          </a>
        </div>
        <div className="link-image-container">
          <a href="https://example.com">
            <img src={Vancouver} alt="Description of link image 2" className="link-image" />
            <div className="link-image-text">VANCOUVER HOUSE</div>
          </a>
        </div>
      </div>
      <div className="link-images">
        <div className="link-image-container">
          <a href="https://example.com">
            <img src={Koolina} alt="Description of link image 1" className="link-image" />
            <div className="link-image-text">KO OLINA </div>
          </a>
        </div>
        <div className="link-image-container">
          <a href="https://example.com">
            <img src={Westin} alt="Description of link image 2" className="link-image" />
            <div className="link-image-text">WESTIN WHISTLER</div>
          </a>
        </div>
      </div>
     */}
    </>
  )
}

export default About
