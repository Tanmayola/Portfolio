"use client";
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Portfolio = () => {
  const projects = [
    {
      title: "OT VAPT & ISMS Assessments",
      company: "ANB Global",
      image: "https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_1280.jpg",
      description: "Delivered 50+ OT VAPT reports for AP Transco and KSEB, and prepared an ISMS report for the SJVN power plant in Bikaner using Nessus, Nmap, and Burp Suite.",
      github: "https://github.com/Tanmayola",
      live: "https://www.linkedin.com/in/tanmay-ola-38a108264"
    },
    {
      title: "AWS Automation & Hosting",
      company: "Hungrypixel Technologies",
      image: "https://cdn.pixabay.com/photo/2024/01/26/08/07/ai-generated-8533603_1280.jpg",
      description: "Implemented AWS automation workflows covering S3 website hosting, Amplify deployment, Certificate Manager, Route 53, and CloudFront distribution management with AWS SDK.",
      github: "https://github.com/Tanmayola",
      live: null
    },
    {
      title: "Automated CI/CD Pipeline",
      company: "Zeetron Networks",
      image: "https://static.vecteezy.com/system/resources/previews/002/258/274/non_2x/devops-symbol-mobius-ribbon-software-development-and-information-technology-operations-vector.jpg",
      description: "Architected an end-to-end CI/CD deployment pipeline using Jenkins, Git, GitHub, Docker, Terraform, Ansible, and Kubernetes.",
      github: "https://github.com/Tanmayola",
      live: null
    },
    {
      title: "Personal Portfolio Website",
      company: "Personal Project",
      image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
      description: "Developed a responsive, modern portfolio website using Next.js and Material UI, featuring interactive animations and resume download.",
      github: "https://github.com/Tanmayola/Portfolio",
      live: "https://tanmayola.com/"
    }
  ];

  return (
    <section className="portfolioPage">
      <div className="container-fluid">
        <div className="di-flex">
          <h1 className="hd text-center m-auto">
            My <span>Portfolio</span>
            <span className="title-bg">WORKS</span>
          </h1>
        </div>

        <div className="wrapper mt-5">
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="box position-relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="overlay d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <span className="badge mb-2" style={{ background: 'var(--insta-gradient)', color: '#fff', fontSize: '0.8rem', padding: '4px 12px', borderRadius: '12px' }}>
                      {project.company}
                    </span>
                    <p className="text-white text-center mb-3">{project.description}</p>
                    <div className="d-flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white">
                          <GitHubIcon className="project-icon" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white">
                          <LaunchIcon className="project-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
