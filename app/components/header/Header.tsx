

import React from 'react';
import NavBar from '../navBar/NavBar';

// array de links - tipos
interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  return (    
    <NavBar links={links} />
  );
};

