import { CheckCircle, Clock, Shield, ThumbsUp, Wrench, Zap } from "lucide-react";

const reasons = [
  {
    icon: ThumbsUp,
    title: "Trusted Reputation",
    description: "Over 15 years of trusted service in Tirunelveli with thousands of satisfied customers.",
  },
  {
    icon: Shield,
    title: "Genuine Products",
    description: "We sell only authentic products with manufacturer warranty and proper documentation.",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Our certified technicians handle all repairs and installations with precision.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast service delivery with minimal downtime for your business operations.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description: "Best prices in the market without compromising on quality or service.",
  },
  {
    icon: CheckCircle,
    title: "After-Sales Support",
    description: "Dedicated support team for troubleshooting and maintenance after purchase.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Your IT Partner You Can Rely On
          </h2>
          <p className="text-lg text-slate-600">
            We go beyond just selling products – we build lasting relationships with our customers.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}