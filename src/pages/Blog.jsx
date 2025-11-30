import { useState } from "react";
import blogCourses from "../mock/blogData";
import "./Blog.css";

function Blog() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // DETAIL VIEW
  if (selectedCourse) {
    return (
      <div className="blog-detail-wrapper">
        <div className="blog-detail-inner">
          <button
            className="back-btn"
            onClick={() => setSelectedCourse(null)}
          >
            ← Back to insights
          </button>

          <h1 className="detail-title">{selectedCourse.title}</h1>

          <img
            className="detail-image"
            src={selectedCourse.image}
            alt={selectedCourse.title}
          />

          <p className="detail-category">
            <strong>Category:</strong> {selectedCourse.category}
          </p>

          <div
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: selectedCourse.details }}
          />
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="blog-wrapper">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <h1>Learning insights for smarter course decisions.</h1>
          <p>
            Explore career roadmaps, tech trends and practical guides that help
            you pick the right programs — not just any program.
          </p>
        </div>
      </section>

      {/* LIST SECTION */}
      <section className="blog-list-section">
        <div className="blog-grid">
          {blogCourses.map((course) => (
            <article
              className="blog-card"
              key={course.id}
              onClick={() => setSelectedCourse(course)}
            >
              <div className="blog-image-wrap">
                <img
                  className="blog-img"
                  src={course.image}
                  alt={course.title}
                />
                <span className="blog-tag">{course.category}</span>
              </div>

              <div className="blog-body">
                <h3 className="blog-title">{course.title}</h3>
                <p className="blog-summary">{course.summary}</p>
                <button className="blog-link">Read insight →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
