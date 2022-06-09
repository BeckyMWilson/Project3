import React from 'react'
import { ExternalLink } from 'react-external-link';
import "./FooterStyles.css";

<link rel="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


export default function Footer() {
  return (

    <footer className="footer">
      <h2>Made by the hard-to-port team.</h2>
      <a href="https://www.facebook.com" class="fa fa-facebook" alt="facebook" target="_blank"></a>
      <a href="https://www.twitter.com" class="fa fa-twitter" alt="twitter" target="_blank"></a>
      <a href="https://www.linkedin.com" class="fa fa-linkedin" alt="linkedin" target="_blank"></a>
      <a href="https://www.instagram.com" class="fa fa-instagram" alt="instagram" target="_blank"></a>
    </footer>

  );
}
