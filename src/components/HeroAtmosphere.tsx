import { HeroPageMesh } from "./HeroPageMesh";

/** Corner light limbs + delicate page mesh behind */
export function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
    >
      <HeroPageMesh />

      <div className="hero-bloom hero-bloom--tr" />
      {/* Single dominant limb + quieter companion */}
      <div className="hero-limb hero-limb--tr" />
      <div className="hero-limb hero-limb--bl" />

      <div className="hero-hairline" />
      <div className="hero-center-shade" />
    </div>
  );
}
