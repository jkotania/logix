import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-zinc-600 text-center py-4">
      <p>&copy; {new Date().getFullYear()} LogiX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
