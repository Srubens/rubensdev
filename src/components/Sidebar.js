"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".sidebar") && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Botão para abrir o menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
      >
        {isOpen ? 'x' : 'menu'}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sidebar shadow-lg`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Menu
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            Sobre
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contato
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
