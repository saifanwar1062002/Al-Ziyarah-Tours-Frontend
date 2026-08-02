import React, { useState, useRef, useEffect } from "react";
import {
    Users,
    Calendar,
    Globe,
    Shield,
    Heart,
    Star,
    ArrowRight,
    CheckCircle,
    Play,
    Pause,
    MapPin,
    Clock,
    Award,
    Sparkles,
    ChevronRight,
    Hotel,
    Plane,
    Compass,
    Quote,
    ShieldCheck,
    Phone,
    Map,
} from "lucide-react";
import { Link } from "react-router-dom";

import BgImage from "../assets/Home_pic.jpg";
import HajjVideo from "../assets/maryam homevideo.mp4";
import Journey from "./Journey";
import Hoteldetails from "./Hoteldetails";
import Quickenquiry from "../Quickenquiry";

const packages = {
    hajj: [
        {
            name: "Classic Hajj",
            price: "₹5,50,000/-",
            duration: "34 days",
            distance: "Shuttle Service",
            features: ["4-Star Hotels", "Direct Flights", "Expert Guide", "Medical Support"]
        },
        {
            name: "Deluxe Hajj",
            price: "₹8,50,000/-",
            duration: "34 days",
            distance: "1500m",
            features: ["Premium Hotels", "Economy Class", "Private Transport", "Premium Services"]
        },
        {
            name: "Luxury Hajj",
            price: "₹9,50,000/-",
            duration: "34 days",
            distance: "700m",
            features: ["Premium Suites", "Economy Class", "Personal Assistant", "Exclusive Access"]
        },
    ],
    umrah: [
        {
            name: "Classic Umrah",
            price: "₹75,000/-",
            duration: "15 days",
            distance: "Shuttle Service",
            features: ["4-Star Hotels", "Group Travel", "Basic Guide", "24/7 Support"]
        },
        {
            name: "Deluxe Umrah",
            price: "₹85,000/-",
            duration: "15 days",
            distance: "1500m",
            features: ["4-Star Hotels", "Direct Flights", "Expert Guide", "Premium Transport"]
        },
        {
            name: "Luxury Umrah",
            price: "₹1,20,000/-",
            duration: "15 days",
            distance: "700m",
            features: ["Luxury Hotels", "Premium Class", "Personal Guide", "Premium Treatment"]
        },
    ],
};

const stats = [
    { number: "10,000+", label: "Blessed Journeys", icon: Users, color: "from-emerald-500 to-teal-400" },
    { number: "15+", label: "Years of Devotion", icon: Calendar, color: "from-amber-500 to-orange-400" },
    { number: "25+", label: "Countries Reached", icon: Globe, color: "from-blue-500 to-cyan-400" },
    { number: "100%", label: "Spiritual Satisfaction", icon: Heart, color: "from-rose-500 to-pink-400" },
];

const features = [
    {
        icon: ShieldCheck,
        title: "Certified Excellence",
        desc: "Government approved operator with comprehensive insurance coverage.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Hotel,
        title: "Prime Proximity",
        desc: "Curated hotels within walking distance to Haramain with premium amenities.",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        icon: Plane,
        title: "Seamless Travel",
        desc: "End-to-end flight management with premium airline partnerships.",
        gradient: "from-purple-500 to-violet-500"
    },

    {
        icon: Clock,
        title: "24/7 Assistance",
        desc: "Round-the-clock support team available throughout your journey.",
        gradient: "from-rose-500 to-pink-500"
    },
    {
        icon: Compass,
        title: "Personalized Itinerary",
        desc: "Tailored schedules matching your spiritual goals and comfort.",
        gradient: "from-indigo-500 to-blue-500"
    },
];

const testimonials = [
    {
        name: "Ahmed Khan",
        journey: "Hajj 2023",
        text: "Al-Ziyarah made our Hajj journey seamless. Every detail was perfectly arranged.",
        rating: 5,
        image: "👳"
    },
    {
        name: "Fatima Ali",
        journey: "Umrah 2024",
        text: "The spiritual guidance and hotel proximity were exceptional. Highly recommended!",
        rating: 5,
        image: "🧕"
    },
    {
        name: "Mohammed Yusuf",
        journey: "Family Hajj 2023",
        text: "Perfect for families. The kids' facilities and elder care were outstanding.",
        rating: 5,
        image: "👨‍👩‍👧‍👦"
    }
];

