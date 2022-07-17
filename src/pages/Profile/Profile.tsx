import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { deleteUser, getUser } from "../../services/localStorage";

const Profile = () => {
  const navigate = useNavigate();
  const data = getUser();
  const logOut = () => {
    deleteUser();
    navigate("/");
    window.location.reload();
  };
  const close = () => {
    navigate("/");
  };
  return (
    <>
      {data !== null ? (
        <section className="max-w-5xl m-auto mt-52">
          <div className="flex justify-center item-center  gap-10">
            <div>
              <img
                src={data.avatar}
                alt=""
                className="rounded-full w-40 h-40"
              />
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
          </div>
          <div className="text-center">
            <button
              className="bg-red-400 px-2 py-1 text-white"
              onClick={logOut}
            >
              LogOut
            </button>
          </div>
        </section>
      ) : (
        <Modal
          children={
            <div>
              <p className="text-xl text-red-700">Please Register !</p>
              <button
                className="mt-5 py-1 px-5 bg-red-300 text-base text-white"
                onClick={close}
              >
                ok
              </button>
            </div>
          }
        />
      )}
    </>
  );
};

export default Profile;
