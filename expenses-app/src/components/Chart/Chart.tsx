import React from 'react';
import ChartBar, { DataPoint } from './ChartBar';
import './Chart.css';

interface Props {
  dataPoints: DataPoint[];
}

const Chart: React.FC<Props> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dp) => dp.Value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar maxValue={maxValue} dataPoint={dataPoint} />
      ))}
    </div>
  );
};

export default Chart;
