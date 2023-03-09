export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import type { PageContextBuiltIn } from "vite-plugin-ssr";
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router' // When using Client Routing
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client"; // When using Server Routing
import { BaseTemplate, Template } from "./templating/view";

type Page = typeof Template;
type PageProps = {};

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type BaseTemplateContext = Record<string, any>;
export type TemplateContext<T extends BaseTemplate> = Awaited<
  ReturnType<T["getContextData"]>
>;
