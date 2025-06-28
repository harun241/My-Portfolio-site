import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo & Company Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <Logo />
          <p className="ml-1 font-bold text-lg">SH Company Ltd.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Contact</h6>
          <p>WhatsApp: <a href="https://wa.me/8801820903961" className="underline">+8801820903961</a></p>
          <p>Email: <a href="mailto:omdharun6@gmail.com" className="underline">omdharun6@gmail.com</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
