"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Helper function to determine active link color
  const getLinkColor = (href: string) => (pathname === href ? "primary" : "foreground");

  // Handler to close the menu when a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* Left section with brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Fabio Tavernini</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center section with links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" color={getLinkColor("/")}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" color={getLinkColor("/projects")}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" color={getLinkColor("/contact")}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right section for menu items in mobile view */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="/" color={getLinkColor("/")} size="lg" onClick={handleLinkClick}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/projects" color={getLinkColor("/projects")} size="lg" onClick={handleLinkClick}>
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/contact" color={getLinkColor("/contact")} size="lg" onClick={handleLinkClick}>
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
