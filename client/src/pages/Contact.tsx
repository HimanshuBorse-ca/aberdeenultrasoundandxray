import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { MapView } from "@/components/Map";
import { useScrollReveal } from "@/hooks/useParallax";

export default function Contact() {
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help with your medical imaging needs. Reach out to book an appointment or ask a question.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={revealRef}>
            {/* Contact Info & Map */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md bg-slate-50">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Phone & Fax</h3>
                    <p className="text-slate-600 text-sm mb-1">Phone: (250) 372-1145</p>
                    <p className="text-slate-600 text-sm">Fax: (250) 372-8318</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-slate-50">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600 text-sm">aberux@gmail.com</p>
                    <p className="text-slate-500 text-xs mt-2">For general inquiries only. Do not send medical records via email.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-slate-50 md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-accent">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Location</h3>
                        <p className="text-slate-600 text-sm mb-2">
                          Unit 250 - 1320 West Trans-Canada Hwy<br/>
                          Kamloops, BC V1S 1J2
                        </p>
                        <p className="text-slate-500 text-sm">
                          Located at the West Entrance on the upper level of Aberdeen Mall. Ample free parking available.
                        </p>
                      </div>
                      <div className="flex-1 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                          <Clock className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Hours</h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <div className="flex justify-between">
                            <span>Mon - Fri:</span>
                            <span className="font-medium">8:00AM - 4:00PM</span>
                          </div>
                          <div className="flex justify-between text-accent">
                            <span>Lunch:</span>
                            <span className="font-medium">12:00PM - 12:30PM</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>Weekends:</span>
                            <span>Closed</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>Holidays:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="h-[400px] rounded-xl overflow-hidden shadow-lg border border-slate-200 relative z-0">
                <MapView 
                  className="w-full h-full"
                  onMapReady={(map: google.maps.Map) => {
                    const location = { lat: 50.6545606, lng: -120.3741032 };
                    map.setCenter(location);
                    map.setZoom(15);
                    new google.maps.Marker({
                      position: location,
                      map: map,
                      title: "Aberdeen Ultrasound & X-Ray"
                    });
                  }}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 h-fit animate-slide-in-right">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(250) 555-0123" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Inquiry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xray">X-Ray Services</SelectItem>
                      <SelectItem value="ultrasound">Ultrasound Appointment</SelectItem>
                      <SelectItem value="immigration">Immigration Exam</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you? Please do not include sensitive medical information." 
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-lg">
                  Send Message
                </Button>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  By submitting this form, you agree to be contacted by Aberdeen Ultrasound & X-Ray regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
