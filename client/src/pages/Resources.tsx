import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, ShieldCheck, HelpCircle, Download, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useParallax";

export default function Resources() {
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">Patient Resources</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know to prepare for your visit, from exam instructions to insurance information.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12" ref={revealRef}>
              
              {/* Exam Prep */}
              <div id="preparation" className="animate-fade-in-up">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900">Exam Preparation</h2>
                </div>
                
                <div className="space-y-6">
                  <Card className="border border-slate-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-slate-800">General Instructions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-slate-600">
                      <p>Please arrive 15 minutes before your scheduled appointment time to complete any necessary paperwork.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Bring your BC Services Card (Care Card) and photo ID.</li>
                        <li>Bring the requisition form provided by your doctor.</li>
                        <li>Wear loose, comfortable clothing without metal zippers or buttons if possible.</li>
                        <li>Leave valuables at home.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold text-slate-800">Abdominal Ultrasound Prep</AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        You must fast (nothing to eat or drink) for 6-8 hours prior to your examination. This ensures the gallbladder is distended and visible, and minimizes bowel gas that can obscure organs. Small sips of water for medication are permitted.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-semibold text-slate-800">Pelvic Ultrasound Prep</AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        A full bladder is required for this exam. Please drink 1 liter (32 oz) of water finished 1 hour before your appointment time. Do not empty your bladder until after the examination is complete.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-semibold text-slate-800">Renal (Kidney) Ultrasound Prep</AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        Drink 2-3 glasses of water 1 hour before your appointment. You do not need an uncomfortably full bladder, but being well-hydrated helps visualize the kidneys.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-semibold text-slate-800">X-Ray Prep</AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        Generally, no specific preparation is required for X-ray exams. You may be asked to change into a gown and remove jewelry or metal objects from the area being imaged.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              {/* Insurance & Billing */}
              <div id="insurance" className="pt-8 border-t border-slate-100 animate-fade-in-up stagger-1">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900">Insurance & Billing</h2>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    Most medically necessary imaging services are covered by the Medical Services Plan (MSP) of British Columbia for eligible residents.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Private Pay / Non-Residents:</strong> If you do not have MSP coverage, payment is required at the time of service. We accept cash, debit, Visa, and MasterCard.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Immigration Exams:</strong> These exams are generally not covered by MSP and must be paid for by the patient. Please ask about current fees when booking your appointment.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="pt-8 border-t border-slate-100 animate-fade-in-up stagger-2">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <HelpCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="font-semibold text-slate-800">Do I need an appointment for X-rays?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Most general X-ray exams are done on a walk-in basis, first-come, first-served. However, CXR Immigration exams do require a booked appointment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="font-semibold text-slate-800">How long will my appointment take?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      X-ray exams typically take 10-15 minutes. Ultrasound exams usually take 30-45 minutes, depending on the type of study.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="font-semibold text-slate-800">When will my doctor get the results?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Our radiologists interpret the images and send a report to your doctor, typically within 24-48 hours. Urgent results are communicated immediately.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="font-semibold text-slate-800">Is parking available?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Yes, there is ample free parking available at Aberdeen Mall. The closest entrance to our clinic is the West Entrance on the upper level.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-slate-900 text-white sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="#preparation" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
                    <span>Exam Preparation</span>
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                  </a>
                  <a href="#insurance" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
                    <span>Insurance & Billing</span>
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                  </a>
                  <a href="#faq" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
                    <span>FAQ</span>
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                  </a>
                  
                  <div className="pt-6 mt-6 border-t border-slate-700">
                    <h4 className="font-bold mb-2">Need Forms?</h4>
                    <p className="text-sm text-slate-400 mb-4">
                      Download common patient forms to fill out before your visit.
                    </p>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white">
                      <Download className="h-4 w-4 mr-2" /> Patient History Form
                    </Button>
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
