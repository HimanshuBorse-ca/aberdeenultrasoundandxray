import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, FileText, AlertCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { XRayIcon } from "@/components/SVGs/MedicalIcons";
import { useScrollReveal } from "@/hooks/useParallax";

export default function XRay() {
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Page Header with Medical Theme */}
      <section className="relative bg-gradient-to-br from-primary/10 to-slate-50 py-16 md:py-24 border-b overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-4 animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">X-Ray Imaging Services</h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Advanced digital X-ray technology providing rapid, high-quality diagnostic imaging with minimal radiation exposure.
              </p>
            </div>
            <div className="relative h-64 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10 flex items-center justify-center">
                <XRayIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12" ref={revealRef}>
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">About Our X-Ray Services</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  At Aberdeen Ultrasound & X-Ray, we utilize state-of-the-art digital radiography systems. This technology allows for lower radiation doses compared to traditional film X-rays while providing superior image quality. Our images are stored in a secure Picture Archiving and Communication System (PACS), allowing for immediate viewing by our radiologists and rapid reporting to your physician.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our experienced radiologic technologists are trained to ensure your comfort and safety throughout the examination process, positioning you precisely to obtain the best possible diagnostic images.
                </p>
              </div>

              <div className="animate-fade-in-up stagger-1">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Common Examinations</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    { title: "Chest X-rays", desc: "High-quality imaging of the lungs, heart, and chest cavity to detect pneumonia, tuberculosis, heart disease, and other conditions." },
                    { title: "Bone and Joint Imaging", desc: "Detailed radiography of bones and joints to identify fractures, arthritis, dislocations, and other skeletal abnormalities." },
                    { title: "Spine Imaging", desc: "Comprehensive spinal imaging to assess vertebral alignment, detect degenerative changes, and evaluate for herniated discs." },
                    { title: "Abdominal X-rays", desc: "Imaging of abdominal organs to detect bowel obstruction, free air, kidney stones, and other abdominal pathologies." },
                    { title: "Immigration Medical Exams", desc: "Chest X-rays required for immigration purposes, performed according to international medical examination standards." },
                    { title: "Pediatric X-rays", desc: "Specialized X-ray services for children with techniques optimized for pediatric patients to minimize radiation exposure." }
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-primary/20 rounded-lg px-4 hover:shadow-md transition-all">
                      <AccordionTrigger className="text-left font-medium text-slate-700 hover:text-primary py-4">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          {item.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pb-4 pt-0">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="animate-fade-in-up stagger-2">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Preparation Instructions</h2>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-primary/20 rounded-xl p-6 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Requisition Form</h3>
                      <p className="text-slate-600 text-sm">You must bring the requisition form provided by your doctor.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Identification</h3>
                      <p className="text-slate-600 text-sm">Bring your BC Services Card (Care Card) and one piece of photo ID.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Clothing</h3>
                      <p className="text-slate-600 text-sm">Wear loose, comfortable clothing. You may be asked to change into a gown depending on the area being imaged.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                      <AlertCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Pregnancy</h3>
                      <p className="text-slate-600 text-sm">Please inform the technologist immediately if there is any chance you may be pregnant.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-primary/90 text-white animate-fade-in-up stagger-3">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-accent" /> Service Hours
                    </h3>
                    <div className="space-y-2 text-sm text-blue-100">
                      <div className="flex justify-between border-b border-primary/30 pb-2">
                        <span>Mon - Fri</span>
                        <span className="font-semibold">8:00AM - 4:00PM</span>
                      </div>
                      <div className="flex justify-between text-accent pt-1">
                        <span>Lunch Closure</span>
                        <span>12:00PM - 12:30PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-2">Walk-In Policy</h4>
                    <p className="text-sm text-blue-100">
                      General X-ray services are available on a first-come, first-served basis. No appointment is necessary for standard exams.
                    </p>
                  </div>

                  <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-accent mb-2">Immigration Exams</h4>
                    <p className="text-sm text-blue-100 mb-3">
                      CXR Immigration exams require a booked appointment.
                    </p>
                    <Link href="/contact">
                      <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-white">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-4">Have Questions?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Our staff is happy to answer any questions you may have about your upcoming X-ray examination.
                  </p>
                  <div className="flex items-center text-primary font-bold text-lg">
                    <Phone className="h-5 w-5 mr-2" /> (250) 372-1145
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
