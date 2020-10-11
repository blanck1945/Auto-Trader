import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link href="/">
        <a className="navLink">Home</a>
      </Link>
      <Link href="/Search">
        <a className="navLink">Search</a>
      </Link>
      <Link href="/Faq">
        <a className="navLink">FAQ</a>
      </Link>
    </div>
  );
};

export default Navigation;
