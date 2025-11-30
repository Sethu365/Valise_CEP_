import "./About.css";
import {
  Target,
  Globe,
  Users,
  Award,
  CheckCircle,
  Rocket,
  Lightbulb,
  BookOpen,
  Layers,
} from "lucide-react";

export default function About() {
  return (
    <div className="about-wrapper">
      {/* HERO */}
      <section className="about-hero">
        <div className="container hero-inner">
          <div className="hero-pill">About Conzura Soft Solutions</div>

          <h1>Empowering minds. Shaping future-ready careers.</h1>

          <p>
            We help learners and teams discover the right programs, connect
            with trusted institutes and build globally competitive careers
            through guided course discovery and enquiry support.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stat-item">
          <h3>50K+</h3>
          <p>Learners guided</p>
        </div>
        <div className="stat-item">
          <h3>400+</h3>
          <p>Programs listed</p>
        </div>
        <div className="stat-item">
          <h3>120+</h3>
          <p>Partner institutes</p>
        </div>
        <div className="stat-item">
          <h3>300+</h3>
          <p>Industry projects</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Who we are</h2>
          <p className="section-desc">
            Conzura is a next-gen learning partner focused on course discovery,
            structured guidance and outcome-driven training. We connect
            learners, teams and institutes through a single, transparent
            enquiry experience.
          </p>
        </div>

        <div className="premium-grid">
          <div className="premium-card">
            <Target size={32} />
            <h3>Our mission</h3>
            <p>Empower learners with clear pathways and job-ready skills.</p>
          </div>

          <div className="premium-card">
            <Globe size={32} />
            <h3>Our vision</h3>
            <p>Build a global community of industry-ready professionals.</p>
          </div>

          <div className="premium-card">
            <Rocket size={32} />
            <h3>Our focus</h3>
            <p>
              Make high-quality programs discoverable, comparable and
              accessible.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section alt">
        <div className="section-header">
          <h2 className="section-title">Our core values</h2>
        </div>

        <div className="values-flex">
          <div className="value-card">
            <Lightbulb size={28} />
            <h3>Innovation</h3>
            <p>Modern, tech-driven workflows for course discovery.</p>
          </div>

          <div className="value-card">
            <Layers size={28} />
            <h3>Quality</h3>
            <p>Curated programs aligned to real hiring expectations.</p>
          </div>

          <div className="value-card">
            <CheckCircle size={28} />
            <h3>Integrity</h3>
            <p>Transparent information and honest recommendations.</p>
          </div>

          <div className="value-card">
            <Users size={28} />
            <h3>Community</h3>
            <p>Supportive ecosystem of learners, mentors and partners.</p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section workflow-section">
        <div className="section-header">
          <h2 className="section-title">How we work with learners</h2>
          <p className="section-desc">
            Every enquiry is treated like a consulting engagement. We understand
            your goals, curate the right options and guide you until you’re
            ready to enrol.
          </p>
        </div>

        <div className="workflow-grid">
          <div className="workflow-card">
            <BookOpen size={26} />
            <h3>1. Understand your goals</h3>
            <ul>
              <li>Profile discussion – background, interests and constraints</li>
              <li>Clarify outcomes – role, technology stack or domain</li>
              <li>Short discovery call or structured questionnaire</li>
            </ul>
          </div>

          <div className="workflow-card">
            <Layers size={26} />
            <h3>2. Curate the right programs</h3>
            <ul>
              <li>Match you with programs that fit budget and timelines</li>
              <li>Compare curriculum depth, delivery model and projects</li>
              <li>Highlight scholarship, EMI and placement-support options</li>
            </ul>
          </div>

          <div className="workflow-card">
            <CheckCircle size={26} />
            <h3>3. Enable smooth enrolment</h3>
            <ul>
              <li>Connect you with institute counsellors and coordinators</li>
              <li>Support with documentation, doubts and next-step clarity</li>
              <li>Stay available as a neutral, trusted advisor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Why learners choose us</h2>
        </div>

        <div className="choose-grid">
          <div className="choose-card">
            <BookOpen size={28} />
            <h3>Structured guidance</h3>
            <p>
              From enquiry to enrolment, we help you shortlist the most relevant
              programs.
            </p>
          </div>

          <div className="choose-card">
            <Award size={28} />
            <h3>Verified partners</h3>
            <p>
              Collaborations with institutes that meet our quality benchmarks.
            </p>
          </div>

          <div className="choose-card">
            <Globe size={28} />
            <h3>Multiple domains</h3>
            <p>Technology, data, design, management and more in one place.</p>
          </div>

          <div className="choose-card">
            <Users size={28} />
            <h3>Dedicated support</h3>
            <p>Prompt support for learners, parents and corporate teams.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact-section">
        <div className="impact-inner">
          <h2 className="section-title impact-title">Our impact</h2>
          <p className="impact-subtitle">
            We don’t just list courses. We help learners make confident,
            career-defining decisions that convert into real outcomes.
          </p>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-value">95%</div>
              <div className="impact-label">Reported skill uplift</div>
              <p className="impact-note">
                Learners reporting stronger technical and career clarity after
                guidance.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-value">40,000+</div>
              <div className="impact-label">Hours of counselling & training</div>
              <p className="impact-note">
                Guidance, doubt-clearing and program orientation sessions
                delivered.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-value">300+</div>
              <div className="impact-label">Live, hands-on projects</div>
              <p className="impact-note">
                Real-world projects executed across multiple tech and data
                domains.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-value">120+</div>
              <div className="impact-label">Recruitment & training partners</div>
              <p className="impact-note">
                Institutes and companies trusting Conzura as an upskilling
                partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
