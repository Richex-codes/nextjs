import styles from '../styles/contact.module.css';
import Link from 'next/link';
const Contact = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out to us with any questions or feedback.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Get in Touch</h2>
        <form className={styles.form}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <section className={styles.section}>
        <h2>Contact Information</h2>
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:info@company.com">info@company.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: 1234 Street Name, City, Country</p>
          <p>Follow us on <a href="https://twitter.com/company" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://facebook.com/company" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Find Us</h2>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.386263315426!2d-122.41941528468115!3d37.77492957975915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x2e5b5b5b5b5b5b5b!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1514321234567"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
      <section className={`${styles.section} ${styles.contact}`}>
        <Link href='/'><h1>HomePage</h1></Link>
      </section>
    </div>
  );
};

export default Contact;
