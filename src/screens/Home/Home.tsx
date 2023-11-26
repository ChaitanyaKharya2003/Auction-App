import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
  getDocs,
  collection,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import TransactionHistory from "../../components/NftTransaction/TransactionHistory/TransactionHistory";
import styles from "./NftTransaction.module.css";
import { db } from "../../firebaseConfig";
import bglogo from "./img/logo.png";
import KK from "./img/KK.png";
import MB from "./img/MB.png";
import HH from "./img/HH.png";
import SS from "./img/SS.png";


const NftTransaction = () => {
  const queryMighty = query(
    collection(db, "players23-24"),
    where("houseName", "==", "Mighty Boltz")
  );
  const queryHeroic = query(
    collection(db, "players23-24"),
    where("houseName", "==", "Heroic Hearts")
  );
  const queryKeen = query(
    collection(db, "players23-24"),
    where("houseName", "==", "Keen Kickers")
  );
  const querySpades = query(
    collection(db, "players23-24"),
    where("houseName", "==", "Super Spades")
  );
  const [players, setPlayers] = useState<any>([]);
  const handleMighty = async () => {
    console.log("Download Mighty");
    await getMighty();
  };
  const handleKeen = async () => {
    console.log("Download Keen");
    await getKeen();
  };
  const handleHeroic = async () => {
    console.log("Download Heroic");
    await getHeroic();
  };
  const handleSpades = async () => {
    console.log("Download Spades");
    await getSpades();
  };

  function exportToCsv(filename: string, rows: Array<Array<string>>) {
    const processRow = function (row: Array<string>) {
      let finalVal = "";
      for (let j = 0; j < row.length; j++) {
        let innerValue =
          row[j] === null || row[j] === undefined ? "" : row[j].toString();
        if ((row[j] as any) instanceof Date) {
          innerValue = row[j].toLocaleString();
        }
        let result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
        if (j > 0) finalVal += ",";
        finalVal += result;
      }
      return finalVal + "\n";
    };

    let csvFile = "";
    for (let i = 0; i < rows.length; i++) {
      csvFile += processRow(rows[i]);
    }

    const blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
    // if (navigator?.msSaveBlob) {
    // 	// IE 10+
    // 	navigator?.msSaveBlob(blob, filename)
    // } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  const getSpades = async () => {
    const pdata: any[] = [];
    await getDocs(querySpades)
      .then((snapshot) => {
        snapshot.forEach((pData) => {
          if (pData) {
            pdata.push(pData.data());
          }
        });
        console.log(pdata);
        setPlayers(pdata);
      })
      .catch((err) => {
        console.log(err);
      });

    const headers = [
      "name",
      "enrollment_num",
      "sportsPlayed",
      "bidPoints",
      "houseName",
      "course",
      "year",
      "comments",
    ];

    const csv_values = pdata.map((elem) => {
      const row: any = [];
      headers.forEach((header) => {
        row.push((elem as any)?.[header] ?? undefined);
      });
      return row;
    });
    const arr = [headers, ...csv_values];
    exportToCsv(`playerList_Spades`, arr);
  };
  const getKeen = async () => {
    const pdata: any[] = [];
    await getDocs(queryKeen)
      .then((snapshot) => {
        snapshot.forEach((pData) => {
          if (pData) {
            pdata.push(pData.data());
          }
        });
        console.log(pdata);
        setPlayers(pdata);
      })
      .catch((err) => {
        console.log(err);
      });

    const headers = [
      "name",
      "sportsPlayed",
      "enrollment_num",
      "bidPoints",
      "houseName",
      "course",
      "year",
      "comments",
    ];

    const csv_values = pdata.map((elem) => {
      const row: any = [];
      headers.forEach((header) => {
        row.push((elem as any)?.[header] ?? undefined);
      });
      return row;
    });
    const arr = [headers, ...csv_values];
    exportToCsv(`playerList_Keen`, arr);
  };
  const getHeroic = async () => {
    const pdata: any[] = [];
    await getDocs(queryHeroic)
      .then((snapshot) => {
        snapshot.forEach((pData) => {
          if (pData) {
            pdata.push(pData.data());
          }
        });
        console.log(pdata);
        setPlayers(pdata);
      })
      .catch((err) => {
        console.log(err);
      });

    const headers = [
      "name",
      "sportsPlayed",
      "enrollment_num",
      "bidPoints",
      "houseName",
      "course",
      "year",
      "comments",
    ];

    const csv_values = pdata.map((elem) => {
      const row: any = [];
      headers.forEach((header) => {
        row.push((elem as any)?.[header] ?? undefined);
      });
      return row;
    });
    const arr = [headers, ...csv_values];
    exportToCsv(`playerList_Heroic`, arr);
  };

  const getMighty = async () => {
    const pdata: any[] = [];
    await getDocs(queryMighty)
      .then((snapshot) => {
        snapshot.forEach((pData) => {
          if (pData) {
            pdata.push(pData.data());
          }
        });
        console.log(pdata);
        setPlayers(pdata);
      })
      .catch((err) => {
        console.log(err);
      });

    const headers = [
      "name",
      "sportsPlayed",
      "enrollment_num",
      "bidPoints",
      "houseName",
      "course",
      "year",
      "comments",
    ];

    const csv_values = pdata.map((elem) => {
      const row: any = [];
      headers.forEach((header) => {
        row.push((elem as any)?.[header] ?? undefined);
      });
      return row;
    });
    const arr = [headers, ...csv_values];
    exportToCsv(`playerList_Mighty`, arr);
  };

  return (
    <>
      <Header />
      <div className="center" style={{ position: 'relative'}}>
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bglogo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex:-1,
            minHeight: '100vh',
          }}
        ></div>

        <div className="wrapper">
          <br />
          <TransactionHistory />
          <br />
          <div
            className={styles.j}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="row"
              style={{ margin: "50px", height:"150px"}}
              onClick={handleMighty}
            > 
              <img src={MB} alt="Mighty Boltz" style={{height:"150px"}}/>
            </button>
            <button
              className="row"
              style={{ margin: "50px" , height:"150px"}}
              onClick={handleKeen}
            >
              <img src={KK} alt="Keen Kickers" style={{height:"150px"}}/>
            </button>
            <button
              className="row"
              style={{ margin: "50px", height:"150px" }}
              onClick={handleSpades}
            >
              <img src={SS} alt="Super Spades" style={{height:"150px"}}/>
            </button>
            <button
              className="row"
              style={{ margin: "50px", height:"150px" }}
              onClick={handleHeroic}
            >
              <img src={HH} alt="Heroic Hearts" style={{height:"150px"}}/>
            </button>
          </div>
          <br />
          <br />
          <div className={styles.j}></div>
          <br />
          <br />
          <div className={styles.j}></div>
          <br />
          <br />
          <div className={styles.j}></div>
        </div>
      </div>
    </>
  );
};

export default NftTransaction;
