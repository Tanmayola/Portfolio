"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with DevOps",
      excerpt: "Learn the fundamentals of DevOps and how to implement it in your projects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      category: "DevOps"
    },
    {
      id: 2,
      title: "AWS Cloud Best Practices",
      excerpt: "Essential tips and best practices for working with AWS cloud services.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      category: "Cloud"
    },
    {
      id: 3,
      title: "MERN Stack Development",
      excerpt: "A comprehensive guide to building full-stack applications with the MERN stack.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      category: "Development"
    }
  ];

  return (
    <section className="blogPage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="hd text-center">
              <h2>My Blog</h2>
              <span className="title-bg">BLOG</span>
            </div>
          </div>
        </div>

        {/* Medium Profile Section */}
        <div className="row mt-4 mb-5">
          <div className="col-12">
            <div className="medium-profile text-center">
              <h3>Follow me on Medium</h3>
              <p>Check out my latest articles and insights on technology, development, and more.</p>
              <a 
                href="https://medium.com/@tanmayola04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="medium-link"
              >
                <LinkedInIcon /> Visit my Medium Profile
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="blog-card">
                <div className="blog-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="date">{post.date}</span>
                    <span className="category">{post.category}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="read-more">
                    Read More
                    <ArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 