import { Card, CardContent } from "./ui/card";
import { Users, Award, MapPin, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Serving Tirunelveli with Excellence Since 2009
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Global Info Sys has been a trusted name in hardware sales and networking services in Tirunelveli, Tamil Nadu. We combine technical expertise with personalized service to deliver solutions that truly matter.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our team of certified professionals is dedicated to providing quality products, reliable repairs, and robust networking solutions for homes, offices, and enterprises across the region.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Expert Team</p>
                  <p className="text-slate-400 text-sm">Certified professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Quality Products</p>
                  <p className="text-slate-400 text-sm">Genuine & warranted</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Local Presence</p>
                  <p className="text-slate-400 text-sm">Quick on-site support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">15+ Years</p>
                  <p className="text-slate-400 text-sm">Trusted experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800 border-slate-700 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-cyan-400" />
                      </div>
                      <p className="text-white font-semibold text-lg">5000+</p>
                      <p className="text-slate-400 text-sm">Satisfied Customers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 rounded-2xl overflow-hidden mt-8">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-10 h-10 text-blue-400" />
                      </div>
                      <p className="text-white font-semibold text-lg">100%</p>
                      <p className="text-slate-400 text-sm">Quality Assured</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}