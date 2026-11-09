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
                  src="https://assets.tanmayola.com/imgs/tanmayimage-crop.jpg"
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
                        "Information Security & VAPT",
                        1200,
                        "DevOps & Cloud Engineer",
                        1200,
                        "AWS Cloud Specialist",
                        1200,
                        "OT Security & ISMS Consultant",
                        1200
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </h1>
                </div>

                <p className="text-white">
                  Information Security and VAPT professional with hands-on experience delivering 50+ OT VAPT and ISMS reports for power-sector leaders including AP Transco, KSEB, and SJVN. Strong DevOps &amp; AWS foundation spanning Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible, and automated CI/CD pipelines.
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
