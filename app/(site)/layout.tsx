import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
