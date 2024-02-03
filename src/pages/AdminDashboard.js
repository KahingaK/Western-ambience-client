import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import TableTwo from "../components/TableTwo";
import TableThree from "../components/TableThree";
import ChatCard from "../components/ReviewCard";
import AdminBookForm from "../components/AdminBookForm";
import HeroSliderAd from "../components/HeroSliderAd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import DropZone from "../components/DropZone";

function AdminDashboard() {
  const { currentUser } = useContext(UserContext);
  const [showTableThree, setShowTableThree] = useState(true);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { url, token } = useContext(UserContext);

  //SendPost

  const handleSendMail = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("post[title]", title);
    formData.append("post[body]", message);
    if (image) {
      formData.append("post[image]", image);
    }

    try {
      const response = await fetch(`${url}/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      setIsLoading(false);

      if (response.ok) {
        setTitle("");
        setMessage("");
        toast.success("Mail Sent!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.log(response.statusText);
        toast.error(response.statusText, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(error);
    }
  };

  function handleSubmitMail(e) {
    e.preventDefault();
    handleSendMail();
  }

  return (
    <div className="py-36 container mx-auto">
      {isLoading && <Loading />}
      <div className="  lg:px-0">
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Welcome {currentUser.username}
          </div>
          <div>
            <div>
              <h2 className="font-primary text-[45px]">Home</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid-container-1 grid grid-cols-1 gap-9 lg:grid-cols-2 items-center pb-10 col-end-6 ">
            <div className="h-[300px]  ">
              <HeroSliderAd />
            </div>

            <div className="flex flex-col">
              <div>
                <h2 className="uppercase  text-xl font-medium">Send Mail </h2>
              </div>
              <div className="rounded-sm  shadow-default ">
                <div className="border-b  py-4 px-6.5 ">
                  <div className="flex flex-col  space-y-4 p-6.5">
                    <div className="space-y-4">
                     

                      <DropZone setImage={setImage} />
                      <input
                        value={title} // Use value to bind to the state variable
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        type="text"
                        placeholder="title"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <input
                        value={message} // Use value to bind to the state variable
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        type="text"
                        placeholder="Write a message"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <button
                      onClick={handleSubmitMail}
                      className="btn btn-secondary p-4"
                    >
                      send mail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4"></div>
        <div className="container mx-auto relative lg:pb-16 ">
          <div className=" mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-1 lg:-top-12 ">
            <AdminBookForm />
          </div>
        </div>
        <div className="lg:pt-12">
          <div className=" grid grid-cols-2 lg:grid-cols-4 items-center">
            <div className="cols-span-4 ">
              {showTableThree ? (
                <h2 className="font-primary text-[45px]">
                  <Link to="/admin-bookings"> Bookings</Link>
                </h2>
              ) : (
                <h2 className="font-primary text-[45px]">Rooms</h2>
              )}
            </div>

            <div className="cols-span-4 ">
              <label
                htmlFor="toggle4"
                className="flex cursor-pointer select-none pl-6 items-center"
              >
                <div className="relative ">
                  <input
                    type="checkbox"
                    id="toggle4"
                    className="sr-only"
                    onChange={() => {
                      setShowTableThree(!showTableThree);
                    }}
                  />
                  <div className="block h-8 w-14 rounded-full bg-black"></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                      showTableThree && "!right-1 !translate-x-full"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <div className=" grid-container-2 mt-4 grid grid-cols-12  gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            {showTableThree ? <TableTwo /> : <TableThree />}
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
