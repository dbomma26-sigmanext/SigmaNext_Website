import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
    }
  };

  return (
    <section id="contact" className="h-full w-full py-12 md:py-16 px-6 bg-slate-50/50 flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 leading-tight">Let's Build Something Great Together</h2>
            <p className="text-base md:text-lg text-slate-500 mb-8 leading-relaxed font-medium">
              Ready to take your business to the next level? Contact us today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-sigma-blue/10 flex items-center justify-center flex-shrink-0 border border-sigma-blue/20 shadow-sm">
                  <Mail className="w-5 h-5 text-sigma-blue" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">Email Us</p>
                  <p className="text-slate-500 text-sm font-medium">Contact@SigmaNext.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-sigma-blue/10 flex items-center justify-center flex-shrink-0 border border-sigma-blue/20 shadow-sm">
                  <Phone className="w-5 h-5 text-sigma-blue" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">Call Us</p>
                  <p className="text-slate-500 text-sm font-medium">+1-469-918-2081</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-sigma-blue/10 flex items-center justify-center flex-shrink-0 border border-sigma-blue/20 shadow-sm">
                  <MapPin className="w-5 h-5 text-sigma-blue" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">Visit Us</p>
                  <p className="text-slate-500 text-xs font-medium">405 State Highway 121, Suite A250, Lewisville, Texas, USA, 75067</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 md:space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">First Name</label>
                      <Input required name="firstName" placeholder="John" className="rounded-xl h-12 bg-slate-50/50 border-slate-100 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Last Name</label>
                      <Input required name="lastName" placeholder="Doe" className="rounded-xl h-12 bg-slate-50/50 border-slate-100 focus:bg-white transition-all" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                    <Input required name="email" type="email" placeholder="john@example.com" className="rounded-xl h-12 bg-slate-50/50 border-slate-100 focus:bg-white transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Message</label>
                    <Textarea required name="message" placeholder="Tell us about your project..." className="rounded-xl min-h-[100px] md:min-h-[120px] resize-none bg-slate-50/50 border-slate-100 focus:bg-white transition-all p-4 text-sm" />
                  </div>

                  <Button type="submit" variant="outline" className="w-full h-14 rounded-xl text-base font-extrabold group border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-xs font-medium max-w-xs">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sigma-blue text-xs font-bold hover:bg-sigma-blue/10"
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
