import React, { useState, useEffect } from 'react';
import {
    Phone,
    Calendar,
    CheckCircle,
    Sparkles,
    Heart,
    ShieldCheck,
    Building,
    Menu,
    X,
    Users,
    BookOpen,
    Award,
    Plane,
    Home,
    Car,
    Globe,
    Clock,
    ChevronRight,
    Star,
    MapPin,
    Hotel,
    Utensils,
    Landmark,
    Shield,
    Globe as GlobeIcon,
    Loader2,
    Moon
} from 'lucide-react';
import Quickenquiry from '../Quickenquiry';
import { usePackages } from '../Umrahpkg/usePackages';
import { getPackagesByType } from '../Umrahpkg/packageService';

const Luxuryhajj = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mergedPackage, setMergedPackage] = useState(null);

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

    // Static package data as fallback
    const staticPackage = {
        id: 6,
        type: 'Luxury Hajj',
        title: 'Luxury Hajj Package',
        subtitle: 'Premium Spiritual Journey with Divine Comfort',
        price: "9,50,000",
        duration: '15 days',
        groupSize: '8-12 People',
        rating: 4.9,
        reviews: 250,
        badge: 'Ultimate Luxury',
        badgeColor: 'bg-purple-600',
        category: 'Hajj',
        packageType: 'hajj_luxury',
        description: `Al-Ziyarah Tour presents an exquisite Luxury Hajj package that combines spiritual fulfillment with unparalleled comfort. Our carefully curated 15-day program offers premium accommodations within walking distance of the Holy Mosques, ensuring you maximize your time in worship and reflection. With years of experience serving pilgrims, we guarantee a seamless journey from your home to the sacred lands and back. Experience Hajj like never before with our personalized services, religious guidance, and attention to every detail that makes your pilgrimage truly memorable.`
    };

    // Use the custom hook to fetch packages
    const { packages, loading, error } = usePackages();

    // Get hajj_luxury package from API
    const hajjPackages = getPackagesByType(packages, "hajj_luxury");
    const apiPackage = hajjPackages && hajjPackages.length > 0 ? hajjPackages[0] : null;

    // Helper function to format price
    const formatPrice = (price, currency = "INR") => {
        if (!price) return "9,50,000";
        try {
            const numPrice = parseFloat(price);
            return `${numPrice.toLocaleString()}`;
        } catch (error) {
            return "9,50,000";
        }
    };

    // Helper function to format duration
    const formatDuration = (durationDays) => {
        if (!durationDays) return "15 days";
        return `${durationDays} ${durationDays === 1 ? "Day" : "Days"}`;
    };

    // Merge API data with static package
    useEffect(() => {
        if (apiPackage) {
            const merged = {
                ...staticPackage,
                title: apiPackage.title || apiPackage.name || staticPackage.title,
                price: formatPrice(apiPackage.price, apiPackage.currency),
                image: apiPackage.image || "https://i.pinimg.com/1200x/d6/c4/41/d6c44193b3f3c89303fb983da373869a.jpg",
                ...(apiPackage.duration_days && { duration: formatDuration(apiPackage.duration_days) }),
                ...(apiPackage.rating && { rating: apiPackage.rating }),
                ...(apiPackage.description && { description: apiPackage.description }),
                ...(apiPackage.category && { category: apiPackage.category }),
                ...(apiPackage.subtitle && { subtitle: apiPackage.subtitle }),
            };
            setMergedPackage(merged);
        } else {
            setMergedPackage(staticPackage);
        }
    }, [apiPackage]);

    const openQuickEnquiry = () => {
        setIsQuickEnquiryOpen(true);
    };

    const onClose = () => {
        setIsQuickEnquiryOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" style={{ color: colors.primary }} />
                    <p className="text-lg font-medium" style={{ color: colors.primary }}>Loading Luxury Hajj package details...</p>
                </div>
            </div>
        );
    }

    // Use merged package or static package as fallback
    const packageData = mergedPackage || staticPackage;

    const sectionData = {
        overview: {
            title: 'Premium Hajj Experience',
            icon: <Landmark className="w-5 h-5 md:w-6 md:h-6" />,
            content: packageData.description
        },
        itinerary: {
            title: 'Spiritual Journey Plan',
            icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
            content: `Day 1: Arrival in Jeddah, transfer to Makkah hotel, orientation session
Day 2: Umrah performance with guided instructions, rest at hotel
Day 3: Ziyarat tour in Makkah including visits to historical Islamic sites
Day 4: Optional prayers at Masjid al-Haram, religious lectures
Day 5: Travel to Madinah by A.C coach, check-in at hotel near Masjid an-Nabawi
Day 6: Ziyarat tour in Madinah including Quba Mosque and Uhud Mountain
Day 7: Optional prayers at Masjid an-Nabawi, educational sessions
Day 8: Free day for personal worship and reflection
Day 9: Final prayers, shopping for religious items and souvenirs
Day 10: Return to Makkah for Hajj rituals
Day 11-14: Hajj rituals completion with expert guidance
Day 15: Departure from Jeddah with spiritual memories

Additional services include daily meals, bottled water, prayer mats, and comprehensive religious guidance throughout your Hajj journey.`
        },
        inclusion: {
            title: 'Package Inclusions',
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
            content: `• Round-trip flights from major Indian cities with reputable airlines
• Luxury hotel accommodations in Makkah (300m) and Madinah (300m)
• Daily buffet meals featuring international and local cuisine
• All ground transportation in luxury air-conditioned coaches
• Comprehensive Hajj visa processing and documentation
• Guided ziyarat tours to important Islamic sites
• Educational sessions with qualified Islamic scholars
• 24/7 customer support from our experienced team
• Medical assistance and health monitoring
• Group prayer arrangements and religious guidance
• Pre-departure orientation session
• Hajj guidebook and prayer materials
• Bottled water and snacks during transfers
• Comprehensive travel insurance for all participants`
        },
        review: {
            title: 'Pilgrim Testimonials',
            icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
            content: `⭐⭐⭐⭐⭐ "Al-Ziyarah Tour made our Hajj journey truly blessed. The luxury accommodations were exceptional, the religious guidance was invaluable, and every detail reflected their dedication. Highly recommended!" - Ahmed Khan, Mumbai

⭐⭐⭐⭐⭐ "This was my first Hajj, and I couldn't have asked for a better experience. The hotels were incredibly close to the Haram, the food was exquisite, and the educational sessions really enhanced my understanding." - Fatima Sheikh, Delhi

⭐⭐⭐⭐⭐ "The organization was flawless from start to finish. The luxury transportation and premium accommodations made our spiritual journey comfortable and meaningful." - Omar Ibrahim, Bangalore

⭐⭐⭐⭐⭐ "The spiritual guidance provided made this Hajj journey truly special. The 300m distance from Haram was perfect for frequent visits. I felt well taken care of throughout the trip." - Aisha Patel, Hyderabad

⭐⭐⭐⭐⭐ "As a senior traveler, I appreciated the luxury amenities and caring staff. The religious lectures were enlightening, and the whole experience was spiritually rejuvenating." - Yusuf Rahman, Chennai`
        }
    };

    const highlights = [
        {
            icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
            title: 'Prime Location',
            desc: "Walking distance of just 300m to Haram and Prophet's Mosque",
            color: 'from-[#382e6a] to-[#5d4bb1]',
            image: 'https://makkah-madinah.accor.com/wp-content/uploads/2024/05/Makkah-Clock-Royal-Tower-A-Fairmont-Hotel-5.jpg'
        },
        {
            icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" />,
            title: 'Religious Guidance',
            desc: 'Daily educational sessions with qualified Islamic scholars',
            color: 'from-[#feba00] to-[#fed766]',
            image: 'https://hajjumrahtourpackage.com/wp-content/uploads/2025/07/umrah-tour-guide-spiritual-guidance-1024x683.webp'
        },
        {
            icon: <Hotel className="w-6 h-6 md:w-8 md:h-8" />,
            title: 'Luxury Stay',
            desc: 'Premium hotels just 300m from holy sites with luxury amenities',
            color: 'from-[#382e6a] to-[#5d4bb1]',
            image: 'https://thumbs.dreamstime.com/b/modern-comfortable-hotel-room-14709455.jpg'
        },
        {
            icon: <Car className="w-6 h-6 md:w-8 md:h-8" />,
            title: 'Premium Transport',
            desc: 'Premium air-conditioned coaches for all transfers between sites',
            color: 'from-[#feba00] to-[#fed766]',
            image: 'https://ztcgulf.com/wp-content/uploads/2025/03/Importance-of-reliable-Umrah-and-Hajj-transport.jpg'
        },
        {
            icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
            title: 'Full Support',
            desc: '24/7 medical, logistical and spiritual assistance throughout',
            color: 'from-[#382e6a] to-[#5d4bb1]',
            image: 'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2025/05/19/4603239-2109124510.jpg?itok=4w08yg-u'
        },
        {
            icon: <Utensils className="w-6 h-6 md:w-8 md:h-8" />,
            title: 'Gourmet Meals',
            desc: 'Daily buffet meals with international & authentic Indian cuisine',
            color: 'from-[#feba00] to-[#fed766]',
            image: 'https://i.pinimg.com/736x/d0/d6/37/d0d6371603134ccab923e7195bb18b46.jpg'
        },
    ];

    const luxuryFeatures = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Premium Treatment',
            description: 'Priority services at all stages of your journey'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Expert Guidance',
            description: 'Certified scholars and experienced guides'
        },
        {
            icon: <GlobeIcon className="w-6 h-6" />,
            title: 'Global Standards',
            description: 'International luxury travel standards'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Time Optimization',
            description: 'Efficient scheduling for maximum worship time'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
            {/* API Data Indicator */}
            {apiPackage && !error && (
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-4">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm border border-purple-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-medium text-green-700">Live Package Data</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="relative h-140 sm:h-100 md:h-110 lg:h-[500px] xl:h-[650px] overflow-hidden mt-20 md:mt-10">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${packageData?.image || "https://i.pinimg.com/1200x/d6/c4/41/d6c44193b3f3c89303fb983da373869a.jpg"}')`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#382e6a]/30 via-[#382e6a]/40 to-[#1e1b4b]/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#382e6a]/50 via-transparent to-transparent"></div>

                {/* Islamic Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23feba00' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px'
                    }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                    {/* Brand Badge */}
                    <div className="mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                        <div className="flex justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-[#feba00]/40">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#feba00]" />
                            <span className="text-white font-semibold text-xs sm:text-sm tracking-wider">AL-ZIYARAH TOURS</span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight text-center">
                            {packageData.title}
                        </h1>
                        <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto flex justify-center text-center">
                            {packageData.subtitle}
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
                        {[
                            { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Premium Experience" },
                            { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Expert Scholars" },
                            { icon: <Moon className="w-4 h-4 sm:w-5 sm:h-5" />, text: packageData.duration },
                            { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "24/7 Premium Support" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 border border-white/20">
                                <div className="text-[#feba00]">{item.icon}</div>
                                <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Price Card */}
                    <div className="md:hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 w-full max-w-sm border border-white/20">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                ₹{packageData.price}
                            </div>
                            <p className="text-white/90 text-sm sm:text-base mb-4 flex justify-center text-center">per person (luxury all inclusive)</p>
                            <div className="flex items-center gap-2 mb-2 flex justify-center">
                                <Moon className="w-5 h-5 text-[#feba00]" />
                                <span className="text-white/90 text-sm">Ultimate {packageData.duration} Spiritual Luxury</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <button
                                    onClick={openQuickEnquiry}
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    <span className="relative">Book Your Journey</span>
                                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href="tel:+919136397091"
                                    className="border-2 border-white text-white hover:bg-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center"
                                >
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Price Card */}
                    <div className="hidden md:flex items-center justify-between gap-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                        <div className="flex-1 text-left">
                            <div className="flex items-center mb-2">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(packageData.rating) ? 'text-yellow-400 fill-current' : 'text-white/50'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-white text-lg ml-3">{packageData.rating} ({packageData.reviews} reviews)</span>
                            </div>
                            <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                                ₹{packageData.price}
                            </div>
                            <p className="text-white/90 text-lg">per person (luxury all inclusive)</p>
                            <div className="flex items-center gap-2 mt-2">
                                <Moon className="w-5 h-5 text-[#feba00]" />
                                <span className="text-white/90 text-sm">Ultimate {packageData.duration} Spiritual Luxury Journey</span>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-shrink-0">
                            <button
                                onClick={openQuickEnquiry}
                                className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="relative">Book Your Journey</span>
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="tel:+919136397091"
                                className="border-2 border-white text-white hover:bg-white/20 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-200 flex items-center"
                            >
                                <Phone className="w-5 h-5 mr-2" /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs Section */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 sm:p-2 shadow-lg w-full max-w-4xl" style={{ borderColor: colors.primary }}>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white"
                                style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                            >
                                <div className="flex items-center space-x-2">
                                    {sectionData[activeSection].icon}
                                    <span className="font-semibold">{sectionData[activeSection].title}</span>
                                </div>
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>

                            {/* Mobile Dropdown Menu */}
                            {isMobileMenuOpen && (
                                <div className="mt-2 space-y-1 p-2">
                                    {Object.entries(sectionData).map(([key, data]) => (
                                        <button
                                            key={key}
                                            onClick={() => {
                                                setActiveSection(key);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className={`w-full flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${activeSection === key
                                                ? 'text-white'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            style={activeSection === key ? { background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` } : {}}
                                        >
                                            {data.icon}
                                            <span className="font-semibold text-sm">{data.title}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop Tabs */}
                        <div className="hidden md:flex flex-wrap justify-center gap-1 sm:gap-2">
                            {Object.entries(sectionData).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveSection(key)}
                                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${activeSection === key
                                        ? 'text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    style={activeSection === key ? { background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` } : {}}
                                >
                                    {data.icon}
                                    <span className="font-semibold whitespace-nowrap">{data.title.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl lg:max-w-5xl rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 xl:p-10" style={{
                        background: `linear-gradient(135deg, white, ${colors.light})`,
                        borderColor: colors.primary
                    }}>
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                            {sectionData[activeSection].icon}
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {sectionData[activeSection].title}
                            </h2>
                        </div>

                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed sm:leading-loose whitespace-pre-line text-justify text-sm sm:text-base">
                                {sectionData[activeSection].content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Package Highlights Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#382e6a]/10 to-[#feba00]/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-gray-100 shadow-sm">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#feba00]" />
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Divine Luxury Experience Highlights
                            </h2>
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#382e6a]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-center px-2">
                            Every detail crafted for your ultimate spiritual comfort and divine luxury during Hajj
                        </p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#feba00]/30 hover:scale-[1.02]"
                            >
                                {/* Gradient Corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#382e6a]/5 to-[#feba00]/5 transform rotate-45 translate-x-8 -translate-y-8 group-hover:from-[#382e6a]/10 group-hover:to-[#feba00]/10 transition-all"></div>
                                </div>

                                {/* Image Section */}
                                <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="relative z-10 flex items-start space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-md`}>
                                            <div className="text-white">{item.icon}</div>
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#382e6a] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 xl:order-1">
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 text-center xl:text-left bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                Ultimate Spiritual Luxury Journey
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { icon: <Landmark className="w-6 h-6" />, text: "Exclusive religious lectures and private Q&A sessions with renowned scholars" },
                                    { icon: <Calendar className="w-6 h-6" />, text: `${packageData.duration} comprehensive Premium spiritual program with guided rituals` },
                                    { icon: <Hotel className="w-6 h-6" />, text: "Luxury accommodations just 300m from holy sites" },
                                    { icon: <Users className="w-6 h-6" />, text: "Premium support system with personal concierge and dedicated guides" },
                                    { icon: <GlobeIcon className="w-6 h-6" />, text: "Exclusive ziyarat tours with expert historical explanations" }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-gradient-to-r from-[#382e6a] to-[#382e6a] p-3 rounded-xl text-white shadow-lg flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed pt-1">
                                            {feature.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 xl:order-2">
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl relative border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-[#feba00] to-[#fed766] p-3 rounded-xl mr-4">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#382e6a] via-[#4f46e5] to-[#feba00] bg-clip-text text-transparent">
                                        Ultimate Luxury Package Includes
                                    </h3>
                                </div>
                                <ul className="space-y-4 text-gray-700">
                                    {[
                                        "Economy-class flights with Saudi airlines",
                                        "Premium luxury hotel accommodation (300m from Haram)",
                                        "Premium tent accommodation in Mina",
                                        "Daily gourmet buffet with international cuisine",
                                        "Premium ground transportation in luxury coaches",
                                        "Exclusive ziyarat tours in Makkah & Madinah",
                                        "Private sessions with renowned Islamic scholars",
                                        "Premium Hajj visa processing with express service",
                                        "Comprehensive Premium travel insurance coverage",
                                        "24/7 dedicated Premium support with personal concierge",
                                        "Premium medical assistance with healthcare professionals",
                                        "Premium Hajj guidebook and educational materials",
                                        "Luxury Hajj kit with premium essential items",
                                        "Unlimited Zamzam water supply"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                            <span className="text-base lg:text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
                        <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2">
                        Begin Your Ultimate Luxury Hajj Journey With Al-Ziyarah Tours
                    </h2>
                    <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-center px-2">
                        Limited exclusive Premium seats available for the upcoming Hajj season. Secure your divine luxury spiritual experience.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <button
                            onClick={openQuickEnquiry}
                            className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative">Book Your Journey</span>
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
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
                            { icon: <Phone className="w-5 h-5" />, title: "Premium Hotline", info: "+91-9136397091" },
                            { icon: <Clock className="w-5 h-5" />, title: "Premium Support", info: "24/7 Dedicated" },
                            { icon: <Award className="w-5 h-5" />, title: "Luxury Experience", info: "Premium Service" }
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

            <br />
            {isQuickEnquiryOpen && <Quickenquiry onClose={onClose} />}
        </div>
    );
};

export default Luxuryhajj;