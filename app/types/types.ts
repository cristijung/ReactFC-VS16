
export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;  //opcional '?'
   onClick?: () => void;
}

export interface NavLink {
  href: string;
  label: string;  
}
