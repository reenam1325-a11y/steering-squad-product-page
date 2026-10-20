import { createFileRoute } from "@tanstack/react-router";
import { ProductPageVersion1 } from "@/components/product-pages/Version1";

export const Route = createFileRoute("/product-pages/version-1")({
  head: () => ({
    meta: [
      { title: "Custom Dry Carbon Tesla Model Y Juniper Wheel — Steering Squad" },
      { name: "description", content: "Custom dry carbon fiber steering wheel replacement for Tesla Model Y 2026 Juniper: materials, options, shipping and specs." },
      { property: "og:title", content: "Custom Dry Carbon Tesla Model Y Juniper Wheel — Steering Squad" },
      { property: "og:description", content: "Dry carbon fiber, premium leather or Alcantara, custom stitching and stripes. 4–6 week build, free worldwide shipping." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPageVersion1,
});
