import React from "react";
import StockCounterTable from "../core/StockCounterTable";
export default function CounterModule(props) {
  return (
    <div>
      <div class="buttons">
        <a href="#" class="btn btn-outline-primary">
          Available Medicine Issue
        </a>
        <a href="#" class="btn btn-outline-primary">
          Due Medicine Issue
        </a>
        <a href="#" class="btn btn-outline-primary">
          Medicine Return
        </a>
        <a href="#" class="btn btn-outline-primary">
          Update Batch Number
        </a>
      </div>
      <StockCounterTable />
    </div>
  );
}
