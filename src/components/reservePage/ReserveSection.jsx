import React, { useRef, useState } from "react";
import classes from "./ReserveSection.module.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ReserveSection = (props) => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const fullNameInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const idCardNumberInput = useRef();
  const paymentMethodInput = useRef();

  const [reserveHotel, setReserveHotel] = useState({});
  const [billArr, setBillArr] = useState([]);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setReserveHotel(loaderData.hotel);

    // TODO refetch data when date changes
  }, [loaderData, date]);

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setBillArr((prevBillArr) => {
        return [
          ...prevBillArr,
          {
            id: e.target.id,
            hotelId: e.target.dataset.hotelid,
            roomId: e.target.dataset.roomid,
            roomNo: e.target.name,
            price: e.target.dataset.price,
          },
        ];
      });
    } else {
      setBillArr((prevbillArr) => {
        return prevbillArr.filter((bill) => bill.id !== e.target.id);
      });
    }
  };

  // prettier-ignore
  const totalBill = billArr.reduce((partialSum, bill) => partialSum + +bill.price, 0);

  const reserveHandler = async () => {
    // Get user token to include in request header
    const token = localStorage.getItem("token");

    // prettier-ignore
    const myHeaders = new Headers({
      "Authorization": token,
      "Content-Type": "application/json",
    });

    //#region validate for no empty field
    if (!fullNameInput.current.value) {
      alert("Please input your full name!");
      return;
    } else if (!emailInput.current.value) {
      alert("Please input your email!");
      return;
    } else if (!phoneNumberInput.current.value) {
      alert("Please input your phone number!");
      return;
    } else if (!idCardNumberInput.current.value) {
      alert("Please input your ID Card Number!");
      return;
    } else if (!paymentMethodInput.current.value) {
      alert("Please select a payment method!");
      return;
    } else if (totalBill === 0) {
      alert("Please select a room!");
      return;
    }
    //#endregion

    //#region validate for not allowing user to select different type of room
    let roomTypes = billArr.map((bill) => bill.roomId);
    roomTypes = [...new Set(roomTypes)];
    if (roomTypes.length > 1) {
      alert("Can only choose one type of room for each transaction!");
      return;
    }

    //#endregion

    const reserveInfo = {
      fullName: fullNameInput.current.value,
      email: emailInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      idCardNumber: idCardNumberInput.current.value,
    };

    const sendData = {
      reserveInfo,
      dates: date[0],
      paymentMethod: paymentMethodInput.current.value,
      billArr,
      totalBill,
    };

    const response = await fetch(
      `http://localhost:5000/reserve/${loaderData.hotel._id}`,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(sendData),
      }
    );
    if (response.ok) {
      navigate("/transactions");
    }
  };

  return (
    <section className={classes.reserveSection}>
      <div className={classes.datesReserveInfoDiv}>
        <div className={classes.dateDiv}>
          <h1>Dates</h1>
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className={classes.date_picker}
            minDate={new Date()}
            onChange={(item) => setDate([item.selection])}
            ranges={date}
          />
        </div>
        <div className={classes.reserveInforDiv}>
          <h1>Reserve Info</h1>
          <label htmlFor="fullName">Your Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            name="FullName"
            ref={fullNameInput}
            defaultValue={loaderData.user.fullName}
          />
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            ref={emailInput}
            defaultValue={loaderData.user.email}
          />
          <label htmlFor="phoneNumber">Your Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            ref={phoneNumberInput}
            defaultValue={loaderData.user.phoneNumber}
          />
          <label htmlFor="cardNumber">Your Identity Card Number</label>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            placeholder="Card Number"
            ref={idCardNumberInput}
            defaultValue={loaderData.user.idCardNumber}
          />
        </div>
      </div>
      <div className={classes.selectRoomsDiv}>
        <h1>Select Rooms</h1>
        <div className={classes.roomList}>
          {reserveHotel?.rooms?.map((room) => {
            return (
              <div className={classes.room} key={room._id}>
                <div className={classes.roomLeftDiv}>
                  <h3>{room.title}</h3>
                  <p>{room.desc}</p>
                  <h5>Max people: {room.maxPeople}</h5>
                  <h3>${room.price}</h3>
                </div>
                <div className={classes.roomRightDiv}>
                  {room?.roomNumbers?.map((roomNo) => {
                    return (
                      <div key={roomNo} className={classes.checkboxDiv}>
                        <label htmlFor={roomNo}>{roomNo}</label>
                        <input
                          type="checkbox"
                          id={`${room._id}${roomNo}`}
                          name={roomNo}
                          data-price={room.price}
                          data-hotelid={reserveHotel._id}
                          data-roomid={room._id}
                          onChange={checkboxHandler}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.totalBillDiv}>
        <h1>Total Bill: ${totalBill}</h1>
        <select
          name="payment"
          id="payment"
          defaultValue=""
          ref={paymentMethodInput}
        >
          <option value="" disabled>
            Select payment method
          </option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
        </select>
        <button onClick={reserveHandler}>Reserve Now</button>
      </div>
    </section>
  );
};

export default ReserveSection;
