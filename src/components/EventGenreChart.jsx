import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const EventGenreChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA47BC'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
   const RADIAN = Math.PI / 180;
   const radius = outerRadius;
   const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.12;
   const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.12;
   return percent ? (
     <text
       x={x}
       y={y}
       fill={COLORS[index % COLORS.length]}
       textAnchor={x > cx ? 'start' : 'end'}
       dominantBaseline="central"
     >
       {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
     </text>
   ) : null;
 };

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      }
    })
    return data;
  }
  
  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150} 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenreChart;