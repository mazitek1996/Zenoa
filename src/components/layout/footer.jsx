import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-5 py-3 bg-light">
      <dib>
        <p className="mb-0 text-center text-secondary">
          Your Footer Content &copy; {new Date().getFullYear()}
        </p>
      </dib>
    </footer>
  );
};

export default Footer
