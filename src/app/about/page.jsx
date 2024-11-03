"use client"
import Link from "next/link";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Button from "@mui/material/Button";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const About = () => {
  const percentage = 66;
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

        {/**skill section start-here */}
        <div className="skillSection mt-5">
            <h2 className="text-center text-white">MY SKILLS</h2>

            <div className="row">
              <div className="col-md-3 d-flex">
              <CircularProgressbar value={percentage} text={`${percentage}%`}
                className="counterSpiner"
                styles={buildStyles({
                  pathColor: `#fa5b0f`,
                  textColor: '#fff',
                  trailColor: '#252525',
                })} />;
                <h4>HTML</h4>
              </div>
            </div>
        </div>
        {/**skill section end-here */}

      </div>
    </section>
  );
};

export default About;
