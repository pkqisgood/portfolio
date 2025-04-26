'use client'; // Only needed if this is in App Router

import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface ActiveLinkProps extends LinkProps {
  exact?: boolean;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

const ActiveLink = ({
  href,
  exact = false,
  children,
  className = '',
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href.toString());

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? 'active' : ''}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <nav id="header" className="flex justify-center items-center px-6 py-4 absolute left-1/2 transform -translate-x-1/2" >
      <div className="navbar space-x-10">
        <ActiveLink href="/" className='nav-link' exact>Home</ActiveLink>
        <ActiveLink href="/projects" className='nav-link' >Projects</ActiveLink>
        <ActiveLink href="/about" className='nav-link' >About</ActiveLink>
        <ActiveLink href="/contact" className='nav-link' >Contact</ActiveLink>
      </div>
    </nav>
  );
}