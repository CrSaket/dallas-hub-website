import React from "react";
import { cn } from "@/lib/utils";

const cardContents = [
  {
    title: "Youth Cricket Programs",
    description:
      "Dallas Hub runs age-appropriate academies and competitive leagues for players from 6 to 18 years old, giving every young athlete a structured path from beginner to elite.",
  },
  {
    title: "USA Cricket Affiliated",
    description:
      "Officially affiliated with USA Cricket, the national governing body for the sport, ensuring our players compete and develop under recognized national standards.",
  },
  {
    title: "Building the Next Generation of American Cricket",
    description:
      "Dallas Hub was founded on a single belief: cricket should be accessible to every kid in North Texas regardless of background or experience. Our programs span beginner clinics, school outreach, weekend leagues, and high-performance academies — all designed to build skill, discipline, and teamwork. We partner with local schools, parks, and community organizations across the DFW metroplex to bring quality coaching and equipment to neighborhoods that have never had access to the sport before. Every season we expand our reach, and every season more young athletes discover what cricket can do for them.",
  },
  {
    title: "501(c)(3) Nonprofit",
    description:
      "A registered nonprofit organization — every contribution goes directly toward equipment, coaching, facilities, and expanding cricket access across the Dallas–Fort Worth area.",
  },
  {
    title: "Dallas–Fort Worth Hub",
    description:
      "Serving communities across the DFW metroplex with local training facilities, certified coaches, and a growing network of affiliated clubs.",
  },
];

const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "relative border border-dashed rounded-lg p-6 bg-white min-h-[200px] flex flex-col justify-between",
        className
      )}
      style={{ borderColor: "rgba(0,74,173,0.3)" }}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-2">
        <h3
          className="text-xl font-bold"
          style={{ color: "var(--dark)" }}
        >
          {title}
        </h3>
        <p style={{ color: "var(--gray)", lineHeight: 1.7, fontSize: "0.92rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`size-6 ${className ?? ""}`}
    style={{ color: "#004aad" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export default function DallasHubBentoCards({
  onCtaClick,
}: {
  onCtaClick?: () => void;
}) {
  return (
    <section style={{ background: "var(--light)", borderTop: "1px solid rgba(0,74,173,0.1)" }}>
      <div
        className="py-16 px-6"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          borderLeft: "1px solid rgba(0,74,173,0.08)",
          borderRight: "1px solid rgba(0,74,173,0.08)",
        }}
      >
        {/* Section label */}
        <div className="section-label" style={{ textAlign: "center" }}>
          About Dallas Hub
        </div>
        <div className="divider" style={{ margin: "0 auto 40px" }} />

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6">
          <PlusCard
            {...cardContents[0]}
            className="lg:col-span-3 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[1]}
            className="lg:col-span-2 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[2]}
            className="lg:col-span-4 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[3]}
            className="lg:col-span-2 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[4]}
            className="lg:col-span-2 lg:row-span-1"
          />
        </div>

        {/* Footer row */}
        <div className="max-w-2xl ml-auto text-right px-4 mt-8 lg:-mt-16">
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--dark)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Built for community.
            <br />
            <span style={{ color: "var(--blue)" }}>Designed for excellence.</span>
          </h2>
          <p className="section-body" style={{ marginBottom: "24px" }}>
            Ready to get involved? Contact us to learn about programs,
            academies, and opportunities across North Texas.
          </p>
          <button className="btn-primary" onClick={onCtaClick}>
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
