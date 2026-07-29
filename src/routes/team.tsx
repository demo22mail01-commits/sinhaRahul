import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import rahulSinha from "@/assets/rahul_sinha.jpeg";
import dheerajSihota from "@/assets/dheeraj_sihota.png";
import amanBansal from "@/assets/amanbansal.png";
import riddhi from "@/assets/riddhi_khandelwal.jpeg";
import amrapali from "@/assets/cs_amrapali.png";
import { Seo } from "@/components/seo";

const partners = [
  {
    name: "Rahul Sinha",
    role: "Founding Partner",
    slug: "rahul-sinha",
    image: rahulSinha,
    bio: "Rahul is the founding force behind SINHA RAHUL & CO., bringing a well-rounded foundation across accountancy, law, and corporate governance to every engagement he leads. He is a Fellow Chartered Accountant (FCA), holds a B.Com and an LLB, and is currently pursuing his Company Secretary (CS) qualification. As the firm's Peer Reviewer, he upholds audit quality and professional standards — both within the firm and as an independent industry check. He oversees the firm's overall direction, client relationships, and technical standards.",
  },
  {
    name: "Dheeraj Sihota",
    role: "Partner",
    slug: "dheeraj-sihota",
    image: dheerajSihota,
    bio: "Dheeraj is an Associate Chartered Accountant with a Commerce and Master's (Abst) background, and his practice is built around hands-on audit and taxation work. His core areas span Internal Audit, Bank Audit, Taxation, GST, Income Tax, and Tax Audit — giving him a well-rounded command over both the compliance and assurance sides of the practice. Clients relying on him get a partner equally comfortable inside a company's books and across the full spectrum of tax filings.",
  },
  {
    name: "Riddhi Khandelwal",
    role: "Partner",
    slug: "riddhi-khandelwal",
    image: riddhi,
    bio: "Riddhi is an Associate Chartered Accountant with a Commerce background, contributing to the firm's growing bench of technical talent. As part of the team's next generation of professionals, she brings fresh, up-to-date training to client engagements, working closely with the firm's senior partners across audit and compliance assignments.",
  },
  {
    name: "CS Amrapali Shrivastav",
    role: "Our CS",
    slug: "cs-amrapali",
    image: amrapali,
    bio: "CS Amrapali brings focused support in corporate compliance and governance, helping clients navigate the procedural and regulatory dimensions of business operations with clarity and precision.",
  },
  {
    name: "Aman Bansal",
    role: "Associate",
    slug: "aman-bansal",
    image: amanBansal,
    bio: "Aman is an Associate Chartered Accountant (ACA) with a Commerce background (B.Com), further backed by a Diploma in Information Systems Audit (DISA) and a Certificate Course on Concurrent Audit (CCCA). This combination of accounting and IT-systems audit expertise gives him particular strength in audit and assurance engagements where financial accuracy and systems controls both matter. He brings this technical depth to the firm's audit and compliance work.",
  },
];

export default function TeamPage() {
  return (
    <SiteLayout>
      <Seo
        title="Our Team | CA Sinha Rahul & Co."
        description="Meet the Jaipur and Bengaluru chartered accountants and professional advisors at CA Sinha Rahul & Co."
        path="/team"
      />
      <PageHero title="Our Team" crumb="Team" image={heroImg} />

      <section className="py-20 md:py-24">
        <div className="container-x space-y-10">
          {partners.map((p, i) => (
            <article id={p.slug} key={p.name} data-delay={(i % 3) + 1} className="reveal reveal-up flex flex-col gap-8 bg-card p-8 shadow-(--shadow-card) md:flex-row md:p-10">
              <div className="shrink-0">
                <div className={`h-52 w-40 overflow-hidden rounded-none bg-surface ${p.slug === "rahul-sinha" ? "translate-y-6" : ""}`}>
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover object-center" />
                </div>
              </div>
              <div className="flex-1">
                <div className="font-display text-3xl font-bold uppercase text-foreground">{p.name}</div>
                <div className="mt-1 border-b-2 border-primary pb-3 text-sm font-semibold uppercase tracking-widest text-primary">{p.role}</div>
                <p className="mt-5 leading-relaxed text-muted-foreground">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
