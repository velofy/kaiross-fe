import Link from "next/link";

export const metadata = {
  title: "Kaiross — Welcome",
};

export default function LandingPage() {
  return (
    <section className="py-12">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight">
              Warm. Playful. Polished.
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              Kaiross is a space to share moments and connect with your circle.
              A hybrid of Snapchat's playfulness, Clubhouse's warmth, and Instagram's polish.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/login" className="btn btn-primary">Sign In</Link>
              <Link href="/discovery" className="btn btn-secondary">Discover</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-brand-primary/40 via-brand-secondary/40 to-brand-accent/40 blur-3xl rounded-3xl" />
            <div className="relative card p-6">
              <div className="aspect-video rounded-2xl bg-white/60 border border-amber-100 flex items-center justify-center text-gray-500">
                Kaiross Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}