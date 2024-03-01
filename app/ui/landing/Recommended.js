"use client";

import React from "react";
import Image from "next/image";
import vero from "../../../public/assets/vero.jpg";
import temporibus from "../../../public/assets/temporibus.jpg";
import perspiciatis from "../../../public/assets/perspiciatis.jpg";
import Icon from "../reports-details/Icon";

function Recommended() {
  return (
    <div className="">
      <div className="flex mt-4 justify-between border-b border-solid border-[#E6E6E6] pb-10">
        <div className="w-[80%]">
          <h1 className="text-xl text-[#191919]">
            At vero eos et accusamus et iusto odio digni
          </h1>
          <p className="text-base text-secondary font-light pr-5 pt-3 pb-5">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat , facere possimus omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et...
          </p>
          <div className="flex justify-between w-[90%] mt-3">
            <div className="flex space-x-10">
              <h4 className="font-normal text-sm text-[#292929] gray-light-bg-two px-3 py-1 rounded-full">
                Money
              </h4>
              <h4 className="font-normal text-sm text-[#292929]">3 min read</h4>
              <h4 className="font-normal text-sm text-[#292929]">
                Selected for you
              </h4>
            </div>
            <div className="flex space-x-4 items-center">
              <Icon icon="saved" />
              <Icon icon="doted" />
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Image src={vero} alt="vero" className="" />
        </div>
      </div>

      <div className="flex mt-4 justify-between border-b border-solid border-[#E6E6E6] pb-10">
        <div className="w-[80%]">
          <h1 className="text-xl text-[#191919]">
            Temporibus autem quibusdam et aut officiis
          </h1>
          <p className="text-base text-secondary font-light pr-5 pt-3 pb-5">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et...
          </p>
          <div className="flex justify-between w-[90%] mt-3">
            <div className="flex space-x-10">
              <h4 className="font-normal text-sm text-[#292929] gray-light-bg-two px-3 py-1 rounded-full">
                Business
              </h4>
              <h4 className="font-normal text-sm text-[#292929]">3 min read</h4>
              <h4 className="font-normal text-sm text-[#292929]">
                Selected for you
              </h4>
            </div>
            <div className="flex space-x-4 items-center">
              <Icon icon="saved" />
              <Icon icon="doted" />
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Image src={temporibus} alt="temporibus" className="" />
        </div>
      </div>

      <div className="flex mt-4 justify-between border-b border-solid border-[#E6E6E6] pb-10">
        <div className="w-[80%]">
          <h1 className="text-xl text-[#191919]">
            Sed ut perspiciatis unde omnis iste natus error
          </h1>
          <p className="text-base text-secondary font-light pr-5 pt-3 pb-5">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et...
          </p>
          <div className="flex justify-between w-[90%] mt-3">
            <div className="flex space-x-10">
              <h4 className="font-normal text-sm text-[#292929] gray-light-bg-two px-3 py-1 rounded-full">
                Technology
              </h4>
              <h4 className="font-normal text-sm text-[#292929]">3 min read</h4>
              <h4 className="font-normal text-sm text-[#292929]">
                Selected for you
              </h4>
            </div>
            <div className="flex space-x-4 items-center">
              <Icon icon="saved" />
              <Icon icon="doted" />
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Image src={perspiciatis} alt="perspiciatis" className="" />
        </div>
      </div>
    </div>
  );
}

export default Recommended;
