import type { Metadata } from "next";
import Info from "./components/Info";

export const metadata: Metadata = {
  title: "Paygeon | Accounts",
  description: "Pages related to user accounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="md:grid grid-cols-2 gap-4">
            <section className="p-4 py-8 overflow-y-auto h-screen theme-scrollbar">
                <div className="max-w-[450px] mx-auto">
                    {children}
                </div>
            </section>
           <Info/>
        </main>
      </body>
    </html>
  );
}
