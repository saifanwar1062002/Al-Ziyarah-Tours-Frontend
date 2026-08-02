import React from "react";
import {
  Hotel,
  Shield,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle,
  Heart,
  Building,
  Award,
  Globe,
  Bed,
  Phone,
  Sparkles,
} from "lucide-react";


const hotelPartners = [
  {
    id: 1,
    name: "Hilton Hotels & Resorts",
    icon: "🏨",
    description: "Luxury Premium accommodation with spectacular Haram views",
    locations: ["Makkah - Clock Tower", "Madina - Central", "Jeddah - Corniche"],
    rating: 4.8,
    features: ["Haram View Rooms", "Direct Prayer Access", "Gourmet Dining"],
    gradient: "from-[#382e6a]/25 via-[#feba00]/20 to-[#fff7e0]/40",
  },
  {
    id: 2,
    name: "Marriott International",
    icon: "🏰",
    description: "Premium hospitality minutes from major holy sites",
    locations: ["Makkah Clock Tower", "Madina Center", "Riyadh"],
    rating: 4.7,
    features: ["24/7 Room Service", "Business Center", "Prayer Facilities"],
    gradient: "from-[#feba00]/25 via-[#382e6a]/15 to-[#fff7e0]/40",
  },
  {
    id: 3,
    name: "Hyatt Regency",
    icon: "⭐",
    description: "Modern luxury with authentic spiritual ambiance",
    locations: ["Makkah - Abraj Al Bait", "Jeddah Airport"],
    rating: 4.6,
    features: ["Prayer Facilities", "Indian Cuisine", "Swimming Pool"],
    gradient: "from-[#382e6a]/20 via-[#feba00]/20 to-[#fff7e0]/40",
  },
  {
    id: 4,
    name: "InterContinental Hotels",
    icon: "🌍",
    description: "World-class service adjacent to Masjid al-Haram",
    locations: ["Makkah Abraj Al Bait Complex"],
    rating: 4.9,
    features: ["Premium Suites", "Concierge Service", "Premium Transport"],
    gradient: "from-[#feba00]/30 via-[#382e6a]/15 to-[#fff7e0]/40",
  },
  {
    id: 5,
    name: "Radisson Blu",
    icon: "💎",
    description: "Contemporary elegance with traditional Arabian hospitality",
    locations: ["Madina Road", "Makkah Central"],
    rating: 4.5,
    features: ["Spa Services", "Fitness Center", "Multiple Restaurants"],
    gradient: "from-[#382e6a]/20 via-[#feba00]/20 to-[#fff7e0]/40",
  },
  {
    id: 6,
    name: "Sheraton Hotels",
    icon: "🏛️",
    description: "Heritage of excellence in heart of Islamic holy cities",
    locations: ["Makkah - King Abdulaziz", "Madina - Haram Road"],
    rating: 4.4,
    features: ["Family Rooms", "Conference Facilities", "Prayer Times Display"],
    gradient: "from-[#feba00]/25 via-[#382e6a]/10 to-[#fff7e0]/40",
  },
  {
    id: 7,
    name: "Four Seasons",
    icon: "🌸",
    description: "Ultimate luxury experience for discerning pilgrims",
    locations: ["Makkah Royal Clock Tower"],
    rating: 5.0,
    features: ["Butler Service", "Private Dining", "Luxury Spa"],
    gradient: "from-[#382e6a]/25 via-[#feba00]/25 to-[#fff7e0]/40",
  },
  {
    id: 8,
    name: "Ritz Carlton",
    icon: "👑",
    description: "Unparalleled service, elegance and spiritual comfort",
    locations: ["Makkah - Umm Al Qura", "Jeddah - Tahlia Street"],
    rating: 4.9,
    features: ["Personal Guides", "Helipad Access", "Exclusive Lounges"],
    gradient: "from-[#feba00]/30 via-[#382e6a]/15 to-[#fff7e0]/40",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Prime Locations",
    desc: "Walking distance to the Haramain and major holy sites.",
  },
  {
    icon: Shield,
    title: "Verified Partners",
    desc: "Only trusted Premium brands with strong safety standards.",
  },
  {
    icon: Clock,
    title: "24/7 Assistance",
    desc: "Co-ordination from check-in to checkout during your stay.",
  },
  {
    icon: Users,
    title: "Group Advantages",
    desc: "Negotiated rates for families, groups and premium delegations.",
  },
];

