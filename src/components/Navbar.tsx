'use client'; // Only needed if this is in App Router

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "body",
      start: "60px top",
      onEnter: () => {
        document.querySelector("#header .navbar")?.classList.add("background-nav");
      },
      onLeaveBack: () => {
        document.querySelector("#header .navbar")?.classList.remove("background-nav");
      },
      markers: false
    });
  }, []);

  return (
    <nav id="header" className="flex justify-center items-center px-6 py-4 fixed left-1/2 transform -translate-x-1/2 z-100" >
      <div className="navbar space-x-0 md:space-x-8 lg:space-x-10">
        <ActiveLink href="/" className='nav-link p1' exact>Home</ActiveLink>
        <ActiveLink href="/projects" className='nav-link p1' >Projects</ActiveLink>
        <ActiveLink href="/about" className='nav-link p1' >About</ActiveLink>
        {/* <ActiveLink href="/contact" className='nav-link p1' >Contact</ActiveLink> */}
      </div>
    </nav>
  );
}

export default Navbar;