export const initialState = {
  introduction: {
    job_title: "Web Developer",
    firstname: "Morgan",
    lastname: "Hana",
    email: "hana20@gmail.com",
    phone_number: "347-526-1828",
    profile_image:
      "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
    country: "USA",
    city: "New York",
    address: "Manhattan 1549 Stanley Avenue",
    date_of_birth: "10/04/1991",
    postal_code: "10016",
  },

  summary:
    "I strive to associate myself with an organisation where I can utilise my skills in the best possible manner, which further gives me an opportunity to grow in my career journey while contributing to the development of the organisation.",
  experience: [
    {
      id: "1",
      job_title: "Computer Programmer",
      employer: "IBM",
      location: "New York",
      start_date: "2012",
      end_date: "2015",
      description: (
        <>
          <ul>
            <li>I build responsive web application for industries.</li>
          </ul>
          <ul>
            <li>
              I managed, and filtered contents on the blog of the Mogrex
              personal website.
            </li>
          </ul>
          <ul>
            <li>We build websites for other organisations using wordpress.</li>
          </ul>
          <ul>
            <li>We educate users on how to use newly developed websites.</li>
          </ul>
        </>
      ),
      present: false,
    },
    {
      id: "2",
      job_title: "Computer Programmer",
      employer: "IBM",
      location: "New York",
      start_date: "2012",
      end_date: "2015",
      description: (
        <>
          <ul>
            <li>I build responsive web application for industries.</li>
          </ul>
          <ul>
            <li>
              I managed, and filtered contents on the blog of the Mogrex
              personal website.
            </li>
          </ul>
          <ul>
            <li>We build websites for other organisations using wordpress.</li>
          </ul>
          <ul>
            <li>We educate users on how to use newly developed websites.</li>
          </ul>
        </>
      ),
      present: false,
    },
  ],
  education: [
    {
      id: "1",
      school: "Oxford University",
      degree: "BSC",
      discipline: "Computer Science",
      location: "United Kindom",
      description: "",
      start_date: "2013",
      end_date: "2017",
    },
  ],
  links: [
    {
      label: "facebook",
      link: "hana@facebook",
    },
    {
      label: "instagram",
      link: "hana@instagram",
    },
    {
      label: "linkedin",
      link: "hana@linkedin",
    },
    {
      label: "twitter",
      link: "hana@twitter",
    },
  ],
  skills: [
    {
      skill: "JavaScript",
      level: "50%",
    },
    {
      skill: "MongoDB",
      level: "70%",
    },
    {
      skill: "ReactJS",
      level: "50%",
    },
  ],
  languages: [
    {
      language: "English",
      level: "50%",
    },
    {
      language: "French",
      level: "90%",
    },
  ],

  certifications: [
    {
      id: "1",
      certification_name:
        "React - The Complete Guide (incl Hooks, React Router, Redux)",
      description: "",
      start_date: "03/08/2016",
      end_date: "04/02/2017",
    },
    {
      id: "2",
      certification_name:
        "The complete JavaScript course: from zero to expert.",
      description: "",
      start_date: "03/08/2016",
      end_date: "04/02/2017",
    },
    {
      id: "3",
      certification_name:
        "The complete JavaScript course: from zero to expert.",
      description: "",
      start_date: "03/08/2016",
      end_date: "04/02/2017",
    },
    {
      id: "4",
      certification_name:
        "Build a responsive real-world website with HTML, CSS, and JavaScript",
      description: "",
      start_date: "03/08/2016",
      end_date: "04/02/2017",
    },
    {
      id: "5",
      certification_name:
        "MERN stack front to back: react, mongodb, nodejs, and expressjs.",
      description: "",
      start_date: "03/08/2016",
      end_date: "04/02/2017",
    },
  ],
  hobies: ["Reading", "Coding"],
  refferences: [
    {
      name: "Franklin Donal",
      organization: "lukulaku",
      email: "franklin@lukulaku.com",
    },
  ],
};
