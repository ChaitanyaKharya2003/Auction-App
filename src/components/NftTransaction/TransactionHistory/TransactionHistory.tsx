import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./TrasnsactionHistory.module.css";
import { auth, db } from "../../../firebaseConfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Content = [
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Sucess",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
  {
    product: "Homegrown Tulips",
    date: "21/01/2022",
    id: "HYPR9459207532",
    status: "Success",
    color: "#95FF63",
    price: "INR 46,450.00",
    to: "",
  },
];
const TransactionHistory = () => {
  const [player, setPlayer] = useState<any>([]);
  const adminData = useSelector((state: RootStateOrAny) => state?.adminData);
  const [playerID, setPlayerId] = useState("");
  const query1 = query(collection(db, "players23-24"));
  const navigate = useNavigate();

  const findPlayer = () => {
    navigate(`/player/${playerID}`);
  };

  return (
    <div className="center" style={{marginTop:"100px"}}>
      {/* <h2> Player List</h2> */}
      <div className={styles.input}>
        <h4>Enter Player ID</h4>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          id="number"
          className={styles.input}
          // style={{border:"2px solid black"}}
          required
          onChange={(e: React.ChangeEvent<any>) => {
            setPlayerId(e.target.value);
          }}
        ></input>
      </div>

      <div></div>
      <div className={styles.j}>
        <button onClick={findPlayer}>Find</button>
      </div>
    </div>
  );
};

export default TransactionHistory;
