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
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-8">
            Resource Library
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center gap-4 ">
            <button className="">
              <a
                className="inline-block rounded-full border px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-black hover:text-white duration-300"
                href="/resources"
              >
                View All Resources
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceLibrary;
