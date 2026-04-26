import { Printer, Github, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-gray-200" style={{ backgroundColor: "var(--lavender)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg" style={{ backgroundColor: "var(--mint)" }}>
                <Printer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Playpen Sans', cursive" }}>NextLayer</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              The premier marketplace for 3D printing enthusiasts. Connect, share, and sell your amazing 3D designs with a global community.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:opacity-80 transition-all" style={{ color: "var(--brown)" }}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:opacity-80 transition-all" style={{ color: "var(--brown)" }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:opacity-80 transition-all" style={{ color: "var(--brown)" }}>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Marketplace</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/gallery" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Browse Designs</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Featured Creators</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Best Sellers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/generator" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Idea Generator</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Printing Tips</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Material Guide</a></li>
              <li><Link to="/copyright" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Copyright Info</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Contact Us</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:opacity-80" style={{ color: "var(--brown)" }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">&copy; 2026 NextLayer Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
