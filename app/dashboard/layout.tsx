import { Metadata } from "next";
import AuthContextProvider from "../contexts/AuthContext";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemContext";
import useTheme from "./hooks/useTheme";

export const metadata: Metadata = {
  title: "Paygeon | Dashboard",
  description: "Paygeon dashboard",
};
type Props = Readonly<{
  children: React.ReactNode;
}>
export default function RootLayout({children}:Props) {
  return (
    <html lang="en">
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
    </html>
  );
}
