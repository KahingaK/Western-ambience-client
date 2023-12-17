import { Link } from "react-router-dom";
import UserOne from "../assets/img/user.png";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { MdDeleteOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "./Loading";

const ChatCard = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewContent, setReviewContent] = useState("");
  const { url, token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${url}/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((error) => {
        console.log("Error fetching Bookingss: ", error);
      });
  }, []);

  //create a new review
  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  function handleAddClick(e) {
    setIsLoading(true)
    e.preventDefault();
    fetch(`${url}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: reviewContent }),
    })
      .then((response) => {
        response.json().then((data) => {
          setIsLoading(false)
          if (response.ok) {
            // handleAddReview(data.review);
            console.log(data.review);
            setReviewContent("");
            toast.success(data.message, {
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
            toast.error(response.statusText || "an error occured", {
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
        });
      })

      .catch((error) => {
        toast.error( "An error occurred", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(error);
      });
  }

  return (
    <div className="col-span-12 h-[500px] overflow-y-auto rounded-sm  bg-white px-4 py-6 shadow-default  xl:col-span-4">
    {isLoading && <Loading/>}
      <h3 className="uppercase  text-xl text-center font-medium pb-2">Reviews</h3>
      <div className="border mt-1 p-2 rounded-md w-full flex lg:flex-col">
        <div className=" flex-grow ">
          <input
            className=" outline-none placeholder-gray-500 lg:placeholder-opacity-0 w-full max-h-48 overflow-y-auto "
            type="text"
            placeholder="leave a comment..."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          />
        </div>

        <div className="flex-shrink-2 ml-2">
          {" "}
          {/* Add flex-shrink-0 to prevent the button from growing */}
          <button
            className="btn btn-primary cursor-pointer"
            onClick={handleAddClick}
          >
            review
          </button>
        </div>
      </div>

      <h4 className="mb-6 mt-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Chats
      </h4>

      <div>
        {reviews &&
          reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            >
              <div className="relative h-14 w-14 rounded-full">
                <img src={UserOne} alt="User" />
                <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    {review.user.username}
                  </h5>
                  <p>
                    <span className="text-sm text-black dark:text-white">
                      {review.content}
                    </span>
                  </p>
                  <p className="text-sm pt-2">
                    {new Date(review.created_at).toLocaleDateString("en-GB")}
                  </p>
                </div>

                {/* Delete SVG */}
                <div className="cursor-pointer">
                  <MdDeleteOutline />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatCard;
