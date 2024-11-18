// app/layout.tsx
import "./globals.css";
import Sidebar from "./components/Sidebar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="ml-60 p-8 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

