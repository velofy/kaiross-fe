import { Helmet } from "react-helmet-async";
import { users, posts } from "@/data/mockData";

const Profile = () => {
  const me = users[0];
  const myPosts = posts.filter((p) => p.author === me.name);
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet>
        <title>Profile Kaiross</title>
        <meta name="description" content="Your Kaiross profile: photo, bio, and posts grid." />
        <link rel="canonical" href={origin + "/profile"} />
        <meta property="og:title" content="Profile Kaiross" />
        <meta property="og:description" content="Your Kaiross profile: photo, bio, and posts grid." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={origin + "/profile"} />
        <meta property="og:site_name" content="Kaiross" />
        <meta property="og:image" content={origin + "/favicon.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Profile Kaiross" />
        <meta name="twitter:description" content="Your Kaiross profile: photo, bio, and posts grid." />
        <meta name="twitter:image" content={origin + "/favicon.png"} />
      </Helmet>
      <main className="container mx-auto space-y-6 py-6 md:max-w-4xl">
        <header>
          <h1 className="text-lg font-semibold">Your Profile</h1>
        </header>
        <section className="flex flex-row items-center gap-4 md:gap-6 flex-wrap">
          <img src={me.avatar} alt="Profile avatar" className="h-24 w-24 rounded-full object-cover shadow-glow" loading="lazy" />
          <div>
            <p className="text-2xl font-semibold">{me.name}</p>
            <p className="text-muted-foreground">Building meaningful moments. ☀️</p>
          </div>
          <div className="grow" />
          <button className="rounded-md border px-4 py-2 text-sm shadow-elevated hover:bg-accent">
            Edit Profile
          </button>
        </section>

        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {myPosts.map((p) => (
            p.content.type === "image" ? (
              <img key={p.id} src={p.content.value} alt="Profile post" className="aspect-square w-full rounded-md object-cover" loading="lazy" />
            ) : (
              <div key={p.id} className="aspect-square rounded-md border p-3 text-sm">
                {p.content.value}
              </div>
            )
          ))}
        </section>
      </main>
    </>
  );
};

export default Profile;
