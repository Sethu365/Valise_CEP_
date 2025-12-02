// src/pages/Contact.jsx
import { useEffect, useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import { setPageTitle } from "../utils/helpers";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    setPageTitle("Contact");
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null); // ref for EmailJS

  const courses = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Cloud Computing",
    "Cyber Security",
    "Mobile App Development",
  ];

  const handleChange = (e) => {
    setSubmitted(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSending(true);

    try {
      // 👇 Replace these with your actual EmailJS IDs
      const SERVICE_ID = "service_dqlssfs";
      const TEMPLATE_ID = "template_5d294t3";
      const PUBLIC_KEY = "7rdoLB7DHMBzAkPil";

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setSubmitted(true);

      // Reset controlled inputs
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send enquiry. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageTransition>
      <div className={styles.wrapper}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div>
              <p className={styles.heroEyebrow}>Contact</p>
              <h1 className={styles.heroTitle}>Let’s talk about your learning goals</h1>
              <p className={styles.heroSubtitle}>
                Share a few details about your course interests and our team will
                get back to you with the right guidance, batch options, and fee
                structure.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className={styles.main}>
          <div className={`container ${styles.mainInner}`}>
            {/* LEFT: Info panel */}
            <div className={styles.infoPanel}>
              <h2>Talk to our team</h2>
              <p className={styles.infoText}>
                Whether you are exploring a single course or planning a learning
                roadmap for your team, we’re here to help you choose the right
                path.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <p className={styles.infoValue}>info@conzuragroups.com</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Phone</p>
                    <p className={styles.infoValue}>+91 98765 43210</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>Chennai, India</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Working hours</p>
                    <p className={styles.infoValue}>Mon – Sat, 10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              <p className={styles.infoNote}>
                Prefer email? Just drop us a line with your profile and
                interested course, and we’ll respond within one working day.
              </p>
            </div>

            {/* RIGHT: Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Course enquiry form</h2>
              <p className={styles.formSubtitle}>
                Tell us what you’re looking for and we’ll share the best-fit
                options.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.form}
              >
                {/* Name */}
                <label className={styles.field}>
                  <span>Full name</span>
                  <input
                    type="text"
                    name="name" // <-- EmailJS uses this as {{name}}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </label>

                {/* Email */}
                <label className={styles.field}>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email" // <-- {{email}}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </label>

                {/* Phone */}
                <label className={styles.field}>
                  <span>Phone number</span>
                  <input
                    type="text"
                    name="phone" // <-- {{phone}}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </label>

                {/* Course */}
                <label className={styles.field}>
                  <span>Select course</span>
                  <select
                    name="course" // <-- {{course}}
                    value={form.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Message */}
                <label className={styles.field}>
                  <span>Message</span>
                  <textarea
                    name="message" // <-- {{message}}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background and what you want to achieve…"
                    rows={4}
                    required
                  />
                </label>

                {/* Submit */}
                <button type="submit" className={styles.submitBtn} disabled={sending}>
                  {sending ? "Sending..." : "Submit enquiry"}
                </button>

                {submitted && (
                  <div className={styles.successNote}>
                    Your enquiry has been submitted. Our team will get in touch
                    with you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
