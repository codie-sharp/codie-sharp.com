import "./style.css";

export const metadata = {
  title: "Codie Sharp",
  description: "Welcome to my site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
