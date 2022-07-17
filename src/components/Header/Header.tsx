import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { UserOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import { getUser } from "../../services/localStorage";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("registration");
  const data = getUser();

  return (
    <>
      <nav className="bg-violet-700 flex justify-between px-[100px] py-5">
        <div className="flex items-center gap-2">
          <i className="text-white text-xl">
            <HomeOutlined />
          </i>
          <Link to="/">
            <p className="text-white text-lg">Home</p>
          </Link>
        </div>

        {data === null ? (
          <div className="flex items-center gap-2">
            <h4
              className="text-white text-lg cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Login
            </h4>
            <UserOutlined className="text-white text-lg" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src={data.avatar} alt="" className="rounded-full" />
            </div>
            <Link to="/profile">
              <p className="text-lg text-white cursor-pointer">
                {data.last_name[0] + "." + data.first_name}
              </p>
            </Link>
          </div>
        )}
      </nav>
      {open && tab === "login" ? (
        <Modal children={<Login setTab={setTab} setOpen={setOpen} />} />
      ) : open && tab === "registration" ? (
        <Modal
          children={<Registration setTab={setTab} setOpen={setOpen} />}
          visable={tab}
        />
      ) : null}
    </>
  );
};

export default Header;
