import { Layout } from "@renderkit/server";

export class MainLayout extends Layout {
  templateName = "layout.html";

  getContextData() {
    return {
      test: "salut",
      nav: [
        {
          href: "/about",
          name: "about",
          style: this.urlPathname === "/about" ? "background: red;" : "",
        },
        {
          href: "/",
          name: "home",
          style: this.urlPathname === "/" ? "background: red;" : "",
        },
      ],
    };
  }
}
