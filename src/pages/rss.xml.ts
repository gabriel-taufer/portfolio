import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, PROJECTS } from "@consts";

type Context = {
  site: string
}

// Feed of projects only. Written posts live at poorthoughts.com, which has its
// own feed - linked as the RSS alternate in Head.astro.
export async function GET(context: Context) {
  const items = (await getCollection("projects"))
    .filter(project => !project.data.draft)
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: `${PROJECTS.TITLE} | ${SITE.NAME}`,
    description: PROJECTS.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
