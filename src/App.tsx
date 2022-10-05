import React from "react";
import s from "./app.module.css";
import Dropdown from "./components/dropDown/Dropdown";
import Chart from "./components/chart/Chart";

function App() {
    return (
        <div className={s.wrapper}>
            <Dropdown/>
            <Chart/>
        </div>
    );
}

export default App;
