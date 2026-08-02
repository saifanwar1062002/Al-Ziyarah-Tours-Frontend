import { X } from "lucide-react";
import { useState, useEffect } from "react";

const Quickenquiry = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    package: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for name field (only alphabets and spaces)
    if (name === "name") {
      if (/^[A-Za-z ]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
        setErrors(prev => ({ ...prev, name: "" }));
      }
      return;
    }
    
    // Special handling for phone field (only numbers, max 10 digits)
    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
        setErrors(prev => ({ ...prev, phone: "" }));
      }
      return;
    }
    
    setFormData({ ...formData, [name]: value });
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      package: ""
    };

    // Name validation (required and alphabets only)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only alphabets";
      valid = false;
    }

    // Email validation (required and valid format)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Phone validation (required and exactly 10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    // Package validation (required)
    if (!formData.package) {
      newErrors.package = "Please select a package";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const apiData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      packageType: formData.package,
      message: formData.message || "Quick enquiry from website",
    };

    try {
      const response = await fetch(
        "https://crmweb.hajumrahservice.com/api/enquiries/apikey/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "9e5f0d1a-ee3c-4556-bb6e-4bb38e218928",
          },
          body: JSON.stringify(apiData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API request failed with status ${response.status}`);
      }

      setSubmitStatus({
        type: "success",
        message: "Form submitted successfully! Our team will contact you within 24 hours, InshaaAllah.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: ""
      });

      // Close modal after 3 seconds on success
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error("API Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later or contact us directly.",
      });
      
      // Auto-clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md transform transition-all duration-300 scale-100">
          {/* Background gradient glow effect */}
          <div className="absolute -inset-20 bg-gradient-to-r from-[#382e6a]/20 via-[#feba00]/10 to-[#382e6a]/20 rounded-3xl blur-xl opacity-70"></div>
          
          {/* Main Modal Container - Compact Height */}
          <div className="relative bg-gradient-to-b from-white via-gray-50 to-white rounded-2xl shadow-2xl border border-gray-300/50 overflow-hidden max-h-[85vh] overflow-y-auto">
            
            {/* Modal Header with Gradient - Compact */}
            <div className="bg-gradient-to-r from-[#382e6a] via-[#4a3f80] to-[#382e6a] px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white text-center">Quick Enquiry</h3>
                  <p className="text-white/90 text-xs mt-0.5 flex justify-center">
                    Get in touch for personalized packages
                  </p>
                </div>
                <button
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="text-white hover:text-[#feba00] transition-colors duration-200 p-1 hover:bg-white/10 rounded-full absolute right-4 top-3"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body - Compact */}
            <div className="px-5 py-5 bg-gradient-to-b from-white via-gray-50/50 to-white">
              {/* Status Messages */}
              {submitStatus && (
                <div className={`mb-4 p-3 rounded-lg border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-700' 
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  <div className="flex items-center">
                    <div className={`mr-2 h-2 w-2 rounded-full ${
                      submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Field - Compact */}
                <div className="space-y-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-3 py-2.5 border ${
                      errors.name 
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-[#382e6a] focus:ring-[#382e6a]/20"
                    } rounded-lg focus:ring-1 focus:ring-offset-0 transition-all duration-200 text-sm text-gray-900 bg-white/90 placeholder-gray-500 shadow-sm`}
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field - Compact */}
                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-3 py-2.5 border ${
                      errors.email 
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-[#382e6a] focus:ring-[#382e6a]/20"
                    } rounded-lg focus:ring-1 focus:ring-offset-0 transition-all duration-200 text-sm text-gray-900 bg-white/90 placeholder-gray-500 shadow-sm`}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field - Compact */}
                <div className="space-y-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    disabled={isSubmitting}
                    className={`w-full px-3 py-2.5 border ${
                      errors.phone 
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:border-[#382e6a] focus:ring-[#382e6a]/20"
                    } rounded-lg focus:ring-1 focus:ring-offset-0 transition-all duration-200 text-sm text-gray-900 bg-white/90 placeholder-gray-500 shadow-sm`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.phone}</p>
                  )}
                </div>

                {/* Package Selection - Compact */}
                <div className="space-y-1">
                  <div className="relative">
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2.5 border ${
                        errors.package 
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200" 
                          : "border-gray-300 focus:border-[#382e6a] focus:ring-[#382e6a]/20"
                      } rounded-lg focus:ring-1 focus:ring-offset-0 transition-all duration-200 text-sm appearance-none bg-white/90 text-gray-900 pr-10 cursor-pointer shadow-sm`}
                    >
                      <option value="" className="text-gray-500">Select Package</option>
                      <option value="classic_umrah">Classic Umrah</option>
                      <option value="deluxe_umrah">Deluxe Umrah</option>
                      <option value="luxury_umrah">Luxury Umrah</option>
                      <option value="classic_hajj">Classic Hajj</option>
                      <option value="deluxe_hajj">Deluxe Hajj</option>
                      <option value="luxury_hajj">Luxury Hajj</option>
                      <option value="ramadan_15">Ramadan 15 Days</option>
                      <option value="ramadan_20">Ramadan Last 20 Days</option>
                      <option value="ramadan_full">Ramadan Full Month</option>
                      <option value="visa">Visa Services</option>
              
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {errors.package && (
                    <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.package}</p>
                  )}
                </div>

                {/* Message Field - Compact */}
                <div className="space-y-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-[#382e6a] focus:ring-1 focus:ring-[#382e6a]/20 focus:ring-offset-0 transition-all duration-200 resize-none text-sm text-gray-900 bg-white/90 placeholder-gray-500 shadow-sm"
                    placeholder="Additional message (optional)"
                  ></textarea>
                </div>

                {/* Submit Button - Compact */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[#382e6a] to-[#4a3f80] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-[#2a225a] hover:to-[#3a2f6a] hover:scale-[1.02] active:scale-[0.99]'
                    } text-sm shadow-lg hover:shadow-md flex items-center justify-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Modal Footer - Compact */}
            <div className="bg-gradient-to-r from-gray-50 to-white px-5 py-3 border-t border-gray-200/80">
              <p className="text-xs text-gray-600 flex justify-center">
                We'll respond within 24 hours, InshaaAllah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickenquiry;