import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'b200062@nitsikkim.ac.in',
    href: 'mailto:b200062@nitsikkim.ac.in',
  },
  {
    social: 'github',
    link: 'champ-ujjwal',
    href: 'https://github.com/champ-ujjwal',
  },
  {
    social: 'linkedin',
    link: 'ujjwal-kumar',
    href: 'https://www.linkedin.com/in/ujjwal-kumar-1198a0225',
  },
  {
    social: 'twitter',
    link: 'Ujjwal_singh',
    href: 'https://twitter.com/UJJWALSINGH2204',
  },
  {
    social: 'codechef',
    link: 'Ujjwal_kumar',
    href: 'https://www.codechef.com/users/ujjwalkumar22',
  },
  {
    social: 'instagram',
    link: 'ujjwal_singh',
    href: 'https://www.instagram.com/2001ujjwalkumarsingh/',
  },
 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
