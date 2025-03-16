"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', icon: <HomeIcon />, label: 'Home' },
    { path: '/about', icon: <PersonIcon />, label: 'About' },
    { path: '/portfolio', icon: <WorkIcon />, label: 'Portfolio' },
    { path: '/contact', icon: <MailIcon />, label: 'Contact' }
  ];

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
      </ul>
    </nav>
  );
} 