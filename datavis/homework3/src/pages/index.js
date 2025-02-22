import * as d3 from "d3";
import { readFileSync } from "fs";
import { join } from "path";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

export async function getStaticProps() {
  const filePath = join(process.cwd(), "public", "tips.csv");
  const csvText = readFileSync(filePath, "utf-8");
  const csvData = await d3.csvParse(csvText);

  return {
    props: {
      data: csvData,
    },
  };
}

export default function Home({ data }) {
  return (
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