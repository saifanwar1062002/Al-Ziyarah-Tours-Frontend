import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    const [activeSection, setActiveSection] = useState('acceptance');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const sections = [
        { id: 'acceptance', title: 'Acceptance', icon: '📝' },
        { id: 'services', title: 'Services', icon: '🕌' },
        { id: 'bookings', title: 'Bookings', icon: '💳' },
        { id: 'cancellation', title: 'Cancellation', icon: '🔄' },
        { id: 'conduct', title: 'Conduct', icon: '👥' },
        { id: 'liability', title: 'Liability', icon: '🛡️' },
        { id: 'contact', title: 'Contact', icon: '📞' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 pt-26">
                {/* Hero Section */}
                <div className="relative h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('https://tripguideworld.com/wp-content/uploads/2025/06/generated-image-23.png')`,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#382e6a]/60 via-[#382e6a]/60 to-[#feba00]/70"></div>

                    <div className="relative h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 mb-3 sm:mb-4 md:mb-5 shadow-xl">
                                <span className="text-2xl sm:text-3xl md:text-4xl">⚖️</span>
                            </div>

                            <div className="mb-4 sm:mb-5 md:mb-6">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
                                    Terms & <span className="text-[#feba00]">Conditions</span>
                                </h1>
                                <div className="w-24 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#feba00] to-[#ffcc33] mx-auto rounded-full"></div>
                            </div>

                            <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-5 md:mb-6 px-2 sm:px-4 font-medium flex justify-center">
                                Clear guidelines for your spiritual journey with <span className="font-semibold text-[#feba00]">Al-Ziyarah Tours</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <Link
                                    to="/allpackages"
                                    className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#feba00] to-[#e6a800] text-[#382e6a] font-semibold rounded-lg sm:rounded-xl hover:from-[#e6a800] hover:to-[#feba00] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                                >
                                    <span className="mr-2">🕌</span> View Packages
                                </Link>
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
                                        <p className="text-xs text-gray-500">Jump to section</p>
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
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="p-6 sm:p-8 lg:p-12 space-y-12 sm:space-y-16">
                                    {/* Acceptance Section */}
                                    <section id="acceptance" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#4a3d8a] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">📝</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Acceptance of Terms</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">
                                            <div className="bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 rounded-2xl p-4 sm:p-6 border border-[#382e6a]/10 shadow-sm">
                                                <p className="font-medium text-[#382e6a]">
                                                    By accessing and using <span className="font-bold text-[#382e6a]">Al-Ziyarah Tours</span> services, you agree to be bound by these Terms and Conditions, which form a legally binding agreement between you and our organization.
                                                </p>
                                            </div>
                                            <p className="text-gray-600">
                                                If you disagree with any part of these terms, please refrain from using our services. Your continued use constitutes acceptance of any revisions made to these terms.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Services Section */}
                                    <section id="services" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#feba00] to-[#e6a800] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">🕌</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Services Description</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#feba00] to-[#382e6a] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                                            <div className="bg-gradient-to-br from-[#382e6a]/5 to-transparent rounded-2xl p-4 sm:p-6 border border-[#382e6a]/15 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 flex items-center space-x-2">
                                                    <span className="w-6 h-6 bg-[#382e6a] rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-sm">✓</span>
                                                    </span>
                                                    <span>Inclusions</span>
                                                </h4>
                                                <ul className="space-y-3">
                                                    {['Visa processing assistance', 'Flight arrangements & coordination', 'Comfortable accommodation', 'Expert guided programs', 'Reliable transportation', '24/7 customer support', 'Islamic guidance throughout', 'Group management'].map((item, i) => (
                                                        <li key={i} className="flex items-start space-x-3 text-gray-700">
                                                            <div className="w-5 h-5 bg-[#382e6a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <span className="text-white text-xs">✓</span>
                                                            </div>
                                                            <span className="text-sm sm:text-base">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-gradient-to-br from-[#feba00]/5 to-transparent rounded-2xl p-4 sm:p-6 border border-[#feba00]/15 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 flex items-center space-x-2">
                                                    <span className="w-6 h-6 bg-[#feba00] rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-sm">!</span>
                                                    </span>
                                                    <span>Exclusions</span>
                                                </h4>
                                                <ul className="space-y-3">
                                                    {['Personal expenses & shopping', 'Medical & travel insurance', 'Visa rejection related fees', 'Extra transportation costs', 'Personal laundry services', 'Phone calls & internet', 'Excess baggage charges'].map((item, i) => (
                                                        <li key={i} className="flex items-start space-x-3 text-gray-700">
                                                            <div className="w-5 h-5 bg-[#feba00] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <span className="text-white text-xs">×</span>
                                                            </div>
                                                            <span className="text-sm sm:text-base">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Bookings Section */}
                                    <section id="bookings" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#2d2455] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">💳</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Bookings & Payments</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                            {[
                                                { step: 'Initial', percent: '30%', desc: 'Booking Deposit to confirm seat', color: 'from-[#382e6a] to-[#4a3d8a]' },
                                                { step: 'Intermediate', percent: '40%', desc: '90 days before departure', color: 'from-[#feba00] to-[#e6a800]' },
                                                { step: 'Final', percent: '30%', desc: '45 days before departure', color: 'from-[#382e6a] to-[#feba00]' }
                                            ].map((item, i) => (
                                                <div key={i} className={`bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}>
                                                    <div className="text-2xl sm:text-3xl font-bold mb-2 flex justify-center">{item.percent}</div>
                                                    <div className="font-semibold text-white/90 text-sm sm:text-base mb-1 flex justify-center">{item.step} Payment</div>
                                                    <div className="text-white/80 text-xs sm:text-sm flex justify-center">{item.desc}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
                                            <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-3 flex items-center space-x-2">
                                                <span className="text-[#382e6a]">💡</span>
                                                <span>Important Notes</span>
                                            </h4>
                                            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                                <li key="note1" className="flex items-start space-x-2">
                                                    <span className="text-[#feba00]">•</span>
                                                    <span>Payments must be made through official channels only</span>
                                                </li>
                                                <li key="note2" className="flex items-start space-x-2">
                                                    <span className="text-[#feba00]">•</span>
                                                    <span>Prices are subject to change without prior notice</span>
                                                </li>
                                                <li key="note3" className="flex items-start space-x-2">
                                                    <span className="text-[#feba00]">•</span>
                                                    <span>Bank charges are borne by the customer</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* Cancellation Section */}
                                    <section id="cancellation" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">🔄</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Cancellation Policy</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                            {[
                                                { days: '90+ Days Before', refund: '80% Refund', color: 'from-green-500 to-emerald-500' },
                                                { days: '60-89 Days Before', refund: '50% Refund', color: 'from-[#feba00] to-amber-500' },
                                                { days: '30-59 Days Before', refund: '25% Refund', color: 'from-orange-500 to-amber-500' },
                                                { days: 'Less than 30 Days', refund: 'No Refund', color: 'from-rose-500 to-red-500' }
                                            ].map((policy, i) => (
                                                <div key={i} className={`bg-gradient-to-br ${policy.color} rounded-xl p-3 sm:p-4 text-white text-center shadow-md hover:shadow-lg transition-shadow duration-300`}>
                                                    <div className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-white/90">{policy.days}</div>
                                                    <div className="font-bold text-base sm:text-lg">{policy.refund}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 sm:mt-8 bg-rose-50/50 rounded-2xl p-4 sm:p-6 border border-rose-100">
                                            <p className="text-rose-700 text-sm sm:text-base font-medium">
                                                ⚠️ <span className="font-semibold">Note:</span> All cancellations must be submitted in writing. Refunds will be processed within 15-30 working days from cancellation date.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Conduct Section */}
                                    <section id="conduct" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#2d2455] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">👥</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Code of Conduct</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                            {[
                                                { icon: '🕌', title: 'Religious Respect', desc: 'Honor Islamic traditions and sacred sites', bg: 'from-[#382e6a] to-[#4a3d8a]' },
                                                { icon: '👥', title: 'Group Harmony', desc: 'Maintain peace and cooperation within the group', bg: 'from-[#feba00] to-[#e6a800]' },
                                                { icon: '⏰', title: 'Punctuality', desc: 'Adhere strictly to scheduled programs', bg: 'from-[#382e6a] to-[#feba00]' },
                                                { icon: '📵', title: 'Appropriate Behavior', desc: 'Maintain Islamic decorum and modesty', bg: 'from-[#2d2455] to-[#382e6a]' }
                                            ].map((item, i) => (
                                                <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                                                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 flex justify-center">{item.icon}</div>
                                                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-center">{item.title}</h4>
                                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed flex justify-center">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Liability Section */}
                                    <section id="liability" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">🛡️</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Liability Limitations</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
                                            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                                                {[
                                                    'Al-Ziyarah Tours is not liable for delays, cancellations, or changes due to circumstances beyond our control',
                                                    'We are not responsible for loss, damage, or theft of personal belongings',
                                                    'Medical emergencies and associated costs are the responsibility of the traveler',
                                                    'Changes in government regulations, visa denials, or travel restrictions are beyond our control',
                                                    'Force majeure events including natural disasters, pandemics, or political unrest'
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start space-x-2">
                                                        <span className="text-[#382e6a] font-bold">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </section>

                                    {/* Contact Section */}
                                    <section id="contact" className="scroll-mt-24">
                                        <div className="flex items-start space-x-4 mb-6 sm:mb-8">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a] to-[#feba00] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <span className="text-xl sm:text-2xl text-white">📞</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Contact Information</h2>
                                                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#382e6a]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                                    <span className="text-xl sm:text-2xl">📧</span>
                                                </div>
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 text-center">Email</h4>
                                                <a href="mailto:info@alziyarahtours.com" className="text-[#382e6a] hover:text-[#feba00] text-sm sm:text-base font-medium text-center block transition-colors duration-300">
                                                    info@alziyarahtours.com
                                                </a>
                                            </div>

                                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#feba00]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                                    <span className="text-xl sm:text-2xl">📱</span>
                                                </div>
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 text-center">Phone</h4>
                                                <div className="space-y-1">
                                                    <a href="tel:+919136397091" className="text-[#382e6a] hover:text-[#feba00] text-sm sm:text-base font-medium text-center block transition-colors duration-300">
                                                        +91-9136397091
                                                    </a>
                                                  
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#382e6a]/10 to-[#feba00]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                                    <span className="text-xl sm:text-2xl">🏢</span>
                                                </div>
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 text-center">Office Address</h4>
                                                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
                                                    C-5/36 Street No.7 Chauhan Banger 
                                                    New Seelampur,New Delhi-110053, India.
                                                </p>
                                                <p className="text-gray-500 text-xs mt-2 flex justify-center">
                                                    Trusted since 2010
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#382e6a]/5 to-[#feba00]/5 rounded-2xl p-4 sm:p-6 border border-[#382e6a]/10">
                                            <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-3 flex justify-center space-x-2">
                                                <span className="text-[#feba00]">⏰</span>
                                                <span>Business Hours</span>
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base flex justify-center">
                                                Monday - Saturday: 10:00 AM - 07:00 PM
                                            </p>
                                            <p className="text-gray-500 text-xs sm:text-sm mt-1 flex justify-center">
                                                Closed on Sundays and public holidays
                                            </p>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            {/* Bottom Navigation */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#382e6a] to-[#4a3d8a] text-white rounded-xl sm:rounded-2xl hover:from-[#4a3d8a] hover:to-[#382e6a] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <span className="mr-2">←</span> Back to Home
                                </Link>
                                <Link
                                    to="/privacy"
                                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#feba00] to-[#e6a800] text-[#382e6a] rounded-xl sm:rounded-2xl hover:from-[#e6a800] hover:to-[#feba00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Privacy Policy <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scroll Animation */}
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

export default TermsAndConditions;