import { motion } from "framer-motion";

const SPEED = 3;

export function Diamond() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="min(40%, 300px)"
      viewBox="0 0 314 257"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.8 }}
      stroke="#FFA800"
      strokeWidth={1}
    >
      <path d="M79 1H235M1 90H312.773" />
      <path d="M79 1L1 90L157 256.5" />
      <path d="M235 1L313 90L157 256.5" />
      {[0, 0.25, 0.5, 0.75, 1].map((delay) => (
        <motion.path
          key={delay}
          initial={{ d: "M79 1L1 90L157 256.5" }}
          animate={{
            d: "M235 1L313 90L157 256.5",
            transition: {
              type: "tween",
              repeat: Infinity,
              duration: SPEED,
              delay: SPEED * -delay,
            },
          }}
        />
      ))}
    </svg>
  );
}
