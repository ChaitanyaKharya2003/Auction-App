import React from "react";
import Approval from "../../components/Approval/CreatorApproval";
import Header from "../../components/Header/Header";

const CreatorApproval = () => {
  const handleDownload = () => {
    console.log("Download");
  };
  return (
    <div>
      <Header />
      <Approval />
    </div>
  );
};

export default CreatorApproval;
