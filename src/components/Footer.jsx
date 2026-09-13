import React from "react";

import logo from "../assets/logo-text.png";

const Footer = () => {
    // Social Links
    const socialLinks = [
        {
            name: "GitHub",
            href: "#",
        },
        {
            name: "Twitter",
            href: "#",
        },
        {
            name: "LinkedIn",
            href: "#",
        },
    ];

    // Footer Columns
    const footerColumns = [
        {
            title: "PRODUCT",
            links: [
                {
                    name: "Home",
                    href: "#home",
                },
                {
                    name: "Technologies",
                    href: "#technologies",
                },
                {
                    name: "Projects",
                    href: "#projects",
                },
            ],
        },
        {
            title: "COMPANY",
            links: [
                {
                    name: "About",
                    href: "#about",
                },
                {
                    name: "Contact",
                    href: "#contact",
                },
                {
                    name: "Careers",
                    href: "#careers",
                },
            ],
        },
        {
            title: "LEGAL",
            links: [
                {
                    name: "Privacy Policy",
                    href: "#privacy",
                },
                {
                    name: "Terms of Service",
                    href: "#terms",
                },
            ],
        },
    ];

    // Bottom Links
    const bottomLinks = [
        {
            name: "Privacy",
            href: "#privacy",
        },
        {
            name: "Terms",
            href: "#terms",
        },
    ];

    return (
        <footer className="max-w-full border-t border-[#F1F5F9] mt-33  bg-white">
            <div className="container mx-auto mt-10 py-10">

                {/* Main Footer */}
                <div className="container flex justify-between gap-20">

                    {/* Brand Section */}
                    <div>
                        {/* Logo */}
                        <a href="#home" className="inline-block">
                            <img
                                src={logo}
                                alt="Dev Stack"
                                className="w-[141px]"
                            />
                        </a>

                        {/* Description */}
                        <p className="mt-4 font-['Plus_Jakarta_Sans'] text-[12px] font-normal leading-6 text-[#64748B]">
                            Curated tools, technologies, and resources for developers
                            building <span className="block">modern software.</span>
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="font-['Plus_Jakarta_Sans'] text-[12px] font-semibold text-[#475569] transition-colors duration-200 hover:text-[#DB2777]"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Columns */}
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            {/* Title */}
                            <h3 className="font-['Plus_Jakarta_Sans'] text-[12px] font-bold text-[#0F172A]">
                                {column.title}
                            </h3>

                            {/* Links */}
                            <ul className="mt-6 space-y-2">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="font-['Plus_Jakarta_Sans'] text-[12px] font-normal text-[#64748B] transition-colors duration-200 hover:text-[#DB2777]"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="mt-16 border-t border-[#F1F5F9]"></div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between pt-8">

                    {/* Copyright */}
                    <p className="font-['Plus_Jakarta_Sans'] text-[12px] font-normal text-[#94A3B8]">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    {/* Bottom Links */}
                    <div className="flex items-center gap-8">
                        {bottomLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-['Plus_Jakarta_Sans'] text-[12px] font-normal text-[#94A3B8] transition-colors duration-200 hover:text-[#64748B]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;