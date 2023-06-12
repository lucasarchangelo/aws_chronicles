import { WeaponItem } from "./components/WeaponItem";

// imports for Swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


export const Weapons = ({ weapons, selectedWeapon }: any) => {
  const notSelectedWeapon = weapons.filter(
    (item: any) => item?.tokenId !== (selectedWeapon ?? weapons[0]?.tokenId)
  );

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={50}
      centeredSlides={true}
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination]}
      className="relative rounded-t-3xl flex items-center justify-evenly bg-blue-200 text-black w-4/5"
    >
      {notSelectedWeapon?.map((item: any) => (
        <SwiperSlide className="my-2" key={item.tokenId}>
          <WeaponItem item={item} />
        </SwiperSlide>
      ))}
  </Swiper>
  );
};
