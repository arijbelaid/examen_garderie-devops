import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo et Nom */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>🏡</span> 
          <span>Ma Garderie</span>
        </div>
        
        {/* Menu de navigation */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link href="#accueil" className="hover:text-blue-200 transition">Accueil</Link></li>
          <li><Link href="#services" className="hover:text-blue-200 transition">Services</Link></li>
          <li><Link href="#contact" className="hover:text-blue-200 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
