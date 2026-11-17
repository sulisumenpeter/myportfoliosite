import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CommandPalette from "@/components/CommandPalette";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sulisumenpeter.com"),
  title: {
    default: "Sulisumen Peter | AI Intelligent Systems & Automation Engineer",
    template: "%s | Sulisumen Peter",
  },
  description:
    "AI Intelligent Systems & Automation Engineer with 10+ years of IT engineering experience. Building autonomous AI agents, multi-agent architectures, enterprise workflow automation, and resilient software solutions. Known as #IT_Preacher.",
  keywords: [
    "Sulisumen Peter",
    "IT_Preacher",
    "AI Intelligent Systems Engineer",
    "AI Automation Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "LangGraph",
    "CrewAI",
    "n8n Workflow Automation",
    "Make Automation",
    "Google Gemini API",
    "AI Governance",
    "RedTeam AI Labs",
    "IT Consultant",
    "Lisumen Innovative Hub"
  ],
  authors: [{ name: "Sulisumen Peter", url: "https://sulisumenpeter.com" }],
  creator: "Sulisumen Peter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sulisumenpeter.com",
    title: "Sulisumen Peter | AI Intelligent Systems & Automation Engineer",
    description:
      "I build intelligent systems that solve real-world problems, automate business operations, and turn ideas into working technology.",
    siteName: "Sulisumen Peter Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sulisumen Peter - AI Intelligent Systems & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulisumen Peter | AI Intelligent Systems & Automation Engineer",
    description:
      "Building Intelligent Systems. Automating Possibilities. 10+ years IT & AI Engineering experience.",
    images: ["/profile.jpg"],
    creator: "@sulisumenpeter",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg" }
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sulisumen Peter",
    alternateName: "IT_Preacher",
    jobTitle: "AI Intelligent Systems & Automation Engineer",
    url: "https://sulisumenpeter.com",
    image: "https://sulisumenpeter.com/profile.jpg",
    sameAs: [
      "https://www.linkedin.com/in/sulisumen-peter/",
      "https://github.com/sulisumenpeter",
      "https://calendly.com/sulisumenpeter-tech/30min"
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Autonomous Agents",
      "Multi-Agent Architectures",
      "LangGraph",
      "Workflow Automation",
      "n8n",
      "Make",
      "Cybersecurity",
      "Software Engineering",
      "IT Infrastructure"
    ],
    description:
      "AI Intelligent Systems & Automation Engineer and technology entrepreneur with over 10 years of IT experience."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 bg-topographic-contour antialiased">
        <CommandPalette />
        <InteractiveTerminal />
        {children}
      </body>
    </html>
  );
}
