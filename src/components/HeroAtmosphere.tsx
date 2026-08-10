import { HeroPageMesh } from "./HeroPageMesh";

/**
 * Mesh leads the metaphor; corner limbs stay as soft atmosphere only.
 */
export function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
    >
      <HeroPageMesh />

      <div className="hero-bloom hero-bloom--tr" />
      <div className="hero-bloom hero-bloom--bl" />
      {/* Single quieter limb — mesh owns the story */}
      <div className="hero-limb hero-limb--tr opacity-45" />

      <div className="hero-hairline" />
      <div className="hero-center-shade" />
    </div>
  );
}
