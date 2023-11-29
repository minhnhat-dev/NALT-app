'use client'
import Style from "./test.module.css";
import StatisticalTables from "@/components/Statistics/StatisticalTables/StatisticalTables";
function testPage() {
  return <div className={Style.wrapped}>
    <StatisticalTables/>
  </div>
}

export default testPage;
