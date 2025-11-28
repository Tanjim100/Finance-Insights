import React from "react";
import BlogCard from "../../components/BlogCard";
import BlogContent from "../../components/BlogContent";
import { space } from "postcss/lib/list";

const BlogBar = ({ blog, relatedPosts}) => {
  function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  // console.log(blog.content);
  // console.log(blog);
  return (
    <div className=" rounded-lg lg:col-span-3 order-1 lg:order-2">
      <h3 className="text-3xl font-bold text-[#01101C]">{blog?.title}</h3>
      {/* <p className='text-xl my-2'>Stay Ahead of New Regulations</p> */}
      <p className="text-[#01101C] my-2 font-[400] italic text-[20px] leading-[120%] tracking-[0.6px] font-serif">
        {blog?.description}
      </p>
      <div className="md:flex md:justify-between mt-4 mb-8 space-y-2 md:space-y-0">
        <div className="md:flex md:justify-between gap-4 space-y-2 md:space-y-0 text-[#55636F]">
          {/* publish date */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M0.708333 14.5833H13.4583C13.6462 14.5833 13.8264 14.5087 13.9592 14.3759C14.092 14.243 14.1667 14.0629 14.1667 13.875V3.25C14.1667 3.06214 14.092 2.88197 13.9592 2.74913C13.8264 2.61629 13.6462 2.54166 13.4583 2.54166H10.625V1.125C10.625 0.937136 10.5504 0.756968 10.4175 0.62413C10.2847 0.491292 10.1045 0.416664 9.91667 0.416664C9.7288 0.416664 9.54864 0.491292 9.4158 0.62413C9.28296 0.756968 9.20833 0.937136 9.20833 1.125V2.54166H4.95833V1.125C4.95833 0.937136 4.8837 0.756968 4.75087 0.62413C4.61803 0.491292 4.43786 0.416664 4.25 0.416664C4.06214 0.416664 3.88197 0.491292 3.74913 0.62413C3.61629 0.756968 3.54167 0.937136 3.54167 1.125V2.54166H0.708333C0.520472 2.54166 0.340304 2.61629 0.207466 2.74913C0.0746277 2.88197 0 3.06214 0 3.25V13.875C0 14.0629 0.0746277 14.243 0.207466 14.3759C0.340304 14.5087 0.520472 14.5833 0.708333 14.5833ZM1.41667 3.95833H12.75V6.08333H1.41667V3.95833ZM1.41667 7.5H12.75V13.1667H1.41667V7.5Z"
                fill="#55636F"
              />
            </svg>
            <p className="text-xs md:text-sm">{formatDate(blog?.published_at)}</p>
          </div>
          {/* category  */}
          {blog.categories &&
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  d="M1.16663 3.78571C1.16663 2.98564 1.16663 2.5856 1.32235 2.28001C1.45931 2.01121 1.67787 1.79266 1.9467 1.65571C2.25231 1.5 2.65239 1.5 3.45252 1.5H5.93451C6.28395 1.5 6.45868 1.5 6.62312 1.53947C6.76885 1.57446 6.90822 1.63219 7.03609 1.71051C7.18024 1.79886 7.30382 1.92239 7.55091 2.16947L7.64049 2.2591C7.88758 2.50618 8.01116 2.62971 8.15532 2.71806C8.28318 2.79639 8.42255 2.85411 8.56828 2.8891C8.73272 2.92857 8.90745 2.92857 9.2569 2.92857H11.7389C12.539 2.92857 12.9391 2.92857 13.2447 3.08428C13.5135 3.22124 13.7321 3.43978 13.869 3.70859C14.0248 4.01417 14.0248 4.41421 14.0248 5.21429V9.21429C14.0248 10.0144 14.0248 10.4144 13.869 10.72C13.7321 10.9888 13.5135 11.2074 13.2447 11.3443C12.9391 11.5 12.539 11.5 11.7389 11.5H3.45252C2.65238 11.5 2.25231 11.5 1.9467 11.3443C1.67787 11.2074 1.45931 10.9888 1.32235 10.72C1.16663 10.4144 1.16663 10.0144 1.16663 9.21429V3.78571Z"
                  stroke="#55636F"
                  stroke-width="1.11814"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-xs md:text-sm">{blog?.categories?.name}</p>
            </div>
          }
          {/* tags  */}
          {blog.post_tags.length > 0 &&
            <div className="flex flex-wrap items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2595 1.49998H13.2872C14.2199 1.49998 14.9759 2.25573 14.9759 3.18798V6.21437C14.9759 6.43821 14.887 6.65289 14.7286 6.81117L8.99295 12.5443C8.33345 13.2035 7.26421 13.2035 6.60472 12.5443L3.92675 9.86755C3.26726 9.20834 3.26726 8.13957 3.92675 7.48036L9.66244 1.74719C9.82079 1.58891 10.0356 1.49998 10.2595 1.49998Z"
                  stroke="#55636F"
                  stroke-width="1.34602"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5323 12.4719L4.83262 13.3214C3.99842 13.7383 2.98405 13.4003 2.56695 12.5665C2.54054 12.5137 2.51692 12.4596 2.49619 12.4043L1.13267 8.76986C0.839031 7.98717 1.16272 7.10755 1.89376 6.70159L8.22103 3.18798"
                  stroke="#55636F"
                  stroke-width="1.34602"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8655 3.1879C13.0986 3.1881 13.2872 3.37718 13.2874 3.60978C13.2874 3.84249 13.0987 4.03146 12.8655 4.03165C12.6321 4.03165 12.4426 3.84261 12.4426 3.60978C12.4428 3.37706 12.6322 3.1879 12.8655 3.1879Z"
                  fill="#55636F"
                  stroke="#55636F"
                  stroke-width="0.844195"
                />
              </svg>

              {
                blog?.post_tags.map((tag, idx) => (
                  <p className="text-xs md:text-sm"><span key={idx}>{tag?.tags?.name}
                  {
                    blog.post_tags.length != idx+1 && <span>,</span>
                  }</span></p>
                ))
              }
            </div>
          }
          <p className="text-xs md:text-sm">updated on {formatDate(blog?.updated_at)}</p>
        </div>
        
      </div>
      <div>
        <img
          alt=""
          src={blog?.header_image_url}
          className=" w-full object-cover"
        />
      </div>
      <div className="text-[#01101C] font-[400] text-[18px] leading-[170%] tracking-[0.54px] font-serif space-y-10 mt-8">
        <BlogContent content={blog?.content}></BlogContent>
      </div>
      <div className="h-px bg-[#E6E8EA] my-8"></div>
      <div className="share space-y-3 mb-5">
        <p>Share This Article</p>
        <div className="flex gap-4">
          <a className="p-3 bg-[#E6E8EA] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 19 17"
              className=""
              fill="none"
            >
              <path
                d="M0.0442708 0.00012207L7.05483 9.37663L0 17.0001H1.58776L7.76425 10.3256L12.7547 17.0001H18.1579L10.7529 7.09621L17.3195 0.00012207H15.7317L10.0435 6.14719L5.44747 0.00012207H0.0442708ZM2.37919 1.17001H4.86143L15.8226 15.8301H13.3404L2.37919 1.17001Z"
                fill="#01101C"
              />
            </svg>
          </a>
          <a className="p-3 bg-[#E6E8EA] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M0.157837 1.97487C0.157837 1.40247 0.362323 0.930245 0.771279 0.558203C1.18023 0.186143 1.7119 0.00012207 2.36623 0.00012207C3.00889 0.00012207 3.52884 0.183276 3.92612 0.549617C4.33508 0.927395 4.53957 1.41964 4.53957 2.02638C4.53957 2.57588 4.34093 3.03378 3.94365 3.40012C3.5347 3.7779 2.9972 3.96679 2.33117 3.96679H2.31365C1.67099 3.96679 1.15103 3.7779 0.753752 3.40012C0.356469 3.02234 0.157837 2.54725 0.157837 1.97487ZM0.385687 17.0001V5.52941H4.27666V17.0001H0.385687ZM6.43247 17.0001H10.3234V10.5951C10.3234 10.1944 10.3702 9.88529 10.4637 9.6678C10.6272 9.27857 10.8755 8.94944 11.2086 8.68042C11.5416 8.4114 11.9593 8.27689 12.4617 8.27689C13.7704 8.27689 14.4247 9.14119 14.4247 10.8698V17.0001H18.3157V10.4234C18.3157 8.72907 17.9068 7.44406 17.0888 6.5683C16.2709 5.69255 15.1901 5.25467 13.8464 5.25467C12.339 5.25467 11.1647 5.89002 10.3234 7.16073V7.19507H10.3059L10.3234 7.16073V5.52941H6.43247C6.45584 5.89574 6.46753 7.03479 6.46753 8.94659C6.46753 10.8584 6.45584 13.5429 6.43247 17.0001Z"
                fill="#01101C"
              />
            </svg>
          </a>
          <a className="p-3 bg-[#E6E8EA] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4737 5.84387H7.91447V3.71887C7.91447 3.43708 8.07459 3.16683 8.35959 2.96757C8.6446 2.76831 9.03115 2.65637 9.43421 2.65637H10.9539V0.00012207H7.91447C6.7053 0.00012207 5.54565 0.335947 4.69063 0.933719C3.83561 1.53149 3.35527 2.34224 3.35527 3.18762V5.84387H0.315796V8.50012H3.35527V17.0001H7.91447V8.50012H10.9539L12.4737 5.84387Z"
                fill="#01101C"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="space-y-6 my-10">
        <h4 className="text-2xl font-bold text-[#01101C]">Related Posts</h4>
        <div className="related-posts grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedPosts.length > 0 && relatedPosts.map((post) => (
            <BlogCard
              key={post.id}
              blog={post}
            ></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBar;
