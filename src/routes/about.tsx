import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { Seo } from "@/components/seo";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export default function AboutPage() {
  const principles = [
  "Professional expertise",
  "Ethical business practices",
  "Commitment to quality and timeliness",
  "Personalised attention to every client",
  "Continuous learning and innovation",
];
  return (
    <SiteLayout>
      <Seo
        title="About CA Sinha Rahul & Co."
        description="Learn about CA Sinha Rahul & Co., a chartered accountancy firm offering audit, tax, corporate compliance and advisory services in Jaipur and Bengaluru."
        path="/about"
      />
      <PageHero title="About Us" crumb="About Us" image={heroImg} />

      <section className="py-20 md:py-24">
        <div className="container-x reveal reveal-up bg-card p-8 shadow-(--shadow-card) md:p-12">
          <h2 className="font-display text-3xl font-bold uppercase text-foreground">About Us</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            <strong>SINHA RAHUL & CO.</strong> is a Chartered Accountancy firm built to give clients more than compliance — real
            financial clarity they can act on. We work across Accounting, Audit & Assurance, Taxation, Corporate Law, and
            Business Advisory, serving individuals, startups, and established businesses alike, at every stage from first
            registration to complex multi-entity operations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every engagement is handled by a team that stays current — with the law, with technology, and with what your
            business actually needs at that stage of its growth. Regulations change often, sometimes overnight, and a filing
            done “correctly last year” isn't always correct today. We treat staying current as a core part of the job, not an
            afterthought.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We don't believe in one-size-fits-all filings. A startup raising its first round has different needs than a
            manufacturing business managing multi-state GST, and both are different again from an individual planning for
            retirement. We shape our approach around where you actually are, not where a template assumes you are.
          </p>

          <div className="mt-10">
            <div className="font-display text-2xl font-bold uppercase text-foreground">How We Work</div>
            <div className="mt-4 space-y-6 text-base leading-relaxed text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">We Respond Fast</div>
                Tax notices, GST mismatches, and compliance deadlines don't pause for anyone — and neither do we. Urgent queries
                are picked up the same day, often within hours, because a small issue caught early rarely becomes a penalty.
                We'd rather have an uncomfortable conversation now than a costly one later.
              </div>
              <div>
                <div className="font-semibold text-foreground">We Explain Everything</div>
                Every filing, return, and report comes with a plain-language breakdown of what was done, why it was done that way,
                and what it means for you going forward. You should never have to take our word for it without understanding it —
                we'd rather you ask questions than sign blindly.
              </div>
              <div>
                <div className="font-semibold text-foreground">One Team, Every Service</div>
                Tax, audit, compliance, corporate law, and advisory are all handled under one roof. That means no re-explaining
                your business to a different advisor for every service, no gaps between departments, and no finger-pointing when
                something falls between two providers. One team owns the full picture.
              </div>
              <div>
                <div className="font-semibold text-foreground">Pricing You Can Trust</div>
                You get a clear, itemized quote before any work begins — not an estimate that quietly grows once the engagement
                starts. If scope changes mid-way, we tell you before proceeding, not after the invoice arrives.
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="font-display text-2xl font-bold uppercase text-foreground">What Sets Us Apart</div>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
              {[
                "Real hands-on depth — our technical knowledge is built through years of actual audits, filings, and advisory work across industries, not just from staying current with textbooks and circulars.",
                "A team that keeps learning — tax law, company law, and GST rules shift constantly; our professionals train continuously so your filings are never based on outdated rules.",
                "Direct access, not layers — you deal with the people actually doing your work, not a rotating cast of account managers relaying messages back and forth.",
                "Advice built around your business — we take the time to understand your specific situation before recommending a structure, filing approach, or tax strategy, rather than reaching for a standard checklist.",
                "Consistency you can measure — the same standards, the same responsiveness, and the same quality of work whether it's your first engagement with us or your fiftieth.",
                "A firm that scales with you — from a single proprietorship's first ITR to a growing company's statutory audits and corporate restructuring, we grow alongside our clients instead of 'graduating' them to someone else.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <div className="font-display text-2xl font-bold uppercase text-foreground">Our Promise</div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We treat every client relationship as a long-term one, not a transaction. That means being upfront when something
              isn't in your best interest — even if it means less work for us — and flagging risks before they become problems
              rather than after. A filing is never “just paperwork” to us; it's a small but real part of your business's
              financial health, and we treat it that way every time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Trust, once built, is the thing we protect hardest. It shows up in the details: returning calls when we say we will,
              catching errors before they become notices, and giving you the same honest answer whether it's convenient for us
              or not.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
