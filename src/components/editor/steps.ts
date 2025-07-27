import { EditorFormProps } from "@/lib/types";
import EducationForm from "@/components/editor/forms/EducationForm";
import GeneralInfoForm from "@/components/editor/forms/GeneralInfoForm";
import PersonalInfoForm from "@/components/editor/forms/PersonalInfoForm";
import SkillsForm from "@/components/editor/forms/SkillsForm";
import SummaryForm from "@/components/editor/forms/SummaryForm";
import WorkExperienceForm from "@/components/editor/forms/WorkExperienceForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  { title: "Education", component: EducationForm, key: "education" },
  { title: "Skills", component: SkillsForm, key: "skills" },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];
