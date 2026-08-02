import React, { useState, useEffect } from 'react';
import {
    Phone,
    Calendar,
    CheckCircle,
    Sparkles,
    Heart,
    ShieldCheck,
    Menu,
    X,
    Users,
    Clock,
    Award,
    Plane,
    ChevronRight,
    Building,
    BookOpen,
    Utensils,
    UserCheck,
    Home,
    MapPin,
    Star,
    Loader2
} from 'lucide-react';
import Quickenquiry from '../Quickenquiry';
import ClassicImage from '../assets/classicimg.jpg';

// Import your API hooks and services
import { usePackages } from './usePackages'; // Assuming this exists
import { getPackagesByType } from './packageService'; // Assuming this exists

const Classicpkg = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mergedPackage, setMergedPackage] = useState(null);

    // Updated color variables for Al-Ziyarah Tours
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
        id: 1,
        type: 'Classic',
        title: 'Classic Umrah Package',
        subtitle: 'Spiritual Journey with Divine Care & Premium Comfort',
        price: "75,000",
        duration: '11 days',
        duration_days: 11,
        groupSize: '15-20 People',
        rating: 4.8,
        reviews: 325,
        badge: 'Most Popular',
        badgeColor: 'bg-purple-500',
        category: 'Umrah',
        packageType: 'umrah_classic',
        description: `Al-Ziyarah Tours presents the Classic Umrah package - a perfect blend of spiritual devotion and comfortable travel. Designed for pilgrims seeking an authentic Umrah experience with reliable services, this package offers quality accommodations with convenient access to the Holy Mosques.

With our 15+ years of expertise in serving pilgrims, we ensure a smooth and spiritually rewarding journey from departure to return. Experience the blessings of Umrah with our comprehensive services that cater to all your spiritual needs while maintaining excellent value.

Our team of experienced guides and support staff ensures that every aspect of your journey is taken care of, allowing you to focus entirely on your spiritual connection.`,
        image: ClassicImage
    };

    // Use the custom hook to fetch packages
    const { packages, loading, error } = usePackages();

    // Get umrah_classic package from API
    const umrahPackages = getPackagesByType(packages, "umrah_classic");
    const apiPackage = umrahPackages ? umrahPackages[0] : null;

    // Helper function to format price
    const formatPrice = (price, currency = "INR") => {
        if (!price) return "75,000";
        try {
            const numPrice = parseFloat(price);
            return `${numPrice.toLocaleString()}`;
        } catch (error) {
            return "75,000";
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
                    <p className="text-lg font-medium" style={{ color: colors.primary }}>Loading package details...</p>
                </div>
            </div>
        );
    }

    // Use merged package or static package as fallback
    const packageData = mergedPackage || staticPackage;

    const sectionData = {
        overview: {
            title: 'Classic Umrah Experience',
            icon: <Building className="w-5 h-5 md:w-6 md:h-6" />,
            content: packageData.description
        },
        itinerary: {
            title: 'Detailed Spiritual Journey Plan',
            icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
            content: `Day 1-2: Arrival in Jeddah - Warm welcome & transfer to Makkah with orientation session
Day 3: Performance of Umrah rituals with expert guidance and spiritual preparation
Day 4: Quran recitation sessions and visits to significant Islamic historical sites
Day 5: Personal worship time at Haram and group spiritual activities
Day 6: Transfer to Madinah with stop at Quba Mosque for prayers
Day 7: Guided Ziyarat tour of Madinah's sacred locations and historical sites
Day 8: Special prayers at Masjid an-Nabawi and spiritual reflection sessions
Day 9: Return to Makkah for additional worship opportunities and farewell Tawaf
Day 10: Departure preparations and transfer to Jeddah airport
Day 11: Arrival back home with spiritual memories to cherish forever`
        },
        inclusion: {
            title: 'Package Inclusions',
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
            content: `✓ Round-trip economy flights from major Indian cities with meal service
✓ Quality 4-star accommodations in Makkah and Madinah with daily housekeeping
✓ Daily buffet breakfast with international and local cuisine options
✓ All ground transportation in luxury air-conditioned coaches
✓ Complete Umrah visa processing and documentation assistance
✓ Experienced multilingual guides for spiritual and practical assistance
✓ Educational materials and Quran for each pilgrim
✓ 24/7 medical support and customer care team throughout journey
✓ Group sessions on Islamic teachings and pilgrimage guidance
✓ Comprehensive travel insurance with COVID coverage
✓ Traditional ihram sets and essential prayer accessories
✓ Farewell dinner with fellow pilgrims`
        },
        review: {
            title: 'Pilgrim Testimonials',
            icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
            content: `⭐⭐⭐⭐⭐ "Al-Ziyarah Tours made our first Umrah experience truly memorable. The spiritual guidance was exceptional and arrangements were flawless. Highly recommended!" - Abdul Rahman, Chennai

⭐⭐⭐⭐⭐ "Excellent value with premium services. The hotels were luxurious and well-located, making our worship convenient." - Aisha Begum, Kolkata

⭐⭐⭐⭐⭐ "As senior citizens, we appreciated the personal care and support. The team made us feel like family throughout." - Yusuf Patel, Ahmedabad

⭐⭐⭐⭐⭐ "Professional service with attention to every detail. Will definitely travel with Al-Ziyarah again." - Fatima Khan, Mumbai`
        }
    };

    const highlights = [
        {
            icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Prime Locations',
            desc: "Comfortable hotels with regular shuttle service to Haram and Prophet's Mosque",
            image: 'https://thumbs.dreamstime.com/b/modern-comfortable-hotel-room-14709455.jpg'
        },
        {
            icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Spiritual Guidance',
            desc: 'Regular sessions with experienced guides to enhance your spiritual journey',
            image: 'https://pilgrimstourism.com/wp-content/uploads/2024/11/a-3d-render-of-a-serene-and-inviting-thumbnail-fea-ZssZjVReTH-KV8Jefm85cA-0p6NpmG9QwSOzj3DdLQkVw.jpeg'
        },
        {
            icon: <Plane className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Comfortable Flights',
            desc: 'Convenient flight schedules with comfortable seating for pilgrims',
            image: 'https://www.trips.pk/main-root/transferimages/Saudi-Airline-Umrah101624031638AM.jpg'
        },
        {
            icon: <Star className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Quality Dining',
            desc: 'Daily breakfast with variety to suit different preferences',
            image: 'https://i.pinimg.com/736x/d0/d6/37/d0d6371603134ccab923e7195bb18b46.jpg'
        },
        {
            icon: <Users className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Group Support',
            desc: 'Travel with fellow pilgrims and experienced group leaders',
            image: 'https://www.shutterstock.com/image-photo/mina-saudi-arabia-16-june-600nw-2511040421.jpg'
        },
        {
            icon: <Award className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.primary }} />,
            title: 'Best Value',
            desc: 'Comprehensive services at an affordable price point',
            image: 'https://static.vecteezy.com/system/resources/previews/025/288/339/large_2x/medina-saudi-arabia-may-2023-pilgrims-from-different-countries-of-the-world-are-engaged-in-offering-prayers-and-reciting-quran-inside-masjid-al-nabawi-medina-free-photo.jpg'
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
            <div className="relative h-140 sm:h-100 md:h-110 lg:h-[500px] xl:h-[650px] overflow-hidden mt-20 md:mt-10 ">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${packageData.image})`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#382e6a]/30 via-[#382e6a]/30 to-[#1e1b4b]/90"></div>
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
                        <div className=" flex justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4 border border-[#feba00]/40">
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
                            { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Certified Excellence" },
                            { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "10,000+ Happy Pilgrims" },
                            { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "24/7 Support Team" },
                            { icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />, text: packageData.duration }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 border border-white/20">
                                <div className="text-[#feba00]">{item.icon}</div>
                                <span className="text-white text-xs sm:text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Price Card */}
                    <div className="md:hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 w-full max-w-sm border border-white/20">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                ₹{packageData.price}
                            </div>
                            <p className="text-white/90 text-sm sm:text-base mb-4 flex justify-center ">per person (all inclusive)</p>
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
                                <span className="text-white/90 text-sm">Premium Value Package</span>
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
                                Package Highlights
                            </h2>
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#382e6a]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-center px-2">
                            Premium services designed for your spiritual comfort and peace of mind
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
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#feba00]/50 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#feba00]/10 to-transparent rounded-full translate-x-32 translate-y-32"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-lg">
                        <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2">
                        Begin Your Spiritual Journey With Al-Ziyarah Tours
                    </h2>
                    <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-center px-2">
                        Book your Classic Umrah package today and experience a journey filled with blessings and divine comfort.
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
                            { icon: <Phone className="w-5 h-5" />, title: "Call Us", info: "+91-9136397091" },
                            { icon: <Clock className="w-5 h-5" />, title: "Support", info: "24/7 Available" },
                            { icon: <Award className="w-5 h-5" />, title: "Experience", info: "15+ Years Excellence" }
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

export default Classicpkg;