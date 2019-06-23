import React from 'react';


const Footer = () => (
    <footer className="w-full bg-blue-lighter px-4 xl:px-32 py-4 flex justify-between mt-16 flex-wrap xl:flex-no-wrap">
        <p>Made with <span role="img" aria-label="beer">🍺</span> and <span role="img" aria-label="hate">🤬</span> by <a className="text-blue-dark no-underline font-semibold" href="https://strehl.dev">Bernd Strehl</a> @ <a className="text-blue-dark no-underline font-semibold" href="https://elbstack.com">elbstack</a></p>
        <p> <a className="text-blue-dark no-underline font-semibold" href="https://strehl.dev/#imprint">Imprint</a></p>
    </footer>
);

export default Footer;