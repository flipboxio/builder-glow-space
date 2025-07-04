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
      <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-[107px]">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4161c9a234fc834919094abd1901070510092a8a?width=314"
                alt="HomeFlip"
                className="h-7 w-auto sm:h-8 lg:h-[35px] max-w-[120px] sm:max-w-[140px] lg:max-w-[157px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className="font-gantari text-black text-sm lg:text-base font-medium hover:text-homeflip-purple transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/imoveis"
              className="font-gantari text-black text-sm lg:text-base font-medium hover:text-homeflip-purple transition-colors whitespace-nowrap"
            >
              Imóveis
            </Link>
            <Link
              to="/sobre-nos"
              className="font-gantari text-black text-sm lg:text-base font-medium hover:text-homeflip-purple transition-colors whitespace-nowrap"
            >
              Sobre nós
            </Link>
            <Link
              to="/contato"
              className="font-gantari text-black text-sm lg:text-base font-medium hover:text-homeflip-purple transition-colors whitespace-nowrap"
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Login/Phone */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-6">
            {/* Login */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-black flex items-center justify-center">
                <User className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
              </div>
              <span className="font-gantari text-black text-sm lg:text-base font-medium whitespace-nowrap">
                Login
              </span>
            </div>

            {/* Phone */}
            <div className="hidden xl:flex items-center gap-2">
              <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="font-gantari text-black text-sm lg:text-base font-medium whitespace-nowrap">
                (11) 9999-9999
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
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
          <div className="xl:hidden bg-white border-t border-gray-100 py-6 px-4">
            <nav className="flex flex-col gap-6">
              <Link
                to="/"
                className="font-gantari text-black text-lg font-medium hover:text-homeflip-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/imoveis"
                className="font-gantari text-black text-lg font-medium hover:text-homeflip-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Imóveis
              </Link>
              <Link
                to="/sobre-nos"
                className="font-gantari text-black text-lg font-medium hover:text-homeflip-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link
                to="/contato"
                className="font-gantari text-black text-lg font-medium hover:text-homeflip-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>

              {/* Mobile Login/Phone */}
              <div className="flex flex-col gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="font-gantari text-black text-lg font-medium">
                    Login
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span className="font-gantari text-black text-lg font-medium">
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
