
'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

//   configuração de rotas
  const links = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ];

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    const baseClasses = 'font-medium transition-colors';
    const activeClasses = 'text-indigo-600 border-b-2 border-indigo-600';
    const inactiveClasses = 'text-gray-600 hover:text-indigo-600';
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
            Seu Logo
          </Link>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={getLinkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* btn cta Desktop */}
        <div className="hidden md:block">
          <button className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Ação Principal
          </button>
        </div>

        {/* mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner pt-2 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-600 hover:text-indigo-600 font-medium transition-colors w-full text-center py-2 ${
                  pathname === link.href ? 'text-indigo-600 font-bold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors w-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              Ação Principal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;