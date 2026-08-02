import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Phone,
    CheckCircle,
    Sparkles,
    ShieldCheck,
    FileText,
    Clock,
    ChevronRight,
    Star,
    Award,
    Zap,
    FileCheck,
    User,
    ChevronDown,
    Lock
} from 'lucide-react';
import visa_imag from './assets/visaimg.jpg';

const Visaservice = () => {
    const [activeTab, setActiveTab] = useState('documents');
    const [openFAQ, setOpenFAQ] = useState(null);

    // Color variables for Al-Ziyarah Tours
    const colors = {
        primary: '#382e6a',     // Royal Purple
        secondary: '#feba00',   // Golden Yellow
        accent: '#4f46e5',      // Electric Purple
        light: '#fef9c3',       // Light Yellow
        background: '#f8fafc',  // Smokey White
        purpleLight: '#5d4bb1',
        purpleDark: '#2d2554',
        goldLight: '#fed766',
        goldDark: '#e6a800'
    };

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const primaryGradient = `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`;
    const secondaryGradient = `linear-gradient(135deg, ${colors.secondary}, ${colors.goldLight})`;

    const stats = [
        { number: '98%', label: 'Visa Success Rate' },
        { number: '5-7', label: 'Days Processing' },
        { number: '24/7', label: 'Expert Support' },
        { number: '3000+', label: 'Happy Pilgrims' }
    ];

    const documents = [
        {
            title: "Valid Passport",
            requirements: [
                "Original passport with minimum 6 months validity",
                "At least 2 blank visa pages",
                "Clear scanned copies of all pages"
            ]
        },
        {
            title: "Passport Photos",
            requirements: [
                "4 recent color photos (35x45mm)",
                "White background, 80% face coverage",
                "No glasses or headwear (except religious)"
            ]
        },
        {
            title: "Application Form",
            requirements: [
                "Completed Umrah visa application form",
                "Signed by applicant (women need mahram signature)",
                "Accurate personal and travel information"
            ]
        },
        {
            title: "Vaccination Records",
            requirements: [
                "Meningococcal ACWY vaccination certificate",
                "COVID-19 vaccination proof (approved vaccines)",
                "Other recommended vaccinations"
            ]
        },
        {
            title: "Travel Itinerary",
            requirements: [
                "Confirmed round-trip flight tickets",
                "Hotel reservations in Makkah & Madinah",
                "Transportation arrangements"
            ]
        },
        {
            title: "Additional Documents",
            requirements: [
                "Travel insurance with medical coverage",
                "Proof of relationship for family applications",
                "Bank statements for financial proof"
            ]
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: "Initial Consultation & Document Collection",
            description: "Our Umrah specialists guide you through all requirements and verify your documents to meet Saudi authorities' standards."
        },
        {
            step: "2",
            title: "Visa Application Preparation",
            description: "We complete all application forms accurately and prepare supporting documents, double-checking every detail to prevent delays."
        },
        {
            step: "3",
            title: "Submission to Saudi Authorities",
            description: "Your application is submitted through our established channels with direct contacts to Saudi visa offices for efficient processing."
        },
        {
            step: "4",
            title: "Visa Processing & Follow-up",
            description: "We actively monitor your application status daily and handle all communications, resolving any issues promptly."
        },
        {
            step: "5",
            title: "Visa Approval & Travel Preparation",
            description: "Upon approval, we deliver your visa electronically and provide comprehensive pre-departure guidance for your spiritual journey."
        }
    ];

    const features = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "98% Success Rate",
            description: "Proven track record with exceptional visa approval rates across all categories"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Fast Processing",
            description: "Priority handling and expedited processing through established Saudi channels"
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Secure Handling",
            description: "Military-grade encryption for document security and confidential processing"
        },
        {
            icon: <User className="w-8 h-8" />, // Changed from Users to User
            title: "Expert Guidance",
            description: "20+ years of experience with dedicated Umrah specialists"
        }
    ];

    const faqs = [
        {
            question: 'How long does the Umrah visa processing take?',
            answer: 'With Al-Ziyarah Tours, processing typically takes 5-7 working days. We expedite the process through our established channels with Saudi authorities.'
        },
        {
            question: 'What documents are required for an Umrah visa?',
            answer: 'You need a valid passport (6+ months validity), passport photos, completed application form, vaccination certificates (including COVID-19), confirmed travel arrangements, and proof of accommodation.'
        },
        {
            question: 'Can I perform Umrah with a tourist visa?',
            answer: 'No, a specific Umrah visa is required. Our experts ensure your application is correctly categorized for a smooth pilgrimage experience.'
        },
        {
            question: 'What makes Al-Ziyarah Tours different from other visa services?',
            answer: 'We offer 20+ years of experience, 98% success rate, personalized guidance, and comprehensive support from application to your return journey.'
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
            {/* Hero Section */}
            <div className="relative h-[530px] sm:h-[600px] md:h-[700px] overflow-hidden mt-15 md:mt-2 rounded-b-3xl shadow-lg">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${visa_imag})`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#382e6a]/80 via-[#382e6a]/60 to-[#1e1b4b]/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#382e6a]/70 via-transparent to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                    {/* Brand Badge */}
                    <div className="mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                        <div className=" flex justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-[#feba00]/40">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#feba00]" />
                            <span className="text-white font-semibold text-xs sm:text-sm tracking-wider">AL-ZIYARAH TOURS PREMIUM</span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight text-center">
                            Premium Umrah Visa Services
                        </h1>
                        <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-center">
                            Seamless Visa Processing for Your Sacred Spiritual Journey
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-4 ">
                        {[
                            { icon: <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />, text: "98% Success Rate" },
                            { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "5-7 Days Processing" },
                            { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Secure Processing" },
                            { icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Expert Guidance" } // Changed from Users to User
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 border border-white/20">
                                <div className="text-[#feba00]">{item.icon}</div>
                                <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            to="/contact"
                            className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative">Apply for Visa</span>
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/allpackages"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center"
                        >
                            View Packages
                        </Link>
                    </div>
                </div>

                
            </div>

            {/* Quick Stats Section */}
            <div className="relative z-10 -mt-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style={{ color: colors.primary }}>
                                    {stat.number}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Documents & Process Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#382e6a]/10 to-[#feba00]/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-gray-100 shadow-sm">
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#feba00]" />
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Visa Requirements & Process
                            </h2>
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#382e6a]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-center">
                            Complete guide to Umrah visa documentation and streamlined application procedure
                        </p>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex justify-center mb-8 md:mb-12">
                        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                            <div className="flex flex-wrap justify-center gap-2">
                                <button
                                    onClick={() => setActiveTab('documents')}
                                    className={`group flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${activeTab === 'documents'
                                            ? 'text-white shadow-lg'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    style={activeTab === 'documents' ? { background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})` } : {}}
                                >
                                    <FileText className={`w-4 h-4 ${activeTab === 'documents' ? 'text-white' : 'text-gray-600'}`} />
                                    <span className="font-semibold whitespace-nowrap">Document Requirements</span>
                                </button>

                                <button
                                    onClick={() => setActiveTab('application')}
                                    className={`group flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${activeTab === 'application'
                                            ? 'text-white shadow-lg'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    style={activeTab === 'application' ? { background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})` } : {}}
                                >
                                    <Clock className={`w-4 h-4 ${activeTab === 'application' ? 'text-white' : 'text-gray-600'}`} />
                                    <span className="font-semibold whitespace-nowrap">Application Process</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Documents Tab */}
                    {activeTab === 'documents' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {documents.map((doc, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02]"
                                >
                                    {/* Gradient Corner */}
                                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#382e6a]/5 to-[#382e6a] transform rotate-45 translate-x-8 -translate-y-8 group-hover:from-[#382e6a]/10 group-hover:to-[#feba00]/10 transition-all"></div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4">
                                            <div className={`p-2 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-[#382e6a] to-[#4f46e5]' : 'from-[#feba00] to-[#fed766]'}`}>
                                                <FileText className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 ml-3 group-hover:text-[#382e6a] transition-colors">
                                                {doc.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2 text-gray-600">
                                            {doc.requirements.map((req, reqIndex) => (
                                                <li key={reqIndex} className="flex items-start">
                                                    <div className="text-[#382e6a] mt-1 mr-2">
                                                        <CheckCircle className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-sm sm:text-base">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Process Tab */}
                    {activeTab === 'application' && (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                    Streamlined Umrah Visa Application Process
                                </h3>

                                <div className="space-y-4">
                                    {processSteps.map((step, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#feba00]/30 bg-gradient-to-r from-[#382e6a]/5 to-[#feba00]/5"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4 shadow-lg"
                                                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}>
                                                {step.step}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{step.title}</h4>
                                                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Why Choose Our Services Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#382e6a]/10 to-[#feba00]/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-gray-100 shadow-sm">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#feba00]" />
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Why Choose Al-Ziyarah Tours Visa Services
                            </h2>
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#382e6a]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto flex justify-center text-center">
                            Experience premium visa processing with our dedicated, expert services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02] text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-[#382e6a] to-[#4f46e5]' : 'from-[#feba00] to-[#fed766]'} shadow-lg`}>
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800 group-hover:text-[#382e6a] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#382e6a]/10 to-[#feba00]/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-gray-100 shadow-sm">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#feba00]" />
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </h2>
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#382e6a]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto flex justify-center  text-center">
                            Get answers to common questions about Umrah visa processing
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#feba00]/30 overflow-hidden"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#382e6a]/10 to-[#feba00]/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-bold text-[#382e6a]">Q{index + 1}</span>
                                        </div>
                                        <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#382e6a] transition-colors">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`ml-4 flex-shrink-0 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-5 h-5 text-[#feba00]" />
                                    </div>
                                </button>
                                {openFAQ === index && (
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-gray-100">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-[#feba00]" />
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base ml-3">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative text-white py-12 sm:py-16 px-4 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.purpleDark}, ${colors.purpleDark})` }}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/mosque.png')] opacity-10"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#feba00]/10 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#feba00]/10 to-transparent rounded-full translate-x-32 translate-y-32"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-lg">
                        <FileCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2">
                        Begin Your Spiritual Journey with Confidence
                    </h2>
                    <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
                        Let Al-Ziyarah Tours handle the visa complexities while you focus on preparing for your sacred pilgrimage
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <Link
                            to="/contact"
                            className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative">Apply for Visa Now</span>
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="tel:+919136397091"
                            className="group border-2 border-white text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center w-full sm:w-auto"
                        >
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" /> 
                            Call Us Now
                        </a>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
                        {[
                            { icon: <Phone className="w-5 h-5" />, title: "Call Us", info: "+91-9136397091" },
                            { icon: <Clock className="w-5 h-5" />, title: "Support Hours", info: "24/7 Available" },
                            { icon: <Award className="w-5 h-5" />, title: "Success Rate", info: "98% Visa Approval" }
                        ].map((contact, i) => (
                            <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/10 hover:border-white/20 transition-colors">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-md">
                                    {contact.icon}
                                </div>
                                <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{contact.title}</h3>
                                <p className="text-white/90 text-sm flex justify-center">{contact.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Visaservice;