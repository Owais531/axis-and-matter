"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cross from "../../../../public/assets/images/Cross.svg";
import DownArrow from "../../../../public/assets/images/DownArrowMenu.svg";
import Hamburger from "../../../../public/assets/images/hamburger.svg";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./NavMenu.module.scss";

// Types
type SubMenuItem = {
  label: string;
  link: string;
  target?: string;
  icon?: string;
};

type NavMenuItem = {
  menuItem: string;
  navigate: string;
  navigate_mob: string;
  subMenu?: SubMenuItem[];
};

// Menu config
const navMenu: NavMenuItem[] = [
  {
    menuItem: "About",
    navigate: "about",
    navigate_mob: "about",
    subMenu: [],
  },
  {
    menuItem: "Services",
    navigate: "services",
    navigate_mob: "services",
    subMenu: [],
  },
  {
    menuItem: "Pricing",
    navigate: "pricing",
    navigate_mob: "pricing",
    subMenu: [],
  },
  {
    menuItem: "Case Studies",
    navigate: "case-studies",
    navigate_mob: "case-studies",
    subMenu: [],
  },
];

const scrollSections = ["about", "services", "pricing", "case-studies", "contact-us-form"];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="flex flex-col md:flex-row items-end ml-10">
      {/* Desktop View */}
      <div className="md:flex md:items-center hidden">
        {navMenu.map((item, index) => (
          <MenuItem
            key={index}
            title={item.menuItem}
            navigate={item.navigate}
            options={item.subMenu ?? []}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? (
            <Image src={Cross} alt="Cross" />
          ) : (
            <Image src={Hamburger} alt="hamburger" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className={`${styles.mobile_nav} md:hidden flex flex-col`}>
          <div>
            {navMenu.map((item, index) => {
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;

              return (
                <div key={index} onClick={() => toggleAccordion(index)}>
                  <Link
                    href={
                      hasSubMenu
                        ? "#"
                        : window.location.pathname === "/"
                        ? scrollSections.includes(item.navigate_mob)
                          ? `#${item.navigate_mob}`
                          : `/${item.navigate_mob}`
                        : scrollSections.includes(item.navigate_mob)
                        ? `/#${item.navigate_mob}`
                        : `/${item.navigate_mob}`
                    }
                    onClick={(e) => {
                      if (hasSubMenu) {
                        e.preventDefault();
                        setOpenIndex(openIndex === index ? null : index);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <div
                      className={`${styles.menu_item_mob} flex justify-between`}
                    >
                      <h4>{item.menuItem}</h4>
                      {hasSubMenu && (
                        <Image
                          className={`${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                          src={DownArrow}
                          alt="down-arrow"
                        />
                      )}
                    </div>
                  </Link>

                  {/* Accordion (only if submenu exists) */}
                  {hasSubMenu && (
                    <div
                      className={`transition-[max-height] duration-500 overflow-hidden ${
                        openIndex === index ? "max-h-[20rem]" : "max-h-0"
                      }`}
                    >
                      {item.subMenu!.map((subMenuItem, subIndex) => (
                        <div
                          key={subIndex}
                          className={styles.subMenu_item_mob}
                        >
                          <Link
                            href={subMenuItem.link}
                            target={subMenuItem.target}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <h4 className="flex justify-between">
                              {subMenuItem.label}
                              {subMenuItem.icon && (
                                <Image
                                  src={subMenuItem.icon}
                                  alt={subMenuItem.label}
                                  width={30}
                                  height={20}
                                  className="ml-2"
                                />
                              )}
                            </h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
