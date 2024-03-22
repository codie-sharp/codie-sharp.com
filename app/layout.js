import './globals.css';

export const metadata = {
  title: 'Codie#',
  description: 'Codie Sharp portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
