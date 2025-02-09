import { notFound } from "next/navigation";
import experiences from "@/data/data";
import EventDetails from "@/components/EventDetails";

// Define the proper types
type Experience = {
  id: string;
  // Add other experience properties here
};

// Updated type definition for App Router page props

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }));
}

const getLearningExperience = (id: string): Experience | undefined => {
  return experiences.find((exp) => exp.id === id);
};

type Params = Promise<{ id: string }>;
export default async function ExperienceDetail({ params }: { params: Params }) {
  const { id } = await params;
  const experience = getLearningExperience(id);

  if (!experience) {
    notFound();
  }

  return <EventDetails id={id} />;
}
