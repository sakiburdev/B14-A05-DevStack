import logo from "../assets/logo-text.png";

const navbarData = {
    logo: {
        src: logo,
        alt: "DevStack",
        href: "#home",
    },

    navItems: [
        {
            name: "Home",
            href: "#home",
            active: true,
        },
        {
            name: "Technologies",
            href: "#technologies",
        },
        {
            name: "Projects",
            href: "#projects",
        },
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ],

    authButtons: [
        {
            name: "Sign In",
            href: "#signin",
            type: "signin",
        },
        {
            name: "Sign Up",
            href: "#signup",
            type: "signup",
        },
    ],
};


const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <nav className="container mx-auto flex h-[80px] items-center justify-between px-6 lg:px-10">

                {/* Logo */}
                <a href={navbarData.logo.href} className="shrink-0">
                    <img
                        src={navbarData.logo.src}
                        alt={navbarData.logo.alt}
                        className="h-auto w-[142px]"
                    />
                </a>

                {/* Menu */}
                <ul className="hidden items-center gap-10 lg:flex">
                    {navbarData.navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={`text-[14px] font-medium transition-colors duration-200 ${item.active
                                        ? "font-semibold text-[#DB2777]"
                                        : "text-[#475569] hover:text-[#DB2777]"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Buttons */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navbarData.authButtons.map((button) => (
                        <a
                            key={button.name}
                            href={button.href}
                            className={
                                button.type === "signup"
                                    ? "rounded-full bg-[#D91B7E] px-[20px] py-[10px] text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#be185d]"
                                    : "text-[14px] font-medium text-[#334155] transition-colors duration-200 hover:text-[#DB2777]"
                            }
                        >
                            {button.name}
                        </a>
                    ))}
                </div>

            </nav>
        </header>
    );
};

export default Navbar;