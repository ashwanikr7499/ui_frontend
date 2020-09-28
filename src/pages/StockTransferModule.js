import React from "react";
import StockCounterTable from "../core/StockCounterTable";
import MainCounterTable from "../core/MainCounterTable";
export default function StockTransferModule(props) {
  return (
    <div>
      This is StockTransferModule
      <h2>Stock Counter</h2>
      <StockCounterTable />
      <h2>Main Counter</h2>
      <MainCounterTable />
    </div>
  );
}
