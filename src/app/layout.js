import "./globals.css";
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "ASTRA",
  description: "Your event design workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