export default function Home() {
    const [activeTab, setActiveTab] = useState("hajj");
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const videoRef = useRef(null);
    const statsRef = useRef(null);
    const [statsInView, setStatsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const toggleVideo = () => {
        if (!videoRef.current) return;
        if (isVideoPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsVideoPlaying(!isVideoPlaying);
    };

    const openQuickEnquiry = () => setIsQuickEnquiryOpen(true);
    const closeQuickEnquiry = () => setIsQuickEnquiryOpen(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#382e6a]/90 to bg-white">
            {/* Hero Section */}

            <section className="relative min-h-[80vh] md:min-h-[110vh] overflow-hidden flex items-center mt-28 md:mt-20">

                <div
                    className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${BgImage})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/40"></div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 mt-5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5">

                                <div>
                                    <p className="text-xs font-semibold tracking-wider text-amber-300">AL-ZIYARAH TOURS</p>
                                    <p className="text-[10px] text-slate-200 flex justify-center">Since 2010</p>
                                </div>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                                <span className="text-white">Embark on Your</span>
                                <span className="block mt-1 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                                    Spiritual Journey
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0">
                                Experience Hajj & Umrah with divine comfort, expert guidance, and seamless logistics.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex justify-center sm:flex-row gap-3 pt-2 ">
                                <button
                                    onClick={openQuickEnquiry}
                                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-white font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] text-sm"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                                        Start Journey
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <Link
                                    to="/allpackages"
                                    className="group rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-sm"
                                >
                                    <span className="flex items-center justify-center gap-1.5">
                                        View Packages
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                                {[
                                    { label: "Expert Guides", value: "50+", desc: "Certified & experienced" },
                                    { label: "Global Reach", value: "100+", desc: "Cities worldwide" },
                                    { label: "Success Rate", value: "99.8%", desc: "Customer satisfaction" },
                                    { label: "Happy Pilgrims", value: "5K+", desc: "Families served" },
                                ].map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-amber-500/10 blur-md group-hover:bg-amber-500/20 transition-all"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-baseline justify-center gap-1">
                                                <div className="text-2xl sm:text-3xl font-bold text-amber-300">{stat.value}</div>
                                                {stat.value.includes('%') && (
                                                    <div className="text-xs text-emerald-400 font-semibold">↑</div>
                                                )}
                                            </div>
                                            <div className="text-sm font-semibold text-white mt-2 flex justify-center">{stat.label}</div>
                                            <div className="text-xs font-semibold text-white/80 mt-1 flex justify-center">{stat.desc}</div>
                                        </div>

                                        {/* Animated line */}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent transition-all duration-500"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Video Card */}
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-slate-900/30">
                                {/* Video Container */}
                                <div className="relative aspect-video">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        poster={BgImage}
                                        className="h-full w-full object-cover"
                                    >
                                        <source src={HajjVideo} type="video/mp4" />
                                    </video>

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                                    <button
                                        onClick={toggleVideo}
                                        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                                    >
                                        {isVideoPlaying ? (
                                            <Pause className="h-4 w-4 text-white" />
                                        ) : (
                                            <Play className="h-4 w-4 text-white" />
                                        )}
                                    </button>
                                </div>

                                {/* Package Selector */}
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-3 sm:p-4">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-base font-bold text-white">Choose Your Journey</h3>
                                            <p className="text-slate-300 text-xs mt-0.5">Tailored packages</p>
                                        </div>
                                        <div className="flex gap-1 bg-slate-800 rounded-lg p-1">
                                            <button
                                                onClick={() => setActiveTab("hajj")}
                                                className={`px-2 py-1 rounded-md font-semibold transition-all text-xs ${activeTab === "hajj"
                                                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                                                    : "text-slate-300 hover:text-white"
                                                    }`}
                                            >
                                                Hajj
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("umrah")}
                                                className={`px-2 py-1 rounded-md font-semibold transition-all text-xs ${activeTab === "umrah"
                                                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                                                    : "text-slate-300 hover:text-white"
                                                    }`}
                                            >
                                                Umrah
                                            </button>
                                        </div>
                                    </div>

                                    {/* Packages Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {packages[activeTab].map((pkg, idx) => (
                                            <div
                                                key={idx}
                                                className="group relative overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700 p-3 hover:border-amber-500/50 transition-all duration-300"
                                            >
                                                <div className="absolute top-2 right-2">
                                                    <span className="text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-white px-1.5 py-0.5 rounded-full">
                                                        {pkg.duration}
                                                    </span>
                                                </div>

                                                <h4 className="text-sm font-bold text-white mb-1.5 line-clamp-1">{pkg.name}</h4>
                                                <div className="text-lg font-bold text-amber-300 mb-2">{pkg.price}</div>

                                                <div className="space-y-1.5 mb-3">
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                                                        <MapPin className="h-3 w-3 text-amber-400" />
                                                        <span>{pkg.distance} from Haram</span>
                                                    </div>
                                                    {pkg.features.slice(0, 2).map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                                                            <CheckCircle className="h-3 w-3 text-emerald-400" />
                                                            <span className="line-clamp-1">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                               
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Journey />
            <br />
            <Hoteldetails />

            {/* CTA Section */}
            <section className="py-7 sm:py-10 md:py-10  px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#382e6a] via-[#2b2456] to-[#120f2c] p-6 sm:p-8 md:p-12 text-center">
                <div className="max-w-8xl mx-auto">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                        <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                                Ready to Experience Premium Sacred Journey?
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100 mb-6 sm:mb-8 max-w-3xl mx-auto flex justify-center">
                                Let us guide you through this blessed experience with care, expertise and devotion
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <button
                                    onClick={openQuickEnquiry}
                                    className="group relative overflow-hidden rounded-xl bg-white px-6 sm:px-8 py-3 sm:py-4 text-slate-900 font-semibold hover:shadow-xl hover:shadow-white/25 transition-all duration-300 text-sm sm:text-base"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                        Schedule Free Call
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>

                                <Link
                                    to="/allpackages"
                                    className="group rounded-xl border-2 border-white/40 bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all duration-300 text-sm sm:text-base"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Map className="h-4 w-4 sm:h-5 sm:w-5" />
                                        View All Packages
                                    </span>
                                </Link>
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-amber-100">
                                <span className="inline-flex items-center gap-2">
                                    <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                                    Licensed & Certified
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                    24/7 Support
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                                    Award Winning Service
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {/* Quick Enquiry Modal */}
            {isQuickEnquiryOpen && <Quickenquiry onClose={closeQuickEnquiry} />}
        </div>
    );
}