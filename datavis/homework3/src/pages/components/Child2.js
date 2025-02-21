import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Child2({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const days = ["Sun", "Sat", "Thur", "Fri"];
    const filteredData = data.filter(d => days.includes(d.day));
    const avgTips = d3.rollup(
      filteredData,
      v => d3.mean(v, d => +d.tip),
      d => d.day
    );

    const barData = days.map(day => ({
      day,
      avgTip: avgTips.get(day) || 0
    }));

    const width = 600;
    const height = 400;
    const margin = { top: 50, right: 50, bottom: 60, left: 60 };

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f9f9f9")
      .style("border", "1px solid #ddd");

    const xScale = d3
      .scaleBand()
      .domain(barData.map(d => d.day))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(barData, d => d.avgTip) || 10]) // Fallback max
      .range([height - margin.bottom, margin.top]);

    svg
      .append("text")
      .attr("x", width / 2 - 50)
      .attr("y", margin.top-20)
      .attr("class", "chart-title")
      .style("font-size", "20px")
      .text("Average Tip by Day");

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .append("text")
      .attr("x", width / 2)
      .attr("y", 35)
      .attr("fill", "black")
      .style("text-anchor", "middle")
      .style("font-size", "15px")
      .text("Day");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis)
      .append("text")
      .attr("x", -height / 2)
      .attr("y", -35)
      .attr("fill", "black")
      .style("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .style("font-size", "15px")
      .text("Average Tip");

    svg
      .selectAll("rect")
      .data(barData)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.day))
      .attr("y", d => yScale(d.avgTip))
      .attr("width", "100px")
      .attr("height", d => height - margin.bottom - yScale(d.avgTip))
      .attr("fill", "#69b3a2")
  }, [data]);

  return <svg ref={svgRef}></svg>;
}