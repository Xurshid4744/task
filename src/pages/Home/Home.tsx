import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";

import requestApi from "../../services/api/requestApi";

const Home = () => {
  const [pages, setPages] = useState([]);
  const [pages2, setPages2] = useState([]);
  useEffect(() => {
    requestApi.get(`/users?page=1`).then((res) => setPages(res?.data?.data));
    requestApi.get(`/users?page=2`).then((res) => setPages2(res?.data?.data));
  }, []);

  return (
    <section className="flex mt-20 py-5 gap-8 flex-wrap max-w-7xl m-auto justify-center">
      {pages.concat(pages2).map((item: any) => (
        <>
          <UserCard
            key={item.id}
            lastName={item.last_name}
            firstName={item.first_name}
            avatar={item.avatar}
            data={item}
          />
        </>
      ))}
    </section>
  );
};

export default Home;
