import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
            <Button onClick={() => navigate("/login")}>Sign In</Button>
          ) : (
            <>
              {/* Mobile: Hamburger menu (only after sign-in) */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[80vw] sm:w-80 p-4">
                    <div className="flex flex-col gap-2">
                      <SheetClose asChild>
                        <NavLink to="/" className="flex items-center gap-2 mb-1">
                          <img
                            src="/kaiross.png"
                            alt="Kaiross"
                            className="h-6 w-6 rounded-sm"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = "/favicon.png";
                            }}
                          />
                          <span className="text-base font-semibold">Kaiross</span>
                        </NavLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <NavLink to="/feed" className={navLinkClass} end>
                          Feed
                        </NavLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <NavLink to="/discovery" className={navLinkClass} end>
                          Discover
                        </NavLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <NavLink to="/profile" className={navLinkClass} end>
                          Profile
                        </NavLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <NavLink to="/dm" className={navLinkClass} end>
                          DM
                        </NavLink>
                      </SheetClose>
                      <div className="h-2" />
                      <SheetClose asChild>
                        <Button
                          variant="default"
                          className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full justify-start"
                          onClick={() => {
                            logout();
                            navigate("/");
                          }}
                        >
                          Logout
                        </Button>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              {/* Desktop: keep Logout button visible */}
              <div className="hidden md:block">
                <Button
                  variant="default"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
