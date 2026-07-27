import { useEffect } from "react";

const SITE_URL = "https://sinharahulandco.com";
const SITE_NAME = "CA Sinha Rahul & Co.";
const DEFAULT_DESCRIPTION =
  "Trusted Chartered Accountants in Jaipur and Bengaluru providing audit, tax, compliance, corporate advisory, ESG and CSR services for startups, SMEs and listed businesses.";
const DEFAULT_KEYWORDS =
  "Chartered Accountants, CA, audit, tax advisory, GST compliance, corporate law, ESG advisory, CSR reporting, Jaipur, Bengaluru";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

function createOrUpdateTag(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}='${key}']`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function updateCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function updateJsonLd(data: object) {
  const id = "seo-json-ld";
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("id", id);
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data, null, 2);
}

export type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  keywords?: string;
};

export function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
}: SeoProps) {
  useEffect(() => {
    const pageTitle = title
      ? title.includes(SITE_NAME)
        ? title
        : `${title} | ${SITE_NAME}`
      : SITE_NAME;
    const pageDescription = description ?? DEFAULT_DESCRIPTION;
    const pageUrl = `${SITE_URL}${path ?? window.location.pathname}`;
    const pageImage = image ?? DEFAULT_IMAGE;

    document.title = pageTitle;
    createOrUpdateTag("name", "description", pageDescription);
    createOrUpdateTag("name", "keywords", keywords ?? DEFAULT_KEYWORDS);
    createOrUpdateTag("name", "robots", "index, follow");
    createOrUpdateTag("property", "og:title", pageTitle);
    createOrUpdateTag("property", "og:description", pageDescription);
    createOrUpdateTag("property", "og:type", type);
    createOrUpdateTag("property", "og:url", pageUrl);
    createOrUpdateTag("property", "og:site_name", SITE_NAME);
    createOrUpdateTag("property", "og:image", pageImage);
    createOrUpdateTag("name", "twitter:card", "summary_large_image");
    createOrUpdateTag("name", "twitter:title", pageTitle);
    createOrUpdateTag("name", "twitter:description", pageDescription);
    createOrUpdateTag("name", "twitter:image", pageImage);
    createOrUpdateTag("name", "theme-color", "#0f172a");
    updateCanonical(pageUrl);

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": pageUrl + "#webpage",
          "url": pageUrl,
          "name": pageTitle,
          "description": pageDescription,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "@id": SITE_URL + "/#website",
            "url": SITE_URL,
            "name": SITE_NAME,
            "description": DEFAULT_DESCRIPTION,
          },
        },
        {
          "@type": "ProfessionalService",
          "@id": SITE_URL + "/#business",
          "name": SITE_NAME,
          "url": SITE_URL,
          "description": DEFAULT_DESCRIPTION,
          "telephone": "+918560088000",
          "email": "mailto:Rksinha.1710@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 13-14, SV Complex, Navodaya Nagar, Kothanur Main Road, JP Nagar 7th Phase",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560078",
            "addressCountry": "IN",
          },
          "areaServed": ["India"],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              "opens": "10:00",
              "closes": "18:00",
            },
          ],
          "sameAs": [
            "https://www.facebook.com/sinharahulandco/",
            "https://www.instagram.com/sinharahulandco/",
            "https://www.linkedin.com/company/sinha-rahul-co/",
          ],
          "image": pageImage,
        },
      ],
    };

    updateJsonLd(jsonLd);
  }, [title, description, path, image, type, keywords]);

  return null;
}
