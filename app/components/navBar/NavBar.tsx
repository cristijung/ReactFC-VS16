'use client';
import Link from "next/link";
import { MenuLink } from "../menuLink/MenuLink";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function NavBar({ links = [] }: { links?: { href: string; label: string; }[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //hook
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6 lg:p-8">
        {/* logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Home
          </Link>
        </div>

        {/* nav para desktop */}
        <div className="hidden space-x-4 lg:flex lg:items-center">
          {links.map((link) => (
            <MenuLink key={link.href} href={link.href} className="px-4 py-2">
              {link.label}
            </MenuLink>
          ))}
        </div>

        {/* btn de hambúrguer */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <IoMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* menu mobile, visível apenas quando aberto */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } w-full bg-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 p-4">
          {links.map((link) => (
            <MenuLink
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center"
            >
              {link.label}
            </MenuLink>
          ))}
        </div>
      </div>
    </div>
  );
}