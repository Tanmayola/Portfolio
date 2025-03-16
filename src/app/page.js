"use client";
import Image from "next/image";
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
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQHs-zwvRuza9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711768911103?e=1743033600&v=beta&t=Xn4ne271SLX2wYV8sdsuvMK8_GvW_ttPuueW-zczk98"
                  alt="Tanmay Ola"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex">
                <span className="line mr-4"></span>
                <h1 className="text-white font-weight-bold mt-0">
                  <span className="text-common">I&apos;M Tanmay Ola. </span>

                  <TypeAnimation
                    sequence={[
                      "DevOps Engineer",
                      1000,
                      "SRE",
                      1000,
                      "MERN Stack Developer",
                      1000,
                      "AWS Cloud Engineer",
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
                I&apos;m a passionate and driven individual with a strong foundation
                in software development and a keen interest in DevOps. I have a
                solid understanding of various programming languages and tools,
                and I&apos;m always eager to learn and stay up-to-date with the
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
                  Download Resume{" "}
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
