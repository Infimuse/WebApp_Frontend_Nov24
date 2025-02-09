// import { notFound } from "next/navigation";
// import experiences from "@/data/data";
// import EventDetails from "@/components/EventDetails";
// import { PageProps } from "../../../../.next/types/app/layout";

// export async function generateStaticParams() {
//   return experiences.map((ticket) => ({
//     id: `${ticket.id}`,
//   }));
// }

// const getLearningExperience = (id: string) => {
//   const data = experiences.find((exp) => exp.id === id);
//   return data;
// };

// export default function ExperienceDetail({ params }: PageProps) {
//   const experience = getLearningExperience(params?.id as string);

//   if (!experience) {
//     notFound();
//   }

//   return <EventDetails id={params?.id as string} />;
// }

import { notFound } from "next/navigation";
import experiences from "@/data/data";
import EventDetails from "@/components/EventDetails";

// Define the proper types
type Experience = {
  id: string;
  // Add other experience properties here
};

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }));
}

const getLearningExperience = (id: string): Experience | undefined => {
  return experiences.find((exp) => exp.id === id);
};

export default function ExperienceDetail({ params }: PageProps) {
  const experience = getLearningExperience(params.id);

  if (!experience) {
    notFound();
  }

  return <EventDetails id={params.id} />;
}
