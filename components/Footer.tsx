import Link from 'next/link';

const footerLinks = {
  Foundation: [
    { label: 'Mission', href: '/mission' },
    { label: 'Programs', href: '/programs' },
    { label: 'News', href: '/news' },
    { label: 'Get Involved', href: '/get-involved' },
  ],
  Ecosystem: [
    { label: 'AeThex Corporation', href: 'https://aethex.com', external: true },
    { label: 'AeThex Labs', href: 'https://aethex.dev', external: true },
    { label: 'AeThex Connect', href: 'https://connect.aethex.com', external: true },
  ],
  Community: [
    { label: 'Discord', href: 'https://discord.gg/aethex', external: true },
    { label: 'GitHub', href: 'https://github.com/aethex', external: true },
    { label: 'Twitter / X', href: 'https://x.com/aethex', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300">
      <div className="container-wide mx-auto section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 bg-foundation-500 flex items-center justify-center shrink-0"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="text-white font-display font-bold text-xs">Ae</span>
              </div>
              <div className="font-display leading-none">
                <span className="font-extrabold text-white tracking-widest uppercase text-sm block">AETHEX</span>
                <span className="text-foundation-400 font-medium tracking-wider uppercase text-[10px] block">Foundation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-surface-400 max-w-xs">
              Building foundational infrastructure for persistent digital civilization.
              Open-source. Community-driven. For everyone.
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-400 hover:text-foundation-400 transition-colors"
                      {...('external' in link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-500">
            &copy; {new Date().getFullYear()} AeThex Foundation. All rights reserved.
          </p>
          <p className="text-xs text-surface-600">
            A 501(c)(3) nonprofit organization
          </p>
        </div>
      </div>
    </footer>
  );
}