const hotelBenefits = [
  { icon: CheckCircle, text: "Direct Haram view rooms available." },
  { icon: CheckCircle, text: "Halal-certified dining across all partners." },
  { icon: CheckCircle, text: "Prayer facilities and Qibla direction in rooms." },
  { icon: CheckCircle, text: "On-call medical support coordination." },
  { icon: CheckCircle, text: "Multilingual front desk & concierge teams." },
  { icon: CheckCircle, text: "Complimentary Zam Zam included with packages." },
];

const testimonials = [
  {
    name: "Ahmed Khan",
    stay: "Hilton Makkah - Clock Tower",
    quote:
      "The Haram view from our room set the tone for every salah, and access to the masjid was effortless throughout our stay.",
    rating: 5,
    package: "Luxury Umrah Package",
  },
  {
    name: "Fatima Ahmed",
    stay: "Marriott Madina Center",
    quote:
      "Everything from check-in to late-night prayers felt organized and thoughtful, especially for our elderly parents.",
    rating: 5,
    package: "Deluxe Hajj Package",
  },
  {
    name: "Mohammed Ali",
    stay: "InterContinental Makkah",
    quote:
      "The hotel staff understood pilgrims' routines, ensuring we were always on time for rituals with maximum comfort.",
    rating: 5,
    package: "Premium Ramadan Package",
  },
];

