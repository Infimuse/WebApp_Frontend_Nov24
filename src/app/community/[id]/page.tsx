import CommunityPage from "@/components/CommunityPage";
import experiences from "@/data/data";

export async function generateStaticParams() {
  return experiences.map((ticket) => ({
    id: `${ticket.id}`,
  }));
}

export default function HomePage() {
  return <CommunityPage />;
}
