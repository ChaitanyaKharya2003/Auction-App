import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./screens/AdminLogin/AdminLogin";
import CreatorApproval from "./screens/CreatorApproval/CreatorApproval";
import NftTransaction from "./screens/Home/Home";

function App() {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(UserDataAction.login(user));
  //     } else {
  //       dispatch(UserDataAction.logout());
  //     }
  //   });
  // }, [auth, dispatch]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<NftTransaction />} />
            {/* <Route path="/creator" element={<Creators />} />
            <Route path="/help" element={<Help_support />} />
            <Route path="/nftapproval/:requestId" element={<ApprovalNft />} /> */}
            <Route path="/player/:playerId" element={<CreatorApproval />} />
            {/* <Route
              path="/collectionApproval/:requestId"
              element={<CollectionApp />}
            /> */}
            {/* <Route path="/" element={<AdminLogin />} /> */}
            {/* <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
