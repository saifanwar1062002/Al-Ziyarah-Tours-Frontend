import React, { useState, useEffect } from "react";
import {
  Phone,
  Star,
  Check,
  ChevronRight,
  Sparkles,
  Calendar,
  Users,
  Shield,
  MapPin,
  Globe,
  Award,
  Heart,
  Clock,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("umrah");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const packages = {
    umrah: [
      {
        id: 1,
        name: 'Classic Umrah Package',
        price: '₹75,000',
        originalPrice: '₹85,000',
        rating: 4.2,
        reviews: 298,
        image: 'https://plus.unsplash.com/premium_photo-1676208761578-0523b6e3f233?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        badge: 'Most Popular',
        badgeColor: 'bg-lime-500',
        path: '/classicpkg',
        features: [
          'Hotel Accommodation',
          'Economy Class Flights',
          'Guided Ziyarat Tours',
          'Daily Breakfast',
        ],
        additionalFeatures: ['Indian Food', 'Expert Guide', 'Group Coordinator', 'Zam Zam Water', 'Umrah Kit'],
        gradient: 'from-lime-400 to-green-500',
        popular: true
      },
      {
        id: 2,
        name: 'Deluxe Umrah Package',
        price: '₹85,000',
        originalPrice: '₹95,000',
        rating: 4.5,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        badge: 'Best Value',
        badgeColor: 'bg-lime-600',
        path: '/deluxepkg',
        features: [
          'Hotel Near Haram',
          'Economy Class Flights(Saudi Airlines)',
          'Guided Ziyarat Tours',
          'All Meals Included',
        ],
        additionalFeatures: ['Umrah Kit', 'Indian Food', 'Expert Guide', 'Group Coordinator', 'Zam Zam Water', 'Airport Transfers'],
        gradient: 'from-lime-400 to-green-500'
      },
      {
        id: 3,
        name: 'Luxury Umrah Package',
        price: '₹1,20,000',
        originalPrice: '₹1,35,000',
        rating: 4.8,
        reviews: 89,
        image: 'https://images.pexels.com/photos/13311030/pexels-photo-13311030.jpeg',
        badge: 'Premium',
        badgeColor: 'bg-lime-700',
        path: '/luxurypkg ',
        features: [
          'Hotel Haram View',
          'Economy Class Flights(Saudi Airlines)',
          'Provide Guided Tours',
          'Gourmet Dining',
          'Dedicated Concierge'
        ],
        additionalFeatures: ['Indian Food', 'Expert Guide', 'Zam Zam Water', 'Umrah Kit', 'Cultural Experiences', 'Personal Assistant'],
        gradient: 'from-lime-400 to-green-500'
      }
    ],
    hajj: [
      {
        id: 4,
        name: 'Classic Hajj Package',
        price: '₹5,50,000',
        originalPrice: '₹5,75,000',
        rating: 4.7,
        reviews: 65,
        image: 'https://plus.unsplash.com/premium_photo-1679952778430-04f5a0be0f18?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        badge: 'Limited Slots',
        badgeColor: 'bg-lime-500',
        path: '/classichajj',
        features: [
          'Hotel Accommodation',
          'Economy Class Flights',
          'Guided Rituals',
          'Full Board Meals',
          'Visa & Permits'
        ],
        additionalFeatures: ['Medical Assistance', 'Hajj Kit', 'Expert Scholars', 'Transportation', 'Laundry Services'],
        gradient: 'from-lime-400 to-green-600'
      },
      {
        id: 5,
        name: 'Deluxe Hajj Package',
        price: '₹8,50,000',
        originalPrice: '₹8,85,000',
        rating: 4.9,
        reviews: 32,
        image: 'https://images.unsplash.com/photo-1587617425953-9075d28b8c46?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        badge: 'Exclusive',
        badgeColor: 'bg-lime-600',
        path: '/deluxehajj',
        features: [
          'Hotel Near Haram',
          'Business Class Flights(Saudi Airlines)',
          'Hajj Services',
          'Premium Meals',
          'Express Processing'
        ],
        additionalFeatures: ['Premium Transport', 'Personal Guide', 'Medical Support', 'Hajj Kit', 'Priority Services'],
        gradient: 'from-lime-400 to-green-600'
      },
      {
        id: 6,
        name: 'Luxury Hajj Package',
        price: '₹9,50,000',
        originalPrice: '₹9,80,000',
        rating: 5.0,
        reviews: 18,
        image: 'https://images.unsplash.com/photo-1588344093894-84efcf2720f3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        badge: 'Ultra Premium',
        badgeColor: 'bg-lime-700',
        path: '/luxuryhajj',
        features: [
          'Hotels with Haram View',
          'Business Class Flights(Saudi Airlines)',
          'Provide Scholar Guidance',
          'Exclusive Dining',
          'Personal Butler Service'
        ],
        additionalFeatures: ['Private Transport', 'Medical Team', 'Exclusive Access', 'Premium Hajj Kit', 'Luxury Amenities'],
        gradient: 'from-lime-400 to-green-600'
      },
    ],
    ramadan: [
      {
        id: 7,
        name: 'Early Ramadan Package',
        price: '₹1,04,999',
        originalPrice: '₹1,06,999',
        rating: 4.3,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        badge: 'Ramadan Exclusive',
        badgeColor: 'bg-lime-600',
        path: '/ramadan15days',
        features: [
          'Hotel Near Haram',
          'Business Class Flights(Saudi Airlines)',
          'Iftar & Suhoor Included',
          'Guided Ziyarat',
          'Visa Processing'
        ],
        additionalFeatures: ['Special Prayers', 'Ramadan Guide', 'Dedicated Support', 'Airport Transfers', 'Zam Zam Water'],
        gradient: 'from-lime-500 to-green-600'
      },
      {
        id: 8,
        name: 'Laylat al-Qadr Package',
        price: '₹1,09,999',
        originalPrice: '₹1,11,999',
        rating: 4.6,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1589827577276-65d717348780?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        badge: 'Premium',
        badgeColor: 'bg-lime-500',
        path: '/ramadanlast20days',
        features: [
          'Hotel Haram View',
          'Business Class Flights',
          'Premium Iftar & Suhoor',
          'Private Ziyarat',
          'Express Visa'
        ],
        additionalFeatures: ['Ramadan Kit', 'Scholar Guidance', 'Premium Transport', 'Special Prayers', 'Cultural Tours'],
        gradient: 'from-lime-500 to-green-600'
      },
      {
        id: 9,
        name: 'Full Month Ramadan Package',
        price: '₹1,34,999',
        originalPrice: '₹1,36,999',
        rating: 4.8,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        badge: 'Complete Experience',
        badgeColor: 'bg-lime-600',
        path: '/ramadanfullmonth',
        features: [
          'Hotel with Haram View',
          'Premium Class Flights',
          'Full Month Accommodation',
          'All Meals & Special Iftar',
          'Personal Guide Service'
        ],
        additionalFeatures: ['Premium Ramadan Kit', 'Scholar Sessions', 'Premium Transport', 'Medical Support', 'Exclusive Tours'],
        gradient: 'from-lime-500 to-green-600'
      }
    ]
  };

  const stats = [
    { number: "10,000+", label: "Pilgrims Served", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Satisfaction Rate", icon: Heart },
    { number: "24/7", label: "Customer Support", icon: Shield },
  ];

  const featuresList = [
    {
      icon: Shield,
      title: "Trusted & Licensed",
      desc: "Fully licensed and government approved with 15+ years of trusted service.",
    },
    {
      icon: Heart,
      title: "Spiritual Excellence",
      desc: "Experienced Islamic scholars and guides to enhance your journey.",
    },
    {
      icon: Star,
      title: "Premium Services",
      desc: "Luxury accommodations and exclusive access to holy sites.",
    },
    {
      icon: Globe,
      title: "Global Network",
      desc: "Strong relationships with hotels, airlines, and service providers.",
    },
  ];

  const PackageCard = ({ pkg }) => {
    const [isHovered, setIsHovered] = useState(false);

    const calculateSavings = () => {
      const original = parseInt(pkg.originalPrice.replace(/[^0-9]/g, ""));
      const current = parseInt(pkg.price.replace(/[^0-9]/g, ""));
      return (original - current).toLocaleString("en-IN");
    };

    return (
      <div
        className="relative group bg-white/90 rounded-xl md:rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl border border-[#382e6a]/12 hover:border-[#feba00]/70 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
          <div className="absolute inset-0 bg-gradient-to-t from-[#382e6a]/80 via-[#382e6a]/30 to-transparent z-10" />
          <img
            src={pkg.image}
            alt={pkg.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"
              }`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1547996160-81dfd13be0c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80";
            }}
          />
          {pkg.badge && (
            <div
              className={`absolute top-3 md:top-4 right-3 md:right-4 z-20 bg-gradient-to-r ${pkg.badgeColor} text-white text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg backdrop-blur-sm`}
            >
              {pkg.badge}
            </div>
          )}
          {pkg.popular && (
            <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20 bg-gradient-to-r from-[#feba00] to-[#382e6a] text-white text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span className="hidden sm:inline">MOST POPULAR</span>
              <span className="sm:hidden">POPULAR</span>
            </div>
          )}
        </div>
        <div className="p-4 sm:p-5 md:p-6 relative z-20 bg-white/95">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#382e6a] group-hover:text-[#feba00] transition-colors line-clamp-1">
              {pkg.name}
            </h3>
            <div className="flex items-center bg-[#f9fafb] px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-slate-200">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#feba00] fill-[#feba00]" />
              <span className="ml-1 text-sm font-bold text-[#111827]">
                {pkg.rating}
              </span>
              <span className="ml-1 text-xs text-slate-500">
                ({pkg.reviews})
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mb-3 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-[#feba00]" />
              <span>{pkg.duration}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-baseline gap-2 mb-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#382e6a]">
              {pkg.price}
            </span>
            <span className="text-sm text-slate-400 line-through">
              {pkg.originalPrice}
            </span>
            <span className="text-xs font-semibold text-[#b45309] bg-[#fef3c7] px-2 py-1 rounded-full">
              SAVE ₹{calculateSavings()}
            </span>
          </div>
          <div className="mb-4 sm:mb-6">
            <h4 className="font-bold text-[#111827] mb-2 sm:mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
              <Check className="w-4 h-4 text-[#feba00]" />
              <span className="text-xs sm:text-sm">Key Features</span>
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {pkg.features.slice(0, 4).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-xs sm:text-sm text-slate-700"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#feba00] rounded-full mr-2 mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to={pkg.path}>
            <button className="w-full bg-gradient-to-b from-[#382e6a]/100 to-[#382e6a] text-white py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center group text-sm sm:text-base">
              View Details
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#382e6a]/100 to bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8 md:-mt-18 -mt-15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full mb-4 border border-[#feba00]/40 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#feba00]" />
              <span className="text-sm font-semibold text-[#382e6a]">
                Trusted Since 2010
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Sacred Journeys with</span>
              <br />
              <span className="bg-gradient-to-r from-[#feba00] via-[#feba00] to-[#feba00] bg-clip-text text-transparent">
                Al‑Ziyarah Tours
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-5xl mx-auto px-4">
              Your trusted partner for spiritual pilgrimages with 15+ years of
              excellence in Hajj, Umrah, and Ramadan programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/allpackages">
                <button className="bg-gradient-to-r from-[#feba00] via-[#ffe08a] to-[#fcd34d] text-[#382e6a] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                  View All Packages
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
              <a href="tel:+919136397091">
                <button className="bg-white text-[#382e6a] border-2 border-[#382e6a] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-base sm:text-lg hover:bg-[#382e6a] hover:text-white transition-all w-full sm:w-auto">
                  Call for Consultation
                </button>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
            {featuresList.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all border border-[#382e6a]/10 flex flex-col items-center text-center"
                >
                  {/* Icon container centered */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-b from-[#382e6a]/100 to-[#feba00] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Title and description centered */}
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 text-center shadow-md hover:shadow-lg transition-all border border-[#382e6a]/10"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#f3f4ff] rounded-full mb-2 sm:mb-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#382e6a]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#feba00] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <main className="relative px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-extrabold text-white mb-3 sm:mb-4">
              Premium Pilgrimage Packages
            </h2>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto px-5">
              Choose from carefully curated itineraries designed around every
              pilgrim's needs and comfort.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 sm:mb-10 px-8 sm:px-6">
            <div className="inline-flex bg-white/90 backdrop-blur-sm p-1 rounded-xl sm:rounded-2xl shadow-lg border border-[#382e6a]/10 w-auto sm:w-auto overflow-x-auto">
              {["umrah", "hajj", "ramadan"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base capitalize whitespace-nowrap flex-shrink-0 ${activeTab === tab
                    ? "bg-gradient-to-b from-[#382e6a]/100 to-[#382e6a] text-white shadow-md"
                    : "text-slate-700 hover:text-[#382e6a]"
                    }`}
                >
                  {tab === "umrah"
                    ? "Umrah"
                    : tab === "hajj"
                      ? "Hajj"
                      : "Ramadan"}
                </button>
              ))}
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-500">
            {packages[activeTab].map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/allpackages">
              <button className="bg-white text-[#382e6a] border-2 border-[#382e6a] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-base sm:text-lg hover:bg-[#382e6a] hover:text-white transition-all flex items-center gap-2 mx-auto">
                View All Packages
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-t from-[#382e6a] via-[#2b2456] to-[#120f2c] py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg max-w-4xl mx-auto flex justify-center">
            Join thousands of pilgrims who found comfort, clarity, and deeper
            connection through Al‑Ziyarah Tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://wa.me/919136397091"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#382e6a] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-lg w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.86 11.86 0 0012.07 0a11.87 11.87 0 00-10.4 17.6L0 24l6.57-1.64A11.87 11.87 0 0012.07 24a11.86 11.86 0 008.45-3.48 11.88 11.88 0 000-16.96z" />
              </svg>
              WhatsApp Consultation
            </a>
            <a href="tel:+919136397091">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-[#382e6a] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call +91-9136397091
              </button>
            </a>
          </div>
          <p className="text-white/70 mt-6 sm:mt-8 text-xs sm:text-sm flex items-center justify-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            Available 24/7 for your spiritual guidance
          </p>
        </div>
      </div>
    </div>

  );
};

export default Journey;