import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { Seo } from "@/components/seo";

export default function DisclaimerPage() {
  return (
    <SiteLayout>
      <Seo
        title="Disclaimer | CA Sinha Rahul & Co."
        description="Read the disclaimer for CA Sinha Rahul & Co., including professional advice, accuracy, and liability information."
        path="/disclaimer"
      />
      <PageHero title="Disclaimer" crumb="Disclaimer" image={heroImg} />

      <section className="py-20">
        <div className="container-x max-w-4xl">
          <div className="reveal reveal-up rounded-2xl border border-border bg-card p-8 shadow-(--shadow-card) md:p-12">
            <div className="section-eyebrow">Important Notice</div>
            <div className="mt-2 h-0.75 w-16 bg-primary" />
            <h2 className="heading-display mt-6">
              <span className="text-primary">General</span> Information Only
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The information provided on this website is for general informational purposes only and is not intended to be, nor should it be construed as, professional advice or a substitute for specific professional guidance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              CA Sinha Rahul & Co. makes every effort to ensure that the content is accurate and up to date; however, laws, regulations, and business practices may change, and readers should verify any information with appropriate professional advice before acting upon it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No liability is assumed for any loss or damage arising directly or indirectly from the use of this website or reliance on its contents.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
