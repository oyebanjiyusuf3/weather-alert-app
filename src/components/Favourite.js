import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Favourite = ({ loadOptions }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    console.log(localStorage.removeItem("city"));
    window.alert("Country removed from favourite list");
    window.location.reload(false);
  };
  return (
    <div className="week-container">
      <hr />
      <h2 className="text-character">List of favourite cities</h2>

      <ul className="week-list" onClick={console.log(loadOptions)}>
        {localStorage.getItem("city") !== null ? (
          <li className="active">
            {" "}
            <img
              className="day-icon"
              src={"icons/" + localStorage.getItem("icon") + ".png"}
              data-feather="sun"
            />
            <span className="day-name">{localStorage.getItem("city")}</span>
            <span className="day-temp">
              {localStorage.getItem("myWind")} mph
            </span>
            <Button variant="primary" id="mr-2" onClick={handleShow}>
              View More
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              X
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{localStorage.getItem("city")}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  className="day-icon"
                  src={"icons/" + localStorage.getItem("icon") + ".png"}
                  data-feather="sun"
                />
                <div className="wind-deg">
                  {" "}
                  <span className="title">WND SPEED </span>
                  <span className="value">
                    {localStorage.getItem("wind")} mph{" "}
                  </span>
                  <div className="clear"></div>
                </div>
                <div className="wind-deg">
                  {" "}
                  <span className="title">WIND DEGREE</span>
                  <span className="value">
                    {localStorage.getItem("degree")}°{" "}
                  </span>
                  <div className="clear"></div>
                </div>
                <div className="temperatur">
                  {" "}
                  <span className="title">TEMPERATURE</span>
                  <span className="value">
                    {Math.round(localStorage.getItem("temp"))}°C
                  </span>
                  <div className="clear"></div>
                </div>

                <div className="wind">
                  {" "}
                  <span className="title">FEELS LIKE</span>
                  <span className="value">
                    {Math.round(localStorage.getItem("feels_like"))}°C
                  </span>
                  <div className="clear"></div>
                </div>
                <div className="humidity">
                  {" "}
                  <span className="title">HUMIDITY</span>
                  <span className="value">
                    {localStorage.getItem("humidity")} %
                  </span>
                  <div className="clear"></div>
                </div>
                <div className="humidity">
                  {" "}
                  <span className="title">PRESSURE</span>
                  <span className="value">
                    {localStorage.getItem("pressure")} hPa
                  </span>
                  <div className="clear"></div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {/* <Button variant="primary" onClick={}>
            Remove
          </Button> */}
              </Modal.Footer>
            </Modal>
          </li>
        ) : (
          <h4 className="text-character">
            No favourite data previously added{" "}
          </h4>
        )}
        {/* <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">28°C</span></li>
    <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
    <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
    <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
  */}

        <div className="clear"></div>
      </ul>
    </div>
  );
};

export default Favourite;
