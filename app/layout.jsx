import './globals.css';

export const metadata = {
  title: 'Integrity Dental | Healthy Smiles Begin Here',
  description:
    'Integrity Dental offers premium dental care in South Extension, New Delhi. Services include teeth cleaning, root canal, braces, implants and smile makeovers. Book your appointment today.',
  keywords: 'dental clinic, dentist, South Extension Delhi, teeth cleaning, root canal, braces, dental implants, smile makeover, Integrity Dental',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
