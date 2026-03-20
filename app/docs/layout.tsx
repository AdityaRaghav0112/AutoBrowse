"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Introduction', href: '/docs' },
    { name: 'Quickstart', href: '/docs/quickstart' },
  ];

  return (
    <div className="flex min-h-screen pt-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 pr-8 hidden md:block border-r border-white/10 h-[calc(100vh-8rem)] sticky top-32 overflow-y-auto">
        <nav className="space-y-1">
          <div className="text-xs font-semibold text-white/50 mb-4 uppercase tracking-wider px-3">Getting Started</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                  isActive 
                    ? 'bg-white/20 text-white font-medium' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-12 pb-24 w-full max-w-3xl">
        {children}
      </main>
    </div>
  );
}
