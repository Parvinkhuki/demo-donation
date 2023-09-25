
import { PieChart, Pie, XAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statices = ({displayDonatitons}) => {
    const data = [
        { name: 'donation List', value: 400 },
        { name: 'donated', value: `${displayDonatitons}` }]
    return (
        <div className='w-[50%]'>
              
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="red"
            label
           
          />
         
          <Tooltip />
        </PieChart>
     
  

        </div>
    );
};

export default Statices;