import { HeroPageMesh } from "./HeroPageMesh";

/** Corner light limbs + delicate page mesh behind */
export function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
    >
      {/* Page silhouettes — delicate, behind rings */}
      <HeroPageMesh />

      <div className="hero-bloom hero-bloom--tr" />
      <div className="hero-bloom hero-bloom--bl" />

      <div className="hero-limb hero-limb--tr" />
      <div className="hero-limb hero-limb--bl" />

      <div className="hero-hairline" />
      <div className="hero-center-shade" />
    </div>
  );
}
