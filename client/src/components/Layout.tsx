import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MapPin, Clock, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AberdeenLogoLight, AberdeenLogoDark } from "@/components/SVGs/AberdeenLogo";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "X-Ray", path: "/x-ray" },
    { label: "Ultrasound", path: "/ultrasound" },
    { label: "Patient Resources", path: "/resources" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(250) 372-1145</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Aberdeen Mall, Kamloops, BC</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8:00AM - 4:00PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <Link href="/contact">
              <span className="hover:text-accent cursor-pointer transition-colors">Get Directions</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer hover:opacity-80 transition-opacity w-64">
              <AberdeenLogoLight />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-2",
                  location === item.path 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-muted-foreground"
                )}>
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md">
                Book Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 shadow-lg absolute w-full">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className={cn(
                    "block text-base font-medium py-2 border-b border-border/50",
                    location === item.path ? "text-primary" : "text-foreground"
                  )}>
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white mt-4">
                  Book Appointment
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="w-40">
                <AberdeenLogoDark />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Proudly serving the Kamloops community with excellence in medical imaging for over 30 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/"><span className="text-slate-400 hover:text-accent cursor-pointer transition-colors">Home</span></Link></li>
                <li><Link href="/x-ray"><span className="text-slate-400 hover:text-accent cursor-pointer transition-colors">X-Ray Services</span></Link></li>
                <li><Link href="/ultrasound"><span className="text-slate-400 hover:text-accent cursor-pointer transition-colors">Ultrasound Services</span></Link></li>
                <li><Link href="/resources"><span className="text-slate-400 hover:text-accent cursor-pointer transition-colors">Patient Resources</span></Link></li>
                <li><Link href="/contact"><span className="text-slate-400 hover:text-accent cursor-pointer transition-colors">Contact Us</span></Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-slate-400">Unit 250 - 1320 West Trans-Canada Hwy<br/>Kamloops, BC V1S 1J2</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-slate-400">(250) 372-1145</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-slate-400">Mon-Fri: 8:00AM - 4:00PM</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-4">Hours</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00AM - 4:00PM</span>
                </div>
                <div className="flex justify-between text-accent/80">
                  <span>Lunch Closure</span>
                  <span>12:00PM - 12:30PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Aberdeen Ultrasound & X-Ray. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
