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
      <body className="bg-[var(----background)]">{children}</body>
    </html>
  );
}
