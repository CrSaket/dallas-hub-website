import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkewCards from "@/components/ui/gradient-card-showcase";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={`rgba(255,255,255,${0.04 + path.id * 0.018})`}
                        strokeWidth={path.width}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Dallas Hub Cricket",
    onCtaClick,
}: {
    title?: string;
    onCtaClick?: () => void;
}) {
    const words = title.split(" ");

    return (
        <>
            {/* ── Hero ── */}
            <div
                className="relative w-full flex items-center justify-center overflow-hidden"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #b41a43 0%, #7a0022 100%)",
                }}
            >
                {/* Horizontal lines overlay — matches every other page's stripe-hero */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "repeating-linear-gradient(0deg, transparent 0px, transparent 22px, rgba(255,255,255,0.033) 22px, rgba(255,255,255,0.033) 24px)",
                    }}
                />
                {/* Diagonal stripes overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "repeating-linear-gradient(-55deg, transparent 0px, transparent 60px, rgba(180,26,67,0.12) 60px, rgba(180,26,67,0.12) 120px)",
                    }}
                />
                {/* Radial glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at 65% 40%, rgba(0,0,0,0.18) 0%, transparent 55%), radial-gradient(ellipse at 15% 70%, rgba(0,0,0,0.2) 0%, transparent 45%)",
                    }}
                />

                {/* Animated floating paths */}
                <div className="absolute inset-0">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        style={{ maxWidth: "80rem", margin: "0 auto" }}
                    >
                        {/* Section label */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ marginBottom: "1.5rem" }}
                        >
                            <span
                                className="text-sm font-semibold tracking-widest uppercase"
                                style={{ color: "rgba(255,255,255,0.58)" }}
                            >
                                North Texas
                            </span>
                        </motion.div>

                        {/* Animated title */}
                        <h1
                            className="font-black mb-8"
                            style={{
                                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.05,
                                color: "white",
                            }}
                        >
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block"
                                    style={{ marginRight: wordIndex < words.length - 1 ? "0.55em" : 0 }}
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 80, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: wordIndex * 0.12 + letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            style={{ display: "inline-block" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            style={{
                                color: "rgba(255,255,255,0.7)",
                                fontSize: "0.98rem",
                                lineHeight: 1.72,
                                maxWidth: "540px",
                                margin: "0 auto 2.5rem",
                                fontWeight: 500,
                            }}
                        >
                            The largest youth cricket association in North Texas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                        >
                            <Button
                                onClick={onCtaClick}
                                className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                                style={{
                                    background: "white",
                                    color: "#b41a43",
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    padding: "1rem 2.8rem",
                                    height: "auto",
                                    borderRadius: "0.5rem",
                                    border: "none",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                Get Involved →
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <SkewCards onCtaClick={onCtaClick} />
        </>
    );
}
