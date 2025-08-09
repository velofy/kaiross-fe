import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const handler = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--spot-x", `${x}%`);
      document.documentElement.style.setProperty("--spot-y", `${y}%`);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet>
        <title>Kaiross - Connect, Collaborate, Thrive</title>
        <meta
          name="description"
          content="Kaiross: The trusted social platform for education communities. Connect with verified peers, mentors, and friends effortlessly."
        />
        <link rel="canonical" href={origin + "/"} />
        <meta property="og:title" content="Kaiross  Connect, Collaborate, Thrive" />
        <meta
          property="og:description"
          content="Kaiross: The trusted social platform for education communities. Connect with verified peers, mentors, and friends effortlessly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={origin + "/"} />
        <meta property="og:site_name" content="Kaiross" />
        <meta property="og:image" content={origin + "/favicon.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kaiross - Connect, Collaborate, Thrive" />
        <meta
          name="twitter:description"
          content="Kaiross: The trusted social platform for education communities. Connect with verified peers, mentors, and friends effortlessly."
        />
        <meta name="twitter:image" content={origin + "/favicon.png"} />
      </Helmet>

      <main className="relative min-h-[calc(100svh-56px)] md:min-h-[calc(100dvh-56px)] flex items-center justify-center pb-[env(safe-area-inset-bottom)]">
        {/* Signature spotlight background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_var(--spot-x,50%)_var(--spot-y,30%),hsl(var(--primary)/0.25),transparent_70%)]" />

        <section className="container relative mx-auto flex flex-col items-center justify-center gap-6 py-8 md:py-16 text-center px-4">
          <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Kaiross - Find Good People
          </h1>
          <p className="max-w-2xl text-pretty text-base md:text-lg text-muted-foreground mt-3 md:mt-4">
            Kaiross is a social network for people who are amazing and want to meet other amazing people.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 md:mt-8">
            <Button size="lg" onClick={() => navigate("/login")}>
              Get Started
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate("/discovery")}>
              Explore Kaiross
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
