import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Made with ❤️ by Felipe Camus</p>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/fcamus00" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/portfolio/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
