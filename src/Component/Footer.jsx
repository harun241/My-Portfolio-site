import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo & Company Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Logo />
          <p className="ml-1 font-bold text-lg text-green-400 hover:text-green-500 transition-colors">
            SH Company Ltd.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="text-lg font-semibold mb-3 text-green-400">Contact</h6>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/8801820903961"
              className="underline hover:text-green-500 transition-colors"
            >
              +8801820903961
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:omdharun6@gmail.com"
              className="underline hover:text-green-500 transition-colors"
            >
              omdharun6@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} SH Company Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
