import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "figma:asset/c8367aae257e11d2521b267f32e4f7e7c158a546.png";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          className="text-[#0B7A9F] mb-12 text-center "
          style={{ fontSize: "40px", fontWeight: 600 }}
        >
          About Aqua Philic
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <p
              className="text-foreground"
              style={{ fontSize: "20px", lineHeight: 1.8 }}
            >
At Aquaphilic, we are committed to improving aquaculture productivity through high-quality aqua medicines, probiotics, disinfectants, mineral formulations, and pond management solutions. Our products are designed to create healthier ponds, stronger species, and higher yields—while keeping sustainability at the core.            </p>
            <p
              className="text-foreground"
              style={{ fontSize: "20px", lineHeight: 1.8 }}
            >
We combine research-based formulations, on-field expertise, and farmer-first support to ensure safe, effective, and economical solutions for every aquaculture challenge.            </p>
            {/* <p
              className="text-foreground"
              style={{ fontSize: "18px", lineHeight: 1.8 }}
            >
              With a farmer-centric approach, we ensure our
              products meet international export standards,
              helping aquaculture farmers achieve healthier
              ponds, stronger shrimp, and sustainable growth.
            </p> */}
          </div>

          <div className="relative h-[400px] rounded-[10px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <img
              src={aboutImage}
              alt="About Aqua Philic Scientific Solutions - Lab Research"
              className="w-full h-[20px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}