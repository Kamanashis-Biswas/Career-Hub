import React from "react";
//import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const assignmentsMarks = [
    {
      id: 1,
      name: "Assignment 1",
      marks: 60,
    },
    {
      id: 2,
      name: "Assignment 2",
      marks: 60,
    },
    {
      id: 3,
      name: "Assignment 3",
      marks: 59,
    },
    {
      id: 4,
      name: "Assignment 4",
      marks: 60,
    },
    {
      id: 5,
      name: "Assignment 5",
      marks: 44,
    },
    {
      id: 6,
      name: "Assignment 6",
      marks: 55,
    },
    {
      id: 7,
      name: "Assignment 7",
      marks: 60,
    },
    {
      id: 8,
      name: "Assignment 8",
      marks: 60,
    },
  ];
  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold mt-6 underline mb-6">
        Assignment Marks Diagram
      </h2>
      <div>
        <ComposedChart
          width={1000}
          height={400}
          data={assignmentsMarks}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line dataKey="marks" stroke="#ff7300"></Line>
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;
