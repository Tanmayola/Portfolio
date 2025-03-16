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
          <div className="row align-items-center wrapper flex-column-reverse flex-md-row">
            <div className="col-12 col-md-4">
              <div className="imagwrap text-center">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQHs-zwvRuza9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711768911103?e=1743033600&v=beta&t=Xn4ne271SLX2wYV8sdsuvMK8_GvW_ttPuueW-zczk98"
                  alt="Tanmay Ola"
                  width={300}
                  height={300}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                  priority
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                <div className="d-flex align-items-center mb-3">
                  <span className="line mr-4"></span>
                  <h1 className="text-white font-weight-bold mt-0">
                    <span className="text-common">I&apos;M Tanmay Ola. </span>
                    <br className="d-block d-md-none" />
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

                <div className="d-flex align-items-center justify-content-center justify-content-md-start w-100">
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
        </div>
      </section>
    </>
  );
}
