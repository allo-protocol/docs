import Link from "next/link";
// eslint-disable-next-line import/no-unresolved
import { getPagesUnderRoute } from "nextra/context";

export function BlogIndex() {
  return getPagesUnderRoute("/blog").map((page) => {
    return (
      <div key={page.route} className="mb-10">
        <Link
          href={page.route}
          style={{ color: "inherit", textDecoration: "none" }}
          className="block font-semibold mt-8 text-2xl"
        >
          {page.meta?.title || page.frontMatter?.title || page.name}
        </Link>
        <p className="opacity-80" style={{ marginTop: ".5rem" }}>
          {page.frontMatter?.description}{" "}
          <span className="inline-block">
            <Link href={page.route}>{"Read more →"}</Link>
          </span>
        </p>
        {page.frontMatter?.date ? (
          <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
        ) : null}
      </div>
    );
  });
}
