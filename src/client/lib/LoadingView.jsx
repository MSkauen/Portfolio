import React from "react";
import Spinner from "../../shared/img/Spinner.svg"

export function LoadingView () {
    return (
        <div>
            <img src={Spinner} alt="React Logo" />
        </div>
    );
}
