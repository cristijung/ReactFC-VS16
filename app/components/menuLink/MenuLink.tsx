import Link from 'next/link';
import { LinkProps } from '@/app/types/types';

export function MenuLink({ href, children, className, onClick }: LinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        bg-orange-600 px-6 py-3 text-lg font-semibold text-white
        shadow-lg
        transition-all duration-300
        hover:scale-105 hover:bg-pink-700 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-blue-500/50
        ${className || ''}
      `}
    >
      {children}
    </Link>
  );
}