import Avatar from "../../components/Avatar";
import { users, posts } from "../../styles/mockData";

export default function ProfilePage() {
  const me = users[0];
  const myPosts = posts;

  return (
    <section>
      <div className="flex items-center gap-6">
        <Avatar src={me.avatar} alt={me.name} size={84} />
        <div>
          <h1 className="text-2xl font-semibold">{me.name}</h1>
          <p className="text-gray-600">Bio: Coffee, sunsets, and good vibes.</p>
          <button className="btn btn-ghost mt-3 border border-amber-200">Edit Profile</button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myPosts.map((p) => (
          <div key={p.id} className="card overflow-hidden">
            {typeof p.content === "string" && p.content.startsWith("http") ? (
              <img src={p.content} alt="post" className="w-full h-56 object-cover" />
            ) : (
              <div className="p-4 text-gray-700">{p.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
