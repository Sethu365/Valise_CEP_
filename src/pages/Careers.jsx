import { useState, useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import styles from "./Careers.module.css";
import { Inbox, Paperclip, UploadCloud, CheckCircle } from "lucide-react";

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef();

  const courses = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Cloud Computing",
    "Cyber Security",
    "Mobile Development",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Valid email required";
    if (!form.course) e.course = "Select a course";
    if (!form.phone.match(/^\+?\d{7,15}$/)) e.phone = "Valid phone required";
    if (!file) e.file = "Upload CV";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleFile = (f) => {
    if (!f) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(f.type)) {
      setErrors((prev) => ({
        ...prev,
        file: "Please upload PDF / DOC / DOCX",
      }));
      return;
    }
    setFile(f);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const onDrop = (ev) => {
    ev.preventDefault();
    handleFile(ev.dataTransfer.files[0]);
  };

  const onSelectFile = (ev) => {
    handleFile(ev.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));

    setSuccess({
      title: "Application submitted",
      message: "We will review your details and contact you soon.",
    });

    setForm({ name: "", email: "", course: "", phone: "" });
    setFile(null);
    setErrors({});
    setSubmitting(false);
  };

  return (
    <PageTransition>
      <div className={styles.wrapper}>
        {/* HERO SECTION */}
        <header className={styles.hero}>
          <motion.div
            className={styles.heroInner}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className={styles.heroEyebrow}>INSTRUCTOR & MENTOR OPPORTUNITIES</p>
            <h1>Teach. Grow. Impact — join Conzura’s learning network.</h1>
            <p className={styles.lead}>
              Share your expertise with thousands of learners. Flexible
              engagement models, fair revenue sharing and a platform designed to
              amplify your teaching career.
            </p>
            <div className={styles.heroActions}>
              <a href="#apply" className={styles.primaryBtn}>
                Apply now
              </a>
              <a href="#why-us" className={styles.ghostBtn}>
                Why teach with us
              </a>
            </div>
          </motion.div>
        </header>

        {/* WHY TEACH WITH US */}
        <section id="why-us" className={styles.whyUs}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2>Why teach with Conzura?</h2>
            <p className={styles.sub}>
              A professional ecosystem that respects your time, your expertise
              and your growth as an educator.
            </p>
          </motion.div>

          <div className={styles.cards}>
            {[
              {
                Icon: Inbox,
                title: "Global reach",
                copy: "Teach learners across geographies and build a visible professional brand.",
              },
              {
                Icon: UploadCloud,
                title: "Flexible delivery",
                copy: "Choose live cohorts, hybrid models or self-paced recordings that suit your schedule.",
              },
              {
                Icon: Paperclip,
                title: "Fair revenue",
                copy: "Transparent revenue share, performance bonuses and long-term collaboration options.",
              },
            ].map(({ Icon, title, copy }, idx) => (
              <motion.article
                key={title}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 * idx, duration: 0.45 }}
              >
                <div className={styles.cardIcon}>
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* APPLY SECTION */}
        <section id="apply" className={styles.applySection}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2>Ready to share your expertise?</h2>
            <p>
              Tell us about yourself, your primary domain and your teaching
              experience. Our academic partnerships team will review your
              profile and reach out with the next steps.
            </p>

            <ul className={styles.steps}>
              <li>
                <strong>1. Share your profile</strong>
                <span> – Submit your details and upload your latest CV.</span>
              </li>
              <li>
                <strong>2. Expert review</strong>
                <span> – Our team evaluates your domain fit and teaching background.</span>
              </li>
              <li>
                <strong>3. Onboarding & launch</strong>
                <span> – Co-design your program structure and go live with your cohort.</span>
              </li>
            </ul>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3>Instructor application</h3>

            <label>
              Full name
              <input
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </label>

            <label>
              Email address
              <input
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </label>

            <label>
              Preferred teaching domain
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
              >
                <option value="">Select a domain</option>
                {courses.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors.course && (
                <span className={styles.error}>{errors.course}</span>
              )}
            </label>

            <label>
              Phone / WhatsApp
              <input
                name="phone"
                placeholder="+91 XXXXXXXXXX"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </label>

            <div
              className={styles.dropzone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              onClick={() => fileRef.current?.click()}
            >
              <input
                type="file"
                ref={fileRef}
                onChange={onSelectFile}
                hidden
              />
              <UploadCloud size={20} />
              <div className={styles.dropzoneText}>
                <span>
                  {file ? file.name : "Upload CV (PDF / DOC / DOCX)"}
                </span>
                <small>Drag & drop or click to browse</small>
              </div>
            </div>
            {errors.file && (
              <span className={styles.error}>{errors.file}</span>
            )}

            {file && (
              <div className={styles.filePreview}>
                <CheckCircle size={16} />
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                >
                  Remove
                </button>
              </div>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit application"}
            </button>

            {success && (
              <div className={styles.success}>
                <strong>{success.title}</strong>
                <p>{success.message}</p>
              </div>
            )}
          </motion.form>
        </section>
      </div>
    </PageTransition>
  );
}
