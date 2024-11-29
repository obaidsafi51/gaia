import localFont from "next/font/local";

import "./globals.css";

export const metadata = {
  title: "Gaia",
  description: "Safety always by your side.",
  icons: {
    shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
