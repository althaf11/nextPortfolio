import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio - Patan Althaf Khan</title>
        <meta name="description" content="Patan Althaf Khan's personal portfolio showcasing skills, projects, certifications, and contact information." />
        <link rel="icon" href="/newfavicon.png" />
      </Head>

      <main className="bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Patan Althaf Khan</h1>
            <p className="text-lg md:text-xl mb-6">A Passionate Web Developer</p>
            <a
              href="#contact"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-700">
              I'm a passionate web developer skilled in modern technologies. I specialize in creating
              responsive and user-friendly web applications.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Bootstrap",
                "Tailwind CSS",
                "Daisy UI",
                "Material UI",
                "Python",
                "C",
                "Basic Java",
              ].map((skill, index) => (
                <div key={index} className="p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <ul className="space-y-6">
              <li className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold">10th Standard</h3>
                <p>Sri Chaitanya Techno Circulum</p>
              </li>
              <li className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold">Inter</h3>
                <p>Sri Chaitanya Junior College</p>
              </li>
              <li className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold">B.Tech</h3>
                <p>Malineni Perumallu Educational Society's Group of Institutions</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Project 1",
                  image: "/Jewellery.png",
                  description: "Jewellery shop Website",
                  link: "https://github.com/althaf11/My_Jwellery",
                },
                {
                  name: "Project 2",
                  image: "/Bookstore.png",
                  description: "A BookStore Website",
                  link: "https://github.com/althaf11/bookstoreapp",
                },
                {
                  name: "Project 3",
                  image: "/addtocart.png",
                  description: "Add To Cart Functionality",
                  link: "https://www.linkedin.com/posts/althaf-khan-patan-80a721214_reactjs-webdevelopment-ecommerce-activity-7260587456763166720-LCYv?utm_source=share&utm_medium=member_desktop",
                },
                {
                  name: "Project 4",
                  image: "/expire.png",
                  description: "Expiry System",
                  link: "https://github.com/althaf11/xpire",
                },
              ].map((project, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <img src={project.image} alt={project.name} className="rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Certification 1",
                  image: "/UI.png",
                  link: "https://lnkd.in/geGWKk5X",
                },
                {
                  name: "Certification 2",
                  image: "/coapps.png",
                  link: "https://www.linkedin.com/posts/althaf-khan-patan-80a721214_coapps-activity-7198239051999555584-PVyN?utm_source=share&utm_medium=member_desktop",
                },
                {
                  name: "Certification 3",
                  image: "/Microsoft.png",
                  link: "https://www.linkedin.com/posts/althaf-khan-patan-80a721214_microsoft-activity-6970266251382181889-Klzc?utm_source=share&utm_medium=member_desktop",
                },
                {
                  name: "Certification 4",
                  image: "/genai.png",
                  link: "https://learn.microsoft.com/en-us/users/patanalthafkhan-7541/achievements/blz5u63d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
                },
                {
                  name: "Certification 5",
                  image: "/ds.png",
                  link: "https://www.linkedin.com/posts/althaf-khan-patan-80a721214_thanks-for-make-skilled-activity-6973873866909634560-MQPX?utm_source=share&utm_medium=member_desktop",
                },
                {
                  name: "Certification 6",
                  image: "/Nipuna.png",
                  link: "https://www.linkedin.com/posts/althaf-khan-patan-80a721214_nipunatechnologies-html-css-activity-7213539127638601729-8d6l?utm_source=share&utm_medium=member_desktop",
                },
                {
                  name: "Certification 7",
                  image: "/ds2.png",
                  link: "https://www.linkedin.com/posts/althaf-khan-patan-80a721214_%F0%9D%95%92%F0%9D%95%94%F0%9D%95%94%F0%9D%95%96%F0%9D%95%9F%F0%9D%95%A5%F0%9D%95%A6%F0%9D%95%A3%F0%9D%95%96-activity-7173315938505646080-oqcK?utm_source=share&utm_medium=member_desktop",
                },
                {
                  name: "Certification 8",
                  image: "/udemyds.png",
                  link: "https://lnkd.in/ghkek9Vp",
                },
                {
                  name: "Certification 9",
                  image: "/react.png",
                  link: "https://lnkd.in/gTdzURDt",
                },
                {
                  name: "Certification 10",
                  image: "/mern.png",
                  link: "https://lnkd.in/gUXyBEXM",
                },
              ].map((cert, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <img src={cert.image} alt={cert.name} className="rounded-lg mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View Certification
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <p className="text-lg mb-8">
      I'm open to opportunities and collaborations. Feel free to reach out!
    </p>
    <div className="flex justify-center space-x-6 text-xl">
      {/* Phone */}
      <a href="tel:8688198816" className="flex items-center space-x-2 hover:text-gray-300">
        <i className="fas fa-phone-alt"></i>
        <span>8688198816</span>
      </a>
      {/* Email */}
      <a href="mailto:pathanalthaf89012@gmail.com" className="flex items-center space-x-2 hover:text-gray-300">
        <i className="fas fa-envelope"></i>
        <span>pathanalthaf89012@gmail.com</span>
      </a>
    </div>
    <div className="flex justify-center space-x-6 text-xl mt-4">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/althaf-khan-patan-80a721214"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-300"
      >
        <i className="fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/althaf11"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-300"
      >
        <i className="fab fa-github"></i>
        <span>GitHub</span>
      </a>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
