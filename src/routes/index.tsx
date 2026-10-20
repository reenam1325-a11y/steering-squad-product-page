import { createFileRoute } from "@tanstack/react-router";
import * as simpleIcons from "simple-icons";
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Gauge,
  Globe2,
  Hand,
  Instagram,
  PackageCheck,
  Palette,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "@/components/product-pages/version1.css";
import heroImage from "../assets/steering-hero.jpg";
import buildBmw from "../assets/build-bmw.jpg";
import buildAmg from "../assets/build-amg.jpg";
import buildPorsche from "../assets/build-porsche.jpg";
import buildTesla from "../assets/build-tesla.jpg";
import buildMustang from "../assets/build-mustang.jpg";
import buildLambo from "../assets/build-lambo.jpg";
import buildAudi from "../assets/build-audi.jpg";
import buildGtr from "../assets/build-gtr.jpg";
import buildSupra from "../assets/build-supra.jpg";
import buildDodge from "../assets/build-dodge.jpg";
import configuratorImage from "../assets/configurator-wheel.jpg";
import brandToyota from "../assets/brand-toyota.jpg";
import brandBmw from "../assets/brand-bmw.jpg";
import brandAudi from "../assets/brand-audi.jpg";
import brandHyundai from "../assets/brand-hyundai.jpg";
import brandMercedes from "../assets/brand-mercedes.jpg";
import brandHonda from "../assets/brand-honda.jpg";
import brandJaguar from "../assets/brand-jaguar.jpg";
import brandLamborghini from "../assets/brand-lamborghini.jpg";
import brandPorsche from "../assets/brand-porsche.jpg";
import brandNissan from "../assets/brand-nissan.jpg";
import materialCarbon from "../assets/material-carbon.jpg";
import materialAlcantara from "../assets/material-alcantara.jpg";
import materialLeather from "../assets/material-leather.jpg";
import materialStitching from "../assets/material-stitching.jpg";
import materialForgedCarbon from "../assets/material-forged-carbon.jpg";
import journalStitching from "../assets/journal-stitching.jpg";
import journalCarbon from "../assets/journal-carbon.jpg";
import journalMaterials from "../assets/journal-materials.jpg";
import workshopVideo from "../assets/workshop-video.mp4.asset.json";

const brandCollections = [
  { name: "Toyota", image: brandToyota, tall: true },
  { name: "BMW", image: brandBmw, tall: false },
  { name: "Audi", image: brandAudi, tall: true },
  { name: "Hyundai", image: brandHyundai, tall: false },
  { name: "Mercedes-Benz", image: brandMercedes, tall: false },
  { name: "Honda", image: brandHonda, tall: false },
  { name: "Jaguar", image: brandJaguar, tall: false },
  { name: "Lamborghini", image: brandLamborghini, tall: false },
  { name: "Porsche", image: brandPorsche, tall: false },
  { name: "Nissan", image: brandNissan, tall: false },
];
import beforeImage from "../assets/wheel-before.jpg";
import afterImage from "../assets/wheel-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Steering Wheels for Any Vehicle | Steering Squad" },
      { name: "description", content: "Handcrafted custom steering wheels for vehicles worldwide. Find your vehicle, choose your materials, and start a one-of-one build with Steering Squad." },
      { property: "og:title", content: "Steering Squad — Built Around You" },
      { property: "og:description", content: "Find and customize a handcrafted steering wheel made for your vehicle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const brands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Lamborghini", "Ferrari", "Tesla", "Ford", "Chevrolet", "Dodge", "Jeep", "Toyota", "Lexus", "Honda", "Nissan", "Subaru", "Volkswagen", "Land Rover", "Range Rover", "Bentley", "Aston Martin", "McLaren", "Maserati", "Cadillac", "GMC", "Hyundai", "Kia"];
