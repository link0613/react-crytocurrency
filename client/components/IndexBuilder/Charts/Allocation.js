import React from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const data = [{name: "BITCOIN", value: 400}, {name: "CARDANO", value: 300},
              {name: "DASH", value: 690}, {name: 'EOS', value: 200},
              {name: 'ETHEREUM', value: 350}, {name: 'ETHEREUM CLASSIC', value: 200},
              {name: 'LITECOIN', value: 100}, {name: 'NEO', value: 130},
              {name: 'QTUM', value: 280}, {name: 'STELLAR', value: 80}];
        
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#ffaa40"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      {/*<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>*/}
    </g>
  );
};

class Allocation extends React.Component {
	constructor(props) {
		super(props)
		this.state = { activeIndex: 0 }
		this.onPieEnter = this.onPieEnter.bind(this)
	}

	onPieEnter(data, index) {
		this.setState({
		activeIndex: index,
		})
	}
	render () {
		return (
      <div className="chart-box">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart >
			        <Pie
						activeIndex={this.state.activeIndex}
						activeShape={renderActiveShape}
						data={data}
						cx="50%"
						cy="50%"
						innerRadius="50%"
						outerRadius="70%"
						fill="#8884d8"
						onMouseEnter={this.onPieEnter}
			        />
				</PieChart>
			</ResponsiveContainer>
      </div>
	    )
	}
}

export default Allocation
