import { orbitron } from "@/app/fonts";

export default function Heading({ children }) {
  return <h1 className={`font-bold font-orbitron text-2xl pb-3 ${orbitron.className}`}>{children}</h1>;
}
