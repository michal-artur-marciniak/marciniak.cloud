export const SITE = {
  website: "https://marciniak.cloud/", // replace this with your deployed domain
  author: "Michał Artur Marciniak",
  profile: "https://marciniak.cloud/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Marciniak",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/michal-artur-marciniak/marciniak.cloud/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Warsaw", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
