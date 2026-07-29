import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Search, TrendingUp, Calculator, Briefcase, Coins, Globe2,
  Phone, Mail, MapPin, Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-accountants.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import rahulSinha from "@/assets/rahul_sinha.jpeg";
import dheerajSihota from "@/assets/dheeraj_sihota.png";
import amanBansal from "@/assets/amanbansal.png";
import riddhi from "@/assets/riddhi_khandelwal.jpeg";
import amrapali from "@/assets/cs_amrapali.png";
import { SiteLayout } from "@/components/site-layout";
import { Seo } from "@/components/seo";
import { createContactRow, type SheetContactRow } from "@/lib/sheety";

function AddressSlider() {
  const items = [
    "Chartered Accountants | Jaipur, India",
    "Chartered Accountants | Bengaluru, India",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full overflow-hidden" aria-live="polite">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(${ -index * 100 }%)` }}
      >
        {items.map((t, i) => (
          <div key={i} className="min-w-full">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              {t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the page component directly for react-router usage
export default Index;

const services = [
  { icon: Search, title: "Audit and Assurance", slug: "audit-and-assurance", desc: "Statutory Audit, Limited Review and certifications. Ind-AS & IFRS Reporting and Accounting Advisory." },
  { icon: TrendingUp, title: "Risk Management", slug: "risk-management", desc: "Internal Audits, Risk and Controls, Internal Financial Controls, Fraud and Forensic Investigation." },
  { icon: Calculator, title: "Business Advisory", slug: "business-advisory", desc: "Business strategies and structuring. Assistance in setting up business in India as per legislative framework." },
  { icon: Briefcase, title: "Mergers and Acquisitions", slug: "mergers-and-acquisitions", desc: "Due Diligence Advisory and Assistance in executing demerger, merger and business restructuring." },
  { icon: Coins, title: "Tax Advisory", slug: "tax-advisory", desc: "Developing tax strategies & planning. Analysing impact of tax laws on various business strategies." },
  { icon: Globe2, title: "International Services", slug: "international-taxation", desc: "Foreign country taxation and regional tax issues. Tax effective repatriation and exit strategies. Transfer pricing." },
];

const team = [
  { name: "Rahul Sinha", role: "Founding Partner", slug: "rahul-sinha", image: rahulSinha },
  { name: "Dheeraj Sihota", role: "Partner", slug: "dheeraj-sihota", image: dheerajSihota },
  { name: "Riddhi Khandelwal", role: "Partner", slug: "riddhi-khandelwal", image: riddhi },
  { name: "CS Amrapali", role: "Our CS", slug: "cs-amrapali", image: amrapali },
  { name: "Aman Bansal", role: "Associate", slug: "aman-bansal", image: amanBansal },
];

const offices = [
  {
    city: "Bengaluru",
    address: "No. 13-14, SV Complex, Navodaya Nagar, Kothanur Main Road, JP Nagar 7th Phase, Bengaluru, Bengaluru Urban, Karnataka – 560078",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7859.830873312726!2d77.57126904179097!3d12.881926849700816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2013-14%2C%20SV%20Complex%2C%20Navodaya%20Nagar%2C%20Kothanur%20Main%20Road%2C%20JP%20Nagar%207th%20Phase%2C%20Bengaluru%2C%20Bengaluru%20Urban%2C%20Karnataka%20%E2%80%93%20560078!5e1!3m2!1sen!2sin!4v1784897851471!5m2!1sen!2sin"
  },
  {
    city: "Jaipur",
    address: "B-221, Sagar Path, Nemi Nagar Extension, Block A, Vaishali Nagar, Jaipur, Rajasthan 302021",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.7665589548205!2d75.73027607548194!3d26.91278897664716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db35f6743c865%3A0xad9d89d69ac0f0aa!2sB-221%2C%20Sagar%20Path%2C%20Ganga%20Sagar-B%2C%20Nemi%20Nagar%20Extension%2C%20Block%20A%2C%20Vaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e1!3m2!1sen!2sin!4v1784897618617!5m2!1sen!2sin"
  },
];

function OfficeMapCard({ office }: { office: (typeof offices)[number] }) {
  return (
    <div className="reveal reveal-up overflow-hidden border border-border bg-card shadow-(--shadow-card)">
      <div className="aspect-16/10 w-full overflow-hidden">
        <iframe
          title={`${office.city} Office Map`}
          src={office.mapUrl}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
      <div className="p-6">
        <div className="font-display text-2xl font-bold uppercase text-foreground">{office.city} Office</div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{office.address}</p>
      </div>
    </div>
  );
}

function Index() {
  const stats = [
    { label: "Years of Experience", value: 8, suffix: "+" },
    { label: "Clients Served", value: 2000, suffix: "+" },
    { label: "Audits Handled", value: 60, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
  ];
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const [form, setForm] = useState<SheetContactRow>({ name: "", city: "", email: "", mobile: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const teamSliderRef = useRef<HTMLDivElement | null>(null);
  const [teamCanScrollLeft, setTeamCanScrollLeft] = useState(false);
  const [teamCanScrollRight, setTeamCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    try {
      await createContactRow(form);
      setSubmitSuccess("Your request has been sent successfully. We will contact you soon.");
      setForm({ name: "", city: "", email: "", mobile: "", message: "" });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollByPage = (direction: number) => {
    const el = sliderRef.current;
    if (!el) return;

    const offset = el.clientWidth;
    el.scrollBy({ left: direction * offset, behavior: "smooth" });
  };

  const teamUpdateScrollState = useCallback(() => {
    const el = teamSliderRef.current;
    if (!el) {
      setTeamCanScrollLeft(false);
      setTeamCanScrollRight(false);
      return;
    }

    setTeamCanScrollLeft(el.scrollLeft > 0);
    setTeamCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const teamScrollByPage = (direction: number) => {
    const el = teamSliderRef.current;
    if (!el) return;
    const offset = el.clientWidth;
    el.scrollBy({ left: direction * offset, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollState();
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = Math.max(1, Math.floor(stat.value / 80));
      let current = 0;
      return window.setInterval(() => {
        current = Math.min(stat.value, current + increment);
        setCounts((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });
        if (current >= stat.value) {
          window.clearInterval(intervals[index]);
        }
      }, 40);
    });

    return () => intervals.forEach((id) => window.clearInterval(id));
  }, []);

  return (
    <SiteLayout>
      <Seo
        title="Chartered Accountants in Jaipur & Bengaluru"
        description="CA Sinha Rahul & Co. delivers audit, tax, compliance, corporate law, ESG advisory and CSR services for startups, SMEs, and listed companies in India."
        path="/"
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30" />
        </div>
        <div className="absolute -right-24 -top-24 hidden h-130 w-130 rounded-full bg-primary/90 md:block" />

        <div className="absolute right-3 top-4 block h-24 w-24 sm:right-8 sm:top-8 sm:h-28 sm:w-28 md:right-10 md:top-16 md:block md:h-36 md:w-36 lg:right-20 lg:top-24 lg:h-40 lg:w-40">
          <div className="relative h-full w-full">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow text-white">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text fill="currentColor" fontSize="11.5" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="4">
                <textPath href="#badge-circle" startOffset="0" lengthAdjust="spacingAndGlyphs">
                  • SINHA RAHUL & CO. • JAIPUR & BENGALURU • EST. 2004
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-3 grid place-items-center rounded-full bg-white shadow-2xl sm:inset-5 md:inset-6">
              <div className="text-center">
                <div className="font-display text-[15px] font-extrabold leading-none text-primary sm:text-xl md:text-2xl">CA</div>
                <div className="mt-1 text-[6px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-[8px] md:text-[9px]">Sinha Rahul</div>
                <div className="text-[6px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-[8px] md:text-[9px]">& Co.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-x relative py-28 md:py-40 lg:py-52">
          <div className="max-w-3xl text-white">
            <div className="reveal reveal-left mb-6 flex items-center gap-4">
              <div className="overflow-hidden h-5">
                <AddressSlider />
              </div>
            </div>
            <div className="reveal reveal-left mb-8 h-0.75 w-40 bg-primary" data-delay="1" />
            <h1 className="heading-display reveal reveal-up text-white" data-delay="2">
              Welcome To<br />
              <span className="text-white">Sinha Rahul & Co.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Services slider */}
      <section id="services" className="relative pt-16 pb-20 md:pt-20">
        <div className="container-x">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="section-eyebrow">Services</div>
              <h2 className="mt-3 text-3xl font-bold uppercase text-foreground">Our Service Offerings</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                disabled={!canScrollLeft}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="sr-only">Scroll left</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                disabled={!canScrollRight}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="sr-only">Scroll right</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="no-scrollbar grid auto-cols-[minmax(280px,606px)] grid-flow-col gap-6 overflow-x-auto pb-1 pt-1 snap-x snap-mandatory touch-pan-x"
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="snap-start pl-4 md:basis-[45%] lg:basis-[33%]">
                  <Link
                    to={`/services/${s.slug}`}
                    className="group relative flex flex-col h-full min-h-80 overflow-hidden rounded-3xl border border-border bg-card p-8 text-card-foreground shadow-(--shadow-card) transition-all duration-500 hover:-translate-y-1 hover:bg-[rgb(18,27,53)] hover:text-white hover:shadow-(--shadow-elevated)"
                  >
                    <span className="absolute right-6 top-4 font-display text-6xl font-bold text-foreground/10 transition-colors duration-500 group-hover:text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mb-6 grid h-14 w-14 place-items-center rounded-3xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase text-foreground transition-colors duration-500 group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/90">
                      {s.desc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors duration-500 group-hover:text-white">
                      Read More
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground transition-colors duration-500 group-hover:bg-white group-hover:text-[rgb(18,27,53)]">+</span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-surface py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal reveal-right" data-delay="1">
            <div className="section-eyebrow">About Us</div>
            <div className="mt-1 h-0.75 w-16 bg-primary" />
            <h2 className="heading-display mt-6">
              <span className="text-primary">What</span> Are We?
            </h2>
            <div className="mt-4 h-0.75 w-16 bg-primary" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">SINHA RAHUL & CO.</span> is a full-service Chartered Accountancy firm helping individuals, startups, and businesses stay compliant, plan smarter, and grow with confidence. From tax and audit to company registration and business advisory, we bring together deep technical expertise and a genuinely client-first approach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe good advice should be clear, timely, and built around your business — not generic. That's the standard every engagement is held to.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg">
              Read More
            </Link>
          </div>

          <div className="reveal reveal-left relative">
            <div className="absolute -left-2 top-0 h-24 w-1.5 bg-primary" />
            <img src={about1} alt="Chartered accountants at work" width={1200} height={900} loading="lazy" className="w-full object-cover shadow-(--shadow-elevated)" />
            <img src={about2} alt="Team meeting" width={900} height={700} loading="lazy" className="absolute -bottom-10 right-0 hidden w-64 border-8 border-background object-cover shadow-(--shadow-elevated) sm:block md:w-80" />
            <div className="absolute -bottom-6 left-6 animate-float bg-primary px-8 py-6 text-primary-foreground shadow-(--shadow-elevated)" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 88%, 0 100%)" }}>
              <div className="font-display text-5xl font-extrabold leading-none">8+</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider">Years of<br />Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated stats */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="reveal reveal-up overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-(--shadow-card)">
                <div className="text-5xl font-extrabold text-primary">
                  {counts[index].toLocaleString()}<span className="text-2xl font-semibold">{stat.suffix}</span>
                </div>
                <div className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 md:py-24">
        <div className="container-x">
          <div className="section-eyebrow">Team</div>
          <div className="mt-1 h-0.75 w-16 bg-primary" />
          <h2 className="heading-display mt-6">
            <span className="text-primary">Meet</span> Our Team
          </h2>
          <div className="mt-4 h-0.75 w-16 bg-primary" />

          <div className="mt-14">
            <div className="mb-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => teamScrollByPage(-1)}
                disabled={!teamCanScrollLeft}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="sr-only">Scroll left</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => teamScrollByPage(1)}
                disabled={!teamCanScrollRight}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="sr-only">Scroll right</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div ref={teamSliderRef} className="no-scrollbar grid auto-cols-[minmax(340px,340px)] grid-flow-col gap-8 overflow-x-auto pb-1 pt-1 snap-x snap-mandatory touch-pan-x">
              {team.map((m, i) => (
                <Link key={m.name} to={`/team#${m.slug}`} className="snap-start w-85 shrink-0">
                  <div className="reveal reveal-up group relative block w-full overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-500 shadow-(--shadow-card)">
                    <div className="aspect-4/5 w-full overflow-hidden bg-surface">
                      {m.image ? (
                        <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                      ) : (
                        <svg viewBox="0 0 200 250" className="h-full w-full text-muted-foreground/60">
                          <rect width="200" height="250" fill="currentColor" opacity="0.15" />
                          <circle cx="100" cy="95" r="42" fill="currentColor" opacity="0.55" />
                          <path d="M30 250 C 30 175, 170 175, 170 250 Z" fill="currentColor" opacity="0.55" />
                        </svg>
                      )}
                    </div>
                    <div className="bg-card px-6 py-5">
                      <div className="font-display text-xl font-bold uppercase text-foreground wrap-break-word whitespace-normal">{m.name}</div>
                      <div className="mt-1 text-sm italic text-muted-foreground wrap-break-word whitespace-normal">{m.role}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Callback */}
      <section id="contact" className="py-20 md:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="reveal reveal-right" data-delay="1">
            <div className="section-eyebrow">Request A Call Back</div>
<div className="mt-1 h-0.75 w-16 bg-primary" />
          <h2 className="heading-display mt-6">
            <span className="text-primary">We</span> Are Always Ready
          </h2>
          <div className="mt-4 h-0.75 w-16 bg-primary" />

            {(submitSuccess || submitError) && (
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                {submitSuccess && <p className="text-green-300">{submitSuccess}</p>}
                {submitError && <p className="text-rose-300">{submitError}</p>}
              </div>
            )}

            <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                required
              />
              <input
                name="city"
                value={form.city}
                onChange={handleInputChange}
                placeholder="City"
                className="border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleInputChange}
                type="email"
                placeholder="E-Mail"
                className="border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                required
              />
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleInputChange}
                placeholder="Mobile"
                className="border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Type Your Message.."
                rows={5}
                className="border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary sm:col-span-2"
                required
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary px-10 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div className="reveal reveal-left bg-ink p-8 text-ink-foreground md:p-12">
            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Head Office", body: "No. 13-14, SV Complex, Navodaya Nagar, Kothanur Main Road, JP Nagar 7th Phase, Bengaluru, Bengaluru Urban, Karnataka – 560078." },
                { icon: Phone, title: "Contact No.", body: "+91 85600 88000", href: "tel:+918560088000" },
                { icon: Mail, title: "Email ID", body: "Rksinha.1710@gmail.com", href: "mailto:Rksinha.1710@gmail.com" },
                { icon: Clock, title: "Office Timing", body: "Monday - Saturday : 10 AM to 6 PM" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="flex items-start gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-primary shadow-lg">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="font-display text-xl font-bold uppercase">{c.title}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            window.location.href = c.href!;
                          }}
                          className="mt-1 block text-sm leading-relaxed text-white/80 transition-colors hover:text-primary"
                        >
                          {c.body}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm leading-relaxed text-white/80">{c.body}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="pb-24">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2">
            {offices.map((office, i) => (
              <div key={office.city} data-delay={i + 1}>
                <OfficeMapCard office={office} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
