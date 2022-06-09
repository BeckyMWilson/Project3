import React from 'react'
import { ExternalLink } from 'react-external-link';
import "./FooterStyles.css";

<link rel="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


export default function Footer() {
  return (
    
    <footer className="footer">
      <h2>Made by the hard-to-port team.</h2>
      <a href="#" class="fa fa-facebook" alt="facebook"></a>
      <a href="#" class="fa fa-twitter" alt="twitter"></a>
      <a href="#" class="fa fa-linkedin" alt="linkedin"></a>
      <ExternalLink href="https://www.instagram.com" class="fa fa-instagram" alt="instagram" />
    </footer>

  );
}
