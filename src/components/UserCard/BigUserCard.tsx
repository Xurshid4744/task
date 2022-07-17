import React from "react";
import { CloseOutlined } from "@ant-design/icons";

const BigUserCard = ({ data, setOpen }: any) => {
  return (
    <section className="max-w-5xl m-auto  grid  gap-10 text-center">
      <div className="flex justify-center item-center">
        <img src={data.avatar} alt="" className="rounded-full w-40 h-40" />
      </div>
      <div className="text-3xl">
        <p>
          <b>First Name:</b> {data.first_name}
        </p>
        <p>
          <b>Last Name:</b> {data.last_name}
        </p>
        <p>
          <b>Email:</b> {data.email}
        </p>
        <p>
          <b>ID:</b> {data.id}
        </p>
      </div>
      <i
        className="absolute top-2 right-5 cursor-pointer text-lg"
        onClick={() => setOpen(false)}
      >
        <CloseOutlined />
      </i>
    </section>
  );
};

export default BigUserCard;
