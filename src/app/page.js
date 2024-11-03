"use client";
import Image from "next/image";
import userImage from "../assets/images/tanmayimage.jpg";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <>
      <section className="homePage">
        <div className="container-fluid">
          <div className="row align-items-center wrapper">
            <div className="col-md-4">
              <div className="imagwrap">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHs-zwvRuza9w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711768911103?e=1735776000&v=beta&t=eoKHfvSMFYeCnHt3prm6HeZ1s9RtOMxgg3iPKoh08wY" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex">
                <span className="line mr-4"></span>
                <h1 className="text-white font-weight-bold mt-0">
                  <span className="text-common d-block">I'M Tanmay Ola. </span>

                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "DevOps Engineer",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "SRE",
                      1000,
                      "MERN Stack Developer",
                      1000,
                      'AWS Cloud Engineer',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>
              </div>

              <p className="text-white">
                I'm a passionate and driven individual with a strong foundation
                in software development and a keen interest in DevOps. I have a
                solid understanding of various programming languages and tools,
                and I'm always eager to learn and stay up-to-date with the
                latest technologies.
              </p>

              <br />

              <div className="d-flex align-items-center">
                <Button className="btn-common iconBtn">
                  More About Me{" "}
                  <span className="icon d-flex align-items-center justify-content-center">
                    <ArrowForwardIosIcon />
                  </span>
                </Button>
                <Button
                  className="btn-common iconBtn"
                  style={{ marginLeft: "16px" }}
                >
                  download Resume{" "}
                  <span className="icon d-flex align-items-center justify-content-center">
                    <FileDownloadOutlinedIcon />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
