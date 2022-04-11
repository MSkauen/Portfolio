import React from "react";
import SPINNER from "../../shared/img/Spinner.svg"

export function LoadingView() {
  return <div>
    <img src={SPINNER} alt="React Logo" />
  </div>;
}
