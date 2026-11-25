import { Button } from "./ui/button";
import { ArrowRight, Monitor, Wifi, Shield, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-20 bg-slate-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Trusted Partner in Tirunelveli</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Hardware & Networking
              </span>{" "}
              Partner
            </h1>

            <p className="text-lg text-slate-400 max-w-xl">
              Expert hardware sales, professional service, and reliable networking solutions for businesses and homes in Tirunelveli, Tamil Nadu.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 h-14 text-base"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 h-14 px-8 text-base"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">5000+</p>
                <p className="text-sm text-slate-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-slate-400">Support</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Monitor className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Hardware Sales</h3>
                <p className="text-slate-400 text-sm">Quality computers, laptops & peripherals</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Shield className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Expert Service</h3>
                <p className="text-slate-400 text-sm">Professional repair & maintenance</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Wifi className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Networking</h3>
                <p className="text-slate-400 text-sm">Complete network infrastructure</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Clock className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Quick Support</h3>
                <p className="text-slate-400 text-sm">Fast response & resolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}