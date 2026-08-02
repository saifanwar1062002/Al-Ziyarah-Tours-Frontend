import React, { useState } from 'react';
import {
    ChevronDown, ChevronUp, Star, Award, Heart, Clock,
    Calendar, CheckCircle, Phone, Mail, MapPin,
    ShieldCheck, Users as UsersIcon, Target,
    Globe as GlobeIcon, Shield as ShieldIcon, Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
    const [activeService, setActiveService] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const openQuickEnquiry = () => {
        setIsQuickEnquiryOpen(true);
    };

    const onClose = () => {
        setIsQuickEnquiryOpen(false);
    };

    const features = [
        {
            icon: Compass,
            title: 'Expert Guidance',
            desc: 'Professional guides with deep knowledge of Islamic heritage sites'
        },
        {
            icon: GlobeIcon,
            title: 'Global Destinations',
            desc: 'Curated tours to sacred sites across the Muslim world'
        },
        {
            icon: UsersIcon,
            title: 'Personalized Journeys',
            desc: 'Tailored experiences for individuals, families, and groups'
        },
        {
            icon: Clock,
            title: '24/7 Support',
            desc: 'Continuous assistance throughout your spiritual journey'
        }
    ];

    const services = [
        {
            id: 1,
            name: 'Premium Flight Services',
            icon: '✈️',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '4.9',
            description: 'Direct flights with renowned airlines, special Hajj/Umrah meals, and priority services.',
            locations: ['International', 'Domestic', 'Charter'],
            features: ['Premium Lounges', 'Special Meals', 'Priority Boarding', 'Baggage Service']
        },
        {
            id: 2,
            name: 'Premium Accommodations',
            icon: '🏨',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '4.8',
            description: 'Premium hotels within walking distance of Haram with authentic Islamic ambiance.',
            locations: ['Makkah', 'Madinah', 'Jeddah'],
            features: ['Haram View', '24/7 Service', 'Prayer Facilities', 'Halal Dining']
        },
        {
            id: 3,
            name: 'Visa & Documentation',
            icon: '📋',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '4.9',
            description: 'Complete visa processing with 99% approval rate and comprehensive travel insurance.',
            locations: ['Saudi Visa', 'Travel Docs', 'Insurance'],
            features: ['Fast Processing', 'Documentation', 'Insurance', 'Verification']
        },
        {
            id: 4,
            name: 'Spiritual Guidance',
            icon: '📖',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '5.0',
            description: 'Expert Islamic scholars providing authentic rituals guidance and spiritual counseling.',
            locations: ['Pre-Departure', 'During Journey', 'Post-Pilgrimage'],
            features: ['Qualified Scholars', 'Workshops', 'Counseling', 'Rituals Guide']
        },
        {
            id: 5,
            name: '24/7 Support Services',
            icon: '📞',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '4.8',
            description: 'Multilingual assistance with emergency helplines and dedicated local coordinators.',
            locations: ['Arabic', 'English', 'Urdu', 'Multiple'],
            features: ['Multilingual', 'Emergency', 'Coordinators', 'Instant Help']
        },
        {
            id: 6,
            name: 'Ziyarat Tours',
            icon: '🕌',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '4.7',
            description: 'Guided tours to historical Islamic sites with detailed historical narrations.',
            locations: ['Makkah Sites', 'Madinah Sites', 'Historical'],
            features: ['Guided Tours', 'Comfort Transport', 'Historical Info', 'Flexible']
        },
        {
            id: 7,
            name: 'Group & Family Services',
            icon: '👨‍👩‍👧‍👦',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '4.8',
            description: 'Special arrangements for groups and families with customized packages.',
            locations: ['Family', 'Groups', 'Corporate'],
            features: ['Group Discounts', 'Family Suites', 'Custom Packages', 'Coordination']
        },
        {
            id: 8,
            name: 'Luxury Packages',
            icon: '⭐',
            gradient: 'from-[#382e6a] to-[#feba00]',
            rating: '5.0',
            description: 'Premium packages with exclusive amenities and personalized luxury services.',
            locations: ['Luxury', 'Exclusive'],
            features: ['Buffet Service', 'Premium Transport', 'Exclusive Access', 'Premium Dining']
        }
    ];

    const achievements = [
        {
            id: 1,
            number: '10,000+',
            label: 'Satisfied Travelers',
            icon: UsersIcon,
            gradient: 'from-[#382e6a] to-[#feba00]'
        },
        {
            id: 2,
            number: '25+',
            label: 'Countries Covered',
            icon: MapPin,
            gradient: 'from-[#feba00] to-[#382e6a]'
        },
        {
            id: 3,
            number: '98%',
            label: 'Satisfaction Rate',
            icon: Star,
            gradient: 'from-[#382e6a] to-[#6d5baa]'
        },
        {
            id: 4,
            number: '50+',
            label: 'Expert Guides',
            icon: Award,
            gradient: 'from-[#feba00] to-[#8a7bc9]'
        }
    ];

    const ServiceCard = ({ service }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setActiveService(activeService?.id === service.id ? null : service)}
            >
                <div className={`bg-gradient-to-br from-white to-[#f5f5f7] rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#382e6a]/10 hover:border-[#382e6a]/30 ${activeService?.id === service.id ? 'ring-2 ring-[#feba00]' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md`}>
                            <span className="text-2xl">{service.icon}</span>
                        </div>
                        <div className="flex items-center bg-[#f0f0f5] px-3 py-1.5 rounded-full">
                            <Star className="w-4 h-4 text-[#feba00] fill-current" />
                            <span className="ml-1 text-sm font-bold text-[#382e6a]">{service.rating}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#382e6a] mb-2 group-hover:text-[#feba00] transition-colors">
                        {service.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 service-description">
                        {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                        {service.locations.map((location, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#f0f0f5] text-xs text-[#382e6a] rounded-full border border-[#382e6a]/20">
                                {location}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[#feba00] group-hover:underline">
                            {activeService?.id === service.id ? 'Click to close' : 'View details'}
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
                </div>

                {activeService?.id === service.id && (
                    <div className="mt-4 bg-white rounded-2xl p-5 shadow-lg border border-[#382e6a]/20 animate-slide-down">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-[#382e6a]">Tour Features</h4>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveService(null);
                                }}
                                className="text-[#feba00] hover:text-[#382e6a]"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-[#feba00] mr-2 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Available durations:</span>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] text-white text-xs font-bold rounded-full">
                                        7 Days
                                    </span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-[#feba00] to-[#382e6a] text-white text-xs font-bold rounded-full">
                                        14 Days
                                    </span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-[#382e6a] via-[#feba00] to-[#382e6a] text-white text-xs font-bold rounded-full">
                                        Custom
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const faqs = [
        {
            id: 1,
            question: "What makes Al-Ziyarah Tours unique?",
            answer: "Al-Ziyarah Tours specializes in authentic Islamic heritage tours with expert guides, combining spiritual significance with historical accuracy. We focus on immersive experiences that connect travelers with Islamic history and culture."
        },
        {
            id: 2,
            question: "How far in advance should I book my tour?",
            answer: "We recommend booking 3-6 months in advance for optimal planning. For peak seasons (Ramadan, Hajj season, holidays), book 6-8 months ahead. We also offer last-minute bookings for available tours."
        },
        {
            id: 3,
            question: "What safety measures do you implement?",
            answer: "We prioritize safety with licensed guides, vetted accommodations, 24/7 emergency support, comprehensive insurance, and regular safety briefings. All transportation and facilities meet international safety standards."
        },
        {
            id: 4,
            question: "Do you offer tours for special needs travelers?",
            answer: "Yes, we customize tours for elderly travelers, families with children, and individuals with special requirements. We provide accessibility arrangements, medical support, and flexible itineraries."
        },
        {
            id: 5,
            question: "What's included in your tour packages?",
            answer: "Our packages include accommodations, guided tours, transportation between sites, some meals, entrance fees, and basic travel insurance. Airfare and personal expenses are typically additional."
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Mohammed',
            service: 'Historical Turkey Tour',
            quote: 'Al-Ziyarah made Islamic history come alive. Our guide was incredibly knowledgeable and passionate.',
            rating: 5
        },
        {
            id: 2,
            name: 'Ahmed Hassan',
            service: 'Family Andalusia Tour',
            quote: 'Perfect balance of education and enjoyment for our children. They learned so much about Islamic Spain.',
            rating: 5
        },
        {
            id: 3,
            name: 'Fatima Khan',
            service: 'Luxury Morocco Tour',
            quote: 'The luxury package exceeded expectations. Beautiful accommodations and authentic cultural experiences.',
            rating: 5
        }
    ];

    const timeline = [
        {
            
            title: "'🌱2010'- Foundation",
            desc: "Al-Ziyarah Tours was founded to provide authentic Islamic heritage experiences",
           
        },
        {
           
            title: "'🌍2012' - Expansion",
            desc: "Expanded to 10+ countries across the Muslim world",
           
        },
        {
        
            title: "'👥2016' - Expert Network",
            desc: "Built network of 50+ expert guides and historians",
           
        },
        {
            
            title: "'💻2020' - Digital Platform",
            desc: "Launched virtual tours and online booking system",
            
        },
        {
            
            title: "'🏆2024'- Awards & Recognition",
            desc: "Received multiple awards for cultural tourism excellence",
        
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f5f7] about-container">
            {/* Hero Section */}
            <section className="relative py-12 md:py-28 overflow-hidden mt-22">
                <div className="absolute inset-0">
                    <img
                        src="https://i.pinimg.com/1200x/e6/45/5a/e6455aa53847dafc83efab83ad5f47c1.jpg"
                        alt="Islamic architecture and heritage sites"
                        className="w-full h-180 object-cover object-center"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#382e6a]/50 "></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
                            <Compass className="w-4 h-4 text-[#feba00]" />
                            <span className="text-sm font-semibold text-[#382e6a]">Premium Heritage Tours</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                            <span className="text-[#382e6a]">Al-Ziyarah</span>{' '}
                            <span className="bg-gradient-to-r from-[#382e6a] to-[#feba00] bg-clip-text text-transparent">
                                Tours
                            </span>
                        </h1>

                        <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
                            Journey Through Islamic Heritage. Experience authentic cultural and spiritual tours guided by experts in Islamic history and tradition.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-8 py-3 bg-gradient-to-r from-[#382e6a] to-[#feba00] text-white font-bold rounded-2xl hover:from-[#4a3e85] hover:to-[#ffc730] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Begin Your Journey
                            </Link>
                            <Link
                                to="/allpackages"
                                className="px-8 py-3 bg-white text-[#382e6a] font-bold rounded-2xl border-2 border-[#382e6a] hover:bg-[#382e6a] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md"
                            >
                                View All Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#382e6a]/10">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#382e6a] to-[#feba00] flex items-center justify-center mb-4 shadow-md">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#382e6a] mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                        {/* Centered title for all screen sizes */}
                        <div className="w-full md:w-auto md:text-center relative">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">Our Tour Services</h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] mt-4 rounded-full mx-auto"></div>
                            </div>
                        </div>

                        {/* Counter aligned to right for desktop */}
                        <div className="hidden md:block absolute right-4 top-0">
                            <div className="text-sm font-bold text-gray-500 bg-white px-4 py-2 rounded-full border border-[#382e6a]/10">
                                {services.length} specialized tours
                            </div>
                        </div>

                        {/* Mobile counter below title */}
                        <div className="md:hidden w-full text-center mt-4">
                            <div className="inline-block text-sm font-bold text-gray-500 bg-white px-4 py-2 rounded-full border border-[#382e6a]/10">
                                {services.length} specialized tours
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Achievements Section */}
            <section className="py-16 bg-gradient-to-r from-[#382e6a] to-[#6d5baa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey in Numbers</h2>
                        <div className="w-24 h-1 bg-[#feba00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement) => {
                            const Icon = achievement.icon;
                            return (
                                <div
                                    key={achievement.id}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 text-center"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 shadow-md mx-auto`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        {achievement.number}
                                    </div>
                                    <div className="text-sm text-white/90">
                                        {achievement.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#382e6a]/10">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-8 h-8 text-[#382e6a]" />
                                <h3 className="text-2xl font-bold text-[#382e6a]">Our Mission</h3>
                            </div>
                            <div className="w-12 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] mb-6 rounded-full"></div>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                To connect travelers with Islamic heritage through authentic, educational, and spiritually enriching experiences, preserving cultural traditions while providing meaningful journeys.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#382e6a] to-[#feba00] rounded-3xl p-8 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <GlobeIcon className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                            </div>
                            <div className="w-12 h-1 bg-white mb-6 rounded-full"></div>
                            <p className="text-white leading-relaxed text-justify">
                                To be the world's premier Islamic heritage tour provider, setting standards for cultural preservation, authentic experiences, and sustainable tourism.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey Through Time</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 ">
                               
                                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-[#f5f5f7]">
                                    <h4 className="text-xl font-bold text-[#382e6a] mb-3 flex justify-center">{item.title}</h4>
                                    <p className="text-black leading-relaxed flex justify-center">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#f5f5f7] hover:shadow-xl transition-shadow"
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#f5f5f7] transition-colors"
                                >
                                    <span className="font-semibold text-[#382e6a] text-base md:text-lg">{faq.question}</span>
                                    {openFaq === faq.id ? (
                                        <ChevronUp className="w-5 h-5 text-[#feba00]" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-[#feba00]" />
                                    )}
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-gray-100">
                                            <div className="w-16 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] mb-4 rounded-full"></div>
                                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Travelers Say</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#382e6a] to-[#feba00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#f5f5f7]">
                                <div className="flex items-center gap-2 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-[#feba00] fill-current" />
                                    ))}
                                </div>

                                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-[#382e6a]">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.service}</p>
                                    </div>
                                    <Heart className="w-5 h-5 text-[#feba00]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-b from-[#382e6a]/90 to bg-white overflow-hidden">
                <div className="relative bg-gradient-to-r from-[#382e6a] to-[#feba00] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 mx-4 md:mx-8 lg:mx-16">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
                    </div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Begin Your Heritage Journey
                        </h3>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Discover Islamic heritage with Al-Ziyarah Tours. Experience authentic cultural journeys guided by experts in history and tradition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-white text-[#382e6a] font-bold px-8 py-3 rounded-full hover:bg-[#f5f5f7] transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Book Your Tour
                            </Link>
                          
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
                            <a href="tel:+919136397091" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>+91-9136397091</span>
                            </a>
                            <span className="hidden sm:block">|</span>
                            <a href="mailto:info@alziyarahtours.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>info@alziyarahtours.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Enquiry Modal */}
            {isQuickEnquiryOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <h3 className="text-xl font-bold text-[#382e6a] mb-4">Quick Enquiry</h3>
                        <p className="text-gray-600 mb-4">Our team will contact you shortly.</p>
                        {/* Add your enquiry form here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;