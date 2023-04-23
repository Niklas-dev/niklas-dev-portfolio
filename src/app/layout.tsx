import NavBar from "@/components/NavBar";
import "./../styles/global.css";

export const metadata = {
  title: "Niklas-dev | Portfolio",
  description:
    "This is the portfolio of Niklas-dev. I am a fullstack developer and I would love to work on your ideas!",
  keywords: [
    "niklas",
    "niklas-dev",
    "portfolio",
    "developer",
    "personal site",
    "freelancing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-background overflow-x-hidden">
        <main className="">
          {children}
          <NavBar />
        </main>
      </body>
    </html>
  );
}
