"use client";
import Header from "@/app/components/Header/Header";
import Analyses from "@/app/components/Analyses/Analyses";
const analysesData = [
  {
    name: "Blood Test",
    description: "General blood test including hemoglobin levels.",
  },
  {
    name: "Urine Test",
    description: "Basic urine analysis to check for infections.",
  },
  {
    name: "X-Ray",
    description: "Chest X-Ray to check for lung conditions.",
  },
  {
    name: "MRI Scan",
    description: "Magnetic resonance imaging of the brain.",
  },
  {
    name: "Allergy Test",
    description: "Test for food and environmental allergies.",
  },
  {
    name: "Liver Function Test",
    description: "Blood test to evaluate liver function.",
  },
  {
    name: "Kidney Function Test",
    description: "Blood test to check kidney function.",
  },
  {
    name: "Cardiac Enzyme Test",
    description: "Enzyme test to detect heart damage.",
  },
  {
    name: "Thyroid Function Test",
    description: "Test to check levels of thyroid hormones.",
  },
  {
    name: "Glucose Tolerance Test",
    description: "Test to diagnose diabetes.",
  },
  // Добавь больше анализов
  {
    name: "CT Scan",
    description: "Computed tomography to get detailed body images.",
  },
  {
    name: "EKG",
    description: "Electrocardiogram to check heart activity.",
  },
  {
    name: "Bone Density Test",
    description: "Test to measure bone strength and risk of fractures.",
  },
  {
    name: "Colonoscopy",
    description: "Examination of the colon for early detection of cancer.",
  },
  {
    name: "Pap Smear",
    description: "Test for cervical cancer screening.",
  },
];

function Page() {
  return (
    <>
      <Header />
      <Analyses analyses={analysesData} />
    </>
  );
}
export default Page;
