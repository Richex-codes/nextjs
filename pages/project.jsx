import styles from '../styles/project.module.css';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/images/project1.jpg',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/images/project2.jpg',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: '/images/project3.jpg',
    link: '/projects/3'
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Our Projects</h1>
        <p>Take a look at some of our recent work.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Project Gallery</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a href={project.link} className={styles.cta}>View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className={styles.cta}>
        <h2>Want to start a new project?</h2>
        <Link href='/contact'>Contact Us</Link>
      </section>
    </div>
  );
};

export default Project;
