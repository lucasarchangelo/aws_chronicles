import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Gugi } from "next/font/google";
import { Providers } from "./providers";

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Arcane Warriors Saga | The AWS Chronicles",
  description: "Arcane Warriors Saga, The AWS Chronicles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={gugi.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
