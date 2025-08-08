"use client";

export default function Avatar({ src, alt = "", size = 40 }) {
  const dimension = typeof size === "number" ? `${size}px` : size;
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: dimension, height: dimension }}
      className="rounded-full object-cover border border-amber-100"
    />
  );
}