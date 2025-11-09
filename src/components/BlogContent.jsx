import React from "react";

const BlogContent = ({ content }) => {
  const blocks = typeof content === "string" ? JSON.parse(content) : content;

  return (
    <div className="space-y-4">
      {blocks.map((block) => {
        const { id, type, props, content: textContent } = block;

        const colorClass = props?.textColor === "blue" ? "text-blue-600" : "text-gray-900";
        const alignmentClass =
          props?.textAlignment === "center"
            ? "text-center"
            : props?.textAlignment === "right"
            ? "text-right"
            : "text-left";

        switch (type) {
          case "paragraph":
            return (
              <p key={id} className={`${colorClass} ${alignmentClass} leading-relaxed`}>
                {textContent?.map((t, i) => {
                  const style = t.styles || {};
                  return (
                    <span
                      key={i}
                      className={[
                        style.bold ? "font-bold" : "",
                        style.italic ? "italic" : "",
                        style.code ? "font-mono bg-gray-100 px-1 rounded" : "",
                      ].join(" ")}
                    >
                      {t.text}
                    </span>
                  );
                })}
              </p>
            );

          case "heading":
            const level = props?.level || 1;
            const HeadingTag = `h${level}`;
            return (
              <HeadingTag key={id} className={`${colorClass} ${alignmentClass} font-bold`}>
                {textContent?.map((t, i) => t.text).join("")}
              </HeadingTag>
            );

          case "bulletListItem":
            return (
              <ul key={id} className="list-disc ml-6">
                <li className={`${colorClass} ${alignmentClass}`}>
                  {textContent?.map((t, i) => (
                    <span key={i} className={t.styles?.bold ? "font-bold" : ""}>
                      {t.text}
                    </span>
                  ))}
                </li>
              </ul>
            );

          case "numberedListItem":
            return (
              <ol key={id} className="list-decimal ml-6">
                <li className={`${colorClass} ${alignmentClass}`}>
                  {textContent?.map((t, i) => (
                    <span key={i} className={t.styles?.bold ? "font-bold" : ""}>
                      {t.text}
                    </span>
                  ))}
                </li>
              </ol>
            );

          case "divider":
            return <hr key={id} className="border-t border-gray-300 my-4" />;

          case "codeBlock":
            return (
              <pre key={id} className="bg-gray-100 p-4 rounded overflow-x-auto">
                {textContent?.map((t) => t.text).join("\n")}
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContent;
