import 'bootstrap/dist/css/bootstrap.min.css' 
import "./globals.css";
import Nav from './components/Nav/Nav';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';

export const metadata = {
  title: "Tanmay Ola - Portfolio",
  description: "Personal portfolio website of Tanmay Ola - DevOps Engineer and Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundAnimation />
        <Nav/>
        {children}
      </body>
    </html>
  )
}
