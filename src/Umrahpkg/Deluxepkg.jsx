import React, { useState, useEffect } from 'react';
import {
    Phone,
    Calendar,
    CheckCircle,
    Sparkles,
    Heart,
    ShieldCheck,
    MapPin,
    Users,
    Clock,
    Award,
    Plane,
    Home,
    BookOpen,
    Building,
    Utensils,
    UserCheck,
    Menu,
    X,
    ChevronRight,
    Star,
    Globe,
    Loader2
} from 'lucide-react';
import Quickenquiry from '../Quickenquiry';
import Deluxeimage from '../assets/Deluxeimg.jpg';

// Import your API hooks and services
import { usePackages } from './usePackages'; // Assuming this exists
import { getPackagesByType } from './packageService'; // Assuming this exists

const Deluxepkg = () => {
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
        id: 2,
        type: 'Deluxe',
        title: 'Deluxe Umrah Package',
        subtitle: 'Premium Spiritual Journey with Luxury & Divine Comfort',
        price: "1,25,000",
        duration: '11 days',
        duration_days: 11,
        groupSize: '10-15 People',
        rating: 4.9,
        reviews: 245,
        badge: 'Premium Package',
        badgeColor: 'bg-purple-600',
        category: 'Umrah',
        packageType: 'umrah_deluxe',
        description: `Al-Ziyarah Tour Service presents an exquisite Deluxe Umrah package that combines spiritual fulfillment with divine comfort. Our carefully curated package offers Deluxe accommodations within walking distance of the Holy Mosques, ensuring you maximize your time in worship and reflection. With years of dedicated service to pilgrims, we guarantee a seamless journey from your home to the sacred lands and back.

Experience Umrah like never before with our personalized services, spiritual guidance, and meticulous attention to every detail that makes your pilgrimage truly memorable and spiritually rewarding. Our experienced team ensures every aspect of your journey is handled with care and devotion.`,
        image: Deluxeimage
    };

    // Use the custom hook to fetch packages
    const { packages, loading, error } = usePackages();

    // Get umrah_deluxe package from API
    const umrahPackages = getPackagesByType(packages, "umrah_delux");
    const apiPackage = umrahPackages ? umrahPackages[0] : null;

    // Helper function to format price
    const formatPrice = (price, currency = "INR") => {
        if (!price) return "1,25,000";
        try {
            const numPrice = parseFloat(price);
            return `${numPrice.toLocaleString()}`;
        } catch (error) {
            return "1,25,000";
        }
    };

    // Helper function to format duration
    const formatDuration = (durationDays) => {
        if (!durationDays) return "11 days";
        return `${durationDays} ${durationDays === 1 ? "Day" : "Days"}`;
    };

    // Merge API data with static package
    useEffect(() => {
        if (apiPackage) {
            const merged = {
                ...staticPackage,
                title: apiPackage.title || apiPackage.name || staticPackage.title,
                price: formatPrice(apiPackage.price, apiPackage.currency),
                duration_days: apiPackage.duration_days || staticPackage.duration_days,
                duration: apiPackage.duration_days ? formatDuration(apiPackage.duration_days) : staticPackage.duration,
                rating: apiPackage.rating || staticPackage.rating,
                reviews: apiPackage.reviews || staticPackage.reviews,
                description: apiPackage.description || staticPackage.description,
                category: apiPackage.category || staticPackage.category,
                subtitle: apiPackage.subtitle || apiPackage.tagline || staticPackage.subtitle,
                groupSize: apiPackage.group_size || staticPackage.groupSize,
                image: apiPackage.image || staticPackage.image,
                // Add any other fields you want to override from API
            };
            setMergedPackage(merged);
        } else {
            // Use static package if no API data found
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
                    <p className="text-lg font-medium" style={{ color: colors.primary }}>Loading deluxe package details...</p>
                </div>
            </div>
        );
    }

    // Use merged package or static package as fallback
    const packageData = mergedPackage || staticPackage;

    const sectionData = {
        overview: {
            title: 'Deluxe Umrah Package',
            icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
            content: packageData.description
        },
        itinerary: {
            title: 'Journey Itinerary',
            icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
            content: `✨ Day 1: Arrival in Jeddah - Welcome with Zamzam water - Transfer to Makkah
✨ Day 2: First Umrah performance with spiritual guidance
✨ Day 3: Islamic lectures and Quran study sessions
✨ Day 4: Visit to historical sites (Hira Cave, Jabal al-Nour)
✨ Day 5: Personal worship and spiritual reflection day
✨ Day 6: Transfer to Madinah - Visit Quba Mosque
✨ Day 7: Ziyarat tour of Madinah's sacred historical sites
✨ Day 8: Special Dua program at Masjid an-Nabawi
✨ Day 9: Return to Makkah for second Umrah opportunity
✨ Day 10: Tawaf al-Wida and departure preparations
✨ Day 11: Transfer to Jeddah airport for return flight`
        },
        inclusion: {
            title: 'Package Includes',
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
            content: `✅ Round-trip flights from major Indian cities
✅ Luxury hotel accommodations near Haram
✅ Daily buffet breakfast with Indian cuisine options
✅ All ground transportation in luxury vehicles
✅ Comprehensive Umrah visa processing
✅ English/Urdu speaking spiritual guides
✅ Educational materials and guidance booklet
✅ 24/7 medical assistance and customer support
✅ Group lectures on Umrah rituals
✅ Complimentary ihram and prayer kit
✅ Comprehensive travel insurance
✅ Zamzam water allocation for each pilgrim`
        },
        review: {
            title: 'Pilgrim Experiences',
            icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
            content: `⭐⭐⭐⭐⭐ "Al-Ziyarah Tour Service made our spiritual journey truly blessed. The hotels were exceptional, guides were knowledgeable, and every detail reflected their dedication. Highly recommended!" - Ahmed Raza, Hyderabad

⭐⭐⭐⭐⭐ "The proximity to Haram allowed us to focus purely on worship. The spiritual guidance sessions added immense value to our Umrah experience." - Fatima Khan, Mumbai

⭐⭐⭐⭐⭐ "As first-time pilgrims, we felt completely cared for throughout our journey. The team's attention to detail and support made this a journey of a lifetime." - Abdul Qadir, Bangalore

⭐⭐⭐⭐⭐ "Professional service from start to finish. The spiritual guidance was exceptional and accommodations were perfect for families." - Sara Ahmed, Delhi`
        }
    };

      const highlights = [
        {
            icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Prime Location',
            desc: 'Walking distance to Haram and Prophet\'s Mosque for maximum convenience',
            image: 'https://i.ytimg.com/vi/7vWL2cS0y7c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwoAWTasiDRtYpX4JrT4nsKuGX0g'
        },
        {
            icon: <Heart className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Spiritual Care',
            desc: 'Regular guidance sessions with renowned Islamic scholars and spiritual mentors',
            image: 'https://media.assettype.com/outlookindia/2025-03-10/w2pimxir/image5.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0'
        },
        {
            icon: <Plane className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Direct Flights',
            desc: 'Premium airlines with convenient prayer-friendly timings and comfortable seating',
            image: 'https://www.travelustaad.com/Content/B2C_2024/images/Airline/Saudi_Airline.jpg'
        },
        {
            icon: <Star className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Gourmet Dining',
            desc: 'Halal cuisine with authentic Indian flavor options and dietary accommodations',
            image: 'https://i.pinimg.com/736x/d0/d6/37/d0d6371603134ccab923e7195bb18b46.jpg'
        },
        {
            icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: '24/7 Support',
            desc: 'Medical, logistical and spiritual assistance throughout your journey',
            image: 'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2025/05/19/4603239-2109124510.jpg?itok=4w08yg-u'
        },
        {
            icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Premium Kit',
            desc: 'Deluxe ihram, prayer mat, spiritual guidebook and travel essentials',
            image: 'https://m.media-amazon.com/images/I/81yrIY5VWAL._UY1000_.jpg'
        },
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

            {/* Error Indicator - Only show when there's an error */}
            {error && (
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-4">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm border border-yellow-100">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm font-medium text-yellow-700">Using static package data</span>
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
                        backgroundImage: `url(${packageData.image})`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#382e6a]/50 via-[#382e6a]/50 to-[#1e1b4b]/50"></div>
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
                            { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Premium Certified" },
                            { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "5,000+ Pilgrims" },
                            { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Premium Experience" },
                            { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "24/7 Support" }
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
                            <p className="text-white/90 text-sm sm:text-base mb-4 flex justify-center">per person (all inclusive)</p>
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
                            <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                                ₹{packageData.price}
                            </div>
                            <p className="text-white/90 text-lg">per person (all inclusive)</p>
                            <div className="flex items-center gap-2 mt-2">
                                <Award className="w-5 h-5 text-[#feba00]" />
                                <span className="text-white/90 text-sm">Ultimate Deluxe Experience</span>
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
                                Premium Features
                            </h2>
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#382e6a]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-center px-2">
                            Exclusive services designed for your ultimate spiritual comfort and luxury experience
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
                                        <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r from-[#382e6a] to-[#5d4bb1] shadow-md`}>
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

            {/* CTA Section */}
            <div className="relative text-white py-12 sm:py-16 px-4 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.purpleLight}, ${colors.purpleDark})` }}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/mosque.png')] opacity-10"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#feba00]/10 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#feba00]/10 to-transparent rounded-full translate-x-32 translate-y-32"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-lg">
                        <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2">
                        Experience Premium Umrah With Al-Ziyarah Tours
                    </h2>
                    <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-center px-2">
                        Book your Deluxe Umrah package today and embark on a journey of luxury, comfort, and divine blessings.
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

                    {/* Contact Info */}
                    <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
                        {[
                            { icon: <Phone className="w-5 h-5" />, title: "Call Support", info: "+91-9136397091" },
                            { icon: <Clock className="w-5 h-5" />, title: "24/7 Service", info: "Always Available" },
                            { icon: <Award className="w-5 h-5" />, title: "Premium", info: "15+ Years Excellence" }
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

            {isQuickEnquiryOpen && <Quickenquiry onClose={onClose} />}
            <br />
        </div>
    );
};

export default Deluxepkg;