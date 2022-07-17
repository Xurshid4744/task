import { Card } from "antd";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import BigUserCard from "./BigUserCard";

interface UserCardType {
  lastName: string;
  firstName: string;
  avatar: string;
  setOpen?: any;
  data: any;
}
const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
  border: "1px solid #dddd",
};

const UserCard = ({ lastName, firstName, avatar, data }: UserCardType) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Card.Grid
        style={gridStyle}
        className={"cursor-pointer grid justify-center items-center"}
        onClick={() => setOpen(true)}
      >
        <div className="w-14 h-14  flex justify-center items-center ">
          <img src={avatar} alt="" className="rounded-full" />
        </div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </Card.Grid>
      {open && (
        <Modal children={<BigUserCard data={data} setOpen={setOpen} />} />
      )}
    </>
  );
};

export default UserCard;
