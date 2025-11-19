import React from "react";

const Sidebar = ({recentPosts,categorys,tags}) => {
  return (
    <div className=" rounded-lg bg-[#E6E8EA] py-6 px-4 h-fit space-y-10 order-2 lg:order-1">
      <div>
        <h3 className="text-xl pb-4 font-bold">Recent Posts</h3>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-white"></span>
        </span>
        <div className="py-2 space-y-2">
          {recentPosts.map((post, idx) => (
            <div
              key={idx}
              className="p-2 space-y-1"
            >
              <h4 className="text-lg">{post.title}</h4>
              <p className="text-xs">{post.publishedDate}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl pb-4 font-bold">Categories</h3>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-white"></span>
        </span>
        <div className="pt-4 grid grid-cols-2 gap-1">
          {categorys.map((category, idx) => (
            <button key={idx}>
              <div className="py-1">
                <p className="font-semibold text-left">{category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <h3 className="text-xl mb-4 font-bold">Popular Tags</h3>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-white"></span>
        </span>
        <div className="pt-4">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-outline border-none rounded-full bg-white hover:bg-black m-2"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
