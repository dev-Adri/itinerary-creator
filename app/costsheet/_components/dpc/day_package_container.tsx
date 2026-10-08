"use client";

import Package from "../package/package";

import { useState } from "react";

let packageId = 0;
export default function DPC() {
    const [packages, setPackage] = useState<number[]>([]);

    const addPackage = () => {
        setPackage((prev) => [...prev, packageId]);
        packageId += 1;
    };

    const removePackage = (idToRemove: number) => {
        setPackage((prev) => prev.filter((id) => id !== idToRemove));
    };

    return (
        <fieldset className="flex flex-col items-center gap-1 border-2 border-[rgb(127,127,127)] rounded-[16px] bg-transparent min-h-25 mx-4 mt-3 mb-0 pt-0.5 pb-2">
            <legend className="font-mont font-extrabold px-3 ml-12.5">
                Tuesday 24 September, 2027
            </legend>
            {packages.map((id) => (
                <Package key={id}></Package>
            ))}
            <button
                onClick={addPackage}
                className="font-mont font-extrabold bg-[rgba(0,0,0,0.144)] hover:bg-[rgba(0,0,0,0.25)] active:bg-[rgba(0,0,0,0.35)] rounded-[5px] w-[10%] mt-auto hover:cursor-pointer"
            >
                +
            </button>
        </fieldset>
    );
}
