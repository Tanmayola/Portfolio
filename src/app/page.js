"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import BackgroundAnimation from "./components/BackgroundAnimation";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TanmayOla_Resume.pdf';
    link.download = 'TanmayOla_Resume.pdf';
    link.type = 'application/pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="homePage">
        <BackgroundAnimation />
        <div className="container-fluid">
          <div className="row align-items-center wrapper flex-column-reverse flex-md-row">
            <div className="col-12 col-md-4">
              <div className="imagwrap text-center">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQE21y9N1ilHWQ/profile-displayphoto-scale_400_400/B56ZmK4NpGG0Ag-/0/1758971618086?e=1768435200&v=beta&t=kjefK3zMPsxL_ZNO73EoEmQEXFw9i5BGBMYUKx6lUpU"
                  alt="Tanmay Ola"
                  width={400}
                  height={400}
                  className="profile-image"
                  priority
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                <div className="d-flex align-items-center mb-3">
                  <span className="line mr-4"></span>
                  <h1 className="text-white font-weight-bold mt-0">
                    <span className="text-common">I&apos;M Tanmay Ola </span>
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
                  <Link href="/about">
                    <Button className="btn-common iconBtn">
                      More About Me{" "}
                      <span className="icon d-flex align-items-center justify-content-center">
                        <ArrowForwardIosIcon />
                      </span>
                    </Button>
                  </Link>
                  <Button 
                    className="btn-common iconBtn"
                    onClick={handleDownload}
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
