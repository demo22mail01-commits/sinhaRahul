import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { CalendarDays, User } from "lucide-react";
import { Seo } from "@/components/seo";

export default function BlogPage() {

const posts = [
  { title: "BRSR Core: What Listed Companies Must Prepare For", date: "12 Jul 2026", author: "Rahul Sinha", excerpt: "SEBI's BRSR Core mandate expands assurance requirements across the top 1000 listed entities. Here's what leadership teams should be preparing for now." },
  { title: "Ind-AS Amendments Effective FY 2026-27", date: "28 Jun 2026", author: "Anita Verma", excerpt: "A quick walk-through of the recent Ind-AS amendments and the practical accounting impact across common transactions." },
  { title: "Internal Financial Controls: Getting the Basics Right", date: "10 Jun 2026", author: "Vikram Rao", excerpt: "The most common ICFR design gaps we see during audits — and how to close them before the year-end rush." },
  { title: "Transfer Pricing Documentation in 2026", date: "24 May 2026", author: "Anita Verma", excerpt: "Master file, local file, CbCR — what's changed, what's coming, and how to keep your TP documentation defensible." },
];

  return (
    <SiteLayout>
      <Seo
        title="Insights from CA Sinha Rahul & Co."
        description="Read updates on audit, tax, GST, ESG and corporate compliance from CA Sinha Rahul & Co. serving clients in Jaipur and Bengaluru."
        path="/blog"
      />
      <PageHero title="Blog" crumb="Blog" image={heroImg} />
      <section className="py-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {posts.map((p, i) => (
            <article key={p.title} data-delay={(i % 3) + 1} className="reveal reveal-up group cursor-pointer bg-card p-8 shadow-(--shadow-card) transition-all duration-500 hover:-translate-y-1 hover:shadow-(--shadow-elevated)">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> {p.date}</span>
                <span className="flex items-center gap-2"><User className="h-4 w-4 text-primary" /> {p.author}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight transition-colors group-hover:text-primary">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                Read More <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">+</span>
              </span>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
