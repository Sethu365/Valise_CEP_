import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Award, CheckCircle } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import { setPageTitle, formatCurrency } from "../utils/helpers";
import seedData from "../mock/seed.json";
import styles from "./CourseDetail.module.css";

const extrasByCourseId = {
  "course-001": {
    learn: [
      "Build full-stack apps with React, Node.js and MongoDB",
      "Design secure REST APIs and handle authentication",
      "Deploy production-ready apps and follow best practices",
      "Collaborate using Git, GitHub and modern workflows",
    ],
    audience: [
      "Students looking to become full-stack developers",
      "Working professionals switching from non-tech roles",
      "Frontend devs who want to learn backend & databases",
    ],
  },
  "course-002": {
    learn: [
      "Use Python for data analysis, cleaning and visualization",
      "Implement core machine learning algorithms from scratch",
      "Train, tune and evaluate classification & regression models",
      "Work with real-world datasets and deploy simple ML pipelines",
    ],
    audience: [
      "Beginners in Data Science with basic Python knowledge",
      "Engineers who want to move into ML roles",
      "Analytics professionals upgrading from Excel to ML",
    ],
  },
  "course-003": {
    learn: [
      "Design responsive interfaces using Figma",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes and design systems",
      "Build a strong portfolio with case studies",
    ],
    audience: [
      "Aspiring UI/UX designers starting from scratch",
      "Developers who want to understand design better",
      "Product managers who work closely with design teams",
    ],
  },
  "course-004": {
    learn: [
      "Understand core AWS services like EC2, S3, RDS and Lambda",
      "Design secure, scalable cloud architectures",
      "Prepare for AWS certification exams",
      "Deploy and monitor real workloads on AWS",
    ],
    audience: [
      "Developers who want to move into cloud roles",
      "System admins and DevOps engineers",
      "Students planning AWS certifications",
    ],
  },
  "course-005": {
    learn: [
      "Build cross-platform apps with React Native",
      "Integrate APIs, navigation, storage and authentication",
      "Prepare apps for App Store & Play Store submission",
      "Use modern patterns for scalable mobile apps",
    ],
    audience: [
      "Web devs who want to enter mobile development",
      "Students looking to ship their first mobile app",
      "Founders building MVPs for their startups",
    ],
  },
  "course-006": {
    learn: [
      "Plan and execute end-to-end digital marketing campaigns",
      "Use SEO, content, social media and paid ads together",
      "Measure performance using analytics tools",
      "Build marketing funnels that convert visitors to customers",
    ],
    audience: [
      "Freelancers and agency owners",
      "Founders and business owners growing online presence",
      "Students aspiring for marketing & growth roles",
    ],
  },
    "course-007": {
    learn: [
      "Build full-stack applications using Python, Django and REST APIs",
      "Design relational database models and work with ORM",
      "Implement authentication, authorization and secure file handling",
      "Deploy Django apps to production environments"
    ],
    audience: [
      "Students who know basic Python and want to enter web development",
      "Working professionals moving into backend / full-stack roles",
      "Founders who want to build production-grade MVPs with Python"
    ]
  },
  "course-008": {
    learn: [
      "Use Java and Spring Boot to build enterprise backends",
      "Expose REST APIs and integrate with modern frontends",
      "Implement security, validation and error handling",
      "Deploy Java services in production environments"
    ],
    audience: [
      "Students with core Java knowledge aiming for Java developer roles",
      "Backend developers who want to formalize Spring Boot skills",
      "Engineers preparing for enterprise Java interviews"
    ]
  },
  "course-009": {
    learn: [
      "Perform data cleaning and analysis with Excel and SQL",
      "Write analytical SQL queries for business questions",
      "Create interactive dashboards and reports in Power BI",
      "Present insights clearly to business stakeholders"
    ],
    audience: [
      "Students and freshers targeting data analyst roles",
      "Working professionals moving from operations/finance to analytics",
      "Anyone who works with data and wants stronger reporting skills"
    ]
  },
  "course-010": {
    learn: [
      "Understand the core ideas behind machine learning",
      "Implement common ML algorithms using scikit-learn",
      "Evaluate models with the right metrics and validation",
      "Build and ship end-to-end ML mini-projects"
    ],
    audience: [
      "Beginners with basic Python looking to enter AI/ML",
      "Software engineers transitioning into ML roles",
      "Students preparing for ML internships and projects"
    ]
  },
  "course-011": {
    learn: [
      "Design strong data models for BI use cases",
      "Write DAX to create powerful measures and calculations",
      "Build user-friendly dashboards for business teams",
      "Publish, secure and manage Power BI content"
    ],
    audience: [
      "Analysts who already use Power BI and want to go deeper",
      "Excel / SQL users moving into BI developer roles",
      "Consultants building dashboards for clients"
    ]
  },
  "course-012": {
    learn: [
      "Apply DevOps principles to modern software projects",
      "Containerize applications using Docker",
      "Deploy and manage workloads on Kubernetes",
      "Set up CI/CD pipelines and cloud deployments"
    ],
    audience: [
      "Developers and sysadmins moving into DevOps roles",
      "Students wanting a practical intro to DevOps tools",
      "Teams building modern delivery pipelines for their apps"
    ]
  }
};

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    const foundCourse = seedData.courses.find((c) => c.slug === slug);
    if (foundCourse) {
      setCourse(foundCourse);
      setPageTitle(foundCourse.title);
      const foundInstructor = seedData.instructors.find(
        (i) => i.id === foundCourse.instructor
      );
      setInstructor(foundInstructor || null);
    }
  }, [slug]);

  if (!course) {
    return (
      <PageTransition>
        <div className="container" style={{ padding: "5rem 0" }}>
          Course not found.
        </div>
      </PageTransition>
    );
  }

  const extras = extrasByCourseId[course.id] || { learn: [], audience: [] };

  return (
    <PageTransition>
      <div className={styles.page}>
        {/* ================= HERO ================= */}
        <section className={styles.hero}>
          <div className={styles.heroInner + " container"}>
            <motion.div
              className={styles.heroLeft}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className={styles.category}>{course.category}</span>

              <h1 className={styles.title}>{course.title}</h1>

              <p className={styles.subtitle}>{course.shortDescription}</p>

              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <Users size={18} />
                  <div>
                    <span className={styles.metaLabel}>Students</span>
                    <span className={styles.metaValue}>
                      {course.studentsEnrolled.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <Clock size={18} />
                  <div>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{course.duration}</span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <Award size={18} />
                  <div>
                    <span className={styles.metaLabel}>Level</span>
                    <span className={styles.metaValue}>{course.level}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className={styles.previewCard}>
                <img src={course.thumbnail} alt={course.title} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= BODY ================= */}
        <main className={styles.body + " container"}>
          {/* LEFT MAIN COLUMN */}
          <div className={styles.main}>
            {/* ABOUT COURSE */}
            <section className={styles.section}>
              <h2>About This Course</h2>
              <p>{course.description}</p>
            </section>

            {/* WHAT YOU'LL LEARN */}
            {(extras.learn.length > 0 || course.features?.length > 0) && (
              <section className={styles.section}>
                <h2>What You’ll Learn</h2>
                <div className={styles.bulletsGrid}>
                  {(extras.learn.length > 0 ? extras.learn : course.features).map(
                    (item, i) => (
                      <div key={i} className={styles.bulletItem}>
                        <CheckCircle size={18} />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* SYLLABUS */}
            {course.syllabus && course.syllabus.length > 0 && (
              <section className={styles.section}>
                <h2>Course Syllabus</h2>
                <div className={styles.syllabusList}>
                  {course.syllabus.map((week) => (
                    <div key={week.week} className={styles.syllabusItem}>
                      <div className={styles.syllabusHeader}>
                        <span className={styles.weekBadge}>Week {week.week}</span>
                        <h3>{week.title}</h3>
                      </div>
                      <ul>
                        {week.topics.map((topic, i) => (
                          <li key={i}>
                            <CheckCircle size={16} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* WHO THIS COURSE IS FOR */}
            {extras.audience.length > 0 && (
              <section className={styles.section}>
                <h2>Who Is This Course For?</h2>
                <div className={styles.bulletsGrid}>
                  {extras.audience.map((item, i) => (
                    <div key={i} className={styles.bulletItem}>
                      <CheckCircle size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* INSTRUCTOR */}
            {instructor && (
              <section className={styles.section}>
                <h2>Your Instructor</h2>
                <div className={styles.instructorCard}>
                  <div className={styles.instructorAvatarWrap}>
                    <img src={instructor.image} alt={instructor.name} />
                  </div>
                  <div className={styles.instructorBody}>
                    <h3>{instructor.name}</h3>
                    <p className={styles.instructorTitle}>{instructor.title}</p>
                    <p className={styles.instructorBio}>{instructor.bio}</p>
                    <div className={styles.instructorStats}>
                      <span>
                        ⭐ {instructor.rating} rating •{" "}
                        {instructor.studentsCount.toLocaleString()} learners
                      </span>
                      <span>📚 {instructor.coursesCount}+ courses</span>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.priceCard}>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>
                  {formatCurrency(course.price)}
                </span>
                {course.originalPrice && (
                  <span className={styles.originalPrice}>
                    {formatCurrency(course.originalPrice)}
                  </span>
                )}
              </div>

              <p className={styles.discountLine}>
                Limited seats • Includes certification & lifetime access
              </p>

              <Link to="/contact" className={styles.enquireBtn}>
                Enquire Now
              </Link>

              <div className={styles.cardDivider} />

              <div className={styles.includes}>
                <h3>This course includes</h3>
                <ul>
                  {course.features?.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.guarantee}>
                <p>✅ 30-day satisfaction guarantee</p>
                <p>✅ Flexible batch timings & mentor support</p>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </PageTransition>
  );
};

export default CourseDetail;
