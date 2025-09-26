
export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
   onClick?: () => void;
}

export interface NavLink {
  href: string;
  label: string;
}
