"use client";
import Navigation from "./Navigation";
import BackgroundAnimation from "./BackgroundAnimation";

export default function ClientLayout({ children }) {
  return (
    <>
      <BackgroundAnimation />
      <Navigation />
      {children}
    </>
  );
} 