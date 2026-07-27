import { SiteLayout, PageHero } from "@/components/site-layout";
import heroImg from "@/assets/hero-accountants.jpg";
import { Seo } from "@/components/seo";
import { useState } from "react";
import { createCareerRow, type SheetCareerRow } from "@/lib/sheety";

export default function CareersPage() {
  const inputCls = "border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary w-full";
  const [form, setForm] = useState<SheetCareerRow>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    position: "",
    dob: "",
    qualification: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    try {
      await createCareerRow(form);
      setSubmitSuccess("Application submitted successfully. We will get back to you soon.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        gender: "",
        position: "",
        dob: "",
        qualification: "",
        experience: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <Seo
        title="Career Opportunities at CA Sinha Rahul & Co."
        description="Join CA Sinha Rahul & Co. in Jaipur or Bengaluru. We're hiring Chartered Accountants and support professionals for audit, tax, and advisory services."
        path="/careers"
      />
      <PageHero title="Career" crumb="Career" image={heroImg} />

      <section className="py-20">
        <div className="container-x reveal reveal-up bg-card p-8 shadow-(--shadow-card) md:p-12">
          <h2 className="text-center font-display text-3xl font-bold uppercase">- Apply Here -</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            We nurture and cultivate a sense of pride in the work and create team leaders. Your growth chart will be
            governed by well-defined transparent policies of the firm. Apply via the form below and meet us for a face
            to face interview.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">First name <span className="text-primary">*</span></label>
              <input name="firstName" value={form.firstName} onChange={handleChange} className={inputCls + " mt-2"} required />
            </div>
            <div>
              <label className="text-sm font-semibold">Last name <span className="text-primary">*</span></label>
              <input name="lastName" value={form.lastName} onChange={handleChange} className={inputCls + " mt-2"} required />
            </div>
            <div>
              <label className="text-sm font-semibold">Email <span className="text-primary">*</span></label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className={inputCls + " mt-2"} required />
            </div>
            <div>
              <label className="text-sm font-semibold">Mobile No <span className="text-primary">*</span></label>
              <input name="mobile" value={form.mobile} onChange={handleChange} className={inputCls + " mt-2"} required />
            </div>
            <div>
              <label className="text-sm font-semibold">Gender <span className="text-primary">*</span></label>
              <select name="gender" value={form.gender} onChange={handleChange} className={inputCls + " mt-2"} required>
                <option value="" disabled>Select..</option>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold">Position you are applying for</label>
              <input name="position" value={form.position} onChange={handleChange} className={inputCls + " mt-2"} />
            </div>
            <div>
              <label className="text-sm font-semibold">Date Of Birth <span className="text-primary">*</span></label>
              <input name="dob" type="date" value={form.dob} onChange={handleChange} className={inputCls + " mt-2"} required />
            </div>
            <div>
              <label className="text-sm font-semibold">Highest Qualification</label>
              <input name="qualification" value={form.qualification} onChange={handleChange} className={inputCls + " mt-2"} />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold">Work Experience</label>
              <textarea name="experience" rows={4} value={form.experience} onChange={handleChange} className={inputCls + " mt-2"} />
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={isSubmitting} className="bg-primary px-10 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
          {(submitSuccess || submitError) && (
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              {submitSuccess && <p className="text-green-300">{submitSuccess}</p>}
              {submitError && <p className="text-rose-300">{submitError}</p>}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
