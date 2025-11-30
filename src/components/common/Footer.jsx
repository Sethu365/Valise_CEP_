import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png"; // <-- your logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { label: "Web Development", path: "/courses?category=Web Development" },
      { label: "Data Science", path: "/courses?category=Data Science" },
      { label: "UI/UX Design", path: "/courses?category=Design" },
      { label: "Cloud Computing", path: "/courses?category=Cloud Computing" },
    ],
    company: [
      { label: "About Us", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Careers", path: "/careers" },
      { label: "Contact Us", path: "/contact" },
    ],
    // SUPPORT REMOVED from UI as per your request
  };

  const socialLinks = [
    { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, url: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topSection}>
          {/* BRAND + CONTACT */}
          <div className={styles.brandSection}>
            <Link to="/" className={styles.logo} aria-label="TakeOff Upskill home">
              <img
                src={logo}
                alt="TakeOff Upskill"
                className={styles.logoImg}
              />
            </Link>

            <p className={styles.description}>
              Course discovery and enquiry support for learners and teams. Share
              your goals once, and we help you connect with the right programs
              and institutes.
            </p>

            <div className={styles.contactInfo}>
              <a
                href="mailto:info@takeoffupskill.com"
                className={styles.contactItem}
              >
                <Mail size={16} />
                info@takeoffupskill.com
              </a>
              <a href="tel:+1234567890" className={styles.contactItem}>
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                123 Learning St, Tech City
              </div>
            </div>
          </div>

          {/* LINKS (Courses + Company only) */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>Courses</h3>
              {footerLinks.courses.map((link) => (
                <Link key={link.path} to={link.path} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.linkColumn}>
              <h3>Company</h3>
              {footerLinks.company.map((link) => (
                <Link key={link.path} to={link.path} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} TakeOff Upskill. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className={styles.socialLink}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
