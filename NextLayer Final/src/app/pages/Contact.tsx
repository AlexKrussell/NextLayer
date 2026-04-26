import { useState } from "react";
import { Mail, MessageSquare, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      toast.success("Message sent successfully!");
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playpen Sans', cursive" }}>Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have questions about selling your designs or need help with a purchase? Our team is here to support the maker community.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "var(--mint)" }}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-500">support@nextlayer.com</p>
                  <p className="text-sm mt-1 font-medium" style={{ color: "var(--mint)" }}>Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "var(--lavender)" }}>
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Live Chat</h3>
                  <p className="text-gray-500">Available Mon-Fri, 9am - 5pm EST</p>
                  <button className="text-sm mt-1 font-bold hover:underline" style={{ color: "var(--mint)" }}>Start Chat</button>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "var(--tan)" }}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Call Support</h3>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] p-8 lg:p-12 border-2" style={{ backgroundColor: "var(--lavender)", borderColor: "var(--mint)" }}>
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white mb-6" style={{ backgroundColor: "var(--mint)" }}>
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playpen Sans', cursive" }}>Message Received!</h2>
                <p className="text-gray-500 mb-8">We've received your inquiry and will get back to you shortly.</p>
                <button
                  onClick={() => setIsSent(false)}
                  className="font-bold hover:underline"
                  style={{ color: "var(--mint)" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white border-2 rounded-xl outline-none transition-all"
                      style={{ borderColor: "var(--mint)" }}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white border-2 rounded-xl outline-none transition-all"
                      style={{ borderColor: "var(--mint)" }}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-white border-2 rounded-xl outline-none transition-all"
                    style={{ borderColor: "var(--mint)" }}
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-white border-2 rounded-xl outline-none transition-all appearance-none" style={{ borderColor: "var(--mint)" }}>
                    <option>Selling Inquiries</option>
                    <option>Purchase Support</option>
                    <option>Technical Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-2 rounded-xl outline-none transition-all resize-none"
                    style={{ borderColor: "var(--mint)" }}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full py-4 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--mint)", fontFamily: "'Playpen Sans', cursive" }}
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
