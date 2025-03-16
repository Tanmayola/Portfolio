"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArticleIcon from '@mui/icons-material/Article';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', icon: <HomeIcon />, label: 'Home' },
    { path: '/about', icon: <PersonIcon />, label: 'About' },
    { path: '/portfolio', icon: <WorkIcon />, label: 'Portfolio' },
    { path: '/blog', icon: <ArticleIcon />, label: 'Blog' },
    { path: '/contact', icon: <MailIcon />, label: 'Contact' }
  ];

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/TanmayOla_Resume.pdf'; // Make sure this matches your resume file name
    link.download = 'TanmayOla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="side-navigation">
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              href={item.path} 
              className={`nav-link ${pathname === item.path ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <button 
            onClick={handleDownload}
            className="nav-link download-btn"
          >
            <span className="icon">
              <FileDownloadIcon />
            </span>
            <span className="label">Download CV</span>
          </button>
        </li>
      </ul>
    </nav>
  );
} 