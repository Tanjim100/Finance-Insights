import React from "react";

const BlogContent = ({ content }) => {
  // If the content is a string, parse it
  const blocks = typeof content === "string" ? JSON.parse(content) : content;

  return (
    <div className="space-y-4">
      {blocks.map((block) => {
        const { id, type, props, content: textContent } = block;
        const color = props?.textColor === "blue" ? "text-blue-600" : "text-gray-900";

        switch (type) {
          case "paragraph":
            return (
              <p key={id} className={`${color} leading-relaxed`}>
                {textContent?.map((t, i) => {
                  const style = t.styles || {};
                  return (
                    <span
                      key={i}
                      className={[
                        style.bold ? "font-bold" : "",
                        style.italic ? "italic" : "",
                      ].join(" ")}
                    >
                      {t.text}
                    </span>
                  );
                })}
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContent;
