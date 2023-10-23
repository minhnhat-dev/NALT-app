"use client";
import UpcomingSpent from "@/components/Statistics/UpcomingSpent/UpcomingSpent";

const PageTest = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        minHeight: "450px",
        alignItems: "center",
      }}
    >
      <UpcomingSpent/>
    </div>
  );
};
export default PageTest;
