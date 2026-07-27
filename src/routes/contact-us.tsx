import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Seo } from "@/components/seo";



export default function ContactPage() {

const offices = [
  { title: "Bengaluru Office", body: "No. 13-14, SV Complex, Navodaya Nagar, Kothanur Main Road, JP Nagar 7th Phase, Bengaluru, Bengaluru Urban, Karnataka – 560078." },
  { title: "Jaipur Office", body: "B-221, Sagar Path, Nemi Nagar Extension, Block A, Vaishali Nagar, Jaipur, Rajasthan 302021." },
];

const inputCls = "border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary w-full";

  return (
    <SiteLayout>
      <Seo
        title="Contact CA Sinha Rahul & Co."
        description="Contact our Jaipur and Bengaluru chartered accountants for audit, tax, compliance, ESG and corporate advisory support."
        path="/contact-us"
      />
      <PageHero title="Contact Us" crumb="Contact Us" image={heroImg} />

      <section className="py-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {offices.map((o, i) => (
            <div key={o.title} data-delay={i + 1} className="reveal reveal-up bg-card p-8 shadow-(--shadow-card)">
              <div className="grid h-14 w-14 place-items-center bg-primary text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-xl font-bold uppercase">Address</div>
              <div className="mt-2 h-0.5 w-12 bg-primary" />
              <p className="mt-4 text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="reveal reveal-left bg-ink p-8 text-ink-foreground md:p-12">
            <div className="space-y-8">
              {[
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

          <div className="reveal reveal-right" data-delay="1">
            <div className="section-eyebrow">Request A Call Back</div>
            <div className="mt-1 h-0.75 w-16 bg-primary" />
            <h2 className="heading-display mt-6"><span className="text-primary">We</span> Are Always Ready</h2>
            <div className="mt-4 h-0.75 w-16 bg-primary" />

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0 0 12.01.02 11.96 11.96 0 0 0 .9 11.37c0 2.11.55 4.17 1.6 6.01L.02 24l6.82-1.77a11.92 11.92 0 0 0 5.17 1.16h.02c6.6 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.01 21.5h-.01c-1.55 0-3.07-.32-4.44-.93l-.32-.14-4.05 1.05 1.08-3.95-.2-.33A9.3 9.3 0 0 1 2.8 11.36c0-5.07 4.13-9.2 9.2-9.2 2.46 0 4.77.96 6.51 2.7a9.18 9.18 0 0 1 2.7 6.49c0 5.07-4.13 9.2-9.2 9.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-primary">WhatsApp</div>
                  <a
                    href="https://wa.me/918560088000?text=Hi%20can%20I%20get%20more%20info%20on%20this"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg font-semibold text-white hover:text-primary"
                  >
                    +91 85600 88000
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">Message us on WhatsApp for quick responses to your audit, tax or compliance enquiry.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
              <input placeholder="Name" className={inputCls} />
              <input placeholder="City" className={inputCls} />
              <input placeholder="E-Mail" type="email" className={inputCls} />
              <input placeholder="Mobile" className={inputCls} />
              <textarea placeholder="Type Your Message.." rows={5} className={inputCls + " sm:col-span-2"} />
              <div className="sm:col-span-2">
                <button type="submit" className="bg-primary px-10 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
