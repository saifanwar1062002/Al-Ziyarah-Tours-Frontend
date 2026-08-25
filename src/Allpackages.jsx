import React, { useState, useEffect } from 'react';
import {
    Star,
    MapPin,
    Calendar,
    Shield,
    Clock,
    CheckCircle,
    Crown,
    Heart,
    Moon,
    Globe,
    Award,
    Search,
    Filter,
    ChevronDown,
    BookOpen,
    Sun,
    Phone,
    Sparkles,
    Building,
    ChevronRight,
    Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Allpackages = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]);
    const [sortBy, setSortBy] = useState('popularity');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mergedPackages, setMergedPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedFeatures, setExpandedFeatures] = useState({});

    // Al-Ziyarah Tours color scheme
    const colors = {
        primary: '#382e6a',     // Royal Purple
        secondary: '#feba00',   // Golden Yellow
        accent: '#382e6a',      // Electric Purple
        light: '#feba00',       // Light Yellow
        background: '#f8fafc',  // Smokey White
        purpleLight: '#5d4bb1',
        purpleDark: '#2d2554',
        goldLight: '#e6a800',
        goldDark: '#e6a800'
    };

    const primaryGradient = `linear-gradient(100deg, ${colors.primary}, ${colors.purpleLight})`;
    const secondaryGradient = `linear-gradient(100deg, ${colors.secondary}, ${colors.goldLight})`;

    // Toggle features expand/collapse
    const toggleFeatures = (id) => {
        setExpandedFeatures((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    // Slides for hero section
    const slides = [
        {
            url: 'https://i.pinimg.com/736x/f8/8c/60/f88c608526c779c4f96e7213cd124e88.jpg',
            mobileUrl: 'https://i.pinimg.com/736x/f8/8c/60/f88c608526c779c4f96e7213cd124e88.jpg',
            alt: 'Kaaba during Umrah season'
        },
        {
            url: 'https://i.pinimg.com/1200x/ad/26/fc/ad26fce5f8e897c2cb1992969e9fecb2.jpg',
            mobileUrl: 'https://i.pinimg.com/1200x/ad/26/fc/ad26fce5f8e897c2cb1992969e9fecb2.jpg',
            alt: 'Pilgrims praying at Masjid al-Haram'
        },
        {
            url: 'https://i.pinimg.com/736x/0c/41/2c/0c412c29eee34833175365580684f61d.jpg',
            mobileUrl: 'https://i.pinimg.com/736x/0c/41/2c/0c412c29eee34833175365580684f61d.jpg',
            alt: 'Hajj pilgrimage at Mount Arafat'
        },
        {
            url: 'https://i.pinimg.com/736x/a0/d4/68/a0d4682de21deba712694c10096ffad9.jpg',
            mobileUrl: 'https://i.pinimg.com/736x/a0/d4/68/a0d4682de21deba712694c10096ffad9.jpg',
            alt: 'Pilgrims performing Tawaf'
        },
        {
            url: 'https://i.pinimg.com/1200x/ee/5e/66/ee5e6635c9f9ce9e6f5f723d82ee658d.jpg',
            mobileUrl: 'https://i.pinimg.com/1200x/ee/5e/66/ee5e6635c9f9ce9e6f5f723d82ee658d.jpg',
            alt: 'Islamic architecture and spirituality'
        }
    ];

    // Static packages data with packageType field
    const staticPackages = [
        // Umrah Packages
        {
            id: 1,
            category: 'umrah',
            type: 'umrah_classic',
            title: 'Classic Umrah Package',
            subtitle: 'Perfect for First-Time Pilgrims',
            price: "75,000",
            rating: 4.2,
            path: '/classicpkg',
            reviews: 234,
            image: 'https://plus.unsplash.com/premium_photo-1676208761578-0523b6e3f233?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            badge: 'Most Popular',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: Star,
            category_name: 'Umrah',
            popularity: 9,
            packageType: 'umrah_classic',
            features: [
                'Hotel Accommodation',
                'Economy Class Flights',
                'Guided Ziyarat Tours',
                'Daily Breakfast',
                'Ground Transportation',
                'Visa Processing',
                '24/7 Support'
            ],
            highlights: ['Free Ihram', 'Prayer Guide', 'Group Coordinator'],
            description: 'Experience your first spiritual journey with our comprehensive classic package designed specifically for first-time pilgrims.',
        },
        {
            id: 2,
            category: 'umrah',
            type: 'umrah_delux',
            title: 'Deluxe Umrah Package',
            subtitle: 'Enhanced Comfort & Services',
            price: "85,000",
            rating: 4.5,
            path: '/deluxepkg',
            reviews: 187,
            image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            badge: 'Best Value',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: Crown,
            category_name: 'Umrah',
            popularity: 8,
            packageType: 'umrah_delux',
            features: [
                'Hotel Near Haram',
                'Economy Class Flights',
                'Guided Ziyarat Tours',
                'All Meals Included',
                'Air-conditioned Transportation',
                'Express Visa Service',
                'Personal Guide'
            ],
            highlights: ['Buffet Meals', 'Umrah Kit', 'Photography Service'],
            description: 'Elevate your spiritual journey with enhanced comfort and premium services for a truly memorable experience.',
        },
        {
            id: 3,
            category: 'umrah',
            type: 'umrah_luxury',
            title: 'Luxury Umrah Package',
            subtitle: 'Experience with Premium Services',
            price: "1,20,000",
            rating: 4.8,
            path: '/luxurypkg',
            reviews: 156,
            image: 'https://images.pexels.com/photos/13311030/pexels-photo-13311030.jpeg',
            badge: 'Premium',
            badgeColor: 'bg-gradient-to-r from-amber-600 to-amber-700',
            icon: Heart,
            category_name: 'Umrah',
            popularity: 7,
            packageType: 'umrah_luxury',
            features: [
                'Hotel Haram View',
                'Economy Class Flights',
                'Fully air-conditioned Tours',
                'All meal included',
                'Visa Processing',
            ],
            highlights: ['Indian food', 'Expert Guide', 'Group Coordinator', '5L ZamZam', 'Umrah-Kit'],
            description: 'Indulge in the ultimate experience with services and exclusive access to premium amenities.',
        },
        // Ramadan Packages
        {
            id: 4,
            category: 'ramadan',
            type: 'ramadan_early',
            title: 'Early Ramadan Package',
            subtitle: 'Experience the Beginning of Holy Month',
            price: "1,04,999",
            rating: 4.3,
            path: '/ramadan15days',
            reviews: 143,
            image: 'https://plus.unsplash.com/premium_photo-1679952778430-04f5a0be0f18?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            badge: 'Early Bird',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: Sun,
            category_name: 'Ramadan',
            popularity: 6,
            packageType: 'ramadan_early',
            features: [
                'Hotels Accommodation',
                'Iftar & Suhoor Included',
                'Tarawih Prayer Guidance',
                'Quran Recitation Sessions',
                'Cultural Programs',
                'Ziyarat Tours',
                'Religious Lectures'
            ],
            highlights: ['Iftar at Haram', 'Quran Classes', 'Spiritual Guidance'],
            description: 'Begin your Ramadan journey with spiritual programs and community bonding during the blessed first days.',
        },
        {
            id: 5,
            category: 'ramadan',
            type: 'ramadan_laylat',
            title: 'Laylat al-Qadr Package',
            subtitle: 'Blessed Last Days of Ramadan',
            price: "1,09,999",
            originalPrice: 2099,
            rating: 4.6,
            path: '/ramadanlast20days',
            reviews: 198,
            image: 'https://images.unsplash.com/photo-1587617425953-9075d28b8c46?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            badge: 'Most Blessed',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: Moon,
            category_name: 'Ramadan',
            popularity: 8,
            packageType: 'ramadan_laylat',
            features: [
                'Hotel Near Haram',
                'Special Laylat al-Qadr Programs',
                'Night Prayer Sessions',
                'Scholarly Lectures',
                'Charity Distribution',
                'Intensive Worship Schedule',
                'Spiritual Counseling'
            ],
            highlights: ['Night of Power', 'Exclusive Programs', 'Scholarly Sessions'],
            description: 'Experience the most blessed nights of Ramadan with special programs focusing on Laylat al-Qadr.',
        },
        {
            id: 6,
            category: 'ramadan',
            type: 'ramadan_full',
            title: 'Complete Ramadan Experience',
            subtitle: 'Full Month of Spiritual Journey',
            price: "1,34,999",
            rating: 4.7,
            path: '/ramadanfullmonth',
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1588344093894-84efcf2720f3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            badge: 'Complete',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: Calendar,
            category_name: 'Ramadan',
            popularity: 5,
            packageType: 'ramadan_full',
            features: [
                'Hotel Accommodation',
                'Full Month Programs',
                'Dedicated Imam Guide',
                'All Meals & Services',
                'Extensive Ziyarat',
                'Religious Education',
                'Community Activities'
            ],
            highlights: ['Full Experience', 'Dedicated Guide', 'Community Bond'],
            description: 'Immerse yourself in the complete Ramadan experience with comprehensive programs and dedicated guidance.',
        },
        // Hajj Packages
        {
            id: 7,
            category: 'hajj',
            type: 'hajj_classic',
            title: 'Classic Hajj Package',
            subtitle: 'Complete Hajj with Essential Services',
            price: "5,50,000",
            rating: 4.2,
            path: '/classichajj',
            reviews: 312,
            image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            badge: 'Affordable',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: MapPin,
            category_name: 'Hajj',
            popularity: 9,
            packageType: 'hajj_classic',
            features: [
                'Makkah & Madinah Hotels',
                'Mina Tent Accommodation',
                'All Hajj Rituals Guidance',
                'Transportation Services',
                'Experienced Group Leader',
                'Daily Meals',
                'Medical Support'
            ],
            highlights: ['Ritual Guidance', 'Group Support', 'Medical Care'],
            description: 'Perform your Hajj with essential services and experienced guidance for a complete spiritual journey.',
        },
        {
            id: 8,
            category: 'hajj',
            type: 'hajj_delux',
            title: 'Deluxe Hajj Package',
            subtitle: 'Premium Comfort for Sacred Journey',
            price: "8,50,000",
            rating: 4.5,
            path: '/deluxehajj',
            reviews: 267,
            image: 'https://images.unsplash.com/photo-1589827577276-65d717348780?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            badge: 'Recommended',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
            icon: Crown,
            category_name: 'Hajj',
            popularity: 7,
            packageType: 'hajj_delux',
            features: [
                'Hotels Near Haram',
                'Mina Tent Accommodation',
                'Hajj Guidance',
                'Air-conditioned Transportation',
                'Multilingual Guides',
                'Buffet Meals',
            ],
            highlights: ['Hotels', 'Expert Guides'],
            description: 'Experience premium comfort during your sacred Hajj journey with luxury accommodations and Premium services.',
        },
        {
            id: 9,
            category: 'hajj',
            type: "hajj_luxury",
            title: 'Luxury Hajj Package',
            subtitle: 'Ultra-Premium Hajj Experience',
            price: "9,50,000",
            rating: 4.8,
            path: '/luxuryhajj',
            reviews: 178,
            image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            badge: 'Exclusive',
            badgeColor: 'bg-gradient-to-r from-amber-600 to-amber-700',
            icon: Heart,
            category_name: 'Hajj',
            popularity: 6,
            packageType: 'hajj_luxury',
            features: [
                'Hotels Accomodation',
                'Luxury Mina Accommodation',
                'Personal Hajj Guide',
                'Private Transportation',
                'Concierge Services',
                'Gourmet Dining',
                'Exclusive Access'
            ],
            highlights: ['Luxury', 'Personal Service', 'Exclusive Access'],
            description: 'Indulge in the ultimate luxury Hajj experience with exclusive services and ultra-premium accommodations.',
        }
    ];

    // Fetch API data and merge with static packages
    const fetchPackages = async () => {
        try {
            setLoading(true);
            
            const response = await fetch('https://crmweb.hajumrahservice.com/api/enquiries/apikey/packages/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '9e5f0d1a-ee3c-4556-bb6e-4bb38e218928' // Your API key
                },
            });
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Create a map of API packages by package_type
            const apiPackageMap = {};
            
            // Check if we got valid data
            if (data && Array.isArray(data) && data.length > 0) {
                // If API returns array directly
                data.forEach(apiPkg => {
                    if (apiPkg.package_type) {
                        apiPackageMap[apiPkg.package_type] = {
                            title: apiPkg.title || apiPkg.name || `Package`,
                            price: apiPkg.price ? apiPkg.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "50,000",
                            description: apiPkg.description || '',
                            image: apiPkg.image,
                        };
                    }
                });
            } else if (data && data.results && Array.isArray(data.results) && data.results.length > 0) {
                // If API returns object with results array
                data.results.forEach(apiPkg => {
                    if (apiPkg.package_type) {
                        apiPackageMap[apiPkg.package_type] = {
                            title: apiPkg.title || apiPkg.name || `Package`,
                            price: apiPkg.price ? apiPkg.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "50,000",
                            description: apiPkg.description || '',
                            image: apiPkg.image,
                        };
                    }
                });
            }

            // Merge API data with static packages
            const merged = staticPackages.map(staticPkg => {
                const apiData = apiPackageMap[staticPkg.packageType];
                
                if (apiData) {
                    return {
                        ...staticPkg,
                        title: apiData.title || staticPkg.title,
                        price: apiData.price || staticPkg.price,
                        description: apiData.description || staticPkg.description,
                        image: apiData.image || staticPkg.image,
                    };
                }
                
                return staticPkg;
            });
            
            console.log('Merged packages:', merged);
            setMergedPackages(merged);
        } catch (error) {
            // Silent fallback to static data
            console.log('Using static packages:', error.message);
            setMergedPackages(staticPackages);
        } finally {
            setLoading(false);
        }
    };

    // Determine which packages to display
    const allPackages = mergedPackages.length > 0 ? mergedPackages : staticPackages;

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Fetch packages on component mount
    useEffect(() => {
        fetchPackages();
    }, []);

    // Update visible cards when filters change
    useEffect(() => {
        setVisibleCards([]);
        const timer = setTimeout(() => {
            const filtered = getFilteredPackages();
            filtered.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleCards((prev) => [...prev, index]);
                }, index * 90);
            });
        }, 80);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory, searchTerm, sortBy, allPackages]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const categories = [
        { id: 'all', name: 'All Packages', icon: Globe, count: allPackages.length },
        { id: 'umrah', name: 'Umrah', icon: Star, count: allPackages.filter((p) => p.category === 'umrah').length },
        { id: 'ramadan', name: 'Ramadan', icon: Moon, count: allPackages.filter((p) => p.category === 'ramadan').length },
        { id: 'hajj', name: 'Hajj', icon: MapPin, count: allPackages.filter((p) => p.category === 'hajj').length },
    ];

    const getFilteredPackages = () => {
        let filtered = [...allPackages];

        if (activeCategory !== 'all') {
            filtered = filtered.filter((pkg) => pkg.category === activeCategory);
        }

        if (searchTerm) {
            const t = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (pkg) =>
                    pkg.title.toLowerCase().includes(t) ||
                    (pkg.subtitle && pkg.subtitle.toLowerCase().includes(t)) ||
                    (pkg.type && pkg.type.toLowerCase().includes(t)) ||
                    (pkg.description && pkg.description.toLowerCase().includes(t))
            );
        }

        switch (sortBy) {
            case 'price-low':
                filtered.sort(
                    (a, b) =>
                        parseFloat(a.price.toString().replace(/[^0-9.-]+/g, '')) -
                        parseFloat(b.price.toString().replace(/[^0-9.-]+/g, ''))
                );
                break;
            case 'price-high':
                filtered.sort(
                    (a, b) =>
                        parseFloat(b.price.toString().replace(/[^0-9.-]+/g, '')) -
                        parseFloat(a.price.toString().replace(/[^0-9.-]+/g, ''))
                );
                break;
            case 'rating':
                filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            default:
                filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        }

        if (activeCategory === 'all') {
            const categoryOrder = ['umrah', 'ramadan', 'hajj'];
            filtered.sort((a, b) => {
                const indexA = categoryOrder.indexOf(a.category);
                const indexB = categoryOrder.indexOf(b.category);
                return indexA - indexB;
            });
        }

        return filtered;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#382e6a]/90 to bg-white">
            {/* HERO SECTION - Al-Ziyarah Tours */}
            <div className="relative h-160 sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden">
                {/* Slideshow Background */}
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {/* Desktop Image */}
                            <img
                                src={slide.url}
                                alt={slide.alt}
                                className="hidden sm:block absolute inset-0 w-full h-full object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                            {/* Mobile Image */}
                            <img
                                src={slide.mobileUrl}
                                alt={slide.alt}
                                className="sm:hidden absolute inset-0 w-full h-full object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                            {/* Dark overlay for better text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#382e6a]/40 via-[#382e6a]/30 to-[#1e1b4b]/40"></div>
                        </div>
                    ))}
                </div>

                {/* Islamic Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23feba00' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px'
                    }}></div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group"
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300"
                    aria-label="Next slide"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-[#feba00] w-4 sm:w-6'
                                : 'bg-white/50 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                        {/* Brand Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-[#feba00]/40">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#feba00]" />
                            <span className="font-bold text-sm sm:text-base text-white">
                                AL-ZIYARAH TOURS
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg text-center">
                            Journey to Divine Blessings
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-md flex justify-center">
                            Where Faith Meets Luxury, Where Dreams Take Flight
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto">
                        {[
                            { value: '10,000+', label: 'Pilgrims Served' },
                            { value: '15+ Years', label: 'Experience' },
                            { value: '4.8/5', label: 'Average Rating' },
                            { value: '24×7', label: 'Global Support' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-white/90">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* LOADING STATE */}
            {loading && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <Loader2 className="w-12 h-12 animate-spin mb-4" style={{ color: colors.primary }} />
                        <p className="text-lg font-medium" style={{ color: colors.primary }}>
                            Loading packages...
                        </p>
                        <p className="text-sm text-gray-600 mt-2">Fetching the latest packages from our database</p>
                    </div>
                </div>
            )}

            {/* MAIN CONTENT */}
            {!loading && (
                <>
                    {/* SEARCH / SORT SECTION */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6">
                        <div className="flex justify-center">
                            <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-xl border border-gray-100 w-full max-w-4xl">
                                <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-stretch lg:items-center p-4">
                                    <div className="flex-1 relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Search packages, destinations, or features..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#382e6a] focus:border-transparent text-base"
                                        />
                                    </div>

                                    <div className="relative w-full sm:w-64 lg:w-56">
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-[#382e6a] focus:border-transparent text-gray-900 text-base w-full"
                                        >
                                            <option value="popularity">Sort by Popularity</option>
                                            <option value="price-low">Price: Low to High</option>
                                            <option value="price-high">Price: High to Low</option>
                                            <option value="rating">Highest Rated</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                    </div>

                                    <button
                                        onClick={() => setShowFilters(!showFilters)}
                                        className="flex items-center justify-center space-x-2 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg text-base min-h-[48px]"
                                        style={{ background: primaryGradient }}
                                    >
                                        <Filter className="w-5 h-5" />
                                        <span>Filters</span>
                                    </button>
                                </div>

                                {showFilters && (
                                    <div className="mt-4 rounded-lg border border-[#382e6a]/20 p-4 bg-[#382e6a]/5">
                                        <p className="text-sm text-gray-700 text-justify">
                                            Advanced filters coming soon: departure city, hotel distance from Haram, meal plans, and room sharing options. Use search and sorting for now.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* CATEGORY TABS */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8">
                        <div className="flex justify-center">
                            <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-xl border border-gray-100 w-full max-w-4xl">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 text-sm sm:text-base font-medium ${activeCategory === category.id
                                                ? 'text-white shadow-lg'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            style={activeCategory === category.id ? { background: primaryGradient } : {}}
                                        >
                                            <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="whitespace-nowrap">{category.name}</span>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${activeCategory === category.id
                                                    ? 'bg-white/30 text-white'
                                                    : 'bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PACKAGE GRID */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 lg:pb-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {getFilteredPackages().map((pkg, index) => (
                                <div
                                    key={pkg.id}
                                    className={`transition-all duration-500 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                                        }`}
                                    style={{ transitionDelay: `${index * 60}ms` }}
                                >
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group h-full flex flex-col border border-gray-100">
                                        {/* Image */}
                                        <div className="relative h-48 sm:h-56 overflow-hidden">
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={(e) => {
                                                    // Fallback image if API image fails to load
                                                    e.target.src = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                            {/* Badge */}
                                            <div className={`absolute top-3 right-3 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                                                {pkg.badge}
                                            </div>

                                            {/* Category */}
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                                                {pkg.category_name}
                                            </div>

                                            {/* Price */}
                                            <div className="absolute bottom-3 left-3 text-white">
                                                <div className="flex items-baseline space-x-1">
                                                    <span className="text-lg sm:text-xl font-bold">₹ {pkg.price}</span>
                                                </div>
                                                <p className="text-xs opacity-90">per person</p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="mb-4">
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#382e6a] transition-colors">
                                                    {pkg.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm text-justify">{pkg.subtitle}</p>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center space-x-2 mb-4">
                                                <div className="flex items-center space-x-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.round((pkg.rating || 4.0) - 0.01)
                                                                ? 'text-[#feba00] fill-current'
                                                                : 'text-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">{(pkg.rating || 4.0).toFixed(1)}</span>
                                                <span className="text-sm text-gray-500">({pkg.reviews || 0} reviews)</span>
                                            </div>

                                            {/* Features with expand/collapse */}
                                            <div className="mb-4 flex-1">
                                                <div className="space-y-2">
                                                    {(expandedFeatures[pkg.id] ? pkg.features : pkg.features.slice(0, 3)).map((feature, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2">
                                                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                                                            <span className="text-sm text-gray-700 text-justify">{feature}</span>
                                                        </div>
                                                    ))}
                                                    {pkg.features.length > 3 && (
                                                        <button
                                                            onClick={() => toggleFeatures(pkg.id)}
                                                            className="text-sm font-medium"
                                                            style={{ color: colors.primary }}
                                                        >
                                                            {expandedFeatures[pkg.id] ? 'Show less features' : `+${pkg.features.length - 3} more features`}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <div className="mb-5">
                                                <div className="flex flex-wrap gap-2">
                                                    {pkg.highlights.slice(0, 2).map((h, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 rounded-full text-xs font-medium"
                                                            style={{
                                                                backgroundColor: `${colors.primary}15`,
                                                                color: colors.primary
                                                            }}
                                                        >
                                                            {h}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="space-y-3 mt-auto">
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Link
                                                        to={pkg.path}
                                                        className="border-2 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm min-h-[48px] hover:shadow-md"
                                                        style={{
                                                            borderColor: colors.primary,
                                                            color: colors.primary,
                                                            backgroundColor: `${colors.primary}10`
                                                        }}
                                                    >
                                                        <BookOpen className="w-4 h-4 mr-2" />
                                                        View Details
                                                    </Link>

                                                    <a
                                                        href="tel:+918918149167"
                                                        className="flex-1 text-center py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300 text-white flex items-center justify-center"
                                                        style={{ background: secondaryGradient }}
                                                    >
                                                        <Phone className="w-4 h-4 mr-2" />
                                                        Call Us Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* NO RESULTS */}
                        {getFilteredPackages().length === 0 && (
                            <div className="text-center py-12 sm:py-16 md:py-20">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${colors.primary}15` }}>
                                    <Search className="w-10 h-10" style={{ color: colors.primary }} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primary }}>No packages found</h3>
                                <p className="text-gray-600 mb-8 text-base text-justify max-w-2xl mx-auto">
                                    We couldn't find any packages matching your search. Try different keywords or browse all categories.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setActiveCategory('all');
                                        setSortBy('popularity');
                                    }}
                                    className="px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-white"
                                    style={{ background: primaryGradient }}
                                >
                                    View All Packages
                                </button>
                            </div>
                        )}
                    </div>

                    {/* TRUST INDICATORS */}
                    <div className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden "
                        style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.purpleDark}, ${colors.purpleDark})` }}>

                        <div className="relative max-w-7xl mx-auto text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-lg">
                                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 px-2 text-white">
                                Why Choose Al-Ziyarah Tours?
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                                {[
                                    {
                                        icon: Shield,
                                        title: 'Licensed & Trusted',
                                        description: 'Government-approved operators with 15+ years of impeccable service record.',
                                    },
                                    {
                                        icon: Award,
                                        title: 'Award-Winning Service',
                                        description: 'Recognized for excellence in religious tourism with multiple industry awards.',
                                    },
                                    {
                                        icon: Clock,
                                        title: '24×7 Global Support',
                                        description: 'Round-the-clock assistance from booking to return with multilingual support.',
                                    },
                                    {
                                        icon: Heart,
                                        title: 'Personalized Care',
                                        description: 'Tailored services for families, seniors, and first-time pilgrims with special needs.',
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 border border-white/20"
                                    >
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6" style={{ backgroundColor: `${colors.secondary}30` }}>
                                            <item.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: colors.secondary }} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                                        <p className="opacity-95 text-sm sm:text-base text-justify text-white/90">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* CTA SECTION */}
                    <div className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.purpleDark}, ${colors.purpleDark})` }}>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/mosque.png')] opacity-10"></div>

                        {/* Animated Background Elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#feba00]/10 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#feba00]/10 to-transparent rounded-full translate-x-32 translate-y-32"></div>

                        <div className="relative max-w-4xl mx-auto text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-[#feba00] to-[#fed766] rounded-full flex items-center justify-center shadow-lg">
                                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 px-2 text-white">
                                Begin Your Divine Journey
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2 text-center">
                                Secure your spot for the upcoming spiritual journey. Limited seats available for divine experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
                                <Link
                                    to="/contact"
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#feba00] via-[#fed766] to-[#feba00] text-[#382e6a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center w-full sm:w-auto"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    <span className="relative">Contact Our Experts</span>
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+91918918149167"
                                    className="group border-2 border-white text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 flex items-center justify-center w-full sm:w-auto"
                                >
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                                    <span>Call Us Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                </>
            )}
        </div>
    );
};

export default Allpackages;