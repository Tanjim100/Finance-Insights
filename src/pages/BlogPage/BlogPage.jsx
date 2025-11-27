import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { postsApi } from "../../services/blogsAPI";
import Sidebar from "./Sidebar";
import BlogBar from "./BlogBar";

const BlogPage = () => {
  const { slug } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => postsApi.getPostBySlug(slug),
    enabled: !!slug,
  });
  const {
    data: recentBlogs,
    isLoading: recentBlogsLoading,
    error: recentBlogsError,
  } = useQuery({
    queryKey: ["recentPosts"],
    queryFn: () => postsApi.getRecentPosts(),
  });

  const tagIds = blog?.post_tags.map(pt => pt.tags.id);
  console.log(tagIds);
  // console.log(blog.id, blog.category_id);

  const { 
    data: relatedBlogs = [], 
    isLoading: relatedBlogsLoading 
  } = useQuery({
    queryKey: ["relatedPosts", blog?.id, blog?.category_id, tagIds],
    queryFn: () =>
      postsApi.getRelatedPosts(blog.id, blog.category_id, tagIds, 3),
    enabled: !!blog?.id,
  });

  console.log("myblog: ", blog);

  console.log("relatedBlogs: ", relatedBlogs);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading Post
          </h1>
          <p className="text-gray-600 mb-4">{error.message}</p>
        </div>
      </div>
    );
  }



  const recentPosts = [
    {
      id: 14,
      title: "AI-Powered Accounting: The Next Frontier",
      category: "accounting",
      tag: "compliance",
      details:
        "How automation and AI are revolutionizing bookkeeping and financial reporting.",
      publishedDate: "2025-08-19",
      image:
        "https://i.ibb.co.com/1GfFHG2x/futuristic-robot-interacting-with-money.jpg",
    },
    {
      id: 15,
      title: "AI-Powered Accounting: The Next Frontier",
      category: "accounting",
      tag: "compliance",
      details:
        "How automation and AI are revolutionizing bookkeeping and financial reporting.",
      publishedDate: "2025-08-19",
      image:
        "https://i.ibb.co.com/1GfFHG2x/futuristic-robot-interacting-with-money.jpg",
    },
    {
      id: 16,
      title: "AI-Powered Accounting: The Next Frontier",
      category: "accounting",
      tag: "compliance",
      details:
        "How automation and AI are revolutionizing bookkeeping and financial reporting.",
      publishedDate: "2025-08-19",
      image:
        "https://i.ibb.co.com/1GfFHG2x/futuristic-robot-interacting-with-money.jpg",
    },
  ];
  const categories = [
    "tax",
    "finance",
    "accounting",
    "banking",
    "industry",
    "economics",
    "auditing",
    "share market",
  ];
  const tags = [
    "tax planning",
    "audit",
    "compliance",
    "money",
    "investing",
    "stocks",
    "inflation",
    "bonds",
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 px-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {/* Side Bar  */}
        <Sidebar
          recentPosts={recentBlogs}
          categories={categories}
          tags={tags}
        />

        {/* Blog Bar  */}
        <BlogBar
          blog={blog}
          relatedPosts={relatedBlogs}
        />
      </div>
    </div>
  );
};



export default BlogPage;
