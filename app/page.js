"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "./ui/reports-details/Header";
import fundflow from "../public/assets/fundflow.jpg";
import fixedincome from "../public/assets/fixedincome.jpg";
import economicreview from "../public/assets/economicreview.jpg";
import distributivetrade from "../public/assets/distributivetrade.jpg";
import searchBg from "../public/assets/search.svg";
import homeIcon from "../public/assets/home.svg";
import Icon from "./ui/reports-details/Icon";
import downloadIcon from "../public/assets/download.svg";
import { Tabs } from "antd";
import Recommended from "./ui/landing/Recommended";
import { useRouter } from "next/navigation";
import Link from "next/link";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Following",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Recommended",
    children: <Recommended />,
  },
];

export default function Home() {
  const router = useRouter();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipOne, setShowTooltipOne] = useState(false);
  const [showTooltipTwo, setShowTooltipTwo] = useState(false);
  const [showTooltipThree, setShowTooltipThree] = useState(false);

  return (
    <>
      <Header />

      <div className="bg-landing-banner bg-repeat-x pt-28 pb-8">
        <h1 className="text-textblack font-bold text-[64px] text-center">
          Research & Insights
        </h1>
        <div>
          <h2 className="text-[18px] text-center w-[22%] text-secondary font-light m-auto mt-10">
            We transform data into insights so you can make smarter decisions,
            faster.
          </h2>
        </div>

        <div className="box-shadow-small-two grey-border-two container bg-white m-auto mb-10 px-10 py-10 mt-28">
          <h1 className="text-primary font-medium text-2xl text-center">
            Latest Reports
          </h1>

          <div className="flex items-start mt-5 justify-between">
            <div
              className="w-[23%] relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div onClick={() => router.push("/reports-details")}>
                <Image
                  src={fundflow}
                  alt="fundflow"
                  className="cursor-pointer w-full"
                />
                <div className="text-center mt-5">
                  <h4 className="text-base text-primary font-medium">
                    FUND FLOW REPORT
                  </h4>
                  <p className="text-sm text-secondary font-light">
                    Week ended 09 February 2024
                  </p>
                </div>
              </div>
              {showTooltip && (
                <div className="absolute w-[280px] gray-dark-bg top-[260px] left-[50px] rounded px-5 py-5">
                  <p className="text-sm text-white mb-2">Fund Flow Report</p>
                  <ul className="ml-4">
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Market Snapshot
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Asia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Malaysia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Net Inflow and Outflows by Stock
                    </li>
                  </ul>
                  <button className="bg-white px-3 py-2 mt-3 rounded text-sm">
                    <Link
                      href={""}
                      download="/Fund-Flow-Report-Week-25-Mar-MIDF-280322.pdf"
                      target="_blank"
                      className="flex items-center"
                    >
                      <Image
                        src={downloadIcon}
                        alt="Download"
                        className="mr-2"
                      />
                      Download PDF
                    </Link>
                  </button>
                  <div className="tooltip"></div>
                </div>
              )}
            </div>

            <div
              className="w-[23%] relative"
              onMouseEnter={() => setShowTooltipOne(true)}
              onMouseLeave={() => setShowTooltipOne(false)}
            >
              <div onClick={() => router.push("/reports-details")}>
                <Image
                  src={fixedincome}
                  alt="fixedincome"
                  className="cursor-pointer w-full"
                />
                <div className="text-center mt-5">
                  <h4 className="text-base text-primary font-medium">
                    FIXED INCOME REVIEW
                  </h4>
                  <p className="text-sm text-secondary font-light">
                    09 February 2024 : 10-Year MGS Yield Rose, Mirroring 10-Year
                    UST Yield
                  </p>
                </div>
              </div>

              {showTooltipOne && (
                <div className="absolute w-[280px] gray-dark-bg top-[260px] left-[50px] rounded px-5 py-5">
                  <p className="text-sm text-white mb-2">Fund Flow Report</p>
                  <ul className="ml-4">
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Market Snapshot
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Asia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Malaysia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Net Inflow and Outflows by Stock
                    </li>
                  </ul>
                  <button className="bg-white px-3 py-2 mt-3 rounded text-sm">
                    <Link
                      href={""}
                      download="/Fund-Flow-Report-Week-25-Mar-MIDF-280322.pdf"
                      target="_blank"
                      className="flex items-center"
                    >
                      <Image
                        src={downloadIcon}
                        alt="Download"
                        className="mr-2"
                      />
                      Download PDF
                    </Link>
                  </button>
                  <div className="tooltip"></div>
                </div>
              )}
            </div>

            <div
              className="w-[23%] relative"
              onMouseEnter={() => setShowTooltipTwo(true)}
              onMouseLeave={() => setShowTooltipTwo(false)}
            >
              <div onClick={() => router.push("/reports-details")}>
                <Image
                  src={economicreview}
                  alt="economicreview"
                  className="cursor-pointer w-full"
                />
                <div className="text-center mt-5">
                  <h4 className="text-base text-primary font-medium">
                    ECONOMIC REVIEW
                  </h4>
                  <p className="text-sm text-secondary font-light">
                    9 February 2024 : December 2023 Labour Market
                  </p>
                </div>
              </div>
              {showTooltipTwo && (
                <div className="absolute w-[280px] gray-dark-bg top-[260px] left-[50px] rounded px-5 py-5">
                  <p className="text-sm text-white mb-2">Fund Flow Report</p>
                  <ul className="ml-4">
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Market Snapshot
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Asia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Malaysia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Net Inflow and Outflows by Stock
                    </li>
                  </ul>
                  <button className="bg-white px-3 py-2 mt-3 rounded text-sm">
                    <Link
                      href={""}
                      download="/Fund-Flow-Report-Week-25-Mar-MIDF-280322.pdf"
                      target="_blank"
                      className="flex items-center"
                    >
                      <Image
                        src={downloadIcon}
                        alt="Download"
                        className="mr-2"
                      />
                      Download PDF
                    </Link>
                  </button>
                  <div className="tooltip"></div>
                </div>
              )}
            </div>

            <div
              className="w-[23%] relative"
              onMouseEnter={() => setShowTooltipThree(true)}
              onMouseLeave={() => setShowTooltipThree(false)}
            >
              <div onClick={() => router.push("/reports-details")}>
                <Image
                  src={distributivetrade}
                  alt="distributivetrade"
                  className="cursor-pointer w-full"
                />
                <div className="text-center mt-5">
                  <h4 className="text-base text-primary font-medium">
                    DISTRIBUTIVE TRADE
                  </h4>
                  <p className="text-sm text-secondary font-light px-4">
                    8 February 2024 : December 2023 Distributive Trade
                  </p>
                </div>
              </div>
              {showTooltipThree && (
                <div className="absolute w-[280px] gray-dark-bg top-[260px] left-[50px] rounded px-5 py-5">
                  <p className="text-sm text-white mb-2">Fund Flow Report</p>
                  <ul className="ml-4">
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Market Snapshot
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Asia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Tracking Money Flow - Malaysia
                    </li>
                    <li className="list-decimal text-[13px] text-white mb-1">
                      Net Inflow and Outflows by Stock
                    </li>
                  </ul>
                  <button className="bg-white px-3 py-2 mt-3 rounded text-sm">
                    <Link
                      href={""}
                      download="/Fund-Flow-Report-Week-25-Mar-MIDF-280322.pdf"
                      target="_blank"
                      className="flex items-center"
                    >
                      <Image
                        src={downloadIcon}
                        alt="Download"
                        className="mr-2"
                      />
                      Download PDF
                    </Link>
                  </button>
                  <div className="tooltip"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h1 className="text-center font-medium text-3xl text-primary">
          Popular Research by Industry
        </h1>
        <h3 className="text-base text-center text-secondary font-light mt-3 mb-8">
          Discover all our data transformed into insights, so you can make more
          informed decisions for your business.
        </h3>
        <div className="m-auto container mt-6 flex justify-between">
          <div className="w-[18%] red-top-border flex justify-center items-center box-shadow-small-two py-14">
            <Icon icon="automotive" />
            <h4 className="font-normal text-textdarkblack ml-4">Automotive</h4>
          </div>
          <div className="w-[18%] green-top-border flex justify-center items-center box-shadow-small-two py-14">
            <Icon icon="plantation" />
            <h4 className="font-normal text-textdarkblack ml-4">Plantation</h4>
          </div>
          <div className="w-[18%] blue-top-border flex justify-center items-center box-shadow-small-two py-14">
            <Icon icon="banking" />
            <h4 className="font-normal text-textdarkblack ml-4">Banking</h4>
          </div>
          <div className="w-[18%] yellow-top-border flex justify-center items-center box-shadow-small-two py-14">
            <Icon icon="technology" />
            <h4 className="font-normal text-textdarkblack ml-4">Technology</h4>
          </div>
          <div className="w-[18%] pink-top-border flex justify-center items-center box-shadow-small-two py-14">
            <Icon icon="energy" />
            <h4 className="font-normal text-textdarkblack ml-4">Energy</h4>
          </div>
        </div>
      </div>

      <div className="container m-auto mb-20">
        <div className="flex items-start justify-between">
          <div className="w-[70%]">
            <div className="flex items-center">
              <div className="w-[34px] h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                <Icon icon="plusicon" className="" />
              </div>
              <h4 className="font-light text-[#000000CC] ml-3">
                Keep up with the latest in any topic
              </h4>
            </div>
            <div className="ant-btn">
              <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
            </div>
          </div>
          <div className="border-l border-solid border-[#E6E6E6] w-[25%] pb-20">
            <div className="w-[90%] m-auto pt-14">
              <button className="primary-bg w-full py-3 text-white rounded-full mb-11">
                Get unlimited access
              </button>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none grey-border rounded-full pl-10 py-2 w-full font-light"
                />
                <Image
                  src={searchBg}
                  alt="searchBg"
                  width={16}
                  className="absolute left-4 top-[14px]"
                />
              </div>

              <div className="mt-10">
                <h5 className="text-base text-primary mb-4">
                  What We&apos;re Reading Today
                </h5>
                <ul>
                  <li className="mb-3 text-secondary font-light">
                    Your portfolio is stopping you from geting that job
                  </li>
                  <li className="mb-3 text-secondary font-light">
                    Your portfolio is stopping you from geting that job
                  </li>
                  <li className="mb-3 text-secondary font-light">
                    Your portfolio is stopping you from geting that job
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <ul className="flex flex-wrap items-start">
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Technology
                  </li>
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Money
                  </li>
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Business
                  </li>
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Productivity
                  </li>
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Art
                  </li>
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Mindfullness
                  </li>
                  <li className="gray-light-bg rounded-full px-4 py-2 mr-2 mb-3 text-sm font-light">
                    Yada Yada
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 container m-auto mb-28">
        <div className="flex items-start justify-between">
          <div className="w-[31%] box-shadow-small-three">
            <div className="px-8 pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl text-primary font-medium">Startup</h3>
                <Image src={homeIcon} alt="Home" width={22} />
              </div>
              <div className="flex justify-center flex-wrap">
                <h2 className="text-[40px] font-medium my-9 w-full text-center">
                  $10.00
                </h2>
                <p className="text-base font-light mb-7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>

                <ul>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                </ul>
              </div>
            </div>
            <button className="bg-[#EDF2F7] py-5 w-full mt-10">
              Get started today
            </button>
          </div>

          <div className="w-[31%] box-shadow-small-three mt-[-50px]">
            <div className="px-8 pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl text-primary font-medium">Business</h3>
                <Image src={homeIcon} alt="Home" width={22} />
              </div>
              <div className="flex justify-center flex-wrap">
                <h2 className="text-[40px] font-medium my-9 w-full text-center">
                  $30.00
                </h2>
                <p className="text-base font-light mb-7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>

                <ul>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                </ul>
              </div>
            </div>
            <button className="primary-bg text-white py-5 w-full mt-10">
              Get started today
            </button>
          </div>

          <div className="w-[31%] box-shadow-small-three">
            <div className="px-8 pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl text-primary font-medium">Agency</h3>
                <Image src={homeIcon} alt="Home" width={22} />
              </div>
              <div className="flex justify-center flex-wrap">
                <h2 className="text-[40px] font-medium my-9 w-full text-center">
                  $45.00
                </h2>
                <p className="text-base font-light mb-7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>

                <ul>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                  <li className="text-base font-light text-secondary mb-4 list-disc">
                    It is a long established
                  </li>
                </ul>
              </div>
            </div>
            <button className="bg-[#EDF2F7] py-5 w-full mt-10">
              Get started today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
