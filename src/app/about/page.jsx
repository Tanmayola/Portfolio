"use client";
import Link from "next/link";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import DescriptionIcon from '@mui/icons-material/Article';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '@mui/material/Button';

const About = () => {
  // Calculate age from birth date (December 14, 2004)
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const age = calculateAge('2004-12-14');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TanmayOla_Resume.pdf';
    link.download = 'TanmayOla_Resume.pdf';
    link.type = 'application/pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillMeters = [
    { name: "VAPT & Security", value: 85 },
    { name: "AWS & Cloud", value: 80 },
    { name: "DevOps & CI/CD", value: 85 },
    { name: "Linux Systems", value: 80 },
    { name: "Docker & K8s", value: 75 },
    { name: "Terraform & Ansible", value: 70 },
    { name: "Python & Node.js", value: 75 },
    { name: "Git & GitHub", value: 85 },
  ];

  const skillCategories = [
    {
      title: "Vulnerability Assessment & Web Security",
      icon: <SecurityIcon />,
      skills: [
        "Nessus",
        "Nmap",
        "Burp Suite",
        "OT VAPT Reporting",
        "ISMS Reporting",
        "Vulnerability Identification",
        "Security Testing",
        "Findings Documentation",
        "Risk Ratings",
        "Remediation Recommendations"
      ]
    },
    {
      title: "Cloud & AWS",
      icon: <CloudIcon />,
      skills: [
        "AWS",
        "Amazon S3",
        "AWS Amplify",
        "Certificate Manager (ACM)",
        "Amazon Route 53",
        "Amazon CloudFront",
        "AWS SDK for JavaScript"
      ]
    },
    {
      title: "DevOps & Automation",
      icon: <TerminalIcon />,
      skills: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Ansible",
        "Git",
        "GitHub",
        "CI/CD Pipelines"
      ]
    },
    {
      title: "Systems & Development",
      icon: <TerminalIcon />,
      skills: [
        "Linux",
        "Node.js",
        "Python",
        "JavaScript",
        "Bash Scripting"
      ]
    },
    {
      title: "Audit & Documentation",
      icon: <DescriptionIcon />,
      skills: [
        "OT VAPT Reporting",
        "ISMS Reporting",
        "Technical Report Writing",
        "Microsoft Word",
        "Microsoft Excel"
      ]
    }
  ];

  const experiences = [
    {
      period: "24 Aug 2026 – Working",
      role: "VAPT Consultant",
      company: "ANB Global",
      points: [
        "Prepared 30+ OT VAPT reports for AP Transco, documenting vulnerability assessment findings and remediation recommendations.",
        "Prepared 20+ OT VAPT reports for KSEB, recording identified vulnerabilities, risk ratings, and recommended corrective actions.",
        "Prepared an ISMS report for the SJVN power plant, Bikaner.",
        "Supported security assessment documentation by translating technical findings into structured reports for client review."
      ]
    },
    {
      period: "Sep 2024 – Mar 2025",
      role: "DevOps Intern",
      company: "Zeetron Networks Pvt. Ltd.",
      points: [
        "Worked with DevOps tools and practices involving Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible, Git, and GitHub.",
        "Gained practical exposure to CI/CD pipeline implementation and automated deployment workflows."
      ]
    },
    {
      period: "May 2024 – Aug 2024",
      role: "DevOps Intern",
      company: "Hungrypixel Technologies (OPC) Pvt. Ltd.",
      points: [
        "Worked on AWS automation for website hosting and application deployment.",
        "Used Amazon S3 for website hosting and AWS Amplify for application deployment.",
        "Worked with AWS Certificate Manager, Route 53, and CloudFront distribution management using the AWS SDK for JavaScript."
      ]
    },
    {
      period: "Oct 2023 – May 2024",
      role: "DevOps Trainee",
      company: "Zeetron Networks Pvt. Ltd.",
      points: [
        "Built foundational knowledge of DevOps workflows, Linux, cloud technologies, and automation tools."
      ]
    }
  ];

  const educations = [
    {
      period: "Pursuing | Expected 2027",
      degree: "M.Sc. (Information Technology)",
      institution: "University of Rajasthan, Jaipur",
      description: "Advanced postgraduate studies covering cyber security, enterprise cloud architecture, networking protocols, and systems development."
    },
    {
      period: "2022 – 2025 | Score: 69%",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University Commerce College, University of Rajasthan, Jaipur",
      description: "Focused on Computer Applications, programming languages, database systems, networking, and software engineering methodologies."
    },
    {
      period: "2022 | Score: 72%",
      degree: "Senior Secondary (12th), PCM",
      institution: "RBSE Board",
      description: "Physics, Chemistry, and Mathematics background providing strong analytical foundations."
    }
  ];

  const certifications = [
    { title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
    { title: "Certified SOC Analyst (CSA)", issuer: "EC-Council" },
    { title: "Cloud Computing", issuer: "NPTEL" },
    { title: "Computer Networks & Internet Protocol", issuer: "NPTEL" },
    { title: "Python for Data Science", issuer: "NPTEL" },
    { title: "Data Science for Engineers", issuer: "NPTEL" },
    { title: "Problem Solving Through Programming in C", issuer: "NPTEL" },
    { title: "Programming in Java", issuer: "NPTEL" },
    { title: "DevOps Training Certificate", issuer: "IIHT" },
    { title: "Python for Data Analytics Training Certificate", issuer: "IIHT" },
    { title: "MERN Stack Summer Internship", issuer: "SKIT" },
    { title: "IoT and Robotics for Managers", issuer: "SKIT" },
    { title: "JEE (IBM Platform)", issuer: "SKIT" },
  ];

  const activities = [
    {
      title: "NCC: CATC-VI-2023",
      unit: "7 RAJ (I) COY NCC, Jaipur",
      description: "Completed annual training camp with intensive discipline, leadership, and operational readiness drills."
    },
    {
      title: "NCC March Past",
      unit: "University of Rajasthan, Jaipur",
      description: "Participated with distinction in the university NCC March Past parade contingent."
    }
  ];

  return (
    <section className="aboutPage">
      <div className="container-fluid">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="hd text-center m-auto">
              <h2>About Me</h2>
              <span className="title-bg">ABOUT</span>
            </div>
          </div>
        </div>

        {/* Personal Info & Stats */}
        <div className="row mt-5 aboutwrapper">
          <div className="col-lg-6 col-12 part1 mb-4 mb-lg-0">
            <h2 className="text-white">PERSONAL INFO</h2>
            <div className="row">
              <div className="col-sm-6 col-12">
                <h4>First Name : <span>Tanmay</span></h4>
                <h4>Last Name : <span>Ola</span></h4>
                <h4>Age : <span>{age} Years</span></h4>
                <h4>Nationality : <span>India</span></h4>
                <h4>Freelance : <span>Available</span></h4>
              </div>

              <div className="col-sm-6 col-12">
                <h4>Address : <span>Jaipur, Rajasthan</span></h4>
                <h4>Phone : <span>+91 81144 36414</span></h4>
                <h4>Email : <span>tanmayola04@gmail.com</span></h4>
                <h4>
                  Profiles :{" "}
                  <span>
                    <Link
                      href="https://www.linkedin.com/in/tanmay-ola-38a108264/"
                      target="_blank"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </Link>{" "}
                    |{" "}
                    <Link 
                      href="https://github.com/Tanmayola"
                      target="_blank"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      GitHub
                    </Link>
                  </span>
                </h4>
                <h4>Languages : <span>English, Hindi</span></h4>
              </div>
            </div>

            <div className="mt-4">
              <Button 
                className="btn-common iconBtn"
                onClick={handleDownload}
              >
                Download Resume{" "}
                <span className="icon d-flex align-items-center justify-content-center">
                  <FileDownloadOutlinedIcon />
                </span>
              </Button>
            </div>
          </div>

          <div className="col-lg-6 col-12 part2">
            <div className="boxes">
              <div className="box">
                <span className="count d-flex">
                  50<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2 justify-content-center">
                  <span className="line"></span>
                  <h4>OT VAPT <br/>REPORTS</h4>
                </div>
              </div>
              <div className="box">
                <span className="count d-flex">
                  4<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2 justify-content-center">
                  <span className="line"></span>
                  <h4>INDUSTRY <br/>ROLES</h4>
                </div>
              </div>
              <div className="box">
                <span className="count d-flex">
                  13<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2 justify-content-center">
                  <span className="line"></span>
                  <h4>COMPLETED <br/>CERTIFICATIONS</h4>
                </div>
              </div>
              <div className="box">
                <span className="count d-flex">
                  7<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2 justify-content-center">
                  <span className="line"></span>
                  <h4>COMPLETED <br/>PROJECTS</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="summaryCard">
              <h3>
                <SecurityIcon /> Professional Summary
              </h3>
              <p>
                Information Security and VAPT professional with hands-on experience preparing <strong>50+ OT VAPT reports</strong> for power-sector clients, including <strong>AP Transco</strong> and <strong>KSEB</strong>, and preparing an <strong>ISMS report for the SJVN power plant</strong> in Bikaner. Experienced in vulnerability assessment, security findings documentation, risk ratings, and remediation recommendations using tools such as Nessus, Nmap, and Burp Suite. Also brings a strong DevOps and AWS foundation covering cloud hosting and deployment, Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible, and automated CI/CD pipelines. Seeking opportunities in Cloud Security, VAPT, and Information Security.
              </p>
            </div>
          </div>
        </div>

        <br/>
        <div className="d-flex mt-5">
          <span className="divider"></span>
        </div>

        {/* Technical Skills Section */}
        <div className="skillSection mt-5">
          <h2 className="text-center text-white">TECHNICAL SKILLS</h2>

          {/* Circular meters for core skill areas */}
          <div className="row">
            {skillMeters.map((meter, index) => (
              <div key={index} className="col-6 col-md-3 d-flex flex-column mb-4">
                <CircularProgressbar
                  value={meter.value}
                  text={`${meter.value}%`}
                  className="counterSpiner"
                  styles={buildStyles({
                    pathColor: `var(--primary-color)`,
                    textColor: '#fff',
                    trailColor: 'var(--background-light)',
                  })}
                />
                <h4 className="text-white text-center m-auto mt-3">{meter.name}</h4>
              </div>
            ))}
          </div>

          {/* Categorized Badges */}
          <div className="row mt-4">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <div className="skillCategoryCard">
                  <h3>
                    <span style={{ color: "var(--primary-color)" }}>{cat.icon}</span> {cat.title}
                  </h3>
                  <div>
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skillBadge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <br/>
        <div className="d-flex mt-4">
          <span className="divider"></span>
        </div>

        {/* Professional Experience Section */}
        <div className="experienceSection mt-5">
          <h2 className="text-center text-white">PROFESSIONAL EXPERIENCE</h2>

          <div className="row">
            {experiences.map((exp, idx) => (
              <div key={idx} className="col-md-6 mb-4">
                <div className="box d-flex">
                  <div className="left">
                    <span className="icon rounded-circle d-flex justify-content-center align-items-center">
                      <BusinessCenterIcon/>
                    </span>
                  </div>
                  <div className="right pl-4 w-100">
                    <div className="badge badge-default">{exp.period}</div>
                    <h4 className="mt-3 mb-2">{exp.role} - <span>{exp.company}</span></h4>
                    <ul>
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <br/>
        <div className="d-flex">
          <span className="divider"></span>
        </div>

        {/* Education Section */}
        <div className="experienceSection mt-5">
          <h2 className="text-center text-white">EDUCATION</h2>

          <div className="row">
            {educations.map((edu, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="box d-flex flex-column h-100">
                  <div className="d-flex align-items-center mb-3">
                    <span className="icon rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ marginRight: '16px' }}>
                      <SchoolIcon />
                    </span>
                    <div className="badge badge-default">{edu.period}</div>
                  </div>
                  <h4 className="mt-2 mb-2">{edu.degree}</h4>
                  <p style={{ color: 'var(--accent-orange)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>
                    {edu.institution}
                  </p>
                  <p className="text-white mt-auto">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <br/>
        <div className="d-flex">
          <span className="divider"></span>
        </div>

        {/* Certifications Section */}
        <div className="experienceSection mt-5">
          <h2 className="text-center text-white">CERTIFICATIONS &amp; CREDENTIALS</h2>

          <div className="row">
            {certifications.map((cert, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-3">
                <div className="certCard">
                  <div className="icon">
                    <WorkspacePremiumIcon />
                  </div>
                  <div>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <br/>
        <div className="d-flex mt-4">
          <span className="divider"></span>
        </div>

        {/* Activities Section */}
        <div className="experienceSection mt-5 mb-5">
          <h2 className="text-center text-white">CO-CURRICULAR &amp; ACTIVITIES</h2>

          <div className="row">
            {activities.map((act, idx) => (
              <div key={idx} className="col-md-6 mb-3">
                <div className="activityCard">
                  <div className="icon">
                    <MilitaryTechIcon />
                  </div>
                  <div>
                    <h4>{act.title}</h4>
                    <p style={{ color: 'var(--accent-orange)', fontWeight: 600, marginBottom: '4px' }}>
                      {act.unit}
                    </p>
                    <p>{act.description}</p>
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

export default About;
