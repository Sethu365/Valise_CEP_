import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import Pagination from "../components/common/Pagination";
import { setPageTitle } from "../utils/helpers";
import seedData from "../mock/seed.json";
import styles from "./Courses.module.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const categories = ["All", ...new Set(seedData.courses.map((c) => c.category))];

  useEffect(() => {
    setPageTitle("Courses");
    setCourses(seedData.courses);
    setFilteredCourses(seedData.courses);
  }, []);

  useEffect(() => {
    let filtered = courses;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(term) ||
          c.description.toLowerCase().includes(term)
      );
    }

    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, courses]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <PageTransition>
      <div className={styles.coursesPage}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={`container ${styles.headerInner}`}>
            <div>
              <h1>Explore programs & courses</h1>
              <p>
                Browse curated programs across technology, data, design and more.
                Use filters to quickly shortlist the right options for your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          {/* FILTERS */}
          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={18} />
              <input
                type="text"
                placeholder="Search by course name or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.categoryFilter}>
              <Filter size={18} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.resultsMeta}>
            Showing <strong>{filteredCourses.length}</strong>{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </div>

          {/* GRID */}
          <div className={styles.coursesGrid}>
            {currentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className={styles.courseCard}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.imageWrap}>
                  <img src={course.thumbnail} alt={course.title} />
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{course.category}</span>
                  <h3>{course.title}</h3>
                  <p>{course.shortDescription}</p>
                  <div className={styles.footer}>
                    <span className={styles.price}>₹{course.price}</span>
                    <Link
                      to={`/courses/${course.slug}`}
                      className={styles.detailsBtn}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className={styles.noCourses}>
              <p>No courses found matching your criteria.</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Courses;
