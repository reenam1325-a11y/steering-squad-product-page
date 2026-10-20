import { useEffect, useRef, useState, type FormEvent, type PointerEvent as ReactPointerEvent } from "react";
import {
  ArrowRight, BadgeCheck, Check, ChevronLeft, ChevronRight, Expand, Info, Play, Plus, Minus, ShoppingCart,
  Star, Truck, RotateCcw, ShieldCheck, User, CircleDot, Layers, Wrench, Gauge, Hand, Palette, Award, Disc3,
  Globe, Clock, Package, Droplets,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import wheel from "@/assets/pp-v1-wheel.jpg";
import cabin from "@/assets/build-tesla.jpg";
import wiring from "@/assets/pp-v1-wiring.jpg";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import review5 from "@/assets/review-5.jpg";
import review6 from "@/assets/review-6.jpg";
import review7 from "@/assets/review-7.jpg";
import review8 from "@/assets/review-8.jpg";
import review9 from "@/assets/review-9.jpg";
import review10 from "@/assets/review-10.jpg";
import review11 from "@/assets/review-11.jpg";
import review12 from "@/assets/review-12.jpg";
import carbon from "@/assets/material-carbon.jpg";
import alcantara from "@/assets/material-alcantara.jpg";
import stitching from "@/assets/material-stitching.jpg";
import stripe from "@/assets/feature-stripe.jpg";
import { paymentIcons } from "./paymentIcons";
import "./version1.css";

const gallery: [string, string][] = [
  [wheel, "Glossy dry carbon rim with red center stripe — your choice of finish"],
  [cabin, "Precision fit for the Tesla Model Y 2026 Juniper cabin"],
  [stripe, "Custom center stripe in any color you like"],
  [carbon, "Real dry carbon fiber — no bubbles, no warping"],
  [alcantara, "Premium leather or Alcantara grips, soft and durable"],
  [stitching, "Precision stitching in multiple colors and patterns"],
];
const tabs = ["Details", "Shipping & Returns", "Ask a Question"] as const;
type Tab = (typeof tabs)[number];

const trims = ["Tesla Model Y Juniper (All Trims)", "Tesla Model Y Juniper RWD", "Tesla Model Y Juniper Long Range", "Tesla Model Y Juniper Performance", "Tesla Model Y Juniper Launch Series"];
const faqs: [string, string][] = [
  ["Is this steering wheel compatible with all Model Y 2026 Juniper trims?", "Yes — it fits every Model Y 2026 Juniper trim, including Performance. Please confirm your steering-wheel functions before ordering."],
  ["Will the original heating function work?", "Heating is available as a custom option during configuration, so you keep the comfort you are used to."],
  ["Do I need professional installation?", "Professional installation is highly recommended, as the airbag, switches and wiring harness must be handled. Our wheels come with aftermarket scroll wheels preinstalled — your installer just plugs the new scroll-wheel wiring harness under the airbag."],
  ["How long does it take to receive my order?", "Every wheel is custom-built in 4–6 weeks from the order date, then shipped free worldwide via FedEx or DHL."],
  ["Can I return or exchange a custom steering wheel?", "Because each wheel is made just for you, returns are not accepted. Warranty or replacement options apply if there is a manufacturing fault."],
  ["Can you match the color of my other interior accessories?", "Color matching to other accessories in your car is possible, but may not be perfectly accurate — call us for details before ordering."],
  ["How do I care for the wheel, especially white leather?", "Clean it regularly with a good-quality leather cleaner and keep it free of dirt and oils. White leather in particular needs gentle, frequent care to stay bright for years."],
];
const options = ["Carbon Fiber Finish", "Shape", "Stripes", "Y Color", "Thumb Trims", "Stitching Colors", "Airbag", "Heating"];
const notes: [typeof Wrench, string][] = [
  [Wrench, "Professional installation is highly recommended, as there is an airbag and existing switches and wiring harness to be handled."],
  [Layers, "Our steering comes with aftermarket scroll wheels preinstalled. Your installer just needs to plug the new scroll wheel wiring harness under the airbag."],
  [Clock, "The delivery timeframe for all custom steering wheel orders is 4 to 6 weeks from the ordering date."],
  [Palette, "Color matching to any other accessories you may have in your car is possible but may not be accurate. Call us for more information."],
  [Droplets, "Cleaning your steering wheel requires care. Please use a good cleaner and ensure it is always kept clean to ensure years of use."],
  [ShieldCheck, "Warranty or replacement options are applicable if there is a fault in manufacturing your steering wheels."],
  [RotateCcw, "There are no returns as this is a fully custom steering wheel made just for you."],
];

export function ProductPageVersion1() {
  const [img, setImg] = useState(0);
  const [tab, setTab] = useState<Tab>("Details");
  const [faq, setFaq] = useState<number | null>(null);
  const go = (d: number) => setImg((i) => (i + d + gallery.length) % gallery.length);
  const scrollToReviews = () => document.getElementById("ppv1-reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="ppv1">
      <SiteHeader />

      <div className="ppv1-wrap ppv1-page-top">


        <p className="ppv1-crumbs">Home / Custom Steering Wheels / Tesla / Model Y / <b>Custom Dry Carbon Fiber Steering Wheel Replacement for Tesla Model Y 2026 Juniper</b></p>

        <section className="ppv1-buy">
          <div className="ppv1-gal">
            <div className="ppv1-thumbs">
              {gallery.map(([src, cap], i) => <button key={cap} className={i === img ? "on" : ""} onClick={() => setImg(i)} aria-label={`Show image ${i + 1}`}><img src={src} alt={cap} /></button>)}
            </div>
            <div className="ppv1-main">
              <img src={gallery[img]?.[0]} alt="Custom dry carbon fiber Tesla Model Y steering wheel" />
              <button className="ppv1-arrow l" onClick={() => go(-1)} aria-label="Previous image"><ChevronLeft size={18} /></button>
              <button className="ppv1-arrow r" onClick={() => go(1)} aria-label="Next image"><ChevronRight size={18} /></button>
              <span className="ppv1-zoom"><Expand size={15} /></span>
            </div>
          </div>
          <div className="ppv1-info">
            <span className="ppv1-badge">Custom Build</span>
            <h1>Custom Dry Carbon Fiber Steering Wheel Replacement for Tesla Model Y 2026 Juniper</h1>
            <div className="ppv1-stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}<button type="button" className="ppv1-reviews-link" onClick={scrollToReviews}>(128 reviews)</button></div>
            <p className="ppv1-price">$1,299.00</p>
            <a href="#" className="ppv1-cta"><Disc3 size={30} /><span><b>Customize Your Steering</b><small>See live preview with your options</small></span><ArrowRight size={20} /></a>
            <button className="ppv1-cart-btn"><ShoppingCart size={20} /> Add to Cart</button>
            <div className="ppv1-perks">
              <span><Truck /><b>Free Shipping</b><small>Worldwide via FedEx / DHL</small></span>
              <span><RotateCcw /><b>30-Day Protection</b><small>Damaged or not fit</small></span>
              <span><ShieldCheck /><b>Warranty</b><small>On manufacturing faults</small></span>
            </div>
            <div className="ppv1-pay" role="group" aria-label="Accepted payment methods">
              {paymentIcons.map((p) => (
                <span key={p.name} className={`ppv1-pay-tile${p.kind === "amex" ? " ppv1-pay-tile--brand" : ""}`} title={p.name}>
                  {p.kind === "mastercard" ? (
                    <svg className="ppv1-pay-mc" viewBox="0 0 48 30" role="img" aria-label={p.name} focusable="false"><circle cx="18" cy="15" r="14" fill="#EB001B" /><circle cx="30" cy="15" r="14" fill="#F79E1B" /><path d="M24 2.351A14 14 0 0 1 24 27.649A14 14 0 0 1 24 2.351Z" fill="#FF5F00" /></svg>
                  ) : p.kind === "amex" ? (
                    <b className="ppv1-pay-amex">AMEX</b>
                  ) : (
                    <>
                      <svg viewBox={p.box} style={{ height: p.h }} role="img" aria-label={p.name} focusable="false"><path fill={p.hex} d={p.path} /></svg>
                      {p.text && <b style={{ color: p.textHex }}>{p.text}</b>}
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="ppv1-strip">
          {[[CircleDot, "Precision Fit", "Designed for Tesla"], [Layers, "Premium Materials", "Real Dry Carbon Fiber"], [Wrench, "Custom Built", "Your Style, Your Wheel"], [Gauge, "Enhanced Driving Experience", "Better grip and control"]].map(([I, t, d]) => { const Icon = I as typeof Wrench; return <div key={String(t)}><Icon /><span><b>{String(t)}</b><small>{String(d)}</small></span></div>; })}
        </section>

        <div className="ppv1-tabs" role="tablist">
          {tabs.map((t) => <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{t}</button>)}
        </div>
        {tab === "Details" && (
          <>
          <section className="ppv1-overview">
            <div><h2>Product Overview</h2><p>Upgrade your Tesla Model Y 2026 Juniper with a custom dry carbon fiber steering wheel. Designed for a perfect fit, premium feel, and a more engaging driving experience. You can even send us pictures of your favorite steering wheels, and we will make them fit your needs.</p></div>
            <ul className="ppv1-checks">{["Personalized to your needs — glossy or matte carbon fiber, your choice of colors and materials", "Real dry carbon fiber — no air bubbles or warping, resists fingerprints and scratches, built to last", "Unique design — same round shape as the original, compatible with all Model Y trims including Performance"].map((f) => <li key={f}><Check size={12} />{f}</li>)}</ul>
          </section>
          <section className="ppv1-options">
            <div className="ppv1-options-head">
              <p className="ppv1-eyebrow">Tailor Made To Your Specification</p>
              <p>Literally every seam and every color can be customized and made to order. Need something beyond these options? Call us or send your requirements through the Ask a Question tab and we will get back to you as soon as possible.</p>
            </div>
            <ul className="ppv1-chips">{options.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          </>
        )}
        {tab === "Shipping & Returns" && <Shipping />}
        {tab === "Ask a Question" && <Ask />}
      </div>

      {tab === "Details" && (
        <>
          <section className="ppv1-materials">

        <div className="ppv1-wrap ppv1-center">
          <p className="ppv1-eyebrow">Premium Materials</p>
          <h2 className="ppv1-h">Crafted for a Higher Standard</h2>
          <p className="ppv1-lead">We use only the finest materials to deliver a steering wheel that looks incredible, feels amazing, and lasts for years.</p>
        </div>
        <div className="ppv1-wrap ppv1-mats">
          {[[carbon, "Real Dry Carbon Fiber", "Ultra-lightweight, stronger and more premium."], [alcantara, "Premium Leather / Alcantara", "Soft, durable and designed for a premium feel."], [stitching, "Precision Stitching", "Multiple colors and patterns available."], [stripe, "Custom Center Stripe", "Add a unique touch in your preferred color."]].map(([im, t, d], i) => (
            <div key={t} className={`ppv1-mat${i % 2 ? " flip" : ""}`}>
              <img src={im} alt="" loading="lazy" />
              <div><h3>{t}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="ppv1-wrap ppv1-block ppv1-panel">
        <p className="ppv1-eyebrow">Vehicle Fitment</p>
        <h2 className="ppv1-h sm">Vehicle Compatibility</h2>
        <p>This steering wheel is designed to fit the following Tesla Model Y 2026 Juniper trims.</p>
        <div className="ppv1-table"><table>
          <thead><tr><th>Model</th><th>Year</th><th>Note</th></tr></thead>
          <tbody>{trims.map((t, i) => <tr key={t}><td>{t}</td><td>2026</td><td>{i === 0 ? "Fits all Model Y 2026 Juniper trims." : "Confirm steering wheel functions before ordering."}</td></tr>)}</tbody>
        </table></div>
        <p className="ppv1-note"><Info size={14} /> Please confirm your exact model, year, trim, and steering-wheel functions before ordering.</p>
      </section>

      <section className="ppv1-wrap ppv1-block">
        <p className="ppv1-eyebrow">Simple Installation</p>
        <h2 className="ppv1-h sm">Install in 3 Easy Steps</h2>
        <p>Designed for a straightforward installation process.<br />Professional installation is recommended for the best results.</p>
        <div className="ppv1-steps">
          {[[cabin, "Remove Original Steering Wheel", "Your installer follows the vehicle service manual to remove the original wheel."], [wiring, "Connect Wiring", "Use the provided connectors (plug & play)."], [wheel, "Install New Steering Wheel", "Secure the wheel and ensure all functions are working."]].map(([im, t, d], i) => (
            <div key={t} className="ppv1-step"><div className="ppv1-step-img"><img src={im} alt="" loading="lazy" /><i>0{i + 1}</i></div><h3>{t}</h3><p>{d}</p>{i < 2 && <ArrowRight className="ppv1-step-arrow" />}</div>
          ))}
        </div>
      </section>

      <section className="ppv1-wrap ppv1-block">
        <p className="ppv1-eyebrow">Installation Video</p>
        <h2 className="ppv1-h sm">Watch the Installation Video</h2>
        <p>Follow the complete installation process from start to finish.</p>
        <div className="ppv1-video"><img src={cabin} alt="Installation video preview" loading="lazy" /><button aria-label="Play installation video"><Play size={30} fill="currentColor" /></button><span>3:24</span></div>
      </section>

      <section className="ppv1-wrap ppv1-block ppv1-why">
        <div>
          <p className="ppv1-eyebrow">Why Choose SteeringSquad</p>
          <h2 className="ppv1-h">More Than Just a Steering Wheel</h2>
          <p>A custom steering wheel is not just an upgrade for your interior, it's a better driving experience. Enjoy improved grip, premium materials, and a unique design that matches your style.</p>
        </div>
        <div className="ppv1-why-grid">
          {[[Award, "Premium Look", "Elevates your interior"], [Hand, "Better Grip", "More control while driving"], [Palette, "Unique Design", "Built it your way"], [ShieldCheck, "Long Lasting", "High quality materials"]].map(([I, t, d]) => { const Icon = I as typeof Wrench; return <div key={String(t)}><Icon /><span><b>{String(t)}</b><small>{String(d)}</small></span></div>; })}
        </div>
      </section>

      <section className="ppv1-wrap ppv1-block">
        <div className="ppv1-notes">
          <div className="ppv1-notes-head"><span><Info size={22} /></span><div><h2>Important Notes</h2><p>Worth knowing before you confirm your build.</p></div></div>
          <ul className="ppv1-notes-list">{notes.map(([Icon, t]) => <li key={t}><Icon size={17} /><p>{t}</p></li>)}</ul>
        </div>
      </section>

        </>
      )}

      <Reviews />

      {tab === "Details" && (
        <section className="ppv1-wrap ppv1-block ppv1-why">
          <div><p className="ppv1-eyebrow">Frequently Asked Questions</p><h2 className="ppv1-h">Got Questions?<br />We've Got Answers.</h2></div>
          <div className="ppv1-faq">
            {faqs.map(([q, a], i) => (
              <div key={q} className={faq === i ? "open" : ""}>
                <button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>{q}{faq === i ? <Minus size={18} /> : <Plus size={18} />}</button>
                {faq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
      )}


      <section className="ppv1-final">
        <div className="ppv1-wrap">
          <div className="ppv1-final-card">
            <div className="ppv1-final-copy">
              <p className="ppv1-eyebrow">Your Build Starts Here</p>
              <h2>Ready to Build<br />Your Dream Steering?</h2>
              <p>Choose your materials, stitching, and design.<br />See a live preview before you order.</p>
              <div className="ppv1-final-actions">
                <a href="#" className="ppv1-cta small"><Disc3 size={22} /><b>Customize Your Steering</b><ArrowRight size={18} /></a>
                <span className="ppv1-final-note"><Truck size={16} /> Free worldwide shipping · 4–6 week build</span>
              </div>
            </div>
            <div className="ppv1-final-visual">
              <img src={wheel} alt="Custom dry carbon fiber steering wheel" loading="lazy" />
              <span className="ppv1-final-chip"><Check size={14} /> Hand-built to your specification</span>
            </div>
          </div>
        </div>
      </section>



      <SiteFooter owner />

      <div className="ppv1-buybar">

        <span className="ppv1-buybar-price"><small>Tesla Model Y 2026 Juniper</small><b>$1,299.00</b></span>
        <a href="#" className="ppv1-buybar-cta"><Disc3 size={18} /> Customize</a>
        <button className="ppv1-buybar-cart" aria-label="Add to cart"><ShoppingCart size={18} /></button>
      </div>
    </div>
  );
}

function Ask() {
  const [note, setNote] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setNote(true); };
  return (
    <section className="ppv1-ask">
      <form className="ppv1-form" onSubmit={submit}>
        <div className="ppv1-form-head">
          <p className="ppv1-eyebrow">Ask a Question</p>
          <h2>Have something in mind for your build?</h2>
          <p>Tell us your vehicle and what you would like to know or change. A build specialist replies within one business day.</p>
        </div>
        <div className="ppv1-fields">
          <label><span>Name <b>*</b></span><input required autoComplete="name" placeholder="Your full name" /></label>
          <label><span>Email <b>*</b></span><input type="email" required autoComplete="email" placeholder="you@example.com" /></label>
          <label className="full"><span>Vehicle model and year <b>*</b></span><input required defaultValue="Tesla Model Y 2026 Juniper" placeholder="e.g. Tesla Model Y 2026 Juniper" /></label>
          <label className="full"><span>Question <b>*</b></span><textarea rows={5} required placeholder="Tell us what you would like to know, or how you would like this wheel built..." /></label>
          <p className="hint"><Info size={14} /> Preview form — questions are not sent yet. Include your trim and steering-wheel functions for the fastest answer.</p>
          <button type="submit">Submit Question <ArrowRight size={18} /></button>
          {note && <p className="ppv1-ok" role="status"><Check size={15} /> This is a design preview, so your question was not sent.</p>}
        </div>
      </form>
      <aside className="ppv1-ask-side">
        <div><Truck size={20} /><span><b>One business day</b><small>Typical reply time</small></span></div>
        <div><User size={20} /><span><b>Build specialist</b><small>Someone who actually builds these</small></span></div>
        <div><ShieldCheck size={20} /><span><b>No obligation</b><small>Ask before you order</small></span></div>
        <hr />
        <p>Fitment, materials, stitching, heating or installation — if it affects your wheel, it is worth asking.</p>
      </aside>
    </section>
  );
}

function Shipping() {
  const ship: [typeof Globe, string, string][] = [
    [Globe, "Free worldwide shipping", "Sent by FedEx or DHL depending on the fulfillment location."],
    [Clock, "Built to order in 4–6 weeks", "Every wheel is assembled after your order is confirmed."],
    [Package, "Tracked door to door", "A tracking number arrives as soon as your wheel is dispatched."],
  ];
  const cover: [typeof Info, string, string][] = [
    [RotateCcw, "Made-to-order items", "Returns are not accepted for a change of mind."],
    [ShieldCheck, "30-day protection", "If it arrives damaged or is not fit for purpose, a refund or replacement applies within 30 days of delivery."],
    [Info, "Check before you order", "Confirm your model, year, trim and steering-wheel functions so the wheel fits the first time."],
  ];
  const steps: [string, string, string][] = [
    ["01", "Order placed", "You confirm the specification and we check fitment."],
    ["02", "Built by hand", "Carbon, grips and stitching are assembled to your choices."],
    ["03", "Dispatched", "Free shipping via FedEx or DHL, with tracking."],
    ["04", "Fitted and driven", "Professional installation is recommended."],
  ];
  return (
    <section className="ppv1-ship">
      <div className="ppv1-ship-cols">
        <div className="ppv1-card">
          <div className="ppv1-card-head"><span><Truck size={22} /></span><div><h2>Shipping</h2><p>Free worldwide, tracked, door to door.</p></div></div>
          <ul className="ppv1-ship-list">{ship.map(([Icon, t, d]) => <li key={t}><Icon size={18} /><div><b>{t}</b><small>{d}</small></div></li>)}</ul>
        </div>
        <div className="ppv1-card">
          <div className="ppv1-card-head"><span><ShieldCheck size={22} /></span><div><h2>Returns and Protection</h2><p>What is covered, and what is not.</p></div></div>
          <ul className="ppv1-ship-list">{cover.map(([Icon, t, d]) => <li key={t}><Icon size={18} /><div><b>{t}</b><small>{d}</small></div></li>)}</ul>
        </div>
      </div>
      <div className="ppv1-timeline">
        <p className="ppv1-eyebrow">From order to installation</p>
        <div className="ppv1-timeline-row">{steps.map(([n, t, d]) => <div key={n}><i>{n}</i><b>{t}</b><small>{d}</small></div>)}</div>
      </div>
    </section>
  );
}

const reviewList: { name: string; date: string; stars: number; title: string; text: string; photo?: string }[] = [
  { name: "Marcus T.", date: "October 2026", stars: 5, title: "Perfect fit, zero gaps", photo: review1, text: "The wheel fits my Juniper like it came from the factory. Every button, scroll wheel and the airbag line up exactly — my installer said it was the cleanest aftermarket wheel he has fitted." },
  { name: "Sarah K.", date: "October 2026", stars: 5, title: "Worth every penny", photo: review2, text: "The carbon is real, not printed — you can feel the difference the moment you touch it. The whole cabin feels more premium now, and the grip is night and day compared to the stock wheel." },
  { name: "Daniel R.", date: "September 2026", stars: 5, title: "Stunning carbon work", photo: review3, text: "No bubbles, no waves, perfectly clear coat. I sent them a photo of a wheel I liked and they matched the design almost exactly. Communication during the build was excellent too." },
  { name: "Emily W.", date: "September 2026", stars: 4, title: "Beautiful — plan for the wait", photo: review4, text: "The wheel itself is flawless and the red stitching is exactly what I asked for. It took the full six weeks, so order ahead of any trip you have planned — but the result is worth it." },
  { name: "James P.", date: "September 2026", stars: 5, title: "Two hours at my local shop", photo: review5, text: "Installation was straightforward — the scroll wheels come preinstalled and the harness plugs in under the airbag. My shop charged me for two hours of labor and everything works, including heating." },
  { name: "Aisha M.", date: "August 2026", stars: 5, title: "The red stitching is perfect", photo: review6, text: "I was nervous about ordering something this custom online, but the color match to my interior accents is spot on. It gets compliments every single time someone sits in the car." },
  { name: "Tom R.", date: "August 2026", stars: 5, title: "Matte carbon looks incredible", photo: review7, text: "I went matte with a black stripe and it looks factory, only better. The weight difference you can feel through your fingertips, and the grips stay cool on long drives." },
  { name: "Nicole B.", date: "July 2026", stars: 5, title: "Heating works exactly like stock", photo: review8, text: "The heating option is wired in properly — it warms up just as fast as the original wheel and the controls behave normally. No warning lights, no fuss." },
  { name: "Ravi S.", date: "July 2026", stars: 4, title: "Great wheel, keep in touch for updates", photo: review9, text: "Build quality is genuinely excellent and the fitment is tight. I would have liked a bit more frequent progress photos during the six weeks, but they answered every message." },
  { name: "Chloe D.", date: "June 2026", stars: 5, title: "They matched my photo almost exactly", photo: review10, text: "I sent three pictures of wheels I liked and the team came back with a design that blended all of them. The final wheel is better than what I had in my head." },
  { name: "Mark L.", date: "June 2026", stars: 5, title: "Shipped to New Zealand, no drama", photo: review11, text: "Free DHL shipping, tracked the whole way, arrived in perfect condition with no damage to the box. Packaging was heavy duty and the wheel was protected on every side." },
  { name: "Sofia G.", date: "May 2026", stars: 5, title: "The wait is worth it", photo: review12, text: "Six weeks felt long at the time, but nothing about this is rushed. The stitching is dead straight, the carbon is flawless, and my interior finally feels finished." },
];
const ratingBreakdown: [number, number][] = [[5, 92], [4, 6], [3, 1], [2, 0.5], [1, 0.5]];

function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Drag to slide with the mouse
  const drag = useRef<{ x: number; left: number } | null>(null);
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { x: e.clientX, left: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => { drag.current = null; };

  // Arrow buttons move the row one card at a time, looping at the ends
  const slide = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ppv1-rev-card");
    const step = card ? card.offsetWidth + 16 : el.clientWidth / 3 + 16;
    const atStart = el.scrollLeft <= 8;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir > 0 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir < 0 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollTo({ left: el.scrollLeft + dir * step, behavior: "smooth" });
  };


  // Auto-slide every 4s, pausing on hover/drag; loops back to the start
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const step = el.clientWidth / 3 + 16;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: nearEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="ppv1-reviews" className="ppv1-wrap ppv1-block ppv1-reviews">
      <p className="ppv1-eyebrow">Customer Reviews</p>
      <h2 className="ppv1-h">What Owners Say</h2>
      <div className="ppv1-rev-top">
        <div className="ppv1-rev-score">
          <b>4.9</b>
          <div className="ppv1-rev-score-stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
          <small>Based on 128 reviews</small>
        </div>
        <div className="ppv1-rev-bars">
          {ratingBreakdown.map(([s, pct]) => (
            <div key={s} className="ppv1-rev-bar"><span>{s} <Star size={11} fill="currentColor" /></span><i><i style={{ width: `${pct}%` }} /></i><small>{pct}%</small></div>
          ))}
        </div>
      </div>
      <div className="ppv1-rev-viewport">
        <div className="ppv1-rev-ctrl">
          <span className="ppv1-rev-hint"><Hand size={13} /> Drag, or use the arrows, to browse all 12 reviews</span>
          <div className="ppv1-rev-btns">
            <button type="button" className="ppv1-rev-arrow" onClick={() => slide(-1)} aria-label="Previous reviews"><ChevronLeft size={20} /></button>
            <button type="button" className="ppv1-rev-arrow" onClick={() => slide(1)} aria-label="More reviews"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="ppv1-rev-grid ppv1-rev-slider"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); onUp(); }}
        >

        {reviewList.map((r) => (
          <article key={r.name} className="ppv1-rev-card">
            <div className="ppv1-rev-head">
              <span className="ppv1-rev-avatar">{r.name.charAt(0)}</span>
              <div><b>{r.name}</b><small>{r.date} · <BadgeCheck size={12} /> Verified purchase</small></div>
            </div>
            <div className="ppv1-rev-stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill={i < r.stars ? "currentColor" : "none"} className={i < r.stars ? "" : "ppv1-rev-star-off"} />)}</div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
            {r.photo && <img className="ppv1-rev-photo" src={r.photo} alt={`${r.name}'s installed steering wheel`} loading="lazy" width={1024} height={768} />}
          </article>
        ))}
        </div>
      </div>


      <p className="ppv1-rev-note"><Info size={14} /> Sample reviews shown for preview — real customer reviews will replace them.</p>
    </section>
  );
}
