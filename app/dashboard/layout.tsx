import { Metadata } from "next";
import ExternalScript from "./scripts";
import AuthContextProvider from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "Paygeon | Dashboard",
  description: "Paygeon dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
