(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(t,a,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(7031)}])},7139:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>s});var r=e(4848),l=e(6540),n=e(7852);function s(t){let{data:a}=t,e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=n.Ltv(e.current).attr("width",600).attr("height",400).style("background","#f9f9f9").style("border","1px solid #ddd"),r=n.m4Y().domain([0,n.T9B(a,t=>+t.total_bill)]).range([60,550]),l=n.m4Y().domain([0,n.T9B(a,t=>+t.tip)]).range([340,50]);t.append("text").attr("x",250).attr("y",30).attr("class","chart-title").style("font-size","20px").text("Total Bill vs Tips");let s=n.l78(r),i=n.V4s(l);t.append("g").attr("transform","translate(0, ".concat(340,")")).call(s).append("text").attr("x",320).attr("y",50).attr("fill","black").style("text-anchor","middle").style("font-size","15px").text("Total Bill"),t.append("g").attr("transform","translate(".concat(60,", 0)")).call(i).append("text").attr("x",-200).attr("y",-35).attr("fill","black").style("text-anchor","middle").style("font-size","15px").attr("transform","rotate(-90)").text("Tip"),t.selectAll("circle").data(a).enter().append("circle").attr("cx",t=>r(+t.total_bill)).attr("cy",t=>l(+t.tip)).attr("r",4).attr("fill","#69b3a2")},[a]),(0,r.jsx)("svg",{ref:e})}},6966:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>s});var r=e(4848),l=e(6540),n=e(7852);function s(t){let{data:a}=t,e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!a||0===a.length)return;let t=["Sun","Sat","Thur","Fri"],r=a.filter(a=>t.includes(a.day)),l=n.zaV(r,t=>n.i2o(t,t=>+t.tip),t=>t.day),s=t.map(t=>({day:t,avgTip:l.get(t)||0})),i={top:50,right:50,bottom:60,left:60};n.Ltv(e.current).selectAll("*").remove();let d=n.Ltv(e.current).attr("width",600).attr("height",400).style("background","#f9f9f9").style("border","1px solid #ddd"),c=n.WH().domain(s.map(t=>t.day)).range([i.left,600-i.right]).padding(.1),o=n.m4Y().domain([0,n.T9B(s,t=>t.avgTip)||10]).range([400-i.bottom,i.top]);d.append("text").attr("x",250).attr("y",i.top-20).attr("class","chart-title").style("font-size","20px").text("Average Tip by Day");let p=n.l78(c),f=n.V4s(o);d.append("g").attr("transform","translate(0, ".concat(400-i.bottom,")")).call(p).append("text").attr("x",300).attr("y",35).attr("fill","black").style("text-anchor","middle").style("font-size","15px").text("Day"),d.append("g").attr("transform","translate(".concat(i.left,", 0)")).call(f).append("text").attr("x",-200).attr("y",-35).attr("fill","black").style("text-anchor","middle").attr("transform","rotate(-90)").style("font-size","15px").text("Average Tip"),d.selectAll("rect").data(s).enter().append("rect").attr("x",t=>c(t.day)).attr("y",t=>o(t.avgTip)).attr("width","100px").attr("height",t=>400-i.bottom-o(t.avgTip)).attr("fill","#69b3a2")},[a]),(0,r.jsx)("svg",{ref:e})}},7031:(t,a,e)=>{"use strict";e.r(a),e.d(a,{__N_SSG:()=>s,default:()=>i});var r=e(4848),l=e(7139),n=e(6966),s=!0;function i(t){let{data:a}=t;return(0,r.jsxs)("div",{className:"page",children:[(0,r.jsx)("div",{className:"chart",children:(0,r.jsx)(l.default,{data:a})}),(0,r.jsx)("div",{className:"chart",children:(0,r.jsx)(n.default,{data:a})})]})}}},t=>{var a=a=>t(t.s=a);t.O(0,[852,636,593,792],()=>a(7276)),_N_E=t.O()}]);