const brandIconKeys: Record<string, keyof typeof simpleIcons> = {
  BMW: "siBmw", Audi: "siAudi", Porsche: "siPorsche", Lamborghini: "siLamborghini",
  Ferrari: "siFerrari", Tesla: "siTesla", Ford: "siFord", Chevrolet: "siChevrolet",
  Jeep: "siJeep", Toyota: "siToyota", Honda: "siHonda", Nissan: "siNissan",
  Subaru: "siSubaru", Volkswagen: "siVolkswagen", Bentley: "siBentley",
  "Aston Martin": "siAstonmartin", McLaren: "siMclaren", Maserati: "siMaserati",
  Cadillac: "siCadillac", Hyundai: "siHyundai", Kia: "siKia",
};
const featured = [
  { name: "BMW M", type: "Forged carbon · Alcantara", image: buildBmw },
  { name: "Mercedes-AMG", type: "Red carbon · Nappa leather", image: buildAmg },
  { name: "Porsche", type: "Leather · Blue center stripe", image: buildPorsche },
  { name: "Tesla", type: "Carbon yoke · Heated grips", image: buildTesla },
  { name: "Ford Mustang", type: "Perforated leather · Carbon", image: buildMustang },
  { name: "Lamborghini", type: "Alcantara · Red stitching", image: buildLambo },
  { name: "Audi RS", type: "Carbon · Silver accent", image: buildAudi },
  { name: "Nissan GT-R", type: "Carbon · Red accent", image: buildGtr },
  { name: "Toyota Supra", type: "Alcantara · Gold stitching", image: buildSupra },
  { name: "Dodge Challenger", type: "Flat-bottom · Perforated leather", image: buildDodge },
];
const models: Record<string, string[]> = {
  BMW: ["2 Series", "3 Series", "4 Series", "5 Series", "M2", "M3", "M4"],
  "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "G-Class", "GT", "S-Class"],
  Audi: ["A3", "A4", "A6", "Q5", "R8", "RS3", "RS6"],
  Porsche: ["911", "718", "Cayenne", "Macan", "Panamera", "Taycan"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y"],
  Ford: ["F-150", "Mustang", "Bronco", "Focus", "Explorer"],
};
const makeProfiles: Record<string, { platform: string; fitment: string; build: string }> = {
  BMW: { platform: "BMW M Sport / standard architecture", fitment: "OEM controls, airbag and heating retained", build: "Carbon, Alcantara and Nappa configurations available" },
  "Mercedes-Benz": { platform: "Mercedes-Benz / AMG architecture", fitment: "Factory controls and driver-assistance functions retained", build: "AMG-inspired carbon and leather builds available" },
  Audi: { platform: "Audi Sport / S line architecture", fitment: "OEM switchgear and airbag compatibility reviewed", build: "Round and flat-bottom custom profiles available" },
  Porsche: { platform: "Porsche Sport Design architecture", fitment: "Factory controls and drive-mode selector retained", build: "Leather, Alcantara and carbon combinations available" },
  Tesla: { platform: "Tesla steering / yoke architecture", fitment: "Factory electronics and heated grip options reviewed", build: "Round, sport and yoke configurations available" },
  Ford: { platform: "Ford Performance architecture", fitment: "OEM controls, airbag and paddles retained", build: "Leather, carbon and performance profiles available" },
};
const customizationOptions = [
  { name: "FORGED CARBON", detail: "A deep, marbled carbon finish with a hand-laid performance character.", callouts: ["FORGED CARBON", "GLOSS FINISH"], tone: "carbon" },
  { name: "ALCANTARA", detail: "A tactile motorsport grip with a soft, technical feel in the hands.", callouts: ["ALCANTARA GRIP", "RED STITCH"], tone: "alcantara" },
  { name: "NAPA LEATHER", detail: "Supple automotive-grade leather for a refined, factory-plus finish.", callouts: ["NAPA LEATHER", "PERFORATED GRIP"], tone: "leather" },
  { name: "CUSTOM STITCHING", detail: "Choose a precise thread color and stitch pattern to match your cabin.", callouts: ["CUSTOM THREAD", "HAND STITCHED"], tone: "stitching" },
  { name: "CENTER STRIPE", detail: "Add a high-visibility twelve-o’clock marker in your signature color.", callouts: ["CENTER STRIPE", "COLOR MATCHED"], tone: "stripe" },
  { name: "CUSTOM COLOR", detail: "Coordinate accents with paint, trim, upholstery or a completely new palette.", callouts: ["COLOR ACCENT", "MADE TO SAMPLE"], tone: "color" },
  { name: "PADDLE SHIFTERS", detail: "Complete the cockpit with extended performance paddles and premium finishes.", callouts: ["EXTENDED PADDLES", "OEM CONTROL"], tone: "paddles" },
  { name: "LED SHIFT LIGHT", detail: "Integrated RPM lighting adds an unmistakable motorsport focal point.", callouts: ["LED DISPLAY", "SHIFT LIGHT"], tone: "led" },
  { name: "CUSTOM DETAILS", detail: "Shape, badges, trim and finishing touches tailored to your exact brief.", callouts: ["CUSTOM PROFILE", "ONE OF ONE"], tone: "details" },
];
const materialLibrary = [
  { name: "3K Carbon Fiber", category: "Performance", image: materialCarbon, description: "A precise twill weave sealed beneath a UV-resistant clear coat for depth, rigidity, and long-term clarity.", details: ["Gloss or satin", "UV protected", "Hand laid"], callout: "UV-resistant resin" },
  { name: "Italian Alcantara", category: "High grip", image: materialAlcantara, description: "A soft motorsport surface with a controlled, tactile grip that feels composed through every turn.", details: ["Fine suede nap", "Breathable grip", "Multiple colors"], callout: "Performance grip" },
  { name: "Perforated Nappa", category: "Luxury", image: materialLeather, description: "Supple automotive-grade leather, perforated for breathability and shaped for a refined factory-plus feel.", details: ["Soft-touch grain", "Breathable", "Wear resistant"], callout: "Precision perforation" },
  { name: "Contrast Stitching", category: "Personal detail", image: materialStitching, description: "Carefully tensioned hand stitching in a color and pattern selected to complement your cabin.", details: ["Custom colors", "Single or twin", "Hand finished"], callout: "Hand-finished seam" },
  { name: "Forged Carbon", category: "One of one", image: materialForgedCarbon, description: "A distinctive marbled composite whose irregular fiber pattern makes every finished component unique.", details: ["Unique pattern", "Deep gloss", "Satin available"], callout: "Unique fiber layup" },
];
const wheelHotspots = [
  { id: "stripe", label: "Center Stripe", x: 50, y: 7, detail: "A twelve-o'clock marker in any color — carbon, painted or stitched.", side: "right" },
  { id: "rim", label: "Rim Material", x: 84, y: 26, detail: "Forged carbon, Alcantara, Napa or perforated leather around the rim.", side: "left" },
  { id: "stitch", label: "Stitch Color", x: 50, y: 44, detail: "Hand-stitched thread in any color, single or contrast twin stitch.", side: "right" },
  { id: "paddles", label: "Paddle Shifters", x: 24, y: 40, detail: "Extended performance paddles finished in carbon or anodised metal.", side: "right" },
  { id: "controls", label: "OEM Controls", x: 30, y: 52, detail: "Factory buttons, airbag and heating fully retained and re-trimmed.", side: "right" },
  { id: "spoke", label: "Center Spoke", x: 55, y: 74, detail: "Trim, badge and spoke finish tailored to your cabin and brief.", side: "left" },
];
const faqItems = [
  ["Will my steering wheel fit my vehicle?", "Every build is matched to your vehicle's year, model, trim, and original wheel architecture before production begins."],
  ["Do I need to send you my original steering wheel?", "Some builds use an exchange core while others can be produced directly. Our team will confirm the best option for your vehicle."],
  ["Can I choose my own materials and colors?", "Yes. Carbon style, leather, Alcantara, stitching, center stripe, trim color, paddles, and other details can be specified."],
  ["Can you build a steering wheel if my vehicle isn't listed?", "Yes. Send us your vehicle details and a clear photo of the original wheel so our team can review fitment."],
  ["How long does a custom build take?", "Build times vary by specification and parts availability. You will receive a timing estimate before approving your order."],
  ["Do you ship internationally?", "Yes. Steering Squad serves customers worldwide, with tracked shipping options based on destination."],
  ["Can I customize the center stripe and stitching?", "Yes. Both can be matched or contrasted in your preferred colors."],
];

function HomePage() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [trim, setTrim] = useState("");
  const [finderMessage, setFinderMessage] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [compare, setCompare] = useState(52);
  const compareTouched = useRef(0);
  const reviewTrack = useRef<HTMLDivElement>(null);
  const scrollReviews = (dir: number) => reviewTrack.current?.scrollBy({ left: dir * Math.min(440, reviewTrack.current.clientWidth * 0.85), behavior: "smooth" });
  useEffect(() => {
    const interval = window.setInterval(() => {
      const track = reviewTrack.current;
      if (!track || track.matches(":hover") || document.hidden) return;
      const step = Math.min(440, track.clientWidth * 0.85);
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: "smooth" });
    }, 3800);
    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      // Auto-slide continuously; pause briefly after a manual drag
      if (Date.now() - compareTouched.current > 2000) {
        setCompare(50 + Math.sin(Date.now() / 1400) * 22);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [material, setMaterial] = useState("FORGED CARBON");
  const [activeMaterial, setActiveMaterial] = useState(0);
  const availableModels = useMemo(() => models[make] ?? ["Select after choosing a make"], [make]);
  const selectedMaterial = customizationOptions.find((option) => option.name === material) ?? customizationOptions[0];
  const selectedVehicle = [year, make, model, trim].filter(Boolean).join(" ");
  const vehicleProfile = makeProfiles[make] ?? {
    platform: make ? `${make} original steering architecture` : "Choose a make to identify your platform",
    fitment: "Vehicle-specific fitment review included",
    build: "Materials, stitching and performance details made to order",
  };

  function handleFinder() {
    if (!make || !model || !year) {
      setFinderMessage("Select your make, model, and year to continue.");
      return;
    }
    setFinderMessage(`${year} ${make} ${model}${trim ? ` ${trim}` : ""} selected — your matching builds are ready.`);
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader home onBrandSelect={(brand) => { setMake(brand); setModel(""); }} />

      <section className="hero">
        <img src={heroImage} alt="Bespoke carbon fiber steering wheel in a performance vehicle" width={1920} height={1080} fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content section-shell">
          <p className="eyebrow reveal">Bespoke. Handcrafted. Yours.</p>
          <h1 className="reveal delay-1">YOUR CAR.<br />YOUR STYLE.<br /><span>YOUR STEERING WHEEL.</span></h1>
          <p className="hero-copy reveal delay-2">Fully customized steering wheels, handcrafted for your vehicle.</p>
          <div className="button-row reveal delay-2"><a className="button button-primary" href="#vehicle-finder">Build Your Steering Wheel <ArrowRight size={17} /></a><a className="button button-ghost" href="#builds">Explore Our Builds</a></div>
          <p className="micro-trust"><Globe2 size={14} /> Custom builds for vehicles worldwide</p>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO DISCOVER</div>
      </section>

      <section id="vehicle-finder" className="finder-section">
        <div className="section-shell">
          <div className="section-heading finder-heading"><div><p className="eyebrow">01 · Vehicle finder</p><h2>START WITH<br />YOUR VEHICLE</h2></div><p>Tell us what you drive and we’ll show you the steering wheels available for your vehicle.</p></div>
          <div className="finder-panel">
            <div className="finder-progress"><b className="active"><i>01</i>FIND YOUR VEHICLE</b><span /><b><i>02</i>CHOOSE YOUR WHEEL</b><span /><b><i>03</i>CUSTOMIZE IT</b><span /><b><i>04</i>REQUEST / ORDER</b></div>
            <div className="finder-grid">
              <FinderSelect step="01" label="Select Make" value={make} onChange={(value) => { setMake(value); setModel(""); }} options={brands} showBrandIcons />
              <FinderSelect step="02" label="Select Model" value={model} onChange={setModel} options={availableModels} disabled={!make} />
              <FinderSelect step="03" label="Select Year" value={year} onChange={setYear} options={Array.from({ length: 26 }, (_, i) => String(2026 - i))} />
              <FinderSelect step="04" label="Select Trim (Optional)" value={trim} onChange={setTrim} options={["Standard", "Sport", "M / AMG / RS", "Performance"]} />
              <button className="button button-primary finder-button" onClick={handleFinder}>Find My Steering Wheel <ArrowRight size={17} /></button>
            </div>
            <div className={`vehicle-profile ${make ? "vehicle-profile-active" : ""}`} aria-live="polite">
              <div className="vehicle-profile-title"><span>LIVE VEHICLE PROFILE</span><strong>{selectedVehicle || "BUILD YOUR FITMENT"}</strong><p>{make ? "Matched to factory fitment and controls." : "Select your make, model and year to see your vehicle profile."}</p></div>
              <div className="profile-finishes"><span>POPULAR FOR THIS BUILD</span><div>{[["FORGED CARBON", "#3a3a3f"], ["ALCANTARA", "#7a6a58"], ["NAPA LEATHER", "#5a4632"], ["RED STITCHING", "#c8102e"]].map(([name, swatch]) => <b key={name}><i style={{ background: swatch }} />{name}</b>)}</div></div>
              <span className={`fitment-status ${make && model && year ? "ready" : ""}`}><i /> {make && model && year ? "READY TO MATCH" : `${[make, model, year].filter(Boolean).length} OF 3 REQUIRED DETAILS`}</span>
            </div>
            {finderMessage && <p className="finder-message" role="status">{finderMessage}</p>}
            <div className="finder-help">Can’t find your vehicle? <a href="#request">Request a custom build <ArrowRight size={14} /></a></div>
          </div>
        </div>
      </section>

      <section id="craft" className="trust-section">
        <div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">The Steering Squad standard</p><h2>BUILT AROUND YOU</h2></div></div>
        <div className="trust-grid">
          {[[ShieldCheck,"OEM FITMENT","Designed around your vehicle’s original steering wheel architecture."],[Gauge,"FULL CUSTOMIZATION","Choose materials, colors, stitching, carbon fiber and design details."],[Hand,"HANDCRAFTED","Each steering wheel is individually crafted with attention to detail."],[Globe2,"WORLDWIDE SHIPPING","Custom steering wheels available for drivers around the world."]].map(([Icon,title,copy],i) => { const C = Icon as typeof ShieldCheck; return <article className="trust-item" key={String(title)}><span className="trust-number">0{i+1}</span><C size={27} strokeWidth={1.4} /><h3>{String(title)}</h3><p>{String(copy)}</p></article>; })}
        </div></div>
      </section>

      <section className="stats-strip" aria-label="Steering Squad in numbers">
        <div className="section-shell stats-grid">
          {[[Wrench,"1,200+","Builds Completed","Handcrafted wheels delivered"],[Globe2,"40+","Countries Shipped","Worldwide build support"],[Clock,"3–4 Weeks","Average Build Time","From approval to dispatch"],[ShieldCheck,"100%","OEM Fitment","Original controls retained"]].map(([Icon,value,label,detail],i) => { const C = Icon as typeof Wrench; return <article className="stat-item" key={String(label)}><span className="stat-index">0{i + 1}</span><C size={22} strokeWidth={1.6} /><strong>{String(value)}</strong><b>{String(label)}</b><small>{String(detail)}</small></article>; })}
        </div>
        <p className="stats-note">Sample figures shown as placeholders — replace with your real numbers.</p>
      </section>

      <section id="builds" className="builds-section">
        <div className="section-shell"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>BUILDS THAT<br />STAND OUT</h2></div><p>Explore steering wheels created for drivers who refuse to settle for factory standard.</p></div>
          <div className="build-grid">{featured.map((item,i) => <button key={item.name} className={`build-card build-${i+1}`} onClick={() => setLightbox(i)}><span className="build-image" style={{ backgroundImage: `url(${item.image})` }} /><span className="build-overlay" /><span className="build-meta"><small>{item.type}</small><strong>{item.name}</strong><span>View Build <ArrowRight size={15} /></span></span><ZoomIn className="zoom-icon" size={20} /></button>)}</div>
          <a href="#gallery" className="text-link">View All Builds <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="customize" className="customizer-section">
        <div className={`customizer-image customizer-${selectedMaterial?.tone ?? "carbon"}`}>
          <img className="preview-swap" src={configuratorImage} alt={`Steering wheel preview with ${material.toLowerCase()}`} width={1600} height={1200} loading="lazy" />
          <div className="customizer-effect" />
          <div className="grip-accent grip-left" />
          <div className="grip-accent grip-right" />
          <div className="stripe-accent" />
          <div className="preview-badge"><i /> LIVE PREVIEW</div>
          <div key={`tag-${material}`} className="spec-tag tag-one"><span /> {selectedMaterial?.callouts[0]}</div>
          <div key={`tag2-${material}`} className="spec-tag tag-two"><span /> {selectedMaterial?.callouts[1]}</div>
          {wheelHotspots.map((spot, index) => (
            <div key={spot.id} className={`wheel-hotspot hotspot-${spot.side}`} style={{ left: `${spot.x}%`, top: `${spot.y}%`, animationDelay: `${index * 0.09}s` }}>
              <button type="button" className="hotspot-dot" aria-label={spot.label}><i /></button>
              <div className="hotspot-card"><strong>{spot.label}</strong><small>{spot.detail}</small></div>
            </div>
          ))}
        </div>
        <div className="customizer-copy"><p className="eyebrow">Your specification</p><h2>MAKE IT<br />YOURS</h2><p>Every surface, stitch, and detail is yours to define. Explore a build that feels factory-perfect—and entirely personal.</p><div className="option-label"><span>SELECT A FINISH</span><span>PREVIEW {String(customizationOptions.findIndex((option) => option.name === material) + 1).padStart(2,"0")} / 09</span></div><div className="option-grid">{customizationOptions.map((option) => <button key={option.name} onClick={() => setMaterial(option.name)} className={material === option.name ? "active" : ""} aria-pressed={material === option.name}>{material === option.name && <Check className="option-check" size={13} />}<span className={`swatch swatch-${option.tone}`} />{option.name}</button>)}</div><div className="selected-option" key={material}><Sparkles size={16} /><span>Selected: <b>{material}</b><small>{selectedMaterial?.detail}</small></span></div><a className="button button-primary" href="#vehicle-finder">Start Customizing <ArrowRight size={17} /></a></div>
      </section>

      <section id="process" className="process-section"><div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">A clear process</p><h2>FROM IDEA TO<br />STEERING WHEEL</h2></div></div><div className="process-snake"><svg className="snake-path" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 1 C 50 8 15 8 15 17 C 15 26 85 27 85 36 C 85 45 15 46 15 55 C 15 64 85 65 85 74 C 85 83 50 84 50 92 L 50 100" vectorEffect="non-scaling-stroke" /></svg>{[{ Icon: Car, n: "01", t: "Choose Your Vehicle", c: "Select your make, model and year." },{ Icon: Palette, n: "02", t: "Choose Your Design", c: "Select materials, shape, color and features." },{ Icon: ClipboardCheck, n: "03", t: "Approve Your Build", c: "We confirm your specifications and build details." },{ Icon: PackageCheck, n: "04", t: "We Build & Ship", c: "Your wheel is handcrafted and shipped to you." }].map(({ Icon: StepIcon, n, t, c }, i) => <article key={n} className={`snake-step ${i % 2 ? "snake-right" : "snake-left"}`} style={{ top: `${17 + i * 19}%` }}><span className="snake-node">{n}</span><div className="snake-card"><StepIcon size={20} /><h3>{t}</h3><p>{c}</p></div></article>)}</div><a className="button button-outline" href="#vehicle-finder">Start Your Build <ArrowRight size={17} /></a></div></section>

      <section id="brands" className="brands-section"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">Global fitment</p><h2>FIND YOUR BRAND</h2></div><p>Choose your manufacturer to begin exploring compatible builds.</p></div><div className="brand-collections">{brandCollections.map((b) => <a href="#vehicle-finder" key={b.name} className={b.tall ? "brand-card brand-card-tall" : "brand-card"} onClick={() => setMake(b.name)}><img src={b.image} alt={`${b.name} collection`} loading="lazy" /><span className="brand-card-overlay" /><span className="brand-card-label"><strong>{b.name}</strong><i>EXPLORE BUILDS <ArrowRight size={13} /></i></span></a>)}</div><a href="#vehicle-finder" className="text-link">View All Vehicle Brands <ArrowRight size={16} /></a></div></section>

      <section className="compare-section section-shell"><div className="section-heading"><div><p className="eyebrow">The transformation</p><h2>FROM OEM TO<br />ONE-OF-A-KIND</h2></div><p>Transform the most important touchpoint in your interior.</p></div><div className="compare-frame"><img src={beforeImage} alt="Factory steering wheel before customization" width={1600} height={1000} loading="lazy" /><div className="compare-after" style={{ clipPath: `inset(0 0 0 ${compare}%)` }}><img src={afterImage} alt="Steering Squad wheel after customization" width={1600} height={1000} loading="lazy" /></div><div className="compare-line" style={{ left: `${compare}%` }}><span><ChevronLeft size={15} /><ChevronRight size={15} /></span></div><span className="compare-label before-label">FACTORY BUILD · OEM</span><span className="compare-label after-label">STEERING SQUAD · CUSTOMIZED BUILD</span><span className="compare-hint"><Hand size={12} /> DRAG TO COMPARE</span><input aria-label="Move before and after comparison" type="range" min="10" max="90" value={compare} onChange={(e) => { compareTouched.current = Date.now(); setCompare(Number(e.target.value)); }} /></div><a href="#vehicle-finder" className="button button-primary">Create Yours <ArrowRight size={17} /></a></section>

      <section id="request" className="request-section">
        <img className="request-backdrop" src={buildDodge} alt="Custom performance steering wheel interior" loading="lazy" />
        <div className="request-overlay" />
        <div className="section-shell request-layout">
          <div className="request-copy">
            <p className="eyebrow">Not in the catalog? Not a problem.</p>
            <h2>DON’T SEE<br /><span>YOUR VEHICLE?</span></h2>
            <p>We build for vehicles from brands around the world. Send your vehicle details and a steering wheel photo—our team will help define the right build.</p>
            <div className="request-assurance"><span><Globe2 size={16} /> Worldwide fitment review</span><span><ShieldCheck size={16} /> OEM controls retained</span><span><Sparkles size={16} /> One-of-one specification</span></div>
            <div className="button-row"><a className="button button-primary" href="mailto:hello@steeringsquad.com">Request a Custom Build <ArrowRight size={17} /></a><a className="button button-ghost" href="mailto:hello@steeringsquad.com">Contact Our Team</a></div>
          </div>
          <div className="request-card"><span className="request-card-number">01</span><p>START YOUR REQUEST</p><strong>Tell us what<br />you drive.</strong><span>Vehicle details + wheel photo</span><ArrowRight size={24} /></div>
        </div>
      </section>

      <section className="reviews-section"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">Owner stories</p><h2>BUILT FOR DRIVERS WHO<br /><span>CARE ABOUT THE DETAILS</span></h2></div><div className="review-heading-action"><p>Real-world inspiration from drivers who wanted their interior to feel unmistakably personal.</p><div className="review-nav"><button type="button" aria-label="Previous stories" onClick={() => scrollReviews(-1)}><ChevronLeft size={18} /></button><button type="button" aria-label="Next stories" onClick={() => scrollReviews(1)}><ChevronRight size={18} /></button></div></div></div><div className="review-grid" ref={reviewTrack}>{[["Marcus T.","BMW M3","The wheel completely changed how the cabin feels. The carbon and Alcantara combination is exactly what I had in mind.",buildBmw],["Elena R.","Porsche Macan","Every detail was confirmed before the build. Fitment feels original, but the design makes the interior feel special.",buildPorsche],["David K.","Tesla Model 3","The finish and stitching are beautifully done. It feels like the one piece the interior was always missing.",buildTesla],["James W.","Mercedes-AMG C63","Aggressive look, factory feel. The flat-bottom carbon build gets noticed every single time someone gets in.",buildAmg],["Sofia L.","Ford Mustang","The leather and stripe match my interior perfectly. Communication through the build was excellent.",buildMustang],["Andre B.","Lamborghini Huracán","Worth every week of the wait. The forged carbon finish is on another level in person.",buildLambo]].map(([name,car,quote,image],index) => <article key={String(name)}><img src={String(image)} alt="" loading="lazy" /><span className="review-shade" /><div className="review-content"><div className="review-top"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><Quote size={24} /></div><blockquote>“{String(quote)}”</blockquote><footer><span className="review-avatar">{String(name).charAt(0)}</span><span><b>{String(name)}</b><small>{String(car)}</small></span><i>0{index + 1}</i></footer></div></article>)}</div><p className="placeholder-note">Sample review content — ready to replace with verified customer stories.</p></div></section>

      <section id="materials" className="materials-section"><div className="section-shell"><div className="materials-heading"><p className="eyebrow">The material lab</p><h2>PREMIUM TACTILE<br /><span>ELEMENTS</span></h2><p>Explore the surfaces, fibers, and finishing details that shape how your steering wheel looks and feels.</p></div><div className="material-explorer"><div className="material-visual"><img key={activeMaterial} src={materialLibrary[activeMaterial]?.image} alt={`${materialLibrary[activeMaterial]?.name} material sample`} width={1024} height={1024} loading="lazy" /><span className="material-scan"><i /> MATERIAL DETAIL · 01:{String(activeMaterial + 1).padStart(2,"0")}</span><span className="material-callout"><i /><b>{materialLibrary[activeMaterial]?.callout}</b></span><span className="material-index">0{activeMaterial + 1}</span></div><div className="material-selector"><div className="material-list">{materialLibrary.map((item,index) => <button key={item.name} type="button" className={activeMaterial === index ? "active" : ""} onClick={() => setActiveMaterial(index)} aria-pressed={activeMaterial === index}><span className="material-thumb"><img src={item.image} alt="" width={1024} height={1024} loading="lazy" /></span><span className="material-option-copy"><small>0{index + 1} · {item.category}</small><strong>{item.name}</strong><p>{item.description}</p><span className="material-specs">{item.details.map((detail) => <i key={detail}>{detail}</i>)}</span></span><ChevronRight size={18} /></button>)}</div><a className="button button-primary material-cta" href="#customize">Build Your Configuration <ArrowRight size={17} /></a></div></div></div></section>

      <section id="workshop" className="workshop-section"><div className="section-shell workshop-layout"><div className="workshop-copy"><p className="eyebrow">Inside the workshop</p><h2>WHERE EVERY WHEEL<br /><span>COMES TO LIFE</span></h2><p>From first stitch to final inspection, every build passes through the hands of craftsmen who treat your wheel like their own.</p><div className="workshop-points"><span><Check size={14} /> Hand-finished stitching</span><span><Check size={14} /> Precision carbon layup</span><span><Check size={14} /> Multi-point quality inspection</span></div><a className="button button-primary" href="#vehicle-finder">Start Your Build <ArrowRight size={17} /></a></div><div className="workshop-video"><video src={workshopVideo.url} poster={journalCarbon} autoPlay muted loop playsInline preload="metadata" /><span className="workshop-badge"><Play size={12} /> WORKSHOP FILM</span><span className="workshop-frame-line" /></div></div></section>

      <section id="gallery" className="social-section"><div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">@steeringsquad</p><h2>FOLLOW THE <span>BUILDS</span></h2></div><div className="social-heading-action"><p>Fresh builds, material combinations, and behind-the-scenes details from the workshop.</p><a href="https://instagram.com/steeringsquad" className="text-link">Follow @SteeringSquad <Instagram size={16} /></a></div></div><div className="social-grid">{featured.map((item,i) => <button key={item.name} onClick={() => setLightbox(i)} aria-label={`View ${item.name} build`}><span className="social-image" style={{ backgroundImage: `url(${item.image})` }} /><span className="social-overlay" /><span className="social-meta"><small>0{String(i + 1).padStart(2,"0")}</small><strong>{item.name}</strong><i>View Build <ArrowRight size={13} /></i></span><span className="social-icon"><Instagram size={19} /></span></button>)}</div></div></section>

      <section className="faq-section"><div className="section-shell faq-layout"><div className="faq-intro"><p className="eyebrow">Questions, answered</p><h2>BEFORE YOU<br /><span>START YOUR BUILD</span></h2><p>Everything you need to know about fitment, customization, and delivery.</p><div className="faq-support"><ShieldCheck size={22} /><span><b>Still have questions?</b><small>Our build team can help with your exact vehicle.</small></span><a href="mailto:hello@steeringsquad.com" aria-label="Contact our build team"><ArrowRight size={17} /></a></div></div><div id="faq-list" className="faq-list">{faqItems.map(([q,a],i) => <article key={q} className={openFaq === i ? "open" : ""}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{String(i+1).padStart(2,"0")}</span><b>{q}</b><i><ChevronDown size={17} /></i></button><div><p>{a}</p></div></article>)}</div></div></section>

      <section className="journal-section"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">The journal</p><h2>FROM THE<br /><span>WORKSHOP FLOOR</span></h2></div><p>Build stories, material guides and fitment notes from the team.</p></div><div className="journal-grid">{[[journalStitching,"Craft","How hand-stitching changes the feel of every drive","5 min read"],[journalCarbon,"Materials","Gloss vs. forged carbon: choosing your finish","4 min read"],[journalMaterials,"Guide","The complete guide to Alcantara, nappa and beyond","6 min read"]].map(([img,cat,title,read],i) => <a className="journal-card" href="#gallery" key={String(title)}><span className="journal-image"><img src={String(img)} alt="" loading="lazy" /><i>0{i + 1}</i></span><span className="journal-body"><span className="journal-meta"><b>{String(cat)}</b><small>{String(read)}</small></span><strong>{String(title)}</strong><span className="journal-link">Read Story <ArrowUpRight size={14} /></span></span></a>)}</div><p className="placeholder-note">Sample articles — ready to replace with your real journal content.</p></div></section>

      <section className="final-cta"><img src={heroImage} alt="Carbon fiber performance steering wheel" width={1920} height={1080} loading="lazy" /><div className="final-overlay" /><div className="final-content"><span className="final-kicker"><Sparkles size={14} /> Your build starts here</span><h2>READY TO BUILD YOUR<br /><span>STEERING WHEEL?</span></h2><p>Tell us what you drive. We’ll help you create something uniquely yours.</p><div className="button-row"><a className="button button-primary" href="#vehicle-finder">Build My Steering Wheel <ArrowRight size={17} /></a><a className="button button-ghost" href="#builds">Explore Builds</a></div><div className="final-assurance"><span><Check size={14} /> Vehicle-matched fitment</span><span><Check size={14} /> Built to your specification</span><span><Check size={14} /> Worldwide support</span></div></div></section>

      <SiteFooter home />
      <a href="#vehicle-finder" className="mobile-sticky-cta">Build Your Steering Wheel <ArrowRight size={17} /></a>
      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${featured[lightbox]?.name} build`} onClick={() => setLightbox(null)}><button aria-label="Close gallery" onClick={() => setLightbox(null)}><X size={22} /></button><div className="lightbox-image" style={{ backgroundImage: `url(${featured[lightbox]?.image})` }} /><div><span>{featured[lightbox]?.type}</span><h3>{featured[lightbox]?.name}</h3></div></div>}
    </main>
  );
}

function BrandMark({ brand }: { brand: string }) {
  const iconKey = brandIconKeys[brand];
  const icon = iconKey ? simpleIcons[iconKey] : undefined;
  return <span className="brand-mark" aria-hidden="true">{icon && typeof icon === "object" && "path" in icon ? <svg viewBox="0 0 24 24"><path d={String(icon.path)} /></svg> : <b>{brand.split(/[ -]/).map((word) => word[0]).join("").slice(0, 2)}</b>}</span>;
}

function FinderSelect({ step, label, value, options, onChange, disabled = false, showBrandIcons = false }: { step:string; label:string; value:string; options:string[]; onChange:(value:string)=>void; disabled?:boolean; showBrandIcons?:boolean }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const selected = listRef.current.querySelector("[data-selected='true']");
    selected?.scrollIntoView({ block: "center" });
  }, [open]);

  return (
    <div className={`finder-select ${disabled ? "disabled" : ""} ${open ? "open" : ""}`} ref={rootRef}>
      <span>{step} / {label}</span>
      <button type="button" className="finder-select-trigger" disabled={disabled} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span className={value ? "" : "placeholder"}>{value || label}</span>
        <ChevronDown size={16} />
      </button>
      {open && !disabled && (
        <div className="finder-dropdown" role="listbox" ref={listRef}>
          <div className="finder-dropdown-head">SELECT {label.replace("Select ", "").replace(" (Optional)", "").toUpperCase()}</div>
          {options.map((option) => {
            const selected = option === value;
            return (
              <button type="button" key={option} role="option" aria-selected={selected} data-selected={selected} className={selected ? "selected" : ""} onClick={() => { onChange(option); setOpen(false); }}>
                {showBrandIcons ? <BrandMark brand={option} /> : null}
                <span>{option}</span>
                {selected && <Check size={15} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
