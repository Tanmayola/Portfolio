"use client"
import Link from "next/link";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Button from "@mui/material/Button";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
const About = () => {
  const percentage = 90;
  return (
    <section className="aboutPage">
      <div className="container-fluid">
        <div className="di-flex">
          <h1 className="hd text-center m-auto">
            ABOUT <span>ME</span>
            <span className="title-bg">RESUME</span>
          </h1>
        </div>

        <div className="row mt-5 aboutwrapper">
          <div className="col-md-6 part1">
            <h2 className="text-white">PERSSONAL INFOS</h2>
            <div className="row">
              <div className="col">
                <h4>
                  First Name : <span>Tanmay</span>
                </h4>
                <h4>
                  Last Name : <span>Ola</span>
                </h4>
                <h4>
                  Age : <span>20 Years</span>
                </h4>
                <h4>
                  Nationality : <span>India</span>
                </h4>
                <h4>
                  Frelance : <span>Available</span>
                </h4>
              </div>

              <div className="col">
                <h4>
                  Address : <span>Jaipur</span>
                </h4>
                <h4>
                  Phone : <span>+91 8114436414</span>
                </h4>
                <h4>
                  Email : <span>tanmayola04@gmail.com</span>
                </h4>
                <h4>
                  Linkdin :{" "}
                  <span>
                    <Link
                      href="https://www.linkedin.com/in/tanmay-ola-38a108264/"
                      target="_blank"
                    >
                      Linkdin
                    </Link>{" "}
                    , <Link href={"https://github.com/Tanmayola"}>GITHUB</Link>
                  </span>
                </h4>
                <h4>
                  Languages : <span>English , Hindi</span>
                </h4>
              </div>
            </div>
            <br />
            <Button className="btn-common iconBtn">
              download Resume{" "}
              <span className="icon d-flex align-items-center justify-content-center">
                <FileDownloadOutlinedIcon />
              </span>
            </Button>
          </div>

          <div className="col part2">
            <div className="boxes">
              <div className="box">
                <span className="count d-flex">
                  8<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2">
                  <span className="line"></span>
                  <h4>MONTHS OF <br/>EXPERIENCE</h4>
                </div>
              </div>
              <div className="box">
                <span className="count d-flex">
                  7<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2">
                  <span className="line"></span>
                  <h4>COMPLETED <br/>PROJECTS</h4>
                </div>
              </div>
              <div className="box">
                <span className="count d-flex">
                  5<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2">
                  <span className="line"></span>
                  <h4>INTERNSHIPS</h4>
                </div>
              </div>
              <div className="box">
                <span className="count d-flex">
                  10<span className="ml-2">+</span>
                </span>
                <div className="d-flex mt-2">
                  <span className="line"></span>
                  <h4>CERTIFICATION <br/>COMPLETED</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>

        <div className="d-flex">
          <span className="divider"></span>
        </div>

        {/**skill section start-here */}
        <div className="skillSection mt-5">
            <h2 className="text-center text-white">MY SKILLS</h2>

            <div className="row">
              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={90} text={`${90}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">AWS</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={60} text={`${60}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Node.js</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={80} text={`${80}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Python</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={90} text={`${90}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Docker</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={90} text={`${90}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Maven</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={60} text={`${60}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Terraform</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={70} text={`${70}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Ansible</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={60} text={`${60}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Kubernetes</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={80} text={`${80}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Jenkins</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={80} text={`${80}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">RHEL</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={95} text={`${95}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">GIT/GITHUB</h4>
              </div>

              <div className="col-md-3 d-flex flex-column">
              <CircularProgressbar value={50} text={`${50}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />
                <br/>
                <h4 className="text-white text-center m-auto">Next.js</h4>
              </div>
            </div>
        </div>
        {/**skill section end-here */}
        <br/>
        <div className="d-flex">
          <span className="divider"></span>
        </div>
        <br/>
        <div className="experienceSection">
          <h2 className="text-center text-white">EXPERIENCE & EDUCATION</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="box d-flex">
                <div className="left">
                  <span className="icon rounded-circle d-flex justify-content-center align-items-center">
                  <BusinessCenterIcon/>
                  </span>
                </div>
                <div className="right pl-4">
                  <div className="badge badge-default">august 2022-august 2025</div>
                  <h4 className="mt-3 mb-3">Bachelor of Computer Application (BCA) - <span>University of Rajasthan, Jaipur | University Commerce College | Graduating in 2025</span></h4>
                  <p className="text-white">Focused on Computer Applications with expertise in programming (C, C++, Python, PHP, Java) and hands-on experience in cloud computing and DevOps.Skilled in database management, and object-oriented programming. Academic highlights include projects such as an online examination site. Certifications and practical exposure enhance proficiency in modern development workflows and tools.</p>
                </div>
              </div>

              <div className="box d-flex">
                <div className="left">
                  <span className="icon rounded-circle d-flex justify-content-center align-items-center">
                  <BusinessCenterIcon/>
                  </span>
                </div>
                <div className="right pl-4">
                  <div className="badge badge-default">June 2023-August 2023</div>
                  <h4 className="mt-3 mb-3">Python Training Program - <span>Zeetron Networks</span></h4>
                  <p className="text-white">Completed an intensive Python training program focused on developing strong programming foundations and practical problem-solving skills. Covered key topics, including Python fundamentals, object-oriented programming,Gained hands-on experience by working on real-world projects and coding challenges, enhancing proficiency in Python scripting.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box d-flex">
                <div className="left">
                  <span className="icon rounded-circle d-flex justify-content-center align-items-center">
                  <BusinessCenterIcon/>
                  </span>
                </div>
                <div className="right pl-4">
                  <div className="badge badge-default">october 2023-May 2024</div>
                  <h4 className="mt-3 mb-3">DevOps Intern - <span>Zeetron Networks</span></h4>
                  <p className="text-white">Experienced in implementing an end-to-end CI/CD pipeline using Jenkins, Git/GitHub, Docker, Terraform, Ansible, and Kubernetes, I specialize in DevOps, Cloud Computing, and Computer Networking. Proficient in AWS services including EC2, S3, IAM, and VPC, I bring expertise in tools like Docker Swarm, Kubernetes, Ansible, and Terraform. With additional skills in Python, SQL, Red Hat Linux, and Solution Architecture, I excel in delivering scalable and efficient cloud-based solutions.</p>
                </div>
              </div>

              <div className="box d-flex">
                <div className="left">
                  <span className="icon rounded-circle d-flex justify-content-center align-items-center">
                  <BusinessCenterIcon/>
                  </span>
                </div>
                <div className="right pl-4">
                  <div className="badge badge-default">october 2023-May 2024</div>
                  <h4 className="mt-3 mb-3">DevOps Intern - <span>HungryPixel Technologies</span></h4>
                  <p className="text-white">As a DevOps Intern, I worked on AWS Automation, including S3 website hosting, Amplify app deployment, Certificate Manager, Route 53, and CloudFront management using AWS SDK in Node.js. This experience enhanced my AWS and DevOps skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
