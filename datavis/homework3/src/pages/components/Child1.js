import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Child1({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 600;
    const height = 400;
    const margin = { top: 50, right: 50, bottom: 60, left: 60 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f9f9f9")
      .style("border", "1px solid #ddd");

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => +d.total_bill)])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => +d.tip)])
      .range([height - margin.bottom, margin.top]);

    svg
        .append("text")
        .attr("x", width / 2 - 50)
        .attr("y", margin.top-20)
        .attr("class", "chart-title")
        .style("font-size", "20px")
        .text("Total Bill vs Tips");

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .append("text")
      .attr("x", width / 2 +20)
      .attr("y", 50)
      .attr("fill", "black")
      .style("text-anchor", "middle")
      .style("font-size", "15px")
      .text("Total Bill");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis)
      .append("text")
      .attr("x", -height / 2)
      .attr("y", -35)
      .attr("fill", "black")
      .style("text-anchor", "middle")
      .style("font-size", "15px")
      .attr("transform", "rotate(-90)")
      .text("Tip");

    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(+d.total_bill))
      .attr("cy", (d) => yScale(+d.tip))
      .attr("r", 4)
      .attr("fill", "#69b3a2")
  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
}