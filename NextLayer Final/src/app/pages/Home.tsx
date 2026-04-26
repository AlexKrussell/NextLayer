import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Cpu, Share2, DollarSign, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../components/AuthContext";

export function Home() {
  const { user, signIn, isLoading } = useAuth();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" style={{ backgroundColor: "var(--lavender)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playpen Sans', cursive" }}>
                Design. Print. <br />
                <span style={{ color: "var(--brown)" }}>Prosper.</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">
                The world's largest marketplace for high-quality 3D printing designs. Join thousands of creators turning their imagination into reality.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/gallery"
                  className="px-8 py-4 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--mint)" }}
                >
                  Explore Gallery <ArrowRight className="w-5 h-5" />
                </Link>
                {!user && (
                  <button
                    onClick={signIn}
                    disabled={isLoading}
                    className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    {isLoading ? "Signing in..." : "Continue with Google"}
                  </button>
                )}
                {user && (
                  <div className="px-8 py-4 bg-white rounded-xl border-2 border-gray-100 flex items-center gap-3">
                    <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Welcome, {user.name.split(' ')[0]}!</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642969164999-979483e21601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBtYWNoaW5lJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzcxMzgxNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="3D Printing in action"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--mint)", color: "#fff" }}>
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900" style={{ fontFamily: "'Playpen Sans', cursive" }}>$2.4M+</div>
                    <div className="text-xs text-gray-500 font-medium">Earned by creators</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playpen Sans', cursive" }}>How NextLayer Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We bridge the gap between talented 3D designers and makers who need high-quality print files.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Cpu,
                title: "Upload Designs",
                desc: "Upload your STL or OBJ files. Our automated system checks for printability and generates preview renders.",
                bgColor: "var(--mint)",
                textColor: "#fff"
              },
              {
                icon: Share2,
                title: "Build Community",
                desc: "Connect with other makers, get feedback on your designs, and build your brand in the 3D printing world.",
                bgColor: "var(--pink)",
                textColor: "#fff"
              },
              {
                icon: ShieldCheck,
                title: "Secure Sales",
                desc: "Set your own price and keep more of what you earn. Our platform handles payments and secure file delivery.",
                bgColor: "var(--tan)",
                textColor: "#fff"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
                style={{ borderColor: item.bgColor }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: item.bgColor, color: item.textColor }}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden" style={{ backgroundColor: "var(--brown)" }}>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Playpen Sans', cursive" }}>Ready to start selling?</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                Join our community of over 50,000 active creators today. Use our Random Idea Generator if you're stuck on what to build next.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/generator" className="px-8 py-4 text-white rounded-xl font-bold hover:opacity-90 transition-all" style={{ backgroundColor: "var(--mint)" }}>
                  Try Idea Generator
                </Link>
                <Link to="/gallery" className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors">
                  Browse Gallery
                </Link>
              </div>
            </div>
            {/* Abstract background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full -mr-20 -mt-20" style={{ backgroundColor: "var(--lavender)", opacity: 0.3 }}></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 blur-[100px] rounded-full mr-20 mb-20" style={{ backgroundColor: "var(--pink)", opacity: 0.3 }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
