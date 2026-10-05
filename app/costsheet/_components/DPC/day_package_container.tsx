"use client";

import Package from "../package/package";

export default function DPC() {
  return (
    <fieldset className="flex flex-col items-center gap-1 border-2 border-[rgb(127,127,127)] rounded-[16px] bg-transparent min-h-[100px] mx-[16px] mt-[12px] mb-0 pt-[2px] pb-[8px]">
      <legend className="font-mont font-extrabold px-[12px] ml-[50px]">
        Tuesday 24 September, 2027
      </legend>
      <Package></Package>
      <Package></Package>
      <button className="font-mont font-extrabold bg-[rgba(0,0,0,0.144)] hover:bg-[rgba(0,0,0,0.25)] active:bg-[rgba(0,0,0,0.35)] rounded-[5px] w-[10%] mt-auto hover:cursor-pointer">
        +
      </button>
    </fieldset>
  );
}
