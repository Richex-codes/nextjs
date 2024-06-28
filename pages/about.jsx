import styles from "../styles/about.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Learn more about our journey and values</p>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To provide the best services and solutions that empower our clients to
          achieve their goals.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Story</h2>
        <p>
          Founded in 2010, our company has grown from a small startup to a
          leading provider in the industry. Our journey has been driven by a
          passion for innovation and a commitment to excellence.
        </p>
      </section>

      <section className={`${styles.section} ${styles.team}`}>
        <h2>Meet the Team</h2>
        <div className={styles.teamMember}>
          <img src="/images/team1.jpg" alt="Team Member 1" />
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className={styles.teamMember}>
          <img src="/images/team2.jpg" alt="Team Member 2" />
          <h3>John Smith</h3>
          <p>CTO</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.testimonials}`}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonial}>
          <p>
            "This company has transformed our business with their innovative
            solutions. Highly recommend!"
          </p>
          <p>- Client A</p>
        </div>
        <div className={styles.testimonial}>
          <p>
            "Outstanding service and support. Their team is incredibly
            knowledgeable and helpful."
          </p>
          <p>- Client B</p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.contact}`}>
        <Link href='/project'>Our project</Link>
        <Link href='/contact'><p>Contact us</p></Link>
        <Link href='/'>HOMEPAGE</Link>
      </section>
    </div>
  );
};

export default About;
