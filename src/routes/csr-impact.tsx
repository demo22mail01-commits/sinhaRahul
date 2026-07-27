import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { Seo } from "@/components/seo";

export default function CsrPage() {

const items = [
  "Impact Assessment",
  "CSR Advisory - Policy framing and documentation",
  "CSR Reporting",
  "Support to NGO for Registering / listing on Social Stock Exchange",
  "Identification of thematic Areas Vis a vis SDGs",
  "Social Audits",
];

  return (
    <SiteLayout>
      <Seo
        title="CSR Impact Assessment and Social Audit Services"
        description="CA Sinha Rahul & Co. supports CSR impact assessment, social audit, policy framing and reporting for Indian corporates and NGOs."
        path="/csr-impact"
      />
      <PageHero title="CSR Impact Assessment and Social Audit" crumb="CSR Impact" image={heroImg} />
      <section className="py-20">
        <div className="container-x reveal reveal-up bg-card p-8 shadow-(--shadow-card) md:p-12">
          <p className="text-muted-foreground leading-relaxed">
            We help corporates and social sector organisations design, measure and report the impact of their CSR
            programmes in line with the Companies Act, SEBI guidelines and internationally accepted frameworks.
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
