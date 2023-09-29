import "@styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EmiList",
  description: "Find the perfect workers for your projects",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
};

export default RootLayout;
