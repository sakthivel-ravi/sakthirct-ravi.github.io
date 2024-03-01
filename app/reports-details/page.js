"use client";

import React, { useState } from "react";
import Image from "next/image";
import downloadIcon from "../../public/assets/download.svg";
import tableOne from "../../public/assets/table-1.png";
import tableTwo from "../../public/assets/table-2.png";
import chartOne from "../../public/assets/chart-1.png";
import chartTwo from "../../public/assets/chart-2.png";
import chartThree from "../../public/assets/chart-3.png";
import chartFour from "../../public/assets/chart-4.png";
import Link from "next/link";

function ReportsDetails() {
  return (
    <section className="">
      <div className="bg-landing-banner pt-28 pb-40">
        <h1 className="text-textblack font-bold text-[64px] text-center">
          Fund Flow Report
        </h1>
        <div>
          <h2 className="text-[18px] text-center w-[22%] text-secondary font-light m-auto mt-10">
            (Week ended 9 February 2024)
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="border border-solid border-[#A91A1A] rounded px-6 mt-8 py-2 box-shadow-small-two flex items-center">
            <Link
              href={""}
              download="/Fund-Flow-Report-Week-25-Mar-MIDF-280322.pdf"
              target="_blank"
              className="flex items-center"
            >
              <Image src={downloadIcon} alt="Download" className="mr-2" />
              Download
            </Link>
          </button>
        </div>
      </div>

      <div className="mb-20">
        <div className="container m-auto">
          <h3 className="text-3xl text-primary text-center">
            Economic Momentum Fuels Market Rally
          </h3>
          <div className="flex items-center justify-between mt-12 w-5/6 m-auto">
            <div className="w-[60%]">
              <h4 className="text-2xl text-primary mb-4">A. Market Snapshot</h4>
              <ul className="ml-5">
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  Most global indices closed higher last week, with manyAsian
                  markets having a shortened trading week aheadof Chinese New
                  Year. The market rally in CY24 has beenfueled by a solid
                  earnings season, easing inflation data,and a resilient U.S.
                  economy.
                </li>
                <li className="text-sm text-secondary font-light list-disc">
                  Updates to the consumer price index (CPI), released bythe U.S.
                  government on Friday, revealed that the pricesconsumers pay in
                  the marketplace rose at an even slowerpace than initially
                  reported. The revised data showed a+0.2% increase on the month
                  for the broad basket of goods and services measured, compared
                  to the originallyreported +0.3%.
                </li>
              </ul>
            </div>
            <div className="w-[35%]">
              <Image src={tableOne} alt="Table" width={400} />
            </div>
          </div>
        </div>

        <div className="container m-auto my-20">
          <div className="flex items-center justify-between mt-12 w-5/6 m-auto">
            <div className="w-[35%]">
              <Image src={chartOne} alt="Table" width={400} />
            </div>
            <div className="w-[60%]">
              <ul className="ml-5">
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  Australia&apos;s central bank kept interest rates unchanged
                  onTuesday, aligning with expectations. However, it hinted
                  atthe possibility of future increases, citing persistently
                  highinflation and the need for further evidence of cooling
                  pricepressures. The Reserve Bank of Australia (RBA)
                  concludedits Feb-24 policy meeting by maintaining rates at a
                  12-yearhigh of 4.35%, with the last increase occurring in
                  Nov-23.
                </li>
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  According to the Department of Statistics Malaysia
                  (DOSM),Malaysia&apos;s Services Producer Price Index (SPPI)
                  increased by+1.0% in 4QCY23, reaching 115.5 points from 115.4
                  pointsa year earlier. Within this, the arts, entertainment,
                  andrecreation subsector saw a +5.5% rise, while
                  accommodationand food and beverage (F&B) service activities
                  grewby +3.4%.
                </li>
                <li className="text-sm text-secondary font-light list-disc">
                  Malaysia&apos;s wholesale and retail trade achieved a
                  salesvalue of RM143.9b. In 4Q23, wholesale and retail
                  tradesales totaled RM428.8b, bringing the year&apos;s total
                  sales toRM1.70t. Chief Statistician Datuk Seri Dr. Mohd Uzir
                  Mahidinattributed the +4.8%yoy increase in Dec-23 to the
                  retailtrade sub-sector, which grew by +5.0% or RM3.0b,
                  reachingRM62.4b.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <div className="flex items-center justify-between mt-12 w-5/6 m-auto">
            <div className="w-[60%]">
              <ul className="ml-5">
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  Australia’s central bank kept interest rates unchanged
                  onTuesday, aligning with expectations. However, it hinted
                  atthe possibility of future increases, citing persistently
                  highinflation and the need for further evidence of cooling
                  pricepressures. The Reserve Bank of Australia (RBA)
                  concludedits Feb-24 policy meeting by maintaining rates at a
                  12-yearhigh of 4.35%, with the last increase occurring in
                  Nov-23.
                </li>
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  According to the Department of Statistics Malaysia
                  (DOSM),Malaysia&apos;s Services Producer Price Index (SPPI)
                  increased by+1.0% in 4QCY23, reaching 115.5 points from 115.4
                  pointsa year earlier. Within this, the arts, entertainment,
                  andrecreation subsector saw a +5.5% rise, while
                  accommodationand food and beverage (F&B) service activities
                  grewby +3.4%.
                </li>
                <li className="text-sm text-secondary font-light list-disc">
                  Malaysia&apos;s wholesale and retail trade achieved a
                  salesvalue of RM143.9b. In 4Q23, wholesale and retail
                  tradesales totaled RM428.8b, bringing the year&apos;s total
                  sales toRM1.70t. Chief Statistician Datuk Seri Dr. Mohd Uzir
                  Mahidinattributed the +4.8%yoy increase in Dec-23 to the
                  retailtrade sub-sector, which grew by +5.0% or RM3.0b,
                  reachingRM62.4b.
                </li>
              </ul>
            </div>
            <div className="w-[35%]">
              <Image src={chartTwo} alt="Table" width={400} />
            </div>
          </div>
        </div>

        <div className="container m-auto mt-24">
          <div className="flex items-center justify-between mt-12 w-5/6 m-auto">
            <div className="w-[60%]">
              <h4 className="text-2xl text-primary mb-4">
                B. Tracking Money Flow - Asia
              </h4>
              <ul className="ml-5">
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  Most global indices closed higher last week, with manyAsian
                  markets having a shortened trading week aheadof Chinese New
                  Year. The market rally in CY24 has beenfueled by a solid
                  earnings season, easing inflation data,and a resilient U.S.
                  economy.
                </li>
                <li className="text-sm text-secondary font-light list-disc">
                  Updates to the consumer price index (CPI), released bythe U.S.
                  government on Friday, revealed that the pricesconsumers pay in
                  the marketplace rose at an even slowerpace than initially
                  reported. The revised data showed a+0.2% increase on the month
                  for the broad basket of goods and services measured, compared
                  to the originallyreported +0.3%.
                </li>
              </ul>
            </div>
            <div className="w-[35%]">
              <Image src={tableTwo} alt="Table" width={400} />
            </div>
          </div>
        </div>

        <div className="container m-auto my-20">
          <div className="flex items-center justify-between mt-12 w-5/6 m-auto">
            <div className="w-[35%]">
              <Image src={chartThree} alt="Table" width={400} />
            </div>
            <div className="w-[60%]">
              <ul className="ml-5">
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  Australia&apos;s central bank kept interest rates unchanged
                  onTuesday, aligning with expectations. However, it hinted
                  atthe possibility of future increases, citing persistently
                  highinflation and the need for further evidence of cooling
                  pricepressures. The Reserve Bank of Australia (RBA)
                  concludedits Feb-24 policy meeting by maintaining rates at a
                  12-yearhigh of 4.35%, with the last increase occurring in
                  Nov-23.
                </li>
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  According to the Department of Statistics Malaysia
                  (DOSM),Malaysia&apos;s Services Producer Price Index (SPPI)
                  increased by+1.0% in 4QCY23, reaching 115.5 points from 115.4
                  pointsa year earlier. Within this, the arts, entertainment,
                  andrecreation subsector saw a +5.5% rise, while
                  accommodationand food and beverage (F&B) service activities
                  grewby +3.4%.
                </li>
                <li className="text-sm text-secondary font-light list-disc">
                  Malaysia&apos;s wholesale and retail trade achieved a
                  salesvalue of RM143.9b. In 4Q23, wholesale and retail
                  tradesales totaled RM428.8b, bringing the year&apos;s total
                  sales toRM1.70t. Chief Statistician Datuk Seri Dr. Mohd Uzir
                  Mahidinattributed the +4.8%yoy increase in Dec-23 to the
                  retailtrade sub-sector, which grew by +5.0% or RM3.0b,
                  reachingRM62.4b.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container m-auto my-20">
          <div className="flex items-center justify-between mt-12 w-5/6 m-auto">
            <div className="w-[60%]">
              <ul className="ml-5">
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  Australia&apos;s central bank kept interest rates unchanged
                  onTuesday, aligning with expectations. However, it hinted
                  atthe possibility of future increases, citing persistently
                  highinflation and the need for further evidence of cooling
                  pricepressures. The Reserve Bank of Australia (RBA)
                  concludedits Feb-24 policy meeting by maintaining rates at a
                  12-yearhigh of 4.35%, with the last increase occurring in
                  Nov-23.
                </li>
                <li className="text-sm text-secondary font-light list-disc mb-5">
                  According to the Department of Statistics Malaysia
                  (DOSM),Malaysia&apos;s Services Producer Price Index (SPPI)
                  increased by+1.0% in 4QCY23, reaching 115.5 points from 115.4
                  pointsa year earlier. Within this, the arts, entertainment,
                  andrecreation subsector saw a +5.5% rise, while
                  accommodationand food and beverage (F&B) service activities
                  grewby +3.4%.
                </li>
                <li className="text-sm text-secondary font-light list-disc">
                  Malaysia&apos;s wholesale and retail trade achieved a
                  salesvalue of RM143.9b. In 4Q23, wholesale and retail
                  tradesales totaled RM428.8b, bringing the year&apos;s total
                  sales toRM1.70t. Chief Statistician Datuk Seri Dr. Mohd Uzir
                  Mahidinattributed the +4.8%yoy increase in Dec-23 to the
                  retailtrade sub-sector, which grew by +5.0% or RM3.0b,
                  reachingRM62.4b.
                </li>
              </ul>
            </div>
            <div className="w-[35%]">
              <Image src={chartFour} alt="Table" width={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportsDetails;
