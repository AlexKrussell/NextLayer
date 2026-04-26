import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RefreshCw, Printer, Lightbulb } from "lucide-react";

const SUBJECTS = ["A mechanical", "A futuristic", "A minimalist", "An organic", "A steampunk", "A cyberpunk", "A gothic"];
const OBJECTS = ["chess set", "wall planter", "cable organizer", "desk lamp", "phone stand", "fidget toy", "storage box", "jewelry stand"];
const FEATURES = ["with moving parts", "that glows in the dark", "designed for wood-PLA", "that requires no supports", "using compliant mechanisms", "integrated with magnets"];

export function Generator() {
  const [idea, setIdea] = useState<null | { subject: string, object: string, feature: string }>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const subject = SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)];
      const object = OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
      const feature = FEATURES[Math.floor(Math.random() * FEATURES.length)];
      setIdea({ subject, object, feature });
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: "var(--lavender)" }}>
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl mb-4" style={{ backgroundColor: "var(--mint)" }}>
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playpen Sans', cursive" }}>3D Print Idea Generator</h1>
          <p className="text-gray-600 text-lg">
            Feeling creator's block? Let our algorithm spark your next masterpiece.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-12 text-center border-2" style={{ borderColor: "var(--mint)" }}>
          <AnimatePresence mode="wait">
            {idea ? (
              <motion.div
                key="idea"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-12"
              >
                <div className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "var(--mint)", fontFamily: "'Playpen Sans', cursive" }}>Your Challenge</div>
                <div className="space-y-4">
                  <div className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                    {idea.subject} <span style={{ color: "var(--brown)" }}>{idea.object}</span>
                  </div>
                  <div className="text-xl lg:text-2xl font-medium text-gray-500">
                    {idea.feature}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12 py-12"
              >
                <Lightbulb className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-400 font-medium">Click the button below to generate a new idea</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={generateIdea}
            disabled={isGenerating}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-white rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-70"
            style={{ backgroundColor: "var(--mint)", fontFamily: "'Playpen Sans', cursive" }}
          >
            {isGenerating ? (
              <RefreshCw className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <RefreshCw className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                {idea ? "Generate Another" : "Spark an Idea"}
              </>
            )}
          </button>

          {idea && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 pt-8 border-t border-gray-50 grid grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-xl text-left" style={{ backgroundColor: "var(--tan)" }}>
                <div className="text-xs font-bold text-white uppercase mb-1 flex items-center gap-1">
                   <Printer className="w-3 h-3" /> Difficulty
                </div>
                <div className="text-white font-bold">Medium</div>
              </div>
              <div className="p-4 rounded-xl text-left" style={{ backgroundColor: "var(--pink)" }}>
                <div className="text-xs font-bold text-white uppercase mb-1">Market Trend</div>
                <div className="text-white font-bold">Rising 🔥</div>
              </div>
            </motion.div>
          )}
        </div>
        
        <p className="mt-8 text-center text-gray-400 text-sm">
          Tip: You can refine these ideas and sell the final STLs on our gallery!
        </p>
      </div>
    </div>
  );
}
