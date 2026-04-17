import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, Send, CheckCircle, FileText, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    const formData = new FormData(e.target as HTMLFormElement);
    if (file) {
      formData.append("resume", file);
    }

    try {
      const response = await fetch('/api/careers', { 
        method: 'POST', 
        body: formData 
      });
      
      if (!response.ok) throw new Error("Submission failed");
      
      setIsSubmitted(true);
      setFile(null);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <section id="careers" className="h-full w-full py-12 md:py-16 px-6 bg-white flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-3 text-slate-900"
          >
            Join Our <span className="text-sigma-blue">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            We are always looking for talented individuals who are passionate about technology and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-sigma-blue" />
                Why Work With Us?
              </h3>
              <ul className="space-y-3">
                {[
                  "Work on cutting-edge AI and Data projects",
                  "Collaborative and innovative environment",
                  "Continuous learning and growth",
                  "Competitive compensation",
                  "Flexible work arrangements"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-sigma-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-[2rem] border border-dashed border-slate-200 bg-slate-50/50">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Open Positions</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Engineer", "AI Specialist", "Cyber Security", "Full Stack"].map((pos) => (
                  <span key={pos} className="px-3 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 shadow-sm">
                    {pos}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                      <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Full Name</label>
                      <Input required name="fullName" placeholder="Jane Doe" className="rounded-xl h-12 bg-slate-50/50 border-slate-100 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                      <Input required name="email" type="email" placeholder="jane@example.com" className="rounded-xl h-12 bg-slate-50/50 border-slate-100 focus:bg-white transition-all" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Position Applied For</label>
                    <Input required name="position" placeholder="e.g. Data Engineer" className="rounded-xl h-12 bg-slate-50/50 border-slate-100 focus:bg-white transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Resume (PDF or Word)</label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-xl p-4 md:p-6 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                        isDragging ? "border-sigma-blue bg-sigma-blue/5" : "border-slate-200 bg-slate-50/50 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      {file ? (
                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                          <FileText className="w-5 h-5 text-sigma-blue" />
                          <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-900 truncate max-w-[150px]">{file.name}</p>
                          </div>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFile(null);
                            }}
                            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                          >
                            <X className="w-3 h-3 text-slate-400" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 text-sigma-blue" />
                          <p className="text-[10px] font-bold text-slate-900">Click to upload or drag and drop</p>
                        </>
                      )}
                    </div>
                  </div>

                  <Button type="submit" variant="outline" className="w-full h-14 rounded-xl text-base font-extrabold group border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                    Submit Application
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
                  <h3 className="text-xl font-black text-slate-900 mb-2">Application Received!</h3>
                  <p className="text-slate-500 text-xs font-medium max-w-xs">
                    Thank you for your interest. We've received your application and will get back to you shortly.
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sigma-blue text-xs font-bold hover:bg-sigma-blue/10"
                  >
                    Apply for another position
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
