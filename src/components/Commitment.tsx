// import { FlaskConical, Leaf, Users } from "lucide-react";
// import { Card, CardContent } from "./ui/card";

// export function Commitment() {
//   const commitments = [
//     {
//       icon: FlaskConical,
//       title: "Scientific BioSolutions",
//       description: "Pioneering bio-innovations for aquaculture using advanced research and development.",
//       color: "text-[#4A5A3C]"
//     },
//     {
//       icon: Leaf,
//       title: "Eco-Friendly Practices",
//       description: "Non-toxic, safe, and sustainable solutions that protect our environment.",
//       color: "text-secondary"
//     },
//     {
//       icon: Users,
//       title: "Farmer-Centric",
//       description: "Cost-effective, innovative, and export-friendly products designed for farmers.",
//       color: "text-accent"
//     }
//   ];

//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">
//         <h2 className="text-[#4A5A3C] mb-12 text-center" style={{ fontSize: '40px', fontWeight: 600 }}>
//           Our Commitment
//         </h2>
//         <p style={{padding:" 0 200px 30px 200px", fontSize:'20px' , textAlign:'center'}}>
//           At Aquaphilic, our commitment goes beyond supplying aqua medicines—we partner with farmers to ensure healthier ponds, stronger aquatic life, and sustainable aquaculture success. Every product and service we offer is driven by responsibility, science, and care for the aquaculture ecosystem.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {commitments.map((item, index) => (
//             <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-8 text-center">
//                 <div className="flex justify-center mb-6">
//                   <div className={`w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center ${item.color}`}>
//                     <item.icon className="w-8 h-8" />
//                   </div>
//                 </div>
//                 <h3 className="mb-4" style={{ fontSize: '22px', fontWeight: 600 }}>
//                   {item.title}
//                 </h3>
//                 <p className="text-foreground" style={{ fontSize: '16px', lineHeight: 1.7 }}>
//                   {item.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { FlaskConical, Users, Leaf, ShieldCheck, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Commitment() {
  const commitments = [
    {
      icon: FlaskConical,
      title: "Commitment to Quality",
      description:
        "We deliver high-quality, consistent, and effective aqua health solutions. Every product is developed with carefully selected formulations and undergoes strict quality checks to meet industry standards and field performance expectations.",
      color: "text-[#4A5A3C]"
    },
    {
      icon: Users,
      title: "Commitment to Farmer Success",
      description:
        "Aquaphilic supports aquaculture farmers at every stage—from pond preparation to harvest—by offering practical guidance, technical support, and field-level recommendations for better survival, growth, and profitability.",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "Commitment to Pond & Environmental Health",
      description:
        "Healthy ponds are the foundation of successful aquaculture. Our solutions focus on maintaining water quality, soil balance, and microbial stability while reducing stress on aquatic life and minimizing environmental impact.",
      color: "text-secondary"
    },
    {
      icon: ShieldCheck,
      title: "Commitment to Safety & Sustainability",
      description:
        "We promote safe, responsible, and sustainable aquaculture practices. Our products help prevent disease, reduce excessive chemical usage, and support long-term pond productivity without harming the ecosystem.",
      color: "text-emerald-600"
    },
    {
      icon: Lightbulb,
      title: "Commitment to Innovation",
      description:
        "Innovation drives Aquaphilic forward. Through continuous research, field trials, and farmer feedback, we develop advanced formulations to address evolving aquaculture challenges.",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          className="text-[#4A5A3C] mb-12 text-center"
          style={{ fontSize: "40px", fontWeight: 600 }}
        >
          Our Commitment
        </h2>

        <p
          style={{
            padding: "0 200px 30px 200px",
            fontSize: "20px",
            textAlign: "center"
          }}
        >
          At Aquaphilic, our commitment goes beyond supplying aqua medicines—we
          partner with farmers to ensure healthier ponds, stronger aquatic life,
          and sustainable aquaculture success.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center ${item.color}`}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="mb-4" style={{ fontSize: "22px", fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p
                  className="text-foreground"
                  style={{ fontSize: "16px", lineHeight: 1.7 }}
                >
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
