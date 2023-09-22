import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Choose Your Vehicle",
      text: "Browse our extensive fleet and select the perfect vehicle for your needs.",
    },
    {
      image: ChooseMeals,
      title: "Book Online",
      text: "Reserve your vehicle online in just a few clicks. Specify your pickup and drop-off dates.",
    },
    {
      image: DeliveryMeals,
      title: "Pick Up and Go",
      text: "Arrive at our convenient location on the scheduled date and time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        we've simplified the car rental process to make your journey as effortless as possible. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;