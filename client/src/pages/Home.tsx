import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, FileText, MapPin, Phone, ArrowRight, ShieldCheck, Users, Activity, Zap } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { DoctorCharacter, SonographerCharacter } from "@/components/SVGs/DoctorCharacter";
import { XRayIcon, UltrasoundIcon, DiagnosticWaves, HeartbeatLine } from "@/components/SVGs/MedicalIcons";
import { useParallax, useScrollReveal } from "@/hooks/useParallax";

export default function Home() {
  const { ref: parallaxRef, offset } = useParallax(0.5);
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%221e5a8e%22 stroke-width=%220.5%22/></svg>')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Serving Kamloops for over 30 years
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Medical Imaging</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Advanced X-Ray and Ultrasound diagnostic services with cutting-edge technology and compassionate care. Your health is our priority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all text-lg px-8 h-14 animate-pulse-scale">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/ultrasound">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-semibold text-lg px-8 h-14 bg-white/50 backdrop-blur-sm">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-2xl font-bold text-primary">30+</p>
                  <p className="text-sm text-slate-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">1000+</p>
                  <p className="text-sm text-slate-600">Exams Monthly</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">100%</p>
                  <p className="text-sm text-slate-600">Digital PACS</p>
                </div>
              </div>
            </div>

            {/* Right Side - SVG Characters */}
            <div className="relative h-[500px] animate-slide-in-right" ref={parallaxRef} style={{ transform: `translateY(${offset}px)` }}>
              <div className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 blur-3xl bg-secondary rounded-full"></div>
              
              <div className="relative h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="flex justify-center animate-float">
                    <div className="w-40 h-40 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-primary/10 hover:shadow-2xl transition-all">
                      <DoctorCharacter />
                    </div>
                  </div>
                  <div className="flex justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-40 h-40 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-secondary/10 hover:shadow-2xl transition-all">
                      <SonographerCharacter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Waves Section */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center">
            <DiagnosticWaves />
          </div>
        </div>
      </section>

      {/* Quick Access Cards - Floating overlap */}
      <section className="relative z-20 -mt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* X-Ray Card */}
            <Card className="border-none shadow-xl bg-white/95 backdrop-blur hover:shadow-2xl transition-all duration-300 group animate-fade-in-up stagger-1">
              <CardHeader className="pb-2">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 text-primary">
                  <XRayIcon />
                </div>
                <CardTitle className="text-xl font-heading">X-Ray Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-6">Walk-in service available. Digital imaging with rapid reporting and minimal radiation exposure.</p>
                <Link href="/x-ray">
                  <div className="flex items-center text-primary font-semibold cursor-pointer group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Ultrasound Card */}
            <Card className="border-none shadow-xl bg-white/95 backdrop-blur hover:shadow-2xl transition-all duration-300 group animate-fade-in-up stagger-2">
              <CardHeader className="pb-2">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 text-secondary">
                  <UltrasoundIcon />
                </div>
                <CardTitle className="text-xl font-heading">Ultrasound</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-6">Comprehensive investigations by appointment. Non-invasive, radiation-free diagnostic imaging.</p>
                <Link href="/ultrasound">
                  <div className="flex items-center text-secondary font-semibold cursor-pointer group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border-none shadow-xl bg-primary text-white hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-3">
              <CardHeader className="pb-2">
                <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center mb-4 text-accent">
                  <Clock className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-white">Hours & Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-blue-100 mb-6">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="font-semibold">8:00AM - 4:00PM</span>
                  </div>
                  <div className="flex justify-between text-accent font-medium">
                    <span>Lunch</span>
                    <span>12:00PM - 12:30PM</span>
                  </div>
                  <p className="pt-2 text-sm leading-relaxed">Unit 250 - 1320 West Trans-Canada Hwy, Kamloops, BC</p>
                </div>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full bg-white text-primary hover:bg-blue-50 font-semibold">
                    Get Directions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Medical Icons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up" ref={revealRef}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Why Choose Aberdeen?</h2>
            <p className="text-slate-600 text-lg">
              We combine advanced technology with a patient-centered approach to provide the highest standard of diagnostic imaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Expert Radiologists", desc: "Fellows of the Royal College of Physicians and Surgeons of Canada" },
              { icon: Zap, title: "Advanced Technology", desc: "Early adopters of digital technology and PACS for superior images" },
              { icon: Users, title: "Compassionate Care", desc: "Experienced staff dedicated to your comfort and safety" },
              { icon: MapPin, title: "Convenient Location", desc: "Located at Aberdeen Mall with ample free parking" }
            ].map((item, i) => (
              <div key={i} className={`text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-white hover:to-slate-50 hover:shadow-lg transition-all duration-300 border border-slate-100 animate-fade-in-up stagger-${(i % 5) + 1}`}>
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heartbeat Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <HeartbeatLine />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="h-16 mb-8 opacity-40">
              <HeartbeatLine />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Your Health is Our Priority</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              With over 30 years of experience serving the Kamloops community, we understand that medical imaging is an important part of your healthcare journey. Our commitment to excellence, combined with our state-of-the-art technology and compassionate team, ensures you receive the best possible care.
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to Schedule Your Appointment?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            For ultrasound appointments, please have your physician referral ready. X-ray services are available on a walk-in basis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold text-lg px-8 h-14">
                Contact Us
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 h-14 bg-transparent">
                Patient Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
