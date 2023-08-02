import featuresData from "@/json/FeactureData";
import SectionTitle from "../elements/SectionTitle";
import SingleFeature from "../elements/SingleFeature";

const Feacture = () => {
    return (
        <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28 my-4"
      >
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
    );
}

export default Feacture;
