import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/web2026/' || location.pathname === '/web2026';

  useEffect(() => {
    if (!isOpen) {
      setIsDropdownOpen(false);
    }
  }, [isOpen]);

  const navItems = [
    { label: '4C-Modell', href: '#modell' },
    { label: 'Prozess', href: '#prozess' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const dropdownItems = [
    { label: 'UVM Consulting Group', href: '/unternehmen#uvm-consulting' },
    { label: 'Geschäftsführung', href: '/unternehmen#geschaeftsfuehrung' },
    { label: 'Werte und Beratungsansatz', href: '/unternehmen#werte' },
    { label: 'Netzwerkpartner', href: '/unternehmen#netzwerk' },
    { label: 'Referenzen', href: '/unternehmen#referenzen' },
    { label: 'Publikationen', href: '/unternehmen#publikationen' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://le-cdn.website-editor.net/s/6e5c80c276764a0bb09282133a3a53b4/dms3rep/multi/opt/UVM+UCMCG-a8473808-1920w.jpg?Expires=1770690367&Signature=nClerWS7W-mUQWsKXoiFk7-cTrNS~QRxOqmuOK0WEDnJmKLbFteHYaSEhJb7to3loscFegXx10fa-f204koNU1ZJhqgnmWt320xG~4JMxlqXca7YDDOWaam-m4qDFTwFza8A3d4B-Sq9FN-Pi1eaKoAHRlyEMb9j6~ozI6e-LGWccgtv4AojrfWcsuyoPdVTL1c0hi-xuFZmUTwKW44EBys3gTRd2xiBKIttZtvhTprf9MQQNRWru7r2NxVSOFxLGp5Y-cqwK9X3zMELlGy5mU96nU1Q3n5WiSA3BdAWTOeuGzvuqF~dLrGwHBBegl7gLkmUTMlMV4YIQz8HAk6AUQ__&Key-Pair-Id=K2NXBXLF010TJW"
              alt="UVM Consulting Group Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors font-medium pb-4">
                Unternehmen
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 -mt-3 pt-3 w-64">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}

            {isHomePage ? (
              <a
                href="#kontakt"
                className="bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Gespräch starten
              </a>
            ) : (
              <Link
                to="/#kontakt"
                className="bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Gespräch starten
              </Link>
            )}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between py-3 text-gray-600 hover:text-teal-600 transition-colors font-medium"
              >
                Unternehmen
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 text-gray-500 hover:text-teal-600 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-gray-600 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className="block py-3 text-gray-600 hover:text-teal-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}

            {isHomePage ? (
              <a
                href="#kontakt"
                className="block mt-4 bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Gespräch starten
              </a>
            ) : (
              <Link
                to="/#kontakt"
                className="block mt-4 bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Gespräch starten
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
