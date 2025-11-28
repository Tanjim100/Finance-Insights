import Button from "daisyui/components/button";
import React from "react";
import { BiLibrary } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FaGraduationCap, FaUserSecret } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import ResourceCard from "./ResourceCard";
import AdminResourceCard from "./AdminResourceCard";
import { useQuery } from "@tanstack/react-query";
import { resourcesApi } from "../services/resourcesAPI";

const ResourceLibrary = () => {
  const { data: features = [], isLoading } = useQuery({
    queryKey: ["featured-Resources"],
    queryFn: () => resourcesApi.getFeaturedResources(),
  });

  return (
    <div>
      <section className="py-16 bg-white mb-5 px-5">
        <div className="container max-w-7xl mx-auto ">
          <div className="mb-10">
            <h2 className="text-xl lg:text-2xl font-bold">
            Resource Library
          </h2>
          <div className="h-1 w-21.5 bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-4 ">
            <button className="">
              <Link
                // className="inline-block rounded-full border px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-black hover:text-white duration-300"
                className="btn btn-sm btn-outline rounded-full md:btn-lg hover:bg-[#01101C]"
                to="/resources"
              >
                View All Resources
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceLibrary;
