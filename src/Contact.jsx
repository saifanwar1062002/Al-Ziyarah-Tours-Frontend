import { useState, useEffect } from 'react';
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    Send,
    Users,
    Shield,
    Award,
    Heart,
    Sparkles,
    Star,
    ChevronRight,
    CheckCircle,
    Loader2,
    Facebook,
    Instagram
} from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    // Color variables for Al-Ziyarah Tours
    const colors = {
        primary: '#382e6a',     // Royal Purple
        secondary: '#feba00',   // Golden Yellow
        accent: '#382e6a',      // Electric Purple
        light: '#fef9c3',       // Light Yellow
        background: '#f8fafc',  // Smokey White
        purpleLight: '#5d4bb1',
        purpleDark: '#2d2554',
        goldLight: '#fed766',
        goldDark: '#e6a800'
    };

    const primaryGradient = `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`;
    const secondaryGradient = `linear-gradient(135deg, ${colors.secondary}, ${colors.goldLight})`;

    // Background image URL
    const contactImageUrl = 'https://i.pinimg.com/736x/b6/fc/8b/b6fc8b96d2f824b6754de14aa9db2b14.jpg';

    // Social media links
    const socialMedia = [
        { icon: Facebook, link: '#', color: '#1877F2', label: 'Facebook' },
        { icon: Instagram, link: '#', color: '#E4405F', label: 'Instagram' },
    ];

    // Google Maps address
    const officeAddress = "C-5/36 Street No.7 Chauhan Banger New Seelampur, New Delhi-110053, India";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            if (/^[A-Za-z ]*$/.test(value)) {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, name: "" });
            } else {
                setErrors({ ...errors, name: "Only alphabets and spaces are allowed" });
            }
        } else if (name === "phone") {
            if (/^[0-9]*$/.test(value) && value.length <= 10) {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, phone: "" });
            } else {
                setErrors({
                    ...errors,
                    phone: "Only numbers allowed (max 10 digits)"
                });
            }
        } else if (name === "email") {
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, email: "" });
        } else {
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, [name]: "" });
        }
    };

    // Form validation function
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
            newErrors.name = "Only alphabets and spaces allowed";
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit Indian mobile number";
            isValid = false;
        }

        // Service validation
        if (!formData.service) {
            newErrors.service = "Please select a service";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 3000);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        const apiData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            packageType: formData.service,
            message: formData.message || "Contact form enquiry from Al-Ziyarah Tours website"
        };

        try {
            const response = await fetch('https://crmweb.hajumrahservice.com/api/enquiries/apikey/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '9e5f0d1a-ee3c-4556-bb6e-4bb38e218928' // Your API key
                },
                body: JSON.stringify(apiData)
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! Our team will contact you within 24 hours, InshaaAllah.'
                });
                
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
                setErrors({});
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `API request failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('API Error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later or contact us directly.'
            });
            
            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Open Google Maps in new tab
    const openGoogleMaps = () => {
        window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Status Messages */}
            {isVisible && Object.keys(errors).length > 0 && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg animate-slideDown">
                        <p className="font-semibold text-sm">Please correct the following errors:</p>
                        <ul className="mt-1 list-disc list-inside text-xs sm:text-sm">
                            {Object.values(errors).map((error, index) => (
                                error && <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {submitStatus && (
                <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4 animate-slideDown ${
                    submitStatus.type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'
                } border px-4 py-3 rounded-lg shadow-lg`}>
                    <div className="flex items-center">
                        <div className={`mr-2 h-2 w-2 rounded-full ${submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
                        <span className="font-semibold text-sm sm:text-base">{submitStatus.message}</span>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden mt-16 sm:mt-20 md:mt-24">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${contactImageUrl})`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#382e6a]/30 via-[#382e6a]/50 to-[#1e1b4b]/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#382e6a]/70 via-transparent to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                    {/* Brand Badge */}
                    <div className="mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                        <div className="flex justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-[#feba00]/40">
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#feba00]" />
                            <span className="text-white font-semibold text-xs sm:text-sm md:text-base tracking-wider">AL-ZIYARAH TOURS PREMIUM</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight text-center px-2">
                            Contact <span className="text-[#feba00]">Al-Ziyarah Tours</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto text-center px-2">
                            Begin Your Spiritual Journey With Expert Guidance
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8">
                        {[
                            { icon: <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, text: "24/7 Support" },
                            { icon: <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, text: "Expert Guidance" },
                            { icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, text: "Trusted Service" },
                            { icon: <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />, text: "Fast Response" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 border border-white/20">
                                <div className="text-[#feba00]">{item.icon}</div>
                                <span className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 -mt-4 sm:-mt-6 md:-mt-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 md:mb-12">
                    {/* Contact Info */}
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        {/* Phone Card */}
                        <div className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02]">
                            <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 transform rotate-45 translate-x-6 -translate-y-6 sm:translate-x-7 sm:-translate-y-7 md:translate-x-8 md:-translate-y-8 group-hover:from-[#382e6a]/10 group-hover:to-[#feba00]/10 transition-all"></div>
                            </div>

                            <div className="relative z-10 flex items-start">
                                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#382e6a] to-[#4f46e5] mr-3 sm:mr-4 flex-shrink-0">
                                    <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#382e6a] transition-colors">Call Us</h3>
                                    <div className="space-y-1">
                                        <a 
                                            href="tel:+919136397091"
                                            className="font-semibold text-sm sm:text-base md:text-lg text-[#382e6a] hover:underline block"
                                        >
                                            +91-9136397091
                                        </a>
                                    </div>
                                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                                        Our dedicated spiritual journey consultants are available to guide you through every step of your pilgrimage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02]">
                            <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 transform rotate-45 translate-x-6 -translate-y-6 sm:translate-x-7 sm:-translate-y-7 md:translate-x-8 md:-translate-y-8 group-hover:from-[#382e6a]/10 group-hover:to-[#feba00]/10 transition-all"></div>
                            </div>

                            <div className="relative z-10 flex items-start">
                                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#feba00] to-[#fed766] mr-3 sm:mr-4 flex-shrink-0">
                                    <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#382e6a] transition-colors">Email Us</h3>
                                    <a 
                                        href="mailto:info@alziyarahtours.com"
                                        className="font-semibold text-sm sm:text-base md:text-lg break-all hover:underline block text-[#382e6a]"
                                    >
                                        info@alziyarahtours.com
                                    </a>
                                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                                        For detailed inquiries about our packages, visa processing, or personalized journey planning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02]">
                            <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 transform rotate-45 translate-x-6 -translate-y-6 sm:translate-x-7 sm:-translate-y-7 md:translate-x-8 md:-translate-y-8 group-hover:from-[#382e6a]/10 group-hover:to-[#feba00]/10 transition-all"></div>
                            </div>

                            <div className="relative z-10 flex items-start">
                                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#382e6a] to-[#4f46e5] mr-3 sm:mr-4 flex-shrink-0">
                                    <Clock className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#382e6a] transition-colors">Working Hours</h3>
                                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                                        <div className="flex justify-between items-center py-1">
                                            <span className="font-semibold text-gray-700">Monday - Saturday</span>
                                            <span className="font-medium" style={{ color: colors.primary }}>10:00 AM - 7:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1">
                                            <span className="font-semibold text-gray-700">Sunday</span>
                                            <span className="font-medium text-red-500">Closed</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-lg border" style={{ backgroundColor: `${colors.primary}/10`, borderColor: `${colors.primary}/20` }}>
                                        <p className="text-xs sm:text-sm md:text-sm" style={{ color: colors.primary }}>
                                            <strong>Note:</strong> During peak pilgrimage seasons, our office hours extend to accommodate increased demand. 24/7 emergency support available for all our pilgrims.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Location Card */}
                        <div className="bg-gradient-to-br from-[#382e6a] via-[#4a3f7a] to-[#382e6a] rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 text-white mt-4 sm:mt-6">
                            <div className="flex items-start">
                                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4 bg-white/20">
                                    <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Visit Our Office</h3>
                                    <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 opacity-90">
                                        C-5/36 Street No.7 Chauhan Banger New Seelampur, New Delhi-110053, India
                                    </p>
                                    <button 
                                        onClick={openGoogleMaps}
                                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-[#382e6a] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm md:text-base"
                                    >
                                        Open in Google Maps →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-200 mt-4 sm:mt-0">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="p-2 rounded-lg mr-2 sm:mr-3 bg-gradient-to-r from-[#feba00] to-[#fed766]">
                                <Send className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Send Us a Message
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl outline-none transition-all duration-200 text-black text-sm sm:text-base ${errors.name
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-[#382e6a] focus:ring-2 focus:ring-[#382e6a]/20"
                                            }`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl outline-none transition-all duration-200 text-black text-sm sm:text-base ${errors.email
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-[#382e6a] focus:ring-2 focus:ring-[#382e6a]/20"
                                            }`}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        maxLength="10"
                                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl outline-none transition-all duration-200 text-black text-sm sm:text-base ${errors.phone
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-[#382e6a] focus:ring-2 focus:ring-[#382e6a]/20"
                                            }`}
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">Service Required *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl outline-none transition-all duration-200 text-black text-sm sm:text-base ${errors.service
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-gray-300 focus:border-[#382e6a] focus:ring-2 focus:ring-[#382e6a]/20"
                                            }`}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="Premium Umrah Packages">Premium Umrah Packages</option>
                                        <option value="Hajj Packages">Hajj Packages</option>
                                        <option value="Ramadan Spiritual Packages">Ramadan Spiritual Packages</option>
                                        <option value="Visa Processing Service">Visa Processing Service</option>
                                        <option value="Custom Pilgrimage Package">Custom Pilgrimage Package</option>
                                    </select>
                                    {errors.service && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.service}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-[#382e6a] focus:ring-2 focus:ring-[#382e6a]/20 outline-none resize-none transition-all duration-200 text-black text-sm sm:text-base"
                                    placeholder="Tell us about your spiritual journey requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group relative overflow-hidden w-full text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg flex items-center justify-center ${isSubmitting
                                    ? 'opacity-70 cursor-not-allowed'
                                    : 'hover:scale-105'
                                    }`}
                                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                        <span className="relative">Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-200 mt-8 sm:mt-10 md:mt-12">
                    <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <div className="inline-flex items-center space-x-1 sm:space-x-2 md:space-x-3 bg-gradient-to-r from-[#382e6a]/10 to-[#feba00]/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 mb-2 sm:mb-3 md:mb-4 border border-gray-100 shadow-sm">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#feba00]" />
                            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Why Choose Al-Ziyarah Tours?
                            </h2>
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#382e6a]" />
                        </div>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto text-center px-2">
                            With years of spiritual journey facilitation, we provide premium pilgrimage services that prioritize spiritual fulfillment, comfort, and divine experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        {[
                            {
                                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
                                title: "Expert Guidance",
                                desc: "Our team of Islamic scholars and journey experts provide authentic spiritual guidance for your pilgrimage."
                            },
                            {
                                icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
                                title: "Trusted Excellence",
                                desc: "Licensed and certified, we maintain complete transparency with government-approved operations."
                            },
                            {
                                icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
                                title: "Premium Experience",
                                desc: "We partner with luxury hotels near the Haram, ensuring your comfort during worship."
                            },
                            {
                                icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
                                title: "Personalized Care",
                                desc: "From visa processing to spiritual guidance, we handle all details for your divine journey."
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02]">
                                <div className={`p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 md:mb-4 mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${index % 2 === 0 ? 'bg-gradient-to-r from-[#382e6a] to-[#4f46e5]' : 'bg-gradient-to-r from-[#feba00] to-[#fed766]'}`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3 group-hover:text-[#382e6a] transition-colors">{item.title}</h4>
                                <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center border" style={{ backgroundColor: `${colors.primary}/5`, borderColor: `${colors.primary}/20` }}>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Our Spiritual Commitment</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            At Al-Ziyarah Tours, we understand that performing pilgrimage is a divine calling. Our mission is to transform this sacred journey into a spiritual experience. We meticulously orchestrate every aspect—from flights and accommodations to spiritual guidance and ziyarat tours—allowing you to immerse completely in worship. Our dedicated ground team provides 24/7 support, ensuring your journey is seamless. With years of spiritual journey expertise, we navigate all logistical aspects so you can experience the profound spiritual transformation that pilgrimage offers, making your journey to the Divine truly unforgettable.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative text-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 px-3 sm:px-4 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.purpleDark}, ${colors.purpleDark})` }}>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/mosque.png')] opacity-10"></div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#feba00]/10 to-transparent rounded-full -translate-x-16 -translate-y-16 sm:-translate-x-24 sm:-translate-y-24 md:-translate-x-32 md:-translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tl from-[#feba00]/10 to-transparent rounded-full translate-x-16 translate-y-16 sm:translate-x-24 sm:translate-y-24 md:translate-x-32 md:translate-y-32"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-lg">
                        <Send className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
                        Ready to Begin Your Spiritual Journey?
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-center">
                        Contact us today for personalized guidance and start planning your sacred pilgrimage with Al-Ziyarah Tours.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
                        <a
                            href="tel:+919136397091"
                            className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative">Call Us Now: +91-9136397091</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-2xl mx-auto">
                        {[
                            { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Call Us", info: "+91-9136397091" },
                            { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Support Hours", info: "24/7 Available" },
                            { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Experience", info: "Premium Service" }
                        ].map((contact, i) => (
                            <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 text-center border border-white/10 hover:border-white/20 transition-colors">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2 md:mb-3 bg-gradient-to-br from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-md">
                                    {contact.icon}
                                </div>
                                <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm md:text-base">{contact.title}</h3>
                                <p className="text-white/90 text-xs sm:text-sm flex justify-center">{contact.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        transform: translate(-50%, -100%);
                        opacity: 0;
                    }
                    to {
                        transform: translate(-50%, 0);
                        opacity: 1;
                    }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
                
                /* Mobile responsiveness */
                @media (max-width: 640px) {
                    .grid-cols-1, .grid-cols-2 {
                        grid-template-columns: 1fr;
                    }
                    
                    .space-y-6 > * + * {
                        margin-top: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
}