const HotelCard = ({ hotel }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-[#382e6a]/20 bg-white/80 p-3 sm:p-4 shadow-md sm:shadow-lg shadow-slate-300/50 transition-all duration-300 hover:border-[#feba00]/80 hover:bg-white hover:shadow-xl">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${hotel.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex flex-col gap-2 sm:gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#382e6a]/10 to-[#382e6a]/5 ring-1 ring-[#382e6a]/20">
              <span className="text-base sm:text-lg md:text-xl">{hotel.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-sm font-semibold text-[#382e6a] truncate">
                {hotel.name}
              </h3>
              <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#382e6a]/5 px-1.5 py-0.5 text-[9px] sm:text-[10px] text-[#382e6a] ring-1 ring-[#feba00]/40">
                <Hotel className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#feba00]" />
                <span className="truncate">Partner Hotel</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 inline-flex items-center rounded-full bg-[#fff7e0]/80 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[11px] text-[#382e6a] ring-1 ring-[#feba00]/40">
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#feba00] fill-[#feba00]" />
            <span className="ml-1 font-semibold">{hotel.rating}/5</span>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-xs text-slate-700 sm:text-sm">
          {hotel.description}
        </p>

        {/* Locations */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {hotel.locations.slice(0, 2).map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1 rounded-full bg-[#f9fafb] px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] text-[#382e6a] ring-1 ring-slate-200 hover:bg-[#feba00]/10 truncate max-w-[150px] sm:max-w-full"
            >
              <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#feba00] flex-shrink-0" />
              <span className="truncate">{loc}</span>
            </span>
          ))}
        </div>

        {/* Features */}
        {hotel.features && (
          <div className="mt-1 flex flex-wrap gap-1">
            {hotel.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-[#382e6a]/5 to-[#382e6a]/10 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] text-[#382e6a] ring-1 ring-[#feba00]/40"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Footer tags */}
        <div className="mt-2 sm:mt-3 border-t border-slate-200 pt-2 sm:pt-3">
          <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex gap-1 sm:gap-1.5">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#feba00] via-[#ffe08a] to-[#fcd34d] px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-[#382e6a] shadow-sm">
                Umrah
              </span>
              <span className="inline-flex items-center rounded-full bg-gradient-to-b from-[#382e6a]/100 to-[#382e6a] px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-white shadow-sm">
                Hajj
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-500">
              Al‑Ziyarah Tours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hoteldetails = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#382e6a]/100 to bg-white ">


      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">

        <div className="relative max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#feba00]/40 bg-white/80 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#382e6a] shadow-sm">
              <Hotel className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#feba00]" />
              Premium Hotel Network
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Stay Steps Away from the{" "}
              <span className="bg-gradient-to-r from-[#feba00] via-[#feba00] to-[#feba00] bg-clip-text text-transparent">
                Haramain
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-white px-4">
              Al‑Ziyarah Tours partners exclusively with premium international hotel brands,
              blending spiritual ambience with refined hospitality in every stay.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <a
                href="https://wa.me/918588914635"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#feba00] to-[#382e6a] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
              >
                <Sparkles className="h-4 w-4" />
                Book Premium Stay
              </a>

            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { number: "50+", label: "Hotels in Network", icon: Building },
              { number: "15K+", label: "Rooms Managed", icon: Bed },
              { number: "98%", label: "Guest Satisfaction", icon: Award },
              { number: "25+", label: "Cities Worldwide", icon: Globe },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-xl sm:rounded-2xl border border-[#382e6a]/10 bg-white/80 p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#382e6a] mb-1" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827]">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features & Benefits Grid */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Features Section */}
            <div className="lg:col-span-2 text-center">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-4 sm:mb-6 ">
                Why These Hotels Are Selected For Pilgrims
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col rounded-xl sm:rounded-2xl border border-[#382e6a]/10 bg-white/90 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#feba00]/70 hover:bg-white"
                    >
                      {/* Add mx-auto to center the icon container */}
                      <div className="mb-3 mx-auto inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#382e6a]/10 to-[#feba00]/20 text-[#382e6a]">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#111827] mb-2 flex justify-center">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex justify-center">
                        {feature.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl sm:rounded-2xl border border-[#382e6a]/10 bg-gradient-to-b from-white/90 to-[#fff7e0]/40 p-4 sm:p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 flex justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#feba00]" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#111827]">
                    Signature Stay Benefits
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mb-4 sm:mb-6">
                  Thoughtfully chosen comforts so your focus can remain on worship.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {hotelBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 rounded-lg bg-white/70 p-2 sm:p-3 border border-[#382e6a]/5"
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#382e6a] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Partners Grid */}
          <section className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Centered heading container */}
              <div className="text-center sm:text-left w-full sm:w-auto">
                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white">
                  Featured Hotel Partners
                </h2>
                <p className="text-xs sm:text-sm text-white mt-1">
                  Handpicked brands that understand the rhythm and needs of pilgrims.
                </p>
              </div>

              {/* Stats badge - aligns right on larger screens */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[10px] sm:text-[11px] text-[#382e6a] border border-[#382e6a]/20 shadow-sm self-center sm:self-auto">
                <Users className="h-3.5 w-3.5 text-black" />
                <span>{hotelPartners.length} premium partners in our network</span>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {hotelPartners.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </section>



          {/* CTA Section */}
          <div className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#382e6a] via-[#2b2456] to-[#120f2c] p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Experience Premium Pilgrim Accommodation?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our hotel experts will guide you to the perfect stay that matches your spiritual and comfort needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919136397091"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#382e6a] px-3 py-2 rounded-full font-bold hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0012.07 0a11.87 11.87 0 00-10.4 17.6L0 24l6.57-1.64A11.87 11.87 0 0012.07 24a11.86 11.86 0 008.45-3.48 11.88 11.88 0 000-16.96z" />
                </svg>
                WhatsApp for Details
              </a>
              <a
                href="tel:+919136397091"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#382e6a] transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
            <p className="text-white text-xs sm:text-sm mt-6 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Hotel experts available 10:00AM - 07:00PM
            </p>
          </div>


          {/* Testimonials Section */}
          <section className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827] ">
                How Pilgrims Describe Their Stays
              </h2>
              <p className="mx-auto mt-1 max-w-2xl text-s sm:text-sm text-black flex justify-center">
                Real experiences from guests who combined premium stays with meaningful worship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl sm:rounded-2xl border border-[#382e6a]/10 bg-white/90 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#feba00] fill-[#feba00]"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm sm:text-base text-slate-800 italic mb-4 sm:mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-slate-200 pt-3 sm:pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-[#111827] text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          {testimonial.stay}
                        </p>
                      </div>
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-rose-400" />
                    </div>
                    <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#fff7e0] to-[#fef3c7] px-3 py-1 text-[10px] sm:text-[11px] font-medium text-[#382e6a]">
                      {testimonial.package}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Hoteldetails;