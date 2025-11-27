import { useQuery } from "@tanstack/react-query";
import { categoriesApi, tagsApi } from "../../services/blogsAPI";
import { Link } from "react-router-dom";

const Sidebar = ({ recentPosts }) => {
  // ============ CATEGORIES & TAGS QUERIES ============
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesApi.getAll(),
    onError: (error) => {
      console.error("Error fetching categories:", error);
      toast.error(
        `Failed to load categories: ${error.message || "Unknown error"}`
      );
    },
  });
  console.log(categories);


  function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: tagsApi.getAll,
    onError: (error) => {
      console.error("Error fetching tags:", error);
      toast.error(`Failed to load tags: ${error.message || "Unknown error"}`);
    },
  });

  console.log(tags);

  return (
    <div className="sticky top-10 rounded-lg bg-[#E6E8EA] py-6 px-4 h-fit space-y-10 order-2 lg:order-1 ">
      <div>
        <h3 className="text-xl pb-4 font-bold">Recent Posts</h3>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-white"></span>
        </span>
        {
          (recentPosts?.length) > 0 &&
          <div className="py-2 space-y-2">
            {recentPosts.map((post, idx) => (
              <div
                key={idx}
                className="p-2 space-y-1"
              >
                <Link to={`/blogs/${post.slug}`}>
                  <h4 className="text-lg">{post?.title}</h4>
                  <p className="text-xs">{formatDate(post?.published_at)}</p>
                </Link>
              </div>
            ))}
          </div>
        }
      </div>
      <div>
        <h3 className="text-xl pb-4 font-bold">Categories</h3>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-white"></span>
        </span>
        {(categories?.length) > 0 &&
          <div className="pt-4 grid grid-cols-2 gap-1">
            {categories.map((category, idx) => (
              <button key={idx}>
                <div className="py-1">
                  <p className="font-medium text-left line-clamp-1 hover:underline duration-300 underline-offset-4">{category?.name}</p>
                </div>
              </button>
            ))}
          </div>
        }
      </div>
      {/* <div className="">
        <h3 className="text-xl mb-4 font-bold">Popular Tags</h3>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-white"></span>
        </span>
        {(tags?.length > 0) &&
          <div className="pt-4 flex flex-wrap gap-4">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className=" px-3 py-2 rounded-3xl bg-white hover:bg-black hover:text-white text-sm font-normal duration-300"
              >
                {tag?.name}
              </button>
            ))}
          </div>
        }
      </div> */}
    </div>
  );
};

export default Sidebar;
