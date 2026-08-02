import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        { id: 'introduction', title: 'Introduction', icon: '📋' },
        { id: 'information-collection', title: 'Information Collection', icon: '📊' },
        { id: 'how-we-use', title: 'How We Use Information', icon: '🔧' },
        { id: 'data-protection', title: 'Data Protection', icon: '🛡️' },
        { id: 'your-rights', title: 'Your Rights', icon: '✅' },
        { id: 'contact', title: 'Contact Us', icon: '📞' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 pt-16">
                {/* Hero Section */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('https://img.freepik.com/free-photo/laptop-airplane-miniature-blue-background-flat-lay-copy-space_169016-28421.jpg?semt=ais_hybrid&w=740&q=80')`,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#382e6a]/40 via-[#382e6a]/50 to-[#feba00]/30"></div>

                    <div className="relative h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 mb-4 md:mb-6 shadow-xl">
                                <span className="text-2xl md:text-3xl text-white">🔐</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
                                Privacy <span className="text-[#feba00]">Policy</span>
                            </h1>

                            <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4 font-medium">
                                At Al-Ziyarah Tours, we value your privacy. Discover how we protect and handle your personal information with the utmost care and transparency.
                            </p>

                            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 shadow-lg">
                                <span className="text-white/95 text-sm font-medium">🕒 Last Updated: January 1, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-72 xl:w-80 flex-shrink-0">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 sticky top-24">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#382e6a] to-[#feba00] rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white text-lg">🧭</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base sm:text-lg">Quick Navigation</h3>
                                        <p className="text-xs text-gray-500">Jump to any section</p>
                                    </div>
                                </div>

                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-3 sm:px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 group ${activeSection === section.id
                                                ? 'bg-gradient-to-r from-[#382e6a] to-[#4a3d8a] text-white shadow-lg transform scale-[1.02]'
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                                                }`}
                                        >
                                            <span className={`text-lg sm:text-xl transition-transform duration-300 ${activeSection === section.id ? 'transform scale-110' : 'group-hover:scale-110'
                                                }`}>
                                                {section.icon}
                                            </span>
                                            <span className="font-medium text-sm sm:text-base">{section.title}</span>
                                        </button>
                                    ))}
                                </nav>

                                {/* Quick Actions */}
                                <div className="mt-6 p-4 bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 rounded-xl sm:rounded-2xl border border-[#382e6a]/20">
                                    <h4 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                                        <span className="text-[#382e6a] mr-2">⚡</span>
                                        Quick Actions
                                    </h4>
                                    <div className="space-y-2">
                                        <Link
                                            to="/contact"
                                            className="flex items-center w-full px-3 py-2 text-sm text-[#382e6a] hover:bg-white rounded-lg transition-all duration-200 hover:shadow-sm font-medium"
                                        >
                                            <span className="mr-2">📧</span>
                                            Contact Privacy Team
                                        </Link>
                                        <Link
                                            to="/termsandconditions"
                                            className="flex items-center w-full px-3 py-2 text-sm text-[#feba00] hover:bg-white rounded-lg transition-all duration-200 hover:shadow-sm font-medium"
                                        >
                                            <span className="mr-2">📄</span>
                                            View Terms & Conditions
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="p-6 sm:p-8 lg:p-12 space-y-12 sm:space-y-16">

                                    {/* Introduction Section */}
                                    <section id="introduction" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#4a3d8a] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">📋</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Introduction</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">
                                            <div className="bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 rounded-2xl p-4 sm:p-6 border border-[#382e6a]/10 shadow-sm">
                                                <p className="font-medium text-[#382e6a]">
                                                    Welcome to <strong className="font-bold">Al-Ziyarah Tours</strong>. We are deeply committed to protecting your privacy and ensuring the highest level of security for your personal information throughout your spiritual journey.
                                                </p>
                                            </div>
                                            <p className="text-gray-600">
                                                This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our pilgrimage services. By accessing and using our services, you consent to the practices described in this comprehensive policy.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Information Collection Section */}
                                    <section id="information-collection" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#feba00] to-[#e6a800] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">📊</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Information We Collect</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#feba00] to-[#382e6a] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                                            <div className="bg-gradient-to-br from-[#382e6a]/5 to-transparent rounded-2xl p-4 sm:p-6 border border-[#382e6a]/15 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center space-x-3">
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#382e6a] rounded-lg sm:rounded-xl flex items-center justify-center">
                                                        <span className="text-white text-sm sm:text-md">👤</span>
                                                    </div>
                                                    <span>Personal Information</span>
                                                </h3>
                                                <ul className="space-y-2 sm:space-y-3">
                                                    {[
                                                        'Full name & contact details',
                                                        'Passport & identification documents',
                                                        'Medical information & requirements',
                                                        'Payment & billing information',
                                                        'Emergency contact details',
                                                        'Family information & dependencies'
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-700 text-sm sm:text-base">
                                                            <div className="w-5 h-5 bg-[#382e6a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <span className="text-white text-xs">✓</span>
                                                            </div>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-gradient-to-br from-[#feba00]/5 to-transparent rounded-2xl p-4 sm:p-6 border border-[#feba00]/15 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center space-x-3">
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#feba00] rounded-lg sm:rounded-xl flex items-center justify-center">
                                                        <span className="text-white text-sm sm:text-md">🕋</span>
                                                    </div>
                                                    <span>Travel Information</span>
                                                </h3>
                                                <ul className="space-y-2 sm:space-y-3">
                                                    {[
                                                        'Travel preferences & itinerary',
                                                        'Accommodation requirements',
                                                        'Flight & transportation details',
                                                        'Dietary restrictions & preferences',
                                                        'Prayer requirements & preferences',
                                                        'Group assignment preferences'
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-700 text-sm sm:text-base">
                                                            <div className="w-5 h-5 bg-[#feba00] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <span className="text-white text-xs">✓</span>
                                                            </div>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* How We Use Information Section */}
                                    <section id="how-we-use" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#2d2455] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">🔧</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">How We Use Your Information</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                            {[
                                                { icon: '📋', title: 'Process Bookings', desc: 'Manage pilgrimage arrangements', color: 'bg-[#382e6a]/10' },
                                                { icon: '🛂', title: 'Visa Processing', desc: 'Handle visa applications', color: 'bg-[#382e6a]/10' },
                                                { icon: '🚗', title: 'Travel Coordination', desc: 'Coordinate all travel logistics', color: 'bg-[#feba00]/10' },
                                                { icon: '🎯', title: 'Customer Support', desc: 'Provide 24/7 assistance', color: 'bg-[#feba00]/10' },
                                                { icon: '📢', title: 'Service Updates', desc: 'Send journey updates', color: 'bg-[#382e6a]/10' },
                                                { icon: '💳', title: 'Payment Processing', desc: 'Handle secure payments', color: 'bg-[#382e6a]/10' },
                                                { icon: '⚖️', title: 'Legal Compliance', desc: 'Meet regulatory requirements', color: 'bg-[#feba00]/10' },
                                                { icon: '🚀', title: 'Service Improvement', desc: 'Enhance your experience', color: 'bg-[#feba00]/10' }
                                            ].map((item, index) => (
                                                <div key={index} className={`${item.color} rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group`}>
                                                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{item.title}</h4>
                                                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Data Protection Section */}
                                    <section id="data-protection" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">🛡️</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Data Protection</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gray-600 to-[#382e6a] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                            <div className="bg-gradient-to-br from-[#382e6a]/5 to-transparent rounded-2xl p-4 sm:p-6 border border-[#382e6a]/15 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 flex justify-center space-x-2">
                                                    <span className="text-[#382e6a]">🔐</span>
                                                    <span>Security Measures</span>
                                                </h3>
                                                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                                    {[
                                                        'Encrypted data transmission (SSL/TLS)',
                                                        'Secure storage with access controls',
                                                        'Regular security audits & updates',
                                                        'Employee privacy training programs',
                                                        'Third-party vendor assessments',
                                                        'Incident response protocols'
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-start space-x-2">
                                                            <span className="text-[#feba00] font-bold mt-0.5">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-gradient-to-br from-[#feba00]/5 to-transparent rounded-2xl p-4 sm:p-6 border border-[#feba00]/15 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 flex justify-center space-x-2">
                                                    <span className="text-[#feba00]">📅</span>
                                                    <span>Data Retention</span>
                                                </h3>
                                                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                                    {[
                                                        'Travel records: 7 years post-journey',
                                                        'Financial data: 10 years for compliance',
                                                        'Contact information: Until deletion requested',
                                                        'Medical information: 10 years for safety',
                                                        'Marketing data: 3 years or until opt-out',
                                                        'Legal documents: Permanently archived'
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-start space-x-2">
                                                            <span className="text-[#382e6a] font-bold mt-0.5">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Your Rights Section */}
                                    <section id="your-rights" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">✅</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Your Rights</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-500 to-[#382e6a] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                            {[
                                                { icon: '👁️', title: 'Access Rights', desc: 'Access your personal data anytime', color: 'from-[#382e6a] to-[#4a3d8a]' },
                                                { icon: '✏️', title: 'Correction Rights', desc: 'Correct inaccurate information', color: 'from-[#feba00] to-[#e6a800]' },
                                                { icon: '🗑️', title: 'Deletion Rights', desc: 'Request data deletion', color: 'from-[#382e6a] to-[#2d2455]' },
                                                { icon: '✅', title: 'Consent Rights', desc: 'Withdraw consent at any time', color: 'from-[#feba00] to-[#d89c00]' },
                                                { icon: '📤', title: 'Portability Rights', desc: 'Data transfer to other services', color: 'from-[#382e6a] to-[#feba00]' },
                                                { icon: '📝', title: 'Complaint Rights', desc: 'Lodge privacy complaints', color: 'from-gray-600 to-gray-700' }
                                            ].map((right, index) => (
                                                <div key={index} className={`bg-gradient-to-br ${right.color} rounded-xl p-3 sm:p-4 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                                                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2 flex justify-center">{right.icon}</div>
                                                    <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">{right.title}</h4>
                                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed flex justify-center">{right.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Contact Section */}
                                    <section id="contact" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#feba00] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">📞</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Contact Us</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                                            <div className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#382e6a]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                                    <span className="text-xl sm:text-2xl text-[#382e6a]">📧</span>
                                                </div>
                                                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Email</h3>
                                                <a href="mailto:info@alziyarahtours.com" className="text-[#382e6a] hover:text-[#feba00] font-medium text-sm sm:text-base block transition-colors duration-300">
                                                    info@alziyarahtours.com
                                                </a>
                                                <p className="text-gray-500 text-xs mt-1 sm:mt-2 flex justify-center">Typically responds within 2 hours</p>
                                            </div>

                                            <div className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#feba00]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                                    <span className="text-xl sm:text-2xl text-[#feba00]">📱</span>
                                                </div>
                                                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Phone</h3>
                                                <div className="space-y-1">
                                                    <a href="tel:+919136397091" className="text-[#382e6a] hover:text-[#feba00] font-medium text-sm sm:text-base block transition-colors duration-300">
                                                        +91-9136397091
                                                    </a>

                                                </div>
                                                <p className="text-gray-500 text-xs mt-1 sm:mt-2 flex justify-center">Mon-Sat, 10:00AM - 07:00PM</p>
                                            </div>

                                            <div className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#382e6a]/10 to-[#feba00]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                                    <span className="text-xl sm:text-2xl text-[#382e6a]">🏢</span>
                                                </div>
                                                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Address</h3>
                                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                                    C-5/36 Street No.7 Chauhan Banger
                                                    New Seelampur,New Delhi-110053, India.
                                                </p>
                                                <p className="text-gray-500 text-xs mt-1 sm:mt-2 flex justify-center">Visit us during office hours</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#382e6a] to-[#4a3d8a] text-white rounded-xl sm:rounded-2xl hover:from-[#4a3d8a] hover:to-[#382e6a] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <span className="mr-2">←</span>
                                    Back to Home
                                </Link>
                                <Link
                                    to="/termsandconditions"
                                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#feba00] to-[#e6a800] text-[#382e6a] rounded-xl sm:rounded-2xl hover:from-[#e6a800] hover:to-[#feba00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    View Terms & Conditions
                                    <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Inline styles for animations */}
            <style>
                {`
                    section {
                        scroll-margin-top: 100px;
                    }
                    
                    @media (max-width: 640px) {
                        section {
                            scroll-margin-top: 80px;
                        }
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes blob {
                        0% {
                            transform: translate(0px, 0px) scale(1);
                        }
                        33% {
                            transform: translate(30px, -50px) scale(1.1);
                        }
                        66% {
                            transform: translate(-20px, 20px) scale(0.9);
                        }
                        100% {
                            transform: translate(0px, 0px) scale(1);
                        }
                    }
                    
                    .animate-blob {
                        animation: blob 7s infinite;
                    }
                    
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    
                    .animation-delay-4000 {
                        animation-delay: 4s;
                    }
                    
                    section {
                        animation: fadeInUp 0.6s ease-out;
                    }
                `}
            </style>
        </div>
    );
};

export default Privacy;