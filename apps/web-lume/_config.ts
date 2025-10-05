import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import robots from "lume/plugins/robots.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import gzip from "lume/plugins/gzip.ts";

const site = lume();

site.add("/assets");
site.add("./favicon.ico");

site.use(metas());
site.use(nav());
site.use(robots());
site.use(tailwindcss());
site.use(sitemap());
site.use(gzip());

export default site;
