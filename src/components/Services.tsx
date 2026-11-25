import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Monitor, Wifi, Server, HardDrive, Printer, Shield } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Computer Sales",
    description: "Wide range of desktops, laptops, and workstations from leading brands at competitive prices.",
    color: "cyan",
  },
  {
    icon: HardDrive,
    title: "Hardware Upgrades",
    description: "RAM upgrades, SSD installations, graphics cards, and custom PC builds tailored to your needs.",
    color: "blue",
  },
  {
    icon: Wifi,
    title: "Network Setup",
    description: "Professional LAN/WAN setup, WiFi installation, and network optimization for offices and homes.",
    color: "teal",
  },
  {
    icon: Server,
    title: "Server Solutions",
    description: "Server installation, configuration, and maintenance for small and medium businesses.",
    color: "indigo",
  },
  {
    icon: Printer,
    title: "Peripherals & Supplies",
    description: "Printers, scanners, UPS, and all computer accessories with genuine consumables.",
    color: "violet",
  },
  {
    icon: Shield,
    title: "AMC & Support",
    description: "Annual Maintenance Contracts with regular checkups and priority support services.",
    color: "emerald",
  },
];

const colorClasses = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/50" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "hover:border-blue-500/50" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "hover:border-teal-500/50" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "hover:border-indigo-500/50" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "hover:border-violet-500/50" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/50" },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-600 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Complete IT Solutions for Your Business
          </h2>
          <p className="text-lg text-slate-600">
            From hardware sales to networking services, we provide end-to-end IT solutions with expert support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${colors.border}`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}