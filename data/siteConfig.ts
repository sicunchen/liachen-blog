import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/logo.png",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "Lia Chen",
  siteDescription:
    "Lia Chen software development writing",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/sicunchen",
    linkedin: "https://www.linkedin.com/in/sicun-lia-chen-92bb97114/",
  },
};
export default siteConfig;
