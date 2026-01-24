import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, FileText, AlertCircle, Phone, Calendar } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { UltrasoundIcon } from "@/components/SVGs/MedicalIcons";
import { useScrollReveal } from "@/hooks/useParallax";

export default function Ultrasound() {
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Page Header with Medical Theme */}
      <section className="relative bg-gradient-to-br from-secondary/10 to-slate-50 py-16 md:py-24 overflow-hidden border-b">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-4 animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ultrasound Imaging Services</h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Comprehensive diagnostic ultrasound examinations performed by experienced sonographers using advanced imaging technology.
              </p>
            </div>
            <div className="relative h-64 md:h-80 animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl"></div>
              <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-secondary/10 flex items-center justify-center">
                <UltrasoundIcon />
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
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">About Our Ultrasound Services</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Ultrasound imaging uses high-frequency sound waves to produce images of structures within your body. It is a safe, non-invasive procedure that does not use ionizing radiation. At Aberdeen Ultrasound & X-Ray, we use advanced ultrasound systems to provide detailed diagnostic information for a wide range of medical conditions.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  All ultrasound examinations are performed by our certified sonographers who are dedicated to ensuring your comfort and privacy. Images are interpreted by our on-site radiologists, with results sent promptly to your referring physician.
                </p>
              </div>

              <div className="animate-fade-in-up stagger-1">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Types of Examinations</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    { title: "Abdominal Ultrasound", desc: "Comprehensive imaging of abdominal organs including liver, pancreas, kidneys, spleen, and gallbladder to evaluate for disease, stones, and abnormalities." },
                    { title: "Pelvic Ultrasound", desc: "Detailed examination of pelvic organs including uterus, ovaries, and bladder to assess for cysts, fibroids, and other pathologies." },
                    { title: "Obstetric Ultrasound", desc: "Specialized pregnancy ultrasounds including dating scans, anatomy surveys, and growth assessments to monitor fetal development and maternal health." },
                    { title: "Vascular Studies", desc: "Doppler ultrasound to assess blood flow in arteries and veins, detecting clots, stenosis, and vascular insufficiency." },
                    { title: "Thyroid & Neck", desc: "High-resolution imaging of the thyroid gland and neck structures to evaluate nodules, enlargement, and lymph node abnormalities." },
                    { title: "Musculoskeletal", desc: "Real-time ultrasound of muscles, tendons, and joints to diagnose tears, inflammation, and guide therapeutic injections." },
                    { title: "Breast Ultrasound", desc: "Complementary imaging to mammography for evaluating breast masses, cysts, and tissue density in dense breast tissue." },
                    { title: "Scrotal Ultrasound", desc: "Detailed imaging of testicular and scrotal structures to evaluate pain, masses, and assess for varicocele and other conditions." }
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-secondary/20 rounded-lg px-4 hover:shadow-md transition-all">
                      <AccordionTrigger className="text-left font-medium text-slate-700 hover:text-secondary py-4">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
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
                <p className="text-slate-600 mb-6">
                  Preparation for ultrasound varies significantly depending on the type of exam. You will be given specific instructions when you book your appointment. Common preparations include:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100/50 border border-secondary/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Abdominal Ultrasound
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Typically requires fasting (nothing to eat or drink) for 6-8 hours prior to your appointment to ensure the gallbladder is visible and gas is minimized.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100/50 border border-secondary/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Pelvic / Obstetric (Early)
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Usually requires a full bladder. You may be asked to drink 1 liter of water 1 hour before your exam and NOT empty your bladder until after the scan.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100/50 border border-secondary/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Vascular / Thyroid / Musculoskeletal
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Generally, no specific preparation is required. Wear loose, comfortable clothing that allows easy access to the area being examined.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-gradient-to-br from-secondary to-secondary/90 text-white animate-fade-in-up stagger-3">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-accent" /> Appointments
                    </h3>
                    <div className="bg-white/10 rounded-lg p-4 mb-4 backdrop-blur-sm">
                      <p className="text-sm text-teal-50 font-medium">
                        All ultrasound exams require a booked appointment and a physician referral.
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>

                  <div className="border-t border-secondary/30 pt-4">
                    <h4 className="font-bold text-white mb-2">What to Bring</h4>
                    <ul className="space-y-2 text-sm text-teal-100">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        Doctor's requisition form
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        BC Services Card
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        Photo ID
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-secondary/20 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-4">Contact Ultrasound Dept</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    To book an appointment or ask about preparation instructions:
                  </p>
                  <div className="flex items-center text-secondary font-bold text-lg">
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
