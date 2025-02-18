import React, { useState } from 'react';
import { Truck, Users, FileText, BarChart3, Package, Warehouse, Building2, ClipboardCheck, ArrowRight, CheckCircle2, Shield, Clock, Zap, Menu, X } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-8 h-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitItem({ icon: Icon, title }: { icon: React.ElementType, title: string }) {
  return (
    <div className="flex items-center gap-3 text-lg">
      <Icon className="w-6 h-6 text-blue-500" />
      <span>{title}</span>
    </div>
  );
}

function Navbar() {
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

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2560')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">GESTIÓN INTELIGENTE PARA TU FLOTA</h1>
              <p className="text-xl mb-8 text-blue-100">
                Imagina un futuro donde la administración de tu empresa es más eficiente, ordenada y sin imprevistos.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                  Comenzar ahora
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  Ver demo
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">+1000</div>
                <div className="text-blue-100">Vehículos gestionados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfacción</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Soporte técnico</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+500</div>
                <div className="text-blue-100">Empresas confían</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">La solución más completa para tu empresa de logística</h2>
            <p className="text-gray-600 text-lg">
              Nexus te ofrece todas las herramientas necesarias para optimizar tus operaciones y maximizar la eficiencia de tu flota.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2560" 
                alt="Dashboard" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <BenefitItem icon={CheckCircle2} title="Control total de tu flota en tiempo real" />
              <BenefitItem icon={Shield} title="Máxima seguridad y protección de datos" />
              <BenefitItem icon={Clock} title="Ahorro significativo de tiempo en gestiones" />
              <BenefitItem icon={Zap} title="Optimización de recursos y costos" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Truck}
              title="Control de Flota"
              description="Gestión completa de vehículos, documentación y mantenimiento preventivo."
            />
            <FeatureCard
              icon={BarChart3}
              title="Panel de Control"
              description="Vista rápida de ingresos, egresos y métricas importantes para la toma de decisiones."
            />
            <FeatureCard
              icon={Users}
              title="Gestión de Personal"
              description="Control de usuarios, roles y permisos personalizables según las necesidades."
            />
            <FeatureCard
              icon={FileText}
              title="Facturación y Reportes"
              description="Sistema completo de facturación con informes detallados y exportables."
            />
            <FeatureCard
              icon={Warehouse}
              title="Control de Patio"
              description="Seguimiento en tiempo real de productos y asignación eficiente a choferes."
            />
            <FeatureCard
              icon={Package}
              title="Inventario"
              description="Control de stock en tiempo real y gestión inteligente de almacenes."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Nexus ha transformado completamente la manera en que gestionamos nuestra flota. La eficiencia ha aumentado significativamente."</p>
              <div className="font-semibold">Carlos Rodríguez</div>
              <div className="text-gray-500">Director de Operaciones, TransCargo</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"El control y seguimiento que nos brinda la plataforma es excepcional. Ha sido una inversión que realmente vale la pena."</p>
              <div className="font-semibold">Ana Martínez</div>
              <div className="text-gray-500">Gerente de Logística, LogisTech</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"La implementación fue muy sencilla y el soporte técnico es excelente. Totalmente recomendado."</p>
              <div className="font-semibold">Miguel Sánchez</div>
              <div className="text-gray-500">CEO, Transportes MS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¡OPTIMIZA TU EMPRESA HOY MISMO!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a más de 500 empresas que ya han transformado su gestión logística con Nexus.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Solicitar demo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Contactar ventas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Nexus</h3>
              <p className="text-gray-400">
                Soluciones inteligentes para la gestión de flotas y logística.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Control de Flota</li>
                <li>Gestión de Personal</li>
                <li>Facturación</li>
                <li>Inventario</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
                <li>Soporte</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Términos de Servicio</li>
                <li>Política de Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Nexus. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;