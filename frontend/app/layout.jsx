import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Kaiross",
  description: "Kaiross - Warm, playful, polished social prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="container-page py-6">{children}</main>
      </body>
    </html>
  );
}