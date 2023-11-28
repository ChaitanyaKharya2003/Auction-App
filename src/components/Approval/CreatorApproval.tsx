import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Approval.module.css";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import { error } from "console";
import { Navigate } from "react-router-dom";
import photos from "./playersPhotos23-24/3.jpg";
import HH from "../../screens/Home/img/HH.png";
import MB from "../../screens/Home/img/MB.png";
import SS from "../../screens/Home/img/SS.png";
import KK from "../../screens/Home/img/KK.png";

const Approval = () => {
  const { playerId } = useParams();
  const [userData, setUserData] = useState<any>();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [bid, setBid] = useState(0);

  const handleFiftyIncremental = () => {
    setBid(bid + 50);
  };

  const handleHundredIncremental = () => {
    setBid(bid + 150);
  };
  const handleTwoHunderdIncremental = () => {
    setBid(bid + 300);
  };

  const handleRefresh = () => {
    setBid(0);
  };

  const handleHouse = async (houseName: string) => {
    console.log(houseName);
    if (houseName === "") {
      alert("Please Select House");
    } else {
      if (playerId) {
        if (bid === 0) {
          alert("No Bid Placed");
        } else {
          await updateDoc(doc(db, "players23-24", playerId), {
            isHouseGiven: true,
            houseName: houseName,
            bidPoints: bid,
            comments: comment,
          })
            .then(() => {
              alert("SuccessFul!");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        alert("No Player ID");
      }
    }
  };

  const handlePrevious = () => {
    if (playerId) {
      if (parseInt(playerId) < 1) {
        alert("You are at start of list");
      } else {
        navigate(`/player/${parseInt(playerId) - 1}`);
      }
    }
  };
  const handleNext = () => {
    if (playerId) {
      navigate(`/player/${parseInt(playerId) + 1}`);
    }
  };

  useEffect(() => {
    const run = async () => {
      if (playerId) {
        let constant: any = [];
        console.log("hey");
        await getDoc(doc(db, "players23-24", playerId))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.data());

              setUserData(snapshot.data());
            } else {
              console.log("error with snapshot");
            }
          })
          .then(() => {
            //get document url
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(userData);
      } else {
      }
    };
    run();
  }, [playerId]);

  return (
    <div className={styles.main}>
      <div className="">
        <h3>Player Details</h3>
      </div>
      <div className={styles.section}>
        <div className={styles.j}>
          <h2>Bid Placed</h2>{" "}
          {userData?.bidPoints !== 0 && <h2>Sold To {userData?.houseName}</h2>}
          {userData?.bidPoints === 0 && <h2 style={{fontSize:"2.5rem"}}> {bid}</h2>}
          <div className={styles.j}>
            <button onClick={handleFiftyIncremental}>50</button>
            <button onClick={handleHundredIncremental}>150</button>
            <button onClick={handleTwoHunderdIncremental}>300</button>
            <button onClick={handleRefresh}>Reset</button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{}}>
            <div className={styles.j}>
              <h4>Name</h4> <p>{userData?.name}</p>
            </div>
            <div className={styles.j}>
              <h4>Enrollment Number</h4> <p>{userData?.enrollment_num}</p>
            </div>
            <div className={styles.j}>
              <h4>Course</h4> <p>{userData?.course}</p>
            </div>
            <div className={styles.j}>
              <h4>Year</h4> <p>{userData?.year}</p>
            </div>
            <div className={styles.j}>
              <h4>Score Out of 10</h4> <p>{userData?.score}</p>
            </div>
            <div className={styles.j}>
              <h4>Sports Played</h4> <p>{userData?.sportsPlayed}</p>
            </div>
            <div className={styles.j}>
          <h4>Comments</h4>
          <input
            type="text"
            id="email"
            className="form__input"
            required
            onChange={(e: React.ChangeEvent<any>) => {
              setComment(e.target.value);
            }}
          ></input>
        </div>
          </div>
          <div className={styles.j}>
            <img
              src={`${photos}`}
              alt="no photo found"
              width={250}
              style={{maxHeight:"350px"}}
            />
          </div>
        </div>

        {/* <div className={styles.j}>
          <button onClick={handleFiftyIncremental}>50</button>
          <button onClick={handleHundredIncremental}>150</button>
          <button onClick={handleTwoHunderdIncremental}>300</button>
          <button onClick={handleRefresh}>Reset</button>
        </div> */}
      </div>

      <div className={styles.section}>
        {userData?.houseName === "" && (
          <div className={styles.j}>
            <button 
              onClick={() => {
                handleHouse("Heroic Hearts");
              }}
              style={{height:"100px"}}
            >
              <img src={HH} alt="" height={"100px"} />
              Heroic Hearts
            </button>
            <button
              onClick={() => {
                handleHouse("Super Spades");
              }}
              style={{height:"100px"}}
            >
              <img src={SS} alt="" height={"100px"} />
              Super Spades
            </button>
            <button
              
              onClick={() => {
                handleHouse("Mighty Boltz");
              }}
              style={{height:"100px"}}
            >
              <img src={MB} alt="" height={"100px"} />
              Mighty Boltz
            </button>
            <button
              onClick={() => {
                handleHouse("Keen Kickers");
              }}
              style={{height:"100px"}}
            >
              <img src={KK} alt="" height={"100px"} />
              Keen Kickers
            </button>
          </div>
        )}
        {/* <div className={styles.j}>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div> */}
      </div>
    </div>
  );
};

export default Approval;
