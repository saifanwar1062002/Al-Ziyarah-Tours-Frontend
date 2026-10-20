import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, Clock, MapPin, Star, MessageCircle } from 'lucide-react';
import logo from './assets/AI-Ziyarah_logo.png';
import QuickEnquiry from './Quickenquiry';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const timeoutRef = useRef(null);
    const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);

    // Check if device is mobile and handle scroll
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const handleResize = () => {
            checkMobile();
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
                setOpenDropdown(null);
            }
        };

        checkMobile();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = (dropdown) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 300);
    };

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const openQuickEnquiry = () => {
        setIsQuickEnquiryOpen(true);
        setIsMenuOpen(false);
    };

    const onClose = () => {
        setIsQuickEnquiryOpen(false);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-gradient-to-b from-white via-white/95 to-white/90 backdrop-blur-sm' : 'bg-gradient-to-b from-white via-white/98 to-white/95'}`}>
            {/* Top Announcement Bar */}
            <div className="bg-gradient-to-r from-[#382e6a] to-[#feba00] text-white py-1.5 px-4 border-b border-white/10">
                <div className="max-w-8xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-xs sm:text-sm">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#feba00] fill-current" />
                        <span className="font-medium text-xs sm:text-sm">Trusted Since 2010</span>
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#feba00] fill-current" />
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="flex items-center space-x-1 text-xs sm:text-sm">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-1 text-xs sm:text-sm">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Your Spiritual Journey Partner</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="transition-all duration-300 h-16 md:h-19">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-15 sm:h-18">

                        {/* Logo */}
                        <Link to="/" className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="max-w-[160px] sm:max-w-[170px] md:max-w-[180px] lg:max-w-[190px] xl:max-w-[200px] w-auto h-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-0">
                            <Link
                                to="/"
                                className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium relative group/nav text-sm"
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                            </Link>

                            <Link
                                to="/about"
                                className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium relative group/nav text-sm"
                            >
                                About Us
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                            </Link>

                            {/* Umrah Packages Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('umrah')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium flex items-center space-x-1 group/nav text-sm">
                                    <span>Umrah Packages</span>
                                    <ChevronDown className={`w-3 h-3 transform transition-transform ${openDropdown === 'umrah' ? 'rotate-180' : ''} group-hover/nav:rotate-180`} />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                                </button>
                                {openDropdown === 'umrah' && (
                                    <div
                                        className="absolute top-full left-0 mt-0.5 w-64 bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm text-[#382e6a] rounded-xl shadow-2xl z-50 border border-gray-100 animate-fadeIn overflow-hidden"
                                        onMouseEnter={() => handleMouseEnter('umrah')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="p-3 bg-gradient-to-b from-gray-50 to-white">
                                            <div className="text-sm font-bold text-[#382e6a] px-3 py-2 mb-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-[#feba00]/20">
                                                UMRAH PACKAGES
                                            </div>
                                            <Link
                                                to="/classicpkg"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Classic Umrah Package</span>
                                                </div>
                                            </Link>
                                            <Link
                                                to="/deluxepkg"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Deluxe Umrah Package</span>
                                                </div>
                                            </Link>
                                            <Link
                                                to="/luxurypkg"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Luxury Umrah Package</span>
                                                </div>
                                            </Link>

                                            <div className="mt-3 pt-3 border-t border-[#382e6a]/20">
                                                <Link
                                                    to="/allpackages"
                                                    className="block px-4 py-3 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white text-sm font-bold transition-all duration-300 rounded-lg text-center shadow hover:shadow-md transform hover:-translate-y-0.5"
                                                >
                                                    View All Packages
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Hajj Packages Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('hajj')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium flex items-center space-x-1 group/nav text-sm">
                                    <span>Hajj Packages</span>
                                    <ChevronDown className={`w-3 h-3 transform transition-transform ${openDropdown === 'hajj' ? 'rotate-180' : ''} group-hover/nav:rotate-180`} />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                                </button>
                                {openDropdown === 'hajj' && (
                                    <div
                                        className="absolute top-full left-0 mt-0.5 w-64 bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm text-[#382e6a] rounded-xl shadow-2xl z-50 border border-gray-100 animate-fadeIn overflow-hidden"
                                        onMouseEnter={() => handleMouseEnter('hajj')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="p-3 bg-gradient-to-b from-gray-50 to-white">
                                            <div className="text-sm font-bold text-[#382e6a] px-3 py-2 mb-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-[#feba00]/20">
                                                HAJJ PACKAGES
                                            </div>
                                            <Link
                                                to="/classichajj"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Classic Hajj Package</span>
                                                </div>
                                            </Link>
                                            <Link
                                                to="/deluxehajj"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Deluxe Hajj Package</span>
                                                </div>
                                            </Link>
                                            <Link
                                                to="/luxuryhajj"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Luxury Hajj Package</span>
                                                </div>
                                            </Link>

                                            <div className="mt-3 pt-3 border-t border-[#382e6a]/20">
                                                <Link
                                                    to="/allpackages"
                                                    className="block px-4 py-3 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white text-sm font-bold transition-all duration-300 rounded-lg text-center shadow hover:shadow-md transform hover:-translate-y-0.5"
                                                >
                                                    View All Packages
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Ramadan Packages Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('ramadan')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium flex items-center space-x-1 group/nav text-sm">
                                    <span>Ramadan Packages</span>
                                    <ChevronDown className={`w-3 h-3 transform transition-transform ${openDropdown === 'ramadan' ? 'rotate-180' : ''} group-hover/nav:rotate-180`} />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                                </button>
                                {openDropdown === 'ramadan' && (
                                    <div
                                        className="absolute top-full left-0 mt-0.5 w-64 bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm text-[#382e6a] rounded-xl shadow-2xl z-50 border border-gray-100 animate-fadeIn overflow-hidden"
                                        onMouseEnter={() => handleMouseEnter('ramadan')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="p-3 bg-gradient-to-b from-gray-50 to-white">
                                            <div className="text-sm font-bold text-[#382e6a] px-3 py-2 mb-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-[#feba00]/20">
                                                RAMADAN PACKAGES
                                            </div>
                                            <Link
                                                to="/ramadan15days"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>First 15 Days</span>
                                                </div>
                                            </Link>
                                            <Link
                                                to="/ramadanlast20days"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg mb-1 group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Last 20 Days</span>
                                                </div>
                                            </Link>
                                            <Link
                                                to="/ramadanfullmonth"
                                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] text-sm font-medium transition-all duration-200 rounded-lg group/item"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                    <span>Full Month</span>
                                                </div>
                                            </Link>
                                            <div className="mt-3 pt-3 border-t border-[#382e6a]/20">
                                                <Link
                                                    to="/allpackages"
                                                    className="block px-4 py-3 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white text-sm font-bold transition-all duration-300 rounded-lg text-center shadow hover:shadow-md transform hover:-translate-y-0.5"
                                                >
                                                    View All Packages
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/visaservice"
                                className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium relative group/nav text-sm"
                            >
                                Visa Services
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                            </Link>

                            <Link
                                to="/contact"
                                className="px-3 py-1.5 text-[#382e6a] hover:text-[#feba00] transition-colors font-medium relative group/nav text-sm"
                            >
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feba00] to-[#ffcc44] transition-all duration-300 group-hover/nav:w-full"></span>
                            </Link>
                        </div>

                        {/* Contact Info & CTA - Desktop Only */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                                <a href="tel:+919136397091" className="flex items-center space-x-2 text-[#382e6a] hover:text-[#feba00] transition-colors font-semibold text-sm">
                                    <div className="w-7 h-7 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm">
                                        <Phone className="w-3.5 h-3.5 text-[#382e6a]" />
                                    </div>
                                    <span className="text-sm">+91-9136397091</span>
                                </a>
                            </div>
                            <button
                                onClick={openQuickEnquiry}
                                className="bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5 border border-white/20 flex items-center space-x-2 text-sm"
                            >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>Quick Enquiry</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="w-10 h-10 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] text-white rounded-lg hover:from-[#2a225a] hover:to-[#382e6a] transition-colors shadow-md flex items-center justify-center"
                            >
                                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-2 pb-3 bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm rounded-xl shadow-xl animate-slideIn border border-gray-100">
                            <div className="flex flex-col space-y-1 p-3 bg-gradient-to-b from-gray-50/30 to-white">
                                <Link
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className="px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium transition-all duration-300 rounded-lg mx-2 text-base border border-transparent hover:border-[#feba00]/30"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/about"
                                    onClick={closeMobileMenu}
                                    className="px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium transition-all duration-300 rounded-lg mx-2 text-base border border-transparent hover:border-[#feba00]/30"
                                >
                                    About Us
                                </Link>

                                {/* Mobile Dropdowns */}
                                <div className="px-2">
                                    {/* Umrah Mobile Dropdown */}
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown('umrah-mobile')}
                                            className="w-full px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium rounded-lg flex items-center justify-between transition-all duration-300 border border-gray-100 text-base bg-gradient-to-r from-gray-50/50 to-gray-100/50"
                                        >
                                            <span>Umrah Packages</span>
                                            <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'umrah-mobile' ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === 'umrah-mobile' && (
                                            <div className="bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm text-[#382e6a] rounded-lg mt-1 py-2 animate-fadeIn border border-gray-100">
                                                <div className="text-sm font-bold text-[#382e6a] px-6 py-2 mb-2 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-[#feba00]/20">
                                                    UMRAH PACKAGES
                                                </div>
                                                <Link to="/classicpkg" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Classic Umrah Package
                                                    </div>
                                                </Link>
                                                <Link to="/deluxepkg" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Deluxe Umrah Package
                                                    </div>
                                                </Link>
                                                <Link to="/luxurypkg" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Luxury Umrah Package
                                                    </div>
                                                </Link>
                                                <div className="mt-3 pt-3 border-t border-[#382e6a]/20">
                                                    <Link to="/allpackages" onClick={closeMobileMenu} className="block px-6 py-3 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white text-sm font-bold transition-colors text-center rounded-lg">
                                                        View All Packages
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hajj Mobile Dropdown */}
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown('hajj-mobile')}
                                            className="w-full px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium rounded-lg flex items-center justify-between transition-all duration-300 border border-gray-100 mt-1 text-base bg-gradient-to-r from-gray-50/50 to-gray-100/50"
                                        >
                                            <span>Hajj Packages</span>
                                            <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'hajj-mobile' ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === 'hajj-mobile' && (
                                            <div className="bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm text-[#382e6a] rounded-lg mt-1 py-2 animate-fadeIn border border-gray-100">
                                                <div className="text-sm font-bold text-[#382e6a] px-6 py-2 mb-2 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-[#feba00]/20">
                                                    HAJJ PACKAGES
                                                </div>
                                                <Link to="/classicpkg" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Classic Hajj Package
                                                    </div>
                                                </Link>
                                                <Link to="/deluxepkg" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Deluxe Hajj Package
                                                    </div>
                                                </Link>
                                                <Link to="/luxurypkg" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Luxury Hajj Package
                                                    </div>
                                                </Link>
                                                <div className="mt-3 pt-3 border-t border-[#382e6a]/20">
                                                    <Link to="/allpackages" onClick={closeMobileMenu} className="block px-6 py-3 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white text-sm font-bold transition-colors text-center rounded-lg">
                                                        View All Packages
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Ramadan Mobile Dropdown */}
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown('ramadan-mobile')}
                                            className="w-full px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium rounded-lg flex items-center justify-between transition-all duration-300 border border-gray-100 mt-1 text-base bg-gradient-to-r from-gray-50/50 to-gray-100/50"
                                        >
                                            <span>Ramadan Packages</span>
                                            <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'ramadan-mobile' ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === 'ramadan-mobile' && (
                                            <div className="bg-gradient-to-b from-white/95 via-white/97 to-white backdrop-blur-sm text-[#382e6a] rounded-lg mt-1 py-2 animate-fadeIn border border-gray-100">
                                                <div className="text-sm font-bold text-[#382e6a] px-6 py-2 mb-2 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-[#feba00]/20">
                                                    RAMADAN PACKAGES
                                                </div>
                                                <Link to="/Ramadan15days" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        First 15 Days
                                                    </div>
                                                </Link>
                                                <Link to="/ramadanlast20days" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Last 20 Days
                                                    </div>
                                                </Link>
                                                <Link to="/ramadanfullmonth" onClick={closeMobileMenu} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 text-sm transition-colors group/item">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#ffcc44] rounded-full mr-3 group-hover/item:scale-110 transition-transform"></div>
                                                        Full Month
                                                    </div>
                                                </Link>
                                                <div className="mt-3 pt-3 border-t border-[#382e6a]/20">
                                                    <Link to="/allpackages" onClick={closeMobileMenu} className="block px-6 py-3 bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white text-sm font-bold transition-colors text-center rounded-lg">
                                                        View All Packages
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Link
                                    to="/visaservice"
                                    onClick={closeMobileMenu}
                                    className="px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium transition-all duration-300 rounded-lg mx-2 text-base border border-transparent hover:border-[#feba00]/30"
                                >
                                    Visa Services
                                </Link>

                                <Link
                                    to="/contact"
                                    onClick={closeMobileMenu}
                                    className="px-4 py-3 text-[#382e6a] hover:bg-gradient-to-r hover:from-gray-50/70 hover:to-gray-100/70 hover:text-[#382e6a] font-medium transition-all duration-300 rounded-lg mx-2 text-base border border-transparent hover:border-[#feba00]/30"
                                >
                                    Contact
                                </Link>

                                {/* Mobile CTA Button */}
                                <div className="px-3 pt-2">
                                    <button
                                        onClick={openQuickEnquiry}
                                        className="w-full bg-gradient-to-r from-[#382e6a] to-[#4a3f80] hover:from-[#2a225a] hover:to-[#382e6a] text-white py-3 px-4 rounded-lg font-bold transition-all duration-300 shadow border border-white/20 flex items-center justify-center space-x-2 text-base"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Quick Enquiry</span>
                                    </button>
                                </div>

                                {/* Mobile Contact Info */}
                                <div className="pt-3 border-t border-[#382e6a]/20 mx-3 mt-2">
                                    <a href="tel:+918588914635" className="flex items-center justify-center space-x-2 text-[#382e6a] hover:text-[#feba00] transition-colors font-semibold py-2">
                                        <Phone className="w-4 h-4" />
                                        <span className="text-sm">+91-8588914635</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            {/* Quick Enquiry Modal */}
            {isQuickEnquiryOpen && <QuickEnquiry onClose={onClose} />}
        </div>
    );
}