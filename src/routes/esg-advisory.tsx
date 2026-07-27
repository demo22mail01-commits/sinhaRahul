import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { Seo } from "@/components/seo";

export default function EsgPage() {

const items = [
  "ESG Reporting (BRSR in India)",
  "ESG Consultancy",
  "ESG Assurance",
  "ESG Risk Rating",
  "ESG Due Diligence",
  "CSR Reporting and Certification",
];

  return (
    <SiteLayout>
      <Seo
        title="ESG Advisory Services"
        description="Our ESG advisory practice helps Indian companies with BRSR reporting, ESG assurance, ratings and sustainability disclosures."
        path="/esg-advisory"
      />
      <PageHero title="ESG Advisory" crumb="ESG Advisory" image={heroImg} />
      <section className="py-20">
        <div className="container-x reveal reveal-up bg-card p-8 shadow-(--shadow-card) md:p-12">
          <p className="text-muted-foreground leading-relaxed">
            Our ESG practice supports listed and unlisted companies through BRSR reporting, ESG strategy, assurance and
            ratings — aligned with SEBI regulations, GRI, SASB and TCFD frameworks.
          </p>
          <ul className="mt-8 space-y-4">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-4">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">➜</span>
                <span className="text-foreground">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
