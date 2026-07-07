import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.machinerymovers.info";

function SEO({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }

    const canonicalHref =
      pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);
  }, [title, description, pathname]);

  return null;
}

export default SEO;
