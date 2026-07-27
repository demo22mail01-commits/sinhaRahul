import { Link, useParams } from "react-router-dom";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { KNOWLEDGE_LIST } from "@/data/nav";
import heroImg from "@/assets/hero-accountants.jpg";
import { FileText } from "lucide-react";
import { Seo } from "@/components/seo";

const CONTENT: Record<string, string[]> = {
  acts: [
    "The Income-tax Act, 1961",
    "The Companies Act, 2013",
    "The Central Goods and Services Tax Act, 2017",
    "The Foreign Exchange Management Act, 1999",
    "The Insolvency and Bankruptcy Code, 2016",
    "The SEBI Act, 1992",
  ],
  rules: [
    "Income-tax Rules, 1962",
    "Companies (Auditor's Report) Rules, 2020",
    "CGST Rules, 2017",
    "FEM (Non-Debt Instruments) Rules, 2019",
    "IBBI (Insolvency Resolution Process) Regulations",
  ],
  notifications: [
    "CBDT Notifications on TDS thresholds",
    "MCA Notifications on Audit Trail",
    "GST Rate Notifications",
    "RBI Master Directions",
    "SEBI LODR Amendments",
  ],
  circulars: [
    "CBDT Circulars on Faceless Assessments",
    "CBIC Circulars on ITC clarifications",
    "MCA General Circulars",
    "SEBI Circulars on BRSR",
    "RBI Circulars on ECB norms",
  ],
};

export default function KnowledgePage() {
  const { slug } = useParams();
  const item = KNOWLEDGE_LIST.find((k) => k.slug === slug);
  const list = slug ? CONTENT[slug] : undefined;

  if (!item || !list) {
    return (
      <SiteLayout>
        <Seo
          title="Knowledge Bank Item Not Found"
          description="The requested knowledge bank item could not be found. Browse CA Sinha Rahul & Co.'s accounting, audit and compliance resources."
          path="/knowledge-bank"
        />
        <PageHero title="Not Found" crumb="Knowledge Bank" image={heroImg} />
        <div className="container-x py-20">Item not found.</div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <Seo
        title={`${item.title} | Knowledge Bank`}
        description={`Browse ${item.title} resources from CA Sinha Rahul & Co., including key acts, rules, notifications, and circulars.`}
        path={`/knowledge-bank/${item.slug}`}
      />
      <PageHero title={item.title} crumb={item.title} image={heroImg} />
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="reveal reveal-up space-y-3">
            {list.map((l: string) => (
              <div key={l} className="group flex items-center gap-4 bg-card p-5 shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
                <FileText className="h-5 w-5 shrink-0 text-primary transition-colors group-hover:text-primary-foreground" />
                <span className="font-medium">{l}</span>
              </div>
            ))}
          </div>
          <aside className="reveal reveal-right bg-ink p-6 text-ink-foreground" data-delay="1">
            <div className="font-display text-xl font-bold uppercase text-primary">Knowledge Bank</div>
            <div className="mt-4 h-0.5 w-12 bg-primary" />
            <ul className="mt-4 space-y-1">
              {KNOWLEDGE_LIST.map((k) => (
                <li key={k.slug}>
                  <Link to={`/knowledge-bank/${k.slug}`} className="block border-b border-white/10 px-3 py-2.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground">
                    {k.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
