import { ShieldAlert, Scale, FileText, Gavel } from "lucide-react";

export function Copyright() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl mb-4" style={{ backgroundColor: "var(--pink)" }}>
            <ShieldAlert className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playpen Sans', cursive" }}>Copyright & Licensing</h1>
          <p className="text-gray-600 text-lg">
            Protecting the intellectual property of our creators is our top priority.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6" style={{ color: "var(--mint)" }} />
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playpen Sans', cursive" }}>Designer Rights</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              By uploading a design to NextLayer, you retain full ownership of your work. We act as a marketplace to help you license your 3D models to users. You can choose from several licensing tiers:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Standard License", desc: "Personal use only, no redistribution." },
                { title: "Commercial License", desc: "Allows selling of physical prints." },
                { title: "Editorial Use", desc: "Restricted to news or educational use." },
                { title: "Creative Commons", desc: "Free to share with attribution." }
              ].map((item, i) => (
                <li key={i} className="p-4 rounded-xl border-2" style={{ backgroundColor: i % 2 === 0 ? "var(--lavender)" : "var(--tan)", borderColor: "var(--mint)" }}>
                  <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-700">{item.desc}</div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6" style={{ color: "var(--mint)" }} />
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playpen Sans', cursive" }}>DMCA Policy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NextLayer complies with the Digital Millennium Copyright Act. If you believe your copyrighted work has been uploaded without permission, please submit a formal DMCA notice to our legal department. We investigate all claims within 48 business hours.
            </p>
            <button className="mt-4 px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">
              Submit DMCA Notice
            </button>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="w-6 h-6" style={{ color: "var(--mint)" }} />
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playpen Sans', cursive" }}>Usage Terms</h2>
            </div>
            <div className="prose prose-indigo max-w-none text-gray-600">
              <p>
                Purchasing a design does not grant ownership of the 3D file itself. Users are granted a non-exclusive license to use the model according to the specific terms set by the creator at the time of purchase.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Reverse engineering of designs is strictly prohibited.</li>
                <li>Sharing or reselling the digital STL files is a violation of international copyright law.</li>
                <li>Attribution must be given where required by the license type.</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-20 p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: "var(--brown)" }}>
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playpen Sans', cursive" }}>Have a legal question?</h3>
            <p className="text-white/80">Our legal team is here to help you navigate 3D printing rights.</p>
          </div>
          <button className="px-8 py-3 bg-white rounded-xl font-bold hover:opacity-90 transition-all shrink-0" style={{ color: "var(--brown)" }}>
            Contact Legal
          </button>
        </div>
      </div>
    </div>
  );
}
