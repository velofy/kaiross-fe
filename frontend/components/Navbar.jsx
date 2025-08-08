"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/landing", label: "Landing" },
  { href: "/discovery", label: "Discover" },
  { href: "/feed", label: "Feed" },
  { href: "/profile", label: "Profile" },
  { href: "/dm", label: "DMs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const authed = typeof window !== "undefined" && localStorage.getItem("kaiross_authed") === "true";
    setIsAuthed(authed);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("kaiross_authed");
    localStorage.removeItem("kaiross_user");
    setIsAuthed(false);
    router.push("/landing");
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-amber-100">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/landing" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-primary text-gray-900 font-bold shadow-warm">K</span>
          <span className="font-display text-lg">Kaiross</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "text-gray-900" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {!isAuthed ? (
            <Link href="/login" className="btn btn-primary text-sm">Sign In</Link>
          ) : (
            <button className="btn btn-secondary text-sm" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </header>
  );
}