import React from "react";
import { useGetAllCategoriesQuery } from "../lib/apiSlice/productsApi";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

function Categories({ active = null }) {
  const { data } = useGetAllCategoriesQuery();
  return (
    <div className=" w-full container overflow-hidden pb-10">
      <Swiper spaceBetween={20} slidesPerView={7}>
        {data &&
          data.map((d) => (
            <SwiperSlide key={d}>
              <Link
                className={`${
                  active?.toLowerCase() == d?.toLowerCase()
                    ? "bg-black text-white"
                    : ""
                } px-5 py-3 w-full block fle-shrink-0 rounded-3xl border capitalize hover:bg-black hover:text-white transition-all`}
                to={`/filter/${d}`}
              >
                {d}
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Categories;
