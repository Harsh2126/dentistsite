import './globals.css';

export const metadata = {
  title: 'V.S. Smile Bloom Dental & Aesthetics | Sikandra, Agra',
  description:
    'V.S. Smile Bloom Dental & Aesthetics is a top-rated dental clinic in Sikandra, Agra. Rated 5.0 ⭐ by 119+ patients. Services include RCT, Sedation Dentistry, Oral Surgery, Teeth Whitening, Braces and more. Book your appointment today.',
  keywords: 'dental clinic agra, dentist sikandra agra, RCT agra, root canal agra, teeth whitening agra, dental implants agra, V.S. Smile Bloom, Dr. Ayush Katiyar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
