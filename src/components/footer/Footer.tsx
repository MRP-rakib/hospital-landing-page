import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Container from '@/utils/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A142F] text-white pt-16 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-[#396CF0]">♥</span>
              Doctris
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About us', 'Services', 'Team', 'Project', 'Blog', 'Login'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#396CF0] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-3">
              {[
                'Eye Care',
                'Psychotherapy',
                'Dental Care',
                'Orthopedic',
                'Cardiology',
                'Gynecology',
                'Neurology'
              ].map((item) => (
                <li key={item}>
                  <Link href={`/departments/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#396CF0] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-[#396CF0] transition-colors text-sm flex items-center gap-2">
                  <FaEnvelope className="text-[#396CF0]" />
                  contact@example.com
                </Link>
              </li>
              <li>
                <Link href="tel:+152534468854" className="text-gray-400 hover:text-[#396CF0] transition-colors text-sm flex items-center gap-2">
                  <FaPhone className="text-[#396CF0]" />
                  +152 534-468-854
                </Link>
              </li>
              <li>
                <Link href="https://maps.google.com" target="_blank" className="text-gray-400 hover:text-[#396CF0] transition-colors text-sm flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#396CF0]" />
                  View on Google map
                </Link>
              </li>
              <li className="pt-3">
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebookF, link: 'https://facebook.com' },
                    { icon: FaTwitter, link: 'https://twitter.com' },
                    { icon: FaInstagram, link: 'https://instagram.com' },
                    { icon: FaLinkedinIn, link: 'https://linkedin.com' }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      className="w-8 h-8 rounded-full bg-[#162044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#396CF0] transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex items-center justify-between text-gray-400 text-sm">
          <p>
            {currentYear} © Doctris. Design with{' '}
            <span className="text-red-500">❤</span> by{' '}
            <Link href="https://shreethemes.com" target="_blank" className="hover:text-[#396CF0]">
              MD Rakib
            </Link>
            .
          </p>
          <div className="flex items-center gap-6 mt-4">
            {['Terms', 'Privacy', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#396CF0] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}