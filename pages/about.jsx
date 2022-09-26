const AboutPage = () => {
  return (
    <>
      <h3>My name is Ujjwal Kumar, and currently pursuing Bachelor Of Technology in the department of Computer Science and Engineering from 
        National Institute Of Technology, Sikkim.
      </h3>
      <h3>My technical skills includes Web develoment and Blockchain . I am proficient in C,C++,java, javascript and solidity</h3>
      <h3>I am currently the volunteer of Training and Placement Cell of the institute which deals with the placement opportunities of the students.  </h3>
      <h3>I am also the core member of DevCans Coding club which helps the students to improve their coding and develoment skills</h3>
      <h3>I would like to explore my skills under the supervision of a good mentor.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
