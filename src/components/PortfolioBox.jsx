// PortfolioBox.jsx
import React from 'react';

const PortfolioBox = () => (
  <div className="bg-[#18181b] rounded-xl shadow-lg p-6 md:p-8 max-w-md mx-auto text-gray-100 font-mono border border-[#27272a]" style={{ fontFamily: 'Fira Mono, monospace' }}>
    <div className="flex items-center mb-4">
      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      <span className="ml-auto text-xs text-gray-400">Portfolio.ts</span>
    </div>
    <pre className="text-sm leading-6">
      <span className="text-gray-400 select-none">01 </span><span className="text-pink-400">const</span> <span className="text-white">developer</span> <span className="text-gray-400">=</span> <span className="text-gray-400">&#123;</span>{"\n"}
      <span className="text-gray-400 select-none">02 </span>  <span className="text-white">name</span>: <span className="text-yellow-300">'Vaishali V'</span>,{"\n"}
      <span className="text-gray-400 select-none">03 </span>  <span className="text-white">focus</span>: <span className="text-yellow-300">'Data Engineering & Data Science'</span>,{"\n"}
      <span className="text-gray-400 select-none">04 </span>  <span className="text-white">skills</span>: <span className="text-pink-400">[</span><span className="text-yellow-300">'Python'</span>, <span className="text-yellow-300">'SQL'</span>, <span className="text-yellow-300">'ML'</span><span className="text-pink-400">]</span>,{"\n"}
      <span className="text-gray-400 select-none">05 </span>  <span className="text-white">passionate</span>: <span className="text-blue-400">true</span>,{"\n"}
      <span className="text-gray-400 select-none">06 </span>  <span className="text-white">motto</span>: <span className="text-yellow-300">"Transform Data into Impact"</span>{"\n"}
      <span className="text-gray-400 select-none">07 </span><span className="text-gray-400">&#125;</span>;<br />
      <span className="text-gray-400 select-none">08 </span><span className="text-white">developer</span>.<span className="text-red-400">showcase</span>();
    </pre>
  </div>
);

export default PortfolioBox;
