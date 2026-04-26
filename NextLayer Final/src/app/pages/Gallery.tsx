import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, Download, Heart, Eye } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const DESIGNS = [
  {
    id: 1,
    title: "Minimalist Geometric Vase",
    creator: "PolyMkr",
    price: "$12.00",
    likes: "2.4k",
    views: "15k",
    image: "https://images.unsplash.com/photo-1703221561813-cdaa308cf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBvYmplY3QlMjB2YXNlfGVufDF8fHx8MTc3MTM4MTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Home Decor"
  },
  {
    id: 2,
    title: "Precision Mechanical Gears",
    creator: "TechArt",
    price: "Free",
    likes: "850",
    views: "5.2k",
    image: "https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBtZWNoYW5pY2FsJTIwcGFydCUyMGdlYXJ8ZW58MXx8fHwxNzcxMzgxNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Engineering"
  },
  {
    id: 3,
    title: "Fantasy Warrior Figurine",
    creator: "EpicPrints",
    price: "$25.00",
    likes: "4.1k",
    views: "22k",
    image: "https://images.unsplash.com/photo-1630412612990-783d96dd4d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBmaWd1cmluZSUyMGFjdGlvbiUyMGZpZ3VyZXxlbnwxfHx8fDE3NzEzODE2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Miniatures"
  },
  {
    id: 4,
    title: "Organic Structure Lamp",
    creator: "LightDesign",
    price: "$18.50",
    likes: "1.2k",
    views: "8k",
    image: "https://images.unsplash.com/photo-1642969164999-979483e21601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBtYWNoaW5lJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzcxMzgxNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Lighting"
  },
  // Adding more mock data to fill the grid
  {
    id: 5,
    title: "Desktop Cable Manager",
    creator: "OfficeHacks",
    price: "Free",
    likes: "3.5k",
    views: "45k",
    image: "https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBtZWNoYW5pY2FsJTIwcGFydCUyMGdlYXJ8ZW58MXx8fHwxNzcxMzgxNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Organization"
  },
  {
    id: 6,
    title: "Low-Poly Planter Set",
    creator: "GreenThumb",
    price: "$5.00",
    likes: "980",
    views: "12k",
    image: "https://images.unsplash.com/photo-1703221561813-cdaa308cf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBvYmplY3QlMjB2YXNlfGVufDF8fHx8MTc3MTM4MTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Garden"
  }
];

export function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Home Decor", "Engineering", "Miniatures", "Lighting", "Organization", "Garden"];

  const filteredDesigns = DESIGNS.filter(design => {
    const matchesSearch = design.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || design.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-100 py-12" style={{ backgroundColor: "var(--lavender)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playpen Sans', cursive" }}>Discover Designs</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for models (e.g. 'vase', 'mechanical')"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:border-2 outline-none transition-all"
                style={{
                  "--tw-ring-color": "var(--mint)",
                  borderColor: searchTerm ? "var(--mint)" : undefined
                } as React.CSSProperties}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          <div className="flex overflow-x-auto gap-2 mt-8 pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
                style={activeCategory === cat ? { backgroundColor: "var(--mint)" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <motion.div
              layout
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-white rounded-2xl border-2 overflow-hidden hover:shadow-2xl transition-all duration-300"
              style={{ borderColor: "var(--lavender)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-white/90 backdrop-blur rounded-full shadow-lg hover:opacity-80" style={{ color: "var(--pink)" }}>
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur rounded-full shadow-lg hover:opacity-80" style={{ color: "var(--mint)" }}>
                    <Download className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {design.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 line-clamp-1 transition-colors">
                    {design.title}
                  </h3>
                  <span className="text-sm font-black ml-2" style={{ color: "var(--mint)", fontFamily: "'Playpen Sans', cursive" }}>
                    {design.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: "var(--tan)" }}>
                    {design.creator[0]}
                  </div>
                  <span className="text-sm text-gray-500">by {design.creator}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Heart className="w-3 h-3" /> {design.likes}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Eye className="w-3 h-3" /> {design.views}
                    </div>
                  </div>
                  <button className="text-xs font-bold hover:underline" style={{ color: "var(--mint)" }}>
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDesigns.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No designs found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
