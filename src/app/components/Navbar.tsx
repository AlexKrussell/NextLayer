import { Link, useLocation } from "react-router";
import { Box, Printer, Search, User, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "./AuthContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, signIn, signOut, isLoading } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Idea Generator", path: "/generator" },
    { name: "Contact", path: "/contact" },
    { name: "Copyright", path: "/copyright" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg" style={{ backgroundColor: "var(--mint)" }}>
              <Printer className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Playpen Sans', cursive" }}>NextLayer</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? ""
                    : "text-gray-600"
                }`}
                style={location.pathname === link.path ? { color: "var(--mint)" } : {}}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:opacity-80 transition-all" style={{ color: "var(--brown)" }}>
              <Search className="w-5 h-5" />
            </button>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">{user.name.split(' ')[0]}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={signIn}
                disabled={isLoading}
                className="flex items-center space-x-2 px-4 py-2 text-white rounded-full hover:opacity-90 transition-all shadow-sm disabled:opacity-50"
                style={{ backgroundColor: "var(--mint)" }}
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{isLoading ? "Loading..." : "Sign In"}</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center space-x-4 px-3">
                {user ? (
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                      <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={signOut}
                      className="flex justify-center items-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={signIn}
                    disabled={isLoading}
                    className="flex-1 flex justify-center items-center space-x-2 px-4 py-3 text-white rounded-lg font-medium disabled:opacity-50"
                    style={{ backgroundColor: "var(--mint)" }}
                  >
                    <User className="w-4 h-4" />
                    <span>{isLoading ? "Loading..." : "Sign In"}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
