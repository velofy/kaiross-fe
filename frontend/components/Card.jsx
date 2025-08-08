"use client";

import Avatar from "./Avatar";

export default function Card({
  variant = "post", // 'post' | 'user'
  avatar,
  title,
  subtitle,
  content,
  onPrimary,
  primaryLabel,
}) {
  if (variant === "user") {
    return (
      <div className="card p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar src={avatar} alt={title} size={48} />
          <div>
            <div className="font-medium">{title}</div>
            {subtitle ? <div className="text-xs text-gray-500">{subtitle}</div> : null}
          </div>
        </div>
        {primaryLabel ? (
          <button className="btn btn-primary" onClick={onPrimary}>
            {primaryLabel}
          </button>
        ) : null}
      </div>
    );
  }

  const isImage = typeof content === "string" && content.startsWith("http");

  return (
    <article className="card p-4">
      <div className="flex items-center gap-3">
        <Avatar src={avatar} alt={title} size={44} />
        <div className="flex-1">
          <div className="font-medium">{title}</div>
          {subtitle ? <div className="text-xs text-gray-500">{subtitle}</div> : null}
        </div>
      </div>
      <div className="mt-3">
        {isImage ? (
          <img src={content} alt="post" className="rounded-xl w-full object-cover border border-amber-100" />
        ) : (
          <p className="text-gray-700 leading-relaxed">{content}</p>
        )}
      </div>
    </article>
  );
}