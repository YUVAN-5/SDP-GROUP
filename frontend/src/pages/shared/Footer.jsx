import {Instagram, Linkedin, Twitter, Youtube} from 'lucide-react'
import {Facebook} from 'lucide-react'
import '@/assets/cssfiles/Footer.css'
const Footer =()=> {
  return (
    <>
    <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">Cityscape Realty</span>
        </div>
        <div class="media-icons">
          <a href="#"><i><Facebook /> </i></a>
          <a href="#"><i><Twitter/></i></a>
          <a href="#"><i><Instagram/> </i></a>
          <a href="#"><i><Linkedin/></i></a>
          <a href="#"><i><Youtube/></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Services</li>
          <li><a href="#">Rent House</a></li>
          <li><a href="#">Buy and sell plots</a></li>
          <li><a href="#">Tenant Management</a></li>
          <li><a href="#">Customer Support</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Quick Links</li>
          <li><a href="#">Apartments</a></li>
          <li><a href="#">Individual House</a></li>
          <li><a href="#">Ongoing Projects</a></li>
          <li><a href="#">Land/Plots</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Partner Sites</li>
          <li><a href="#">Chennai Properties</a></li>
          <li><a href="#">99Acres</a></li>
          <li><a href="#">OMR Flats</a></li>
          <li><a href="#">Realtors Plots</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="#">Cityscape</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
          <a href="#">Language</a>
          <a href="#">blogs</a>
        </span>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer;