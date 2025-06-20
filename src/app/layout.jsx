import "./globals.scss";
import { ThemeProvider } from "../context/ThemeContext";
import BodyWrapper from "../components/BodyWrapper";

export const metadata = {
  title: "Kiyaan TechLabs",
  description: "Building the Tech Behind the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Kiyaan TechLabs</title>
      </head>
      <body>
        <ThemeProvider>
          <BodyWrapper>{children}</BodyWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}