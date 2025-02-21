import "@/styles/globals.css";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    d3.csv("/tips.csv")
      .then(parsedData => {
        setData(parsedData);
      })
  }, []);

  return(
    <div className="page">
      <div className="chart">
        <Child1 data={data} />     
      </div>
      <div className="chart">
        <Child2 data={data} />     
      </div>
    </div>
  );
}
