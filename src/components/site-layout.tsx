import { Link } from "react-router-dom";
import { SERVICES_LIST } from "../data/nav";
import {
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ChevronUp, Menu, ChevronDown,
} from "lucide-react";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import footerBg from "@/assets/footer-bg.jpg";
import CursorEffect from "./cursor-effect";



// Navigation lists are imported from src/data/nav to keep exports stable for HMR

const NAV: { label: string; to?: string; children?: { label: string; to: string }[] }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  {
    label: "Services",
    children: SERVICES_LIST.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
  },
  { label: "International Services", to: "/services/international-taxation" },
  { label: "Blog", to: "/blog" },
  { label: "Knowledge Bank", to: "/knowledge-bank" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact-us" },
];

export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const handleProtocolClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  event.stopPropagation();
  window.location.href = href;
};

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="sticky top-0 z-40">
      <div className="hidden border-b border-white/10 bg-[rgb(18,27,53)] text-white lg:block">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-2 text-[12px] font-medium">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+918560088000" className="transition hover:text-primary">+91 85600 88000</a>
            <a href="mailto:Rksinha.1710@gmail.com" className="transition hover:text-primary">Rksinha.1710@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Follow us on:</span>
            <a href="https://wa.me/918560088000?text=Hi%20can%20I%20get%20more%20info%20on%20this" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-primary">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/sinha-rahul-co/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/sinharahulandco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/sinharahulandco/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 items-center">
            <div className="flex h-14 items-center pl-3 pr-5 text-white shadow-(--shadow-card)" style={{ backgroundColor: 'rgb(18,27,53)' }}>
              <div className="mr-3 grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-white text-[rgb(18,27,53)]">
                <span className="font-display text-xl font-extrabold leading-none">CA</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold uppercase tracking-wide sm:text-lg">Sinha Rahul & Co.</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.25em] opacity-90 sm:text-[10px]">Chartered Accountants</div>
              </div>
            </div>
          </Link>
          <nav className="hidden flex-1 items-center justify-end gap-x-3 text-[12px] font-semibold uppercase tracking-wide lg:flex xl:gap-x-5">
            {NAV.map((n) => (
              <div key={n.label} className="group relative py-2">
                {n.to ? (
                  <Link to={n.to} className="relative whitespace-nowrap text-foreground transition-colors hover:text-primary">
                    {n.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 whitespace-nowrap text-foreground transition-colors hover:text-primary">
                    {n.label} <ChevronDown className="h-3 w-3" />
                  </button>
                )}
                {n.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border border-border bg-card opacity-0 shadow-(--shadow-elevated) transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {n.children.map((c) => (
                      <Link key={c.to} to={c.to} className="block px-5 py-3 text-[13px] font-semibold uppercase text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-x flex flex-col py-3">
              {NAV.map((n) => (
                <div key={n.label} className="border-b border-border/60 py-1">
                  {n.to ? (
                    <Link to={n.to} onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold uppercase tracking-wide hover:text-primary">
                      {n.label}
                    </Link>
                  ) : (
                    <>
                      <div className="py-2 text-sm font-semibold uppercase tracking-wide text-primary">{n.label}</div>
                      <div className="ml-3 flex flex-col">
                        {n.children!.map((c) => (
                          <Link key={c.to} to={c.to} onClick={() => setMobileOpen(false)} className="py-1.5 text-xs font-medium uppercase hover:text-primary">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative bg-ink text-ink-foreground">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
        <img src={footerBg} alt="" width={1400} height={900} loading="lazy" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/70 to-transparent" />
      </div>

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center gap-4 rounded-sm bg-primary px-4 py-3">
            <div className="grid h-10 w-10 place-items-center rounded-sm bg-white text-primary">
              <span className="font-display text-xl font-extrabold">CA</span>
            </div>
            <div className="leading-tight text-primary-foreground">
              <div className="font-display text-lg font-bold uppercase">Sinha Rahul & Co.</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-90">Chartered Accountants</div>
            </div>
          </div>

        </div>

        <div>
          <div className="font-display text-xl font-bold uppercase text-primary">Quick Links</div>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Team", to: "/team" },
              { label: "Services", to: "/services/audit-and-assurance" },
              { label: "International Services", to: "/services/international-taxation" },
              { label: "Contact Us", to: "/contact-us" },
            ].map((l) => (
              <li key={l.label}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
            ))}
          </ul>

          <div className="mt-10">
            <div className="font-display text-xl font-bold uppercase text-primary">Contact Us</div>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3"><Mail className="h-4 w-4 shrink-0 text-primary" /><div><div className="font-semibold">Email</div><div className="text-white/80"><a href="mailto:Rksinha.1710@gmail.com" onClick={handleProtocolClick("mailto:Rksinha.1710@gmail.com")} className="hover:text-primary">Rksinha.1710@gmail.com</a></div></div></div>
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 shrink-0 text-primary" /><div><div className="font-semibold">Address</div><div className="text-white/80">Bengaluru: No. 13-14, SV Complex, Navodaya Nagar, Kothanur Main Road, JP Nagar 7th Phase, Bengaluru, Karnataka – 560078.<br /><br />Jaipur: B-221, Sagar Path, Nemi Nagar Extension, Block A, Vaishali Nagar, Jaipur, Rajasthan 302021.</div></div></div>
              <div className="flex items-start gap-3"><Phone className="h-4 w-4 shrink-0 text-primary" /><div><div className="font-semibold">Call Us</div><div className="text-white/80"><a href="tel:+918560088000" onClick={handleProtocolClick("tel:+918560088000")} className="hover:text-primary">+91 85600 88000</a></div></div></div>
            </div>
          </div>
        </div>

        <div>
          <div className="font-display text-xl font-bold uppercase text-primary">Services</div>
          <ul className="mt-6 space-y-3 text-sm">
            {SERVICES_LIST.slice(0, 6).map((l) => (
              <li key={l.slug}><Link to={`/services/${l.slug}`} className="hover:text-primary">{l.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-xl font-bold uppercase text-primary">Connect With Us</div>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/contact-us" className="hover:text-primary">Contact Form</Link></li>
            <li><a href="mailto:Rksinha.1710@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Email Us</a></li>
            <li><a href="tel:+918560088000" className="hover:text-primary">Call Us</a></li>
            <li><a href="https://wa.me/918560088000?text=Hi%20can%20I%20get%20more%20info%20on%20this" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-sm md:flex-row md:items-center">
          <div className="flex items-center gap-5 text-white/80">
            <a href="https://www.facebook.com/sinharahulandco/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/sinharahulandco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/company/sinha-rahul-co/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link>
          </div>
          <div className="text-white/60">©2026 CA Sinha Rahul & Co. All Rights Reserved.</div>
          <div className="text-white/60">Designed and developed by Syntroxi Private Limited</div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ title, crumb, image }: { title: string; crumb: string; image: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container-x relative flex min-h-90 flex-col items-center justify-center py-24 text-center text-white md:min-h-110">
        <h1 className="reveal reveal-up heading-display text-white">{title}</h1>
        <div className="reveal reveal-up mt-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em]" data-delay="1">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="grid h-6 w-6 place-items-center rounded-full border border-primary text-primary">›</span>
          <span className="text-primary">{crumb}</span>
        </div>
      </div>
    </section>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useRevealOnScroll();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div id="top" />
      <CursorEffect />
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <a
        href="https://wa.me/918560088000?text=Hi%20can%20I%20get%20more%20info%20on%20this"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7">
          <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0 0 12.01.02 11.96 11.96 0 0 0 .9 11.37c0 2.11.55 4.17 1.6 6.01L.02 24l6.82-1.77a11.92 11.92 0 0 0 5.17 1.16h.02c6.6 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.01 21.5h-.01c-1.55 0-3.07-.32-4.44-.93l-.32-.14-4.05 1.05 1.08-3.95-.2-.33A9.3 9.3 0 0 1 2.8 11.36c0-5.07 4.13-9.2 9.2-9.2 2.46 0 4.77.96 6.51 2.7a9.18 9.18 0 0 1 2.7 6.49c0 5.07-4.13 9.2-9.2 9.2z" />
        </svg>
      </a>
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-30 grid h-12 w-12 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-lg transition-transform hover:-translate-y-1"
      >
        <ChevronUp className="h-6 w-6" />
      </a>
    </div>
  );
}
