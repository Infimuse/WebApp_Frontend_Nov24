import { notFound } from "next/navigation";
import experiences from "@/data/data";
import EventDetails from "@/components/EventDetails";
export async function generateStaticParams() {
  return experiences.map((ticket) => ({
    id: `${ticket.id}`,
  }));
}

export const getLearningExperience = (id: string) => {
  return experiences.find((exp) => exp.id === id);
};

type PageParams = {
  params: {
    id: string;
  };
};

export default function ExperienceDetail({ params }: PageParams) {
  const experience = getLearningExperience(params.id as string);

  if (!experience) {
    notFound();
  }

  return <EventDetails id={params.id as string} />;
}
