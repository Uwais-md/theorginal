import React from 'react';

const testimonials = [
  {
    quote: "We are now saving 1-2 man-days each month.",
    text: "Due to improved invoice reconciliation, we are now saving 1-2 man-days each month, and we have a better understanding of our finances thanks to dashboards.",
    name: "Paweł Michalski",
    company: "VC leaders",
    country: "Poland",
  },
  {
    quote: "Without Midday I would've sold my company and lost loads of money",
    text: "",
    name: "Guy Solan",
    company: "Thetis Medical",
    country: "United Kingdom",
  },
  {
    quote: "It has completely transformed how I manage my day-to-day tasks",
    text: "From generating invoices to tracking projects and having all the information centralized in one place, the change has been remarkable.",
    name: "Facu Montanaro",
    company: "Kundo Studio",
    country: "Argentina",
  },
  {
    quote: "I prefer to have one tool for finances, similar to what Deel is for HR",
    text: "Midday helped me find a compromise with my tax advisor: I'm not using one of his supported clunky tools but an actually UX-friendly tool and can provide him with acceptable .csv. That's a big one!",
    name: "Richard Poelderl",
    company: "Conduct.bln",
    country: "Germany",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-16 mt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">What our users say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-neutral-900 p-6 rounded-xl shadow-lg hover:scale-105 cursor-pointer transform transition-transform duration-300 ${idx % 2 === 1 ? '-rotate-3 -ml-6' : idx % 3 === 0 ? 'rotate-3 -ml-7' : idx % 2 === 0 ? 'rotate-3 -ml-4' : ''}`}
            >
              <p className="text-lg font-semibold mb-4">“{t.quote}”</p>
              {t.text && <p className="text-sm text-gray-300 mb-4">{t.text}</p>}
              <div className="text-sm font-medium flex items-center space-x-2">
                <span className="text-white">{t.name}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {t.company} • {t.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
