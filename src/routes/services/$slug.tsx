import { Link, useParams } from "react-router-dom";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { SERVICES_LIST } from "@/data/nav";
import heroImg from "@/assets/img-X.png";
import { Seo } from "@/components/seo";

const SERVICE_CONTENT: Record<string, { intro: string; points: string[] }> = {
  "audit-and-assurance": {
    intro: "We provide independent audit and assurance services that lend credibility to your financial information and strengthen stakeholder confidence.",
    points: ["Statutory Audit under Companies Act", "Limited Reviews", "Tax Audit and other certifications", "Ind-AS and IFRS Reporting", "Accounting Advisory", "SOC 1 / SOC 2 Reporting"],
  },
  "risk-management": {
    intro: "Our risk practice helps organisations design, test and strengthen the controls that protect enterprise value.",
    points: ["Internal Audit", "Risk and Controls Advisory", "Internal Financial Controls (ICFR)", "Fraud and Forensic Investigation", "SOX Compliance", "Enterprise Risk Management"],
  },
  "business-advisory": {
    intro: "We help promoters, CFOs and boards structure and scale their businesses with clarity and control.",
    points: ["Business strategy and structuring", "Entry strategy for setting up in India", "Compliance frameworks", "MIS design and CFO support", "Group restructuring"],
  },
  "mergers-and-acquisitions": {
    intro: "End-to-end transaction advisory covering diligence, structuring and execution.",
    points: ["Financial and Tax Due Diligence", "Buy-side and Sell-side Advisory", "Scheme of Arrangement", "Demerger and Merger execution", "Business Restructuring"],
  },
  "valuations": {
    intro: "Independent valuations and business modelling for transactions, disputes and reporting.",
    points: ["Fair value under Ind-AS / IFRS", "Registered Valuer reports", "ESOP and Sweat Equity valuations", "Purchase Price Allocation", "Business modelling"],
  },
  "insolvency-resolutions": {
    intro: "Advisory to lenders, resolution applicants and corporate debtors under the IBC framework.",
    points: ["Resolution Professional support", "Claim verification", "Information memorandum", "Resolution plan review", "Liquidation support"],
  },
  "tax-advisory": {
    intro: "Comprehensive direct and indirect tax advisory, compliance and litigation support.",
    points: ["Corporate Tax Advisory", "Tax planning and structuring", "GST Advisory and Compliance", "Representation before authorities", "Tax Due Diligence"],
  },
  "international-taxation": {
    intro: "Cross-border tax and regulatory advisory for inbound and outbound structures.",
    points: ["Transfer Pricing – study, documentation, benchmarking", "FEMA advisory", "Tax-effective repatriation and exit", "Permanent Establishment analysis", "Treaty and DTAA advisory"],
  },
  "project-finance": {
    intro: "Advisory across the project finance lifecycle — from feasibility to closure.",
    points: ["Project reports and feasibility", "Debt syndication support", "CMA data preparation", "Lender negotiations", "Post-sanction monitoring"],
  },
  "succession-planning": {
    intro: "Structured succession and estate solutions for promoter families and business owners.",
    points: ["Family governance frameworks", "Trust structuring", "Will drafting support", "Business succession advisory", "Wealth preservation"],
  },
  "is-audit": {
    intro: "We help organisations strengthen IT governance, cybersecurity resilience and data integrity through independent information systems audits and advisory.",
    points: ["ITGC and application controls review", "ERP and business process controls testing", "Cybersecurity and access management assessments", "Data privacy and regulatory compliance review", "IT risk and control remediation planning"],
  },
  "business-setup-and-fund-raising-advisory": {
    intro: "We support founders and promoters at the start of their journey and when raising growth capital, with structuring, compliance and investor-ready documentation.",
    points: ["Business incorporation and regulatory setup", "Entity structuring for startups and scale-ups", "Fund raising strategy and capital planning", "Investor pitch support and financial modelling", "SEBI, FEMA and MCA compliance readiness"],
  },
  "handholding": {
    intro: "Long-term outsourced finance and compliance support for growing enterprises.",
    points: ["Bookkeeping and accounting", "Payroll processing", "Statutory compliances", "MIS and management reporting", "Virtual CFO services"],
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  const svc = SERVICES_LIST.find((s) => s.slug === slug);
  const content = slug ? SERVICE_CONTENT[slug] : undefined;

  if (!svc || !content) {
    return (
      <SiteLayout>
        <Seo
          title="Service Not Found"
          description="The requested service page was not found. Browse our audit, tax, compliance and advisory services at CA Sinha Rahul & Co."
          path="/services"
        />
        <PageHero title="Service Not Found" crumb="Services" image={heroImg} />
        <section className="container-x py-20 text-center">
          <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 inline-block bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground">Go Home</Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <Seo
        title={`${svc.title} | Services`}
        description={`Learn how CA Sinha Rahul & Co. supports clients with ${svc.title.toLowerCase()} and advisory services across audit, compliance, tax, and corporate law.`}
        path={`/services/${svc.slug}`}
      />
      <PageHero title={svc.title} crumb={svc.title} image={heroImg} />

      <section className="py-20">
        <div className="container-x">
          <div className="reveal reveal-up bg-card p-8 shadow-(--shadow-card) md:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground">{content.intro}</p>
            <div className="mt-8 font-display text-2xl font-bold uppercase">Our Offerings</div>
            <div className="mt-2 h-0.75 w-16 bg-primary" />
            <ul className="mt-6 space-y-3">
              {content.points.map((p: string) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
