import GenericForm from "@/app/ui/donate/donate-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Registration | Our Family First",
  description:
    "We offer psycho-educational workshops and couples counseling to help Israeli Soldiers reintegrate into family life after experiencing the trauma of war.",
};

export default function Event() {
  return (
    <main>
      <GenericForm
        iframeSrc="https://form.jotform.com/250224396788972"
        bannerTitle="Event Registration"
      />
    </main>
  );
}
