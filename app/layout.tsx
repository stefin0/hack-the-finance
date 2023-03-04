import "./globals.css";

export const metadata = {
  title: "Hack The Finance",
  description: "Finance App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
