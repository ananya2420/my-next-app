

import Link from "next/link";
import logoImg from './assets/icon/logo.png'
import NavLink from "./nav-link";
//import { usePathname } from "next/navigation";

export default function MainHeader() {
  //const path = usePathname();

  return (
    <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Logo and Branding */}
      <Link href="/" className="flex items-center space-x-3 text-xl font-bold text-gray-800">
        <img src={logoImg} alt="A plate with food on it" className="w-10 h-10" />
        <span className="text-blue-600">NextLevel Food</span>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
           <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
