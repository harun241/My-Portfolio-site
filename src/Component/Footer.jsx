import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <Logo></Logo>
    <p className='ml-3 font-bold'>
     SH Industry Ltd.
    
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Contact</h6>
   <div>
     <p>what'sapp:+8801820903961</p>
     <p>Mail : omdharun6@gmail.com</p>
     <p></p>
   </div>
  </nav>
</footer>
    );
};

export default Footer;