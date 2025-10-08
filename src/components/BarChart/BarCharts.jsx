import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({singleData}) => {
  const obj =singleData.ratings
 
 
    return (
      <>
      <h3 className='py-2.5 mt-8 text-[#001931] font-semibold text-2xl'>Ratings</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={obj}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={70} />
          <Tooltip />
          <Bar dataKey="count" fill="orange" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
      </> 
  );
};

export default BarCharts;