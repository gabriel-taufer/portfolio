import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Open links that leave taufer.dev in a new tab. Written inline so this stays
// dependency-free; markdown links bypass the Link component's `external` prop.
function externalLinksInNewTab() {
  const isExternal = (href) =>
    typeof href === "string" &&
    /^https?:\/\//.test(href) &&
    !/^https?:\/\/([a-z0-9-]+\.)?taufer\.dev(\/|$)/.test(href);

  return (tree) => {
    const walk = (node) => {
      if (node.tagName === "a" && isExternal(node.properties?.href)) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: "https://taufer.dev",
  base: "/",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [externalLinksInNewTab],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
