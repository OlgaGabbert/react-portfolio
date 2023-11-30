import React from 'react';
import './footer.css';

const Footer = ({ contactLink }) => {
  return (
    <footer>
      <div>
        <p>&copy; 2023 Olga Gabbert</p>
        <a href={contactLink}>Contact me</a>
      </div>
    </footer>
  );
};

export default Footer;
