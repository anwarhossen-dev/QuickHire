// 'use client';

// import React, { useState } from 'react';
// import Button from '@/components/common/Button';
// import { FileText, User, Mail, Phone } from 'lucide-react';
// import { useAuth } from '@/context/AuthContext';
// import { applicationsAPI } from '@/services/api';

// const ApplyForm = ({ jobId, jobTitle, onSubmitSuccess }) => {
//   const { user, token, isAuthenticated } = useAuth();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: user?.fullName || '',
//     email: user?.email || '',
//     phone: '',
//     resume: null,
//     coverLetter: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setError('');
    
//     if (type === 'file') {
//       setFormData(prev => ({
//         ...prev,
//         [name]: files[0],
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!isAuthenticated) {
//       setError('Please log in to apply for jobs');
//       return;
//     }

//     if (!formData.fullName.trim()) {
//       setError('Full name is required');
//       return;
//     }

//     if (!formData.email.trim()) {
//       setError('Email is required');
//       return;
//     }

//     if (!formData.resume) {
//       setError('Resume is required');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('fullName', formData.fullName);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phone', formData.phone);
//       formDataToSend.append('resume', formData.resume);
//       formDataToSend.append('coverLetter', formData.coverLetter);

//       await applicationsAPI.applyForJob(jobId, formDataToSend, token);
//       setSuccess(true);
//       setFormData({
//         fullName: user?.fullName || '',
//         email: user?.email || '',
//         phone: '',
//         resume: null,
//         coverLetter: '',
//       });

//       if (onSubmitSuccess) {
//         onSubmitSuccess();
//       }

//       // Reset success message after 3 seconds
//       setTimeout(() => setSuccess(false), 3000);
//     } catch (err) {
//       setError(err.message || 'Failed to submit application. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
//         <p className="text-gray-600 mb-4">Please log in to apply for this job</p>
//         <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
//           Go to Login
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for {jobTitle}</h2>

//       {error && (
//         <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
//           {error}
//         </div>
//       )}

//       {success && (
//         <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm">
//           Application submitted successfully! We'll review your application soon.
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Full Name */}
//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//             Full Name
//           </label>
//           <div className="relative">
//             <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//             Email Address
//           </label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number (Optional)
//           </label>
//           <div className="relative">
//             <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
//             />
//           </div>
//         </div>

//         {/* Resume */}
//         <div>
//           <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
//             Resume (PDF, DOC, DOCX)
//           </label>
//           <div className="relative">
//             <FileText className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
//             <input
//               type="file"
//               id="resume"
//               name="resume"
//               onChange={handleChange}
//               accept=".pdf,.doc,.docx"
//               required
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//             />
//           </div>
//           {formData.resume && (
//             <p className="mt-2 text-sm text-gray-500">Selected: {formData.resume.name}</p>
//           )}
//         </div>

//         {/* Cover Letter */}
//         <div>
//           <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
//             Cover Letter (Optional)
//           </label>
//           <textarea
//             id="coverLetter"
//             name="coverLetter"
//             value={formData.coverLetter}
//             onChange={handleChange}
//             rows="5"
//             placeholder="Tell us why you're interested in this position..."
//             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 resize-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           disabled={isLoading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5"
//         >
//           {isLoading ? 'Submitting...' : 'Submit Application'}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ApplyForm;


"use client";
import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function ApplyForm({ job, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", resumeUrl: "", coverNote: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setErrors((e) => ({ ...e, [k]: "" })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim())       e.name       = "Name is required";
    if (!form.email.trim())      e.email      = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.resumeUrl.trim())  e.resumeUrl  = "Resume URL is required";
    else if (!/^https?:\/\//.test(form.resumeUrl)) e.resumeUrl = "Enter a valid URL (https://...)";
    if (!form.coverNote.trim())  e.coverNote  = "Cover note is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="font-extrabold text-[#1a1d3b] text-lg">Apply Now</h2>
            <p className="text-sm text-gray-400 mt-0.5">{job.title} · {job.company}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center py-12 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-extrabold text-[#1a1d3b] mb-2">Application Sent!</h3>
            <p className="text-sm text-gray-500 max-w-xs mb-6">
              Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been submitted. Good luck!
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <Input
              label="Full Name *"
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              error={errors.name}
            />
            <Input
              label="Email Address *"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              error={errors.email}
            />
            <Input
              label="Resume / Portfolio URL *"
              type="url"
              placeholder="https://drive.google.com/your-resume"
              value={form.resumeUrl}
              onChange={(e) => set("resumeUrl", e.target.value)}
              error={errors.resumeUrl}
            />
            <Textarea
              label="Cover Note *"
              placeholder="Tell us why you're a great fit for this role..."
              value={form.coverNote}
              onChange={(e) => set("coverNote", e.target.value)}
              error={errors.coverNote}
              rows={5}
            />
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="secondary" onClick={onClose} className="flex-1">Cancel</Button>
              <Button type="submit" className="flex-1" disabled={loading}>
                {loading ? "Submitting…" : "Submit Application"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}