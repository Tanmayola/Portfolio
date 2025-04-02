"use client";
import Image from 'next/image';
import LinkIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Portfolio = () => {
  const projects = [
    {
      title: "DevOps CI/CD Pipeline",
      image: "https://static.vecteezy.com/system/resources/previews/002/258/274/non_2x/devops-symbol-mobius-ribbon-software-development-and-information-technology-operations-vector.jpg",
      description: "Implemented end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes",
      github: "https://github.com/yourusername/devops-pipeline",
      live: "https://your-deployment-url.com"
    },
    {
      title: "AWS Cloud Infrastructure",
      image: "https://cdn.pixabay.com/photo/2024/01/26/08/07/ai-generated-8533603_1280.jpg",
      description: "Automated AWS infrastructure using Terraform and Ansible",
      github: "https://github.com/yourusername/aws-infrastructure",
      live: null
    },
    {
      title: "Portfolio Website",
      image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
      description: "Personal portfolio website built with Next.js and Material-UI",
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
    },
    {
      title: "Kubernetes Cluster Management",
      image: "https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_1280.jpg",
      description: "Automated Kubernetes cluster deployment and management system",
      github: "https://github.com/yourusername/k8s-management",
      live: null
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
                    <h3 className="text-white mb-3">{project.title}</h3>
                    <p className="text-white text-center mb-3">{project.description}</p>
                    <div className="d-flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white">
                        <GitHubIcon className="project-icon" />
                      </a>
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