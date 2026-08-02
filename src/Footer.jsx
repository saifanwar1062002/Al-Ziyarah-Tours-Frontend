import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Calendar, Plane, Home, Users, FileText, Star, Award, Shield, CheckCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import footerLogo from "./assets/AI-Ziyarah_logo.png";

const services = [
  { id: 1, name: 'Classic Umrah', path: '/classicpkg' },
  { id: 2, name: 'Deluxe Umrah', path: '/deluxepkg' },
  { id: 3, name: 'Luxury Umrah', path: '/luxurypkg' },
  { id: 4, name: 'Classic Hajj', path: '/classichajj' },
  { id: 5, name: 'Deluxe Hajj', path: '/deluxehajj' },
  { id: 6, name: 'Luxury Hajj', path: '/luxuryhajj' },
  { id: 7, name: 'Ramadan First 15 Days', path: '/ramadan15days' },
  { id: 8, name: 'Ramadan Last 20 Days', path: '/ramadanlast20days' },
  { id: 9, name: 'Ramadan Full Month', path: '/ramadanfullmonth' },
];

const quickLinks = [
  { id: 1, name: 'About Us', path: '/about', icon: <Users size={14} /> },
  { id: 2, name: 'All Packages', path: '/allpackages', icon: <Plane size={14} /> },
  { id: 3, name: 'Visa Services', path: '/visaservice', icon: <FileText size={14} /> },
  { id: 4, name: 'Contact', path: '/contact', icon: <Phone size={14} /> },
  { id: 5, name: 'Home', path: '/', icon: <Home size={14} /> },
];



const certifications = [
  { id: 1, icon: <Shield size={12} />, text: 'Govt. Approved' },
  { id: 2, icon: <Award size={12} />, text: 'ISO Certified' },
  { id: 3, icon: <Star size={12} />, text: '15+ Years Exp' },
];

const policyLinks = [
  { id: 1, name: 'Privacy Policy', path: '/privacy' },
  { id: 2, name: 'Terms of Service', path: '/termsandconditions' }
];

const Footer = () => (
  <footer className="relative bg-gradient-to-b from-[#382e6a] to-[#0a1e2d] text-gray-100">
    {/* Gradient overlay for smoother transition */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a3f]/30 via-transparent to-transparent"></div>

    {/* Top decorative border */}
    <div className="relative h-0.5 bg-gradient-to-r from-transparent via-[#b78747] to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b78747] via-[#d4a45e] to-[#b78747] blur-sm"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Compact Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

        {/* Brand Section - Compact */}
        <div className="lg:col-span-5">
          <div className="flex flex-col space-y-4">
            {/* Compact Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#b78747]/20 to-[#d4a45e]/20 rounded-full blur-md"></div>
                <div className="relative p-2 bg-gradient-to-br from-white/50 to-white/5 backdrop-blur-sm rounded-xl border border-[#b78747]/20">
                  <img
                    src={footerLogo}
                    alt="Al-Ziyarah Tours Logo"
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
              Guiding pilgrims with excellence for over 15 years. Your spiritual journey is our sacred trust.
            </p>

            {/* Compact Certifications */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-center gap-1.5 px-2 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-[#b78747]/10">
                  <div className="text-[#b78747]">{cert.icon}</div>
                  <span className="text-xs font-medium text-[#e8f4f8]">{cert.text}</span>
                </div>
              ))}
            </div>

            
          </div>
        </div>

        {/* Services Section - Compact */}
        <div className="lg:col-span-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 border border-[#b78747]/10 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-gradient-to-r from-[#b78747] to-[#d4a45e] rounded-lg">
                  <Plane className="text-white" size={16} />
                </div>
                <h3 className="text-lg font-bold text-[#e8f4f8]">
                  Sacred Journeys
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    className="group relative overflow-hidden rounded-lg p-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-[#b78747]/10 hover:to-[#d4a45e]/10 transition-all duration-200 border border-[#b78747]/10 hover:border-[#b78747]/30"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#b78747] to-[#d4a45e] rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-200 group-hover:text-[#e8f4f8] font-medium text-xs">
                        {service.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Quick Links - Compact */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 border border-[#b78747]/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-gradient-to-r from-[#b78747] to-[#d4a45e] rounded-lg">
                  <Phone className="text-white" size={16} />
                </div>
                <h3 className="text-lg font-bold text-[#e8f4f8]">
                  Contact Us
                </h3>
              </div>

              <div className="space-y-3">
                {/* Phone */}
                <div className="group flex items-start gap-3">
                  <div className="p-1.5 bg-[#b78747]/20 rounded-lg group-hover:bg-[#b78747]/30 transition-colors">
                    <Phone className="text-[#b78747]" size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">24/7 Support</p>
                    <a
                      href="tel:+919136397091"
                      className="text-sm font-semibold text-gray-100 hover:text-[#b78747] transition-colors"
                    >
                      +91-9136397091
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-3">
                  <div className="p-1.5 bg-[#b78747]/20 rounded-lg group-hover:bg-[#b78747]/30 transition-colors">
                    <Mail className="text-[#b78747]" size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <a
                      href="mailto:info@alziyarahtours.com"
                      className="text-xs font-medium text-gray-100 hover:text-[#b78747] transition-colors break-all"
                    >
                      info@alziyarahtours.com
                    </a>
                  </div>
                </div>

                {/* Address (Optional) */}
                <div className="group flex items-start gap-3">
                  <div className="p-1.5 bg-[#b78747]/20 rounded-lg group-hover:bg-[#b78747]/30 transition-colors">
                    <MapPin className="text-[#b78747]" size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Address</p>
                    <p className="text-xs font-medium text-gray-100">
                      C-5/36 Street No.7 Chauhan Banger New Seelampur,New Delhi-110053, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links - Compact */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 border border-[#b78747]/10">
              <h3 className="text-sm font-bold text-gray-100 mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#b78747]/10 hover:to-[#d4a45e]/10 transition-all duration-200 group"
                  >
                    <span className="text-[#b78747] group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span className="text-gray-200 group-hover:text-[#e8f4f8] font-medium text-xs">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Compact */}
      <div className="mt-6 pt-4 border-t border-[#b78747]/20 relative">
        {/* Floating Prayer */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="px-4 py-1 bg-gradient-to-r from-[#b78747]/20 to-[#d4a45e]/20 backdrop-blur-sm rounded-full border border-[#b78747]/30">
            <p className="text-[#e8f4f8] text-xs font-medium flex items-center gap-1">
              <span className="text-sm">🕋</span>
              May Allah accept your pilgrimage
            </p>
          </div>
        </div>
        <br />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-3">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-xs">
              &copy; 2025 <span className="text-[#b78747] font-semibold">Al-Ziyarah Tours</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              Since 2010 • Trusted by 10,000+ pilgrims
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-4">
            {policyLinks.map((policy) => (
              <Link
                key={policy.id}
                to={policy.path}
                className="text-gray-400 hover:text-[#b78747] transition-colors text-xs hover:underline"
              >
                {policy.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;