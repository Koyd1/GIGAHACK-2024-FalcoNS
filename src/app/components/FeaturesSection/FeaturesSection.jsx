import "./featuresSection.css";
import { FaAmbulance } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { CiStethoscope } from "react-icons/ci";
import FeatureItem from "@/app/components/FeatureItem/FeatureItem";

function FeaturesSection() {
  const features = [
    {
      icon: FaAmbulance,
      title: "Emergency Help",
      description:
        "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
    {
      icon: MdLocalPharmacy,
      title: "Enriched Pharmacy",
      description:
        "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
    {
      icon: CiStethoscope,
      title: "Medical Treatment",
      description:
        "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
  ];

  return (
    <div className={"Feautes section"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Are Always Ready to Help You & Your Family</h2>
              <img src="/img/section-img.png" className="w-10" alt="Section" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-12" key={index}>
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
