import React from 'react';
import './ChartBar.css';

export interface DataPoint {
  Key: string;
  Label: string;
  Value: number;
}

interface Props {
  maxValue: number;
  dataPoint: DataPoint;
}

const ChartBar: React.FC<Props> = ({ dataPoint, maxValue }) => {
  let barFillHeight = '0%';

  if (maxValue && maxValue > 0) {
    barFillHeight = Math.round((dataPoint.Value / maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{dataPoint.Label}</div>
    </div>
  );
};

export default ChartBar;
