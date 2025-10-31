"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DownArrowMenu from "../../../../public/assets/images/DownArrowMenu.svg";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: { label: string; link?: string; icon?: any; target?: string }[];
  navigate?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  options,
  navigate,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleMenuClick = () => {
    if (options) {
      toggleDropdown();
    } else {
      onClick?.();
    }
    setActive((prevActive) => !prevActive);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeDropdown();
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let lastScrollY = 0;
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 170) {
        setActive(false);
      } else if (currentScrollY > lastScrollY) {
        closeDropdown();
        setActive(false);
      }

      lastScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      {/* Case 1: No submenu → navigate */}
      {!options || options.length === 0 ? (
        <Link
          href={
            navigate
              ? navigate === "about" || navigate === "services" || navigate === "pricing" || navigate === "case-studies"
                ? `/#${navigate}`
                : `/${navigate}`
              : "/"
          }
          className={`${styles.header_menu_item} border-b-2 border-transparent cursor-pointer`}
        >
          <div className="flex items-center">
            <p>{title}</p>
          </div>
        </Link>
      ) : (
        /* Case 2: Has submenu → toggle dropdown */
        <button
          onClick={handleMenuClick}
          className={`${styles.header_menu_item} ${
            active
              ? "border-b-2 border-black cursor-pointer"
              : "border-b-2 border-transparent cursor-pointer"
          }`}
        >
          <div className="flex items-center">
            <p>{title}</p>
            <Image
              className={`${isOpen ? "rotate-180" : ""} ${
                styles.menu_item_down_arrow
              }`}
              src={DownArrowMenu}
              alt="down-arrow"
            />
          </div>
        </button>
      )}

      {/* Submenu rendering */}
      {isOpen && options && options.length > 0 && (
        <div className={`${styles.desktop_menu}`}>
          <div role="menu" aria-orientation="vertical">
            {options.map((option, index) => (
              <Link
                key={index}
                href={option.link || "#"}
                onClick={closeDropdown}
                className={`block p-5 ${styles.desktop_menu_item}`}
                target={option.target}
              >
                <p className="flex justify-between">
                  {option.label}
                  {option.icon && (
                    <Image
                      src={option.icon}
                      alt={option.label}
                      width={30}
                      height={20}
                      className="ml-2"
                    />
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
