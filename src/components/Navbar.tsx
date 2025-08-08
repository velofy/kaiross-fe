import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
    isActive ? "bg-accent text-foreground" : "hover:bg-accent/60"
  );

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="text-lg font-semibold">
            Kaiross
          </NavLink>
          <span className="ml-2 rounded-full bg-gradient-primary px-2 py-0.5 text-xs text-primary-foreground shadow-glow">
            beta
          </span>
        </div>

        {user && (
          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/feed" className={navLinkClass} end>
              Feed
            </NavLink>
            <NavLink to="/discovery" className={navLinkClass} end>
              Discover
            </NavLink>
            <NavLink to="/profile" className={navLinkClass} end>
              Profile
            </NavLink>
            <NavLink to="/dm" className={navLinkClass} end>
              DM
            </NavLink>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!user ? (
            <Button onClick={() => navigate("/login")}>
              Sign In
            </Button>
          ) : (
            <Button variant="secondary" onClick={() => { logout(); navigate("/"); }}>
              Logout
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
