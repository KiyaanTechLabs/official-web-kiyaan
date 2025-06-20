// src/app/layout.jsx
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
      <body>
        <ThemeProvider>
          <BodyWrapper>{children}</BodyWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}