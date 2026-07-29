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
  const isLanding = !slug || !item || !list;

  if (isLanding) {
    return (
      <SiteLayout>
        <Seo
          title="Knowledge Bank | CA Sinha Rahul & Co."
          description="Explore practical knowledge resources on tax, audit, compliance, and regulatory updates from CA Sinha Rahul & Co."
          path="/knowledge-bank"
        />
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.35)_100%)]" />
          </div>
          <div className="container-x relative flex min-h-105 items-center py-24">
            <div className="max-w-3xl rounded-4xl border border-white/20 bg-white/10 p-8 text-white shadow-(--shadow-elevated) backdrop-blur-md">
              <div className="section-eyebrow text-primary">Knowledge Bank</div>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Practical resources for tax, audit, and compliance decisions.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                Our Knowledge Bank brings together key regulatory updates, acts, rules, notifications, and circulars in one place for professionals and business owners.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-x space-y-8">
            <div className="rounded-4xl border border-border bg-linear-to-br from-primary/10 via-background to-card p-8 shadow-(--shadow-card)">
              <div className="section-eyebrow">What you will find</div>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase text-foreground">Useful insights for modern businesses</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                From tax acts and compliance rules to circulars and regulatory updates, the Knowledge Bank is designed to keep clients better informed with structured, practical resources.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {KNOWLEDGE_LIST.map((k) => (
                <Link key={k.slug} to={`/knowledge-bank/${k.slug}`} className="group rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-xl font-bold uppercase text-foreground">{k.title}</div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Browse curated resources covering essential legal and regulatory references for your business.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
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
          <div className="reveal reveal-up space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card)">
              <div className="font-display text-xl font-bold uppercase text-primary">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Stay informed with a curated collection of important references and updates tailored for clients, founders, and finance teams.
              </p>
            </div>
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
