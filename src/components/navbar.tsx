import { Menu, Truck, X } from 'lucide-react';
import React, { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Truck className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Nexus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Características</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Iniciar sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Características</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full">
                Iniciar sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}