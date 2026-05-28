import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: { dark: "github-dark", light: "github-light" },
  keepBackground: false,
  defaultLang: "plaintext",
};

export function MdxBody({ source }: { source: string }) {
  return (
    <div className="prose">
      <MDXRemote
        source={source}
        options={{
          parseFrontmatter: false,
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: { className: ["heading-anchor"] },
                },
              ],
              [rehypePrettyCode, prettyCodeOptions],
            ],
          },
        }}
      />
    </div>
  );
}
