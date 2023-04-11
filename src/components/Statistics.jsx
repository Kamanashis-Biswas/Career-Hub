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
  Pie,
  PieChart,
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
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="marks"
            isAnimationActive={true}
            data={assignmentsMarks}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
