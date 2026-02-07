import "../styles/index.css";

export const metadata = {
  title: "Glow's Delicacy",
  description:
    "Glow's Delicacy delivers fresh, homemade meals and baked goods right to your doorstep.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
