import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

interface PostContentProps {
  source: string;
}

export default function PostContent({ source }: PostContentProps) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode as any, // eslint-disable-line @typescript-eslint/no-explicit-any
              {
                theme: "github-dark",
              },
            ],
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["anchor"],
                  ariaLabel: "Link to section",
                },
              },
            ],
          ],
        },
      }}
    />
  );
}
