import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, History, Award, Heart } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { DoctorCharacter, SonographerCharacter } from "@/components/SVGs/DoctorCharacter";
import { useScrollReveal } from "@/hooks/useParallax";

export default function About() {
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 to-slate-50 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-in-up">About Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Proudly serving the Kamloops community with excellence in medical imaging for over 30 years.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" ref={revealRef}>
              <div className="space-y-6 animate-slide-in-left">
                <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-accent">
                  <History className="h-3 w-3 mr-2" />
                  Since 1990s
                </div>
                <h2 className="text-3xl font-heading font-bold text-slate-900">Our Story</h2>
                <p className="text-slate-600 leading-relaxed">
                  For over three decades, Aberdeen Ultrasound & X-Ray has been the trusted choice for medical imaging in Kamloops. Founded with a commitment to excellence and patient-centered care, we have continuously evolved our services and technology to meet the changing needs of our community.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  In 2011, we significantly expanded our services to include comprehensive ultrasound investigations under physician referral, complementing our established X-ray services. This expansion allowed us to provide a more complete diagnostic imaging solution for our patients.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                  <p className="font-bold text-xl">Conveniently Located</p>
                  <p className="text-slate-200">Aberdeen Mall, Kamloops</p>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border border-slate-100 animate-fade-in-up">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Team</h2>
                <p className="text-slate-600">
                  We are proud of our dedicated team of professionals who work together to provide you with the best possible care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Radiologists */}
                <div className="animate-fade-in-up stagger-1">
                  <Card className="border-none shadow-md bg-white hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="h-48 mb-4 flex items-center justify-center">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-4">
                          <DoctorCharacter />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2 text-center">Radiologists</h3>
                      <p className="text-slate-600 text-sm text-center">
                        Our on-site radiologists are Fellows of the Royal College of Physicians and Surgeons of Canada, ensuring expert interpretation of your images.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Technologists */}
                <div className="animate-fade-in-up stagger-2">
                  <Card className="border-none shadow-md bg-white hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="h-48 mb-4 flex items-center justify-center">
                        <div className="w-40 h-40 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-4">
                          <SonographerCharacter />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2 text-center">Technologists</h3>
                      <p className="text-slate-600 text-sm text-center">
                        Our licensed radiologic technologists and certified sonographers are highly trained to perform your exams with precision and care.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Support Staff */}
                <div className="animate-fade-in-up stagger-3">
                  <Card className="border-none shadow-md bg-white hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="w-full h-48 mb-4 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl">
                        <Heart className="h-24 w-24 text-accent opacity-40" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2 text-center">Support Staff</h3>
                      <p className="text-slate-600 text-sm text-center">
                        Our friendly front office staff is here to help you schedule appointments and answer any questions you may have about your visit.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold text-slate-900">Our Mission</h2>
              <p className="text-xl text-slate-600 italic font-light leading-relaxed">
                "To help you meet your healthcare needs through excellence in medical imaging."
              </p>
              <p className="text-slate-600 leading-relaxed">
                We understand that medical imaging can be stressful. We strive to make your experience as comfortable and efficient as possible while delivering the highest quality diagnostic results to your physician. As early adopters of digital technology and PACS, we are committed to staying at the forefront of medical imaging advancements.
              </p>
              <div className="pt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 animate-pulse-scale">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
