import type { Metadata } from "next";

import "../styles/globals.css";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Emilist",
  applicationName: "Emilist",
  description:
    "Discover and post jobs, manage projects, and buy materials on Emilist, your all-in-one dream platform.",
  keywords: [
    "Emilist",
    "freelance jobs",
    "project management",
    "materials sharing",
    "services",
    "biddable jobs",
    "reoccurring jobs",
    "Artisans",
    "Artisan",
    "Handymen",
    "Labourers",
    "Experts",
    "Projects",
  ],
  openGraph: {
    title: "Emilist: Discover Your Project Dream Team Here",
    description:
      "Join Emilist to find or post jobs, manage projects,  register your service and buy materials seamlessly.",
    url: "https://emilist.com",
    siteName: "Emilist",
    images: [
      {
        url: "https://emilist.com/images/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Emilist Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emilist: Find & Post Jobs, Projects, and Materials",
    description:
      "Discover jobs, projects, and materials on Emilist, the ultimate freelance platform.",
    images: ["https://emilist.com/images/Logo.svg"],
  },
  alternates: {
    canonical: "https://emilist.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app">
        <div className="text-yellow-400 bg-yellow-100 text-green-400 bg-green-100 text-red-400 bg-red-100 text-[#FF5D7A] bg-[#FFF1F2]" />
        <Providers>
          <div className="">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
