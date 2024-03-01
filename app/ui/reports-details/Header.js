"use client";

import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
function Header() {
  return (
    <>
      <div className="bg-white py-6">
        <header className="container m-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <svg
                  width="93"
                  height="26"
                  viewBox="0 0 93 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.46499 5.02L6.35699 6.972C6.78043 6.25765 7.37408 5.65919 8.08499 5.23C8.78129 4.83632 9.57023 4.63607 10.37 4.65C12.035 4.65 13.346 5.423 14.304 6.972C14.758 6.26633 15.3642 5.67113 16.078 5.23C16.7426 4.84154 17.5003 4.64106 18.27 4.65C19.328 4.65 20.205 4.909 20.9 5.428C21.5522 5.88439 22.0244 6.55434 22.235 7.322C22.43 8.07 22.528 9.282 22.528 10.962V25.535H16.477V12.161C16.477 10.409 16.417 9.324 16.299 8.908C16.2614 8.72098 16.1566 8.55421 16.0044 8.43923C15.8522 8.32424 15.6632 8.26902 15.473 8.284C15.2794 8.26917 15.0869 8.32385 14.93 8.43822C14.7731 8.5526 14.6621 8.71916 14.617 8.908C14.488 9.323 14.424 10.41 14.424 12.168V25.537H8.37599V12.5C8.37599 10.49 8.32699 9.285 8.22999 8.883C8.13199 8.481 7.86199 8.28 7.41899 8.28C7.2852 8.27805 7.15254 8.30491 7.03004 8.35874C6.90753 8.41257 6.79804 8.49213 6.70899 8.592C6.51157 8.80513 6.39668 9.08172 6.38499 9.372C6.36399 9.675 6.35299 10.322 6.35499 11.312V25.53H0.304993V5.02H6.46499ZM31.091 0.508004V3.768H24.676V0.508004H31.091ZM31.091 5.021V25.529H24.676V5.02L31.091 5.021ZM47.507 0.508004V25.529H41.273V24.041C40.7367 24.6198 40.0988 25.0953 39.391 25.444C38.7449 25.7512 38.0384 25.9107 37.323 25.911C36.424 25.9321 35.5421 25.6639 34.807 25.146C34.097 24.636 33.643 24.046 33.443 23.376C33.243 22.707 33.142 21.616 33.141 20.103V10.492C33.141 8.916 33.241 7.799 33.443 7.139C33.643 6.479 34.104 5.899 34.823 5.399C35.5832 4.88721 36.4839 4.62506 37.4 4.649C38.1278 4.63515 38.8501 4.77749 39.5182 5.06644C40.1863 5.35538 40.7847 5.78421 41.273 6.324V0.508004H47.507ZM41.273 10.183C41.273 9.431 41.208 8.926 41.08 8.668C40.95 8.411 40.697 8.282 40.316 8.282C39.934 8.282 39.693 8.398 39.568 8.629C39.444 8.859 39.375 9.379 39.375 10.188V20.233C39.375 21.067 39.436 21.615 39.561 21.879C39.685 22.142 39.921 22.273 40.271 22.273C40.67 22.273 40.937 22.126 41.071 21.832C41.207 21.538 41.274 20.819 41.273 19.676V10.183ZM57.691 0.508004V3.677C56.406 3.677 55.647 3.737 55.416 3.855C55.184 3.973 55.069 4.31 55.069 4.866V5.516H57.691V8.762H56.21V25.529H49.977V8.762H48.697V5.516H49.977C49.977 4.166 50.023 3.264 50.116 2.812C50.216 2.346 50.456 1.922 50.802 1.597C51.2388 1.20363 51.7667 0.925253 52.338 0.787004C52.998 0.602004 54.021 0.509004 55.408 0.507004H57.692L57.691 0.508004ZM92.365 0.508004H85.103L82.573 3.003H71.113V12.98H86.198V6.61L92.365 0.508004ZM81.16 12.959H76.213V7.959H81.161L81.16 12.959ZM81.177 13.002H76.174V17.979H71.13V13.002H66.283V19.322L60.005 25.538L67.305 25.535L69.933 22.935H81.178L81.177 13.002Z"
                    fill="#E31B23"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex space-x-12 text-primary w-2/5">
              <ul className="flex items-center justify-between w-full">
                <li>
                  <Link href={"/"}>
                    <h4 className="">Home</h4>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <h4>
                      <Dropdown
                        menu={{
                          items,
                        }}
                      >
                        <Space>
                          Services
                          <DownOutlined />
                        </Space>
                      </Dropdown>
                    </h4>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <h4>News & Events</h4>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <h4>About</h4>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <h4>Help</h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <button className="primary-bg font-medium text-[16px] text-white px-7 py-[10px] rounded">
                Discover
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
