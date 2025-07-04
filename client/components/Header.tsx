import { useState } from "react";
import { Menu, X, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1296px] mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center h-[107px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4161c9a234fc834919094abd1901070510092a8a?width=314"
                alt="HomeFlip"
                className="h-[35px] w-[157px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
            >
              Home
            </Link>
            <Link
              to="/imoveis"
              className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
            >
              Imóveis
            </Link>
            <Link
              to="/sobre-nos"
              className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
            >
              Sobre nós
            </Link>
            <Link
              to="/contato"
              className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Login/Phone */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Login */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                <User className="w-3 h-3" />
              </div>
              <span className="font-gantari text-black text-base font-medium">
                Login
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="font-gantari text-black text-base font-medium">
                (11) 9999-9999
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/imoveis"
                className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Imóveis
              </Link>
              <Link
                to="/sobre-nos"
                className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link
                to="/contato"
                className="font-gantari text-black text-base font-medium hover:text-homeflip-purple transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>

              {/* Mobile Login/Phone */}
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="font-gantari text-black text-base font-medium">
                    Login
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  <span className="font-gantari text-black text-base font-medium">
                    (11) 9999-9999
                  </span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
