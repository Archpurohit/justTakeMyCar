import React from "react";
import carData from "./data/carData";

export default function CarsAvailable() {
  return (
    <div className="carsAvailable">
      <div className="availableTitle"> Cars Available now</div>
      <div className="availableCars">
        <div className="carItem">
          <div className="carName"> Car 1</div>
          <div className="carImage">
            <img src={carData[0].image} alt="car1"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName">{carData[0].name} Car 2</div>
          <div className="carImage">
            <img src={carData[1].image} alt="car2"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName"> Car 3</div>
          <div className="carImage">
            <img src={carData[2].image} alt="car3"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName"> Car 4</div>
          <div className="carImage">
            <img src={carData[3].image} alt="car4"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName"> Car 5</div>
          <div className="carImage">
            <img src={carData[4].image} alt="car5"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName"> Car 6 </div>
          <div className="carImage">
            <img src={carData[5].image} alt="car6"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="carItem">
          <div className="carName"> Car 7 </div>
          <div className="carImage">
            <img src={carData[6].image} alt="car7"></img>
          </div>
          <div className="carArea">
            <div>area</div>
            <div className="reserve">
              {" "}
              <a href="#">Reserve</a>
            </div>
          </div>
        </div>
        <div className="seeMore">
          {" "}
          <a href="#">See more</a>
        </div>
      </div>
    </div>
  );
}
