import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const {
    title,
    categories,
    description,
    slug,
    published_at,
    header_image_url,
  } = blog;

  const date = new Date(published_at);
  const formatted_published_date = date.toLocaleDateString("en-US", {
    month: "long", // Full month name
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <article className="overflow-hidden rounded-2xl border border-[#E6E8EA] bg-white shadow-xs p-3 ">
        <img
          alt=""
          src={header_image_url}
          className="h-40 w-full object-cover rounded-xl mb-5"
        />

        <div className="">
          <div className="h-40">
            <h6 className="text-sm mb-2 text-[#01101C]">{categories?.name}</h6>

            <h3 className="text-base md:text-lg font-semibold text[#01101C] line-clamp-2 mb-2 ">
              {title}
            </h3>
            {/* </a> */}

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#55636F] font-serif  font-normal tracking-[0.48px]">
              {description}
            </p>
          </div>

          <div className="group mt-4 flex items-center gap-1 justify-between">
            <p className="text-xs text-[#55636F]">{formatted_published_date}</p>
            <Link
              to={`/blogs/${slug}`}
              className="inline-flex items-center gap-1 font-medium text-[#01101C]"
            >
              Read More
              <span
                aria-hidden="true"
                className="text-sm block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
