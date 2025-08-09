import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Not Found - Kaiross</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <link rel="canonical" href={origin + location.pathname} />
        <meta property="og:title" content="404 Not Found - Kaiross" />
        <meta property="og:description" content="The page you are looking for does not exist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={origin + location.pathname} />
        <meta property="og:site_name" content="Kaiross" />
        <meta property="og:image" content={origin + "/favicon.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 Not Found - Kaiross" />
        <meta name="twitter:description" content="The page you are looking for does not exist." />
        <meta name="twitter:image" content={origin + "/favicon.png"} />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
