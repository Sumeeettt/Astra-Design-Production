import "./globals.css";
import AppLayout from "@/components/AppLayout";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "ASTRA",
  description: "Your event design workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
