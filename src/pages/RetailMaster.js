import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const RetailMaster = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [salesData, setSalesData] = useState([]);

  const rawSalesData = {
    success: true,
    message: "SALES_METRICS_FETCHED",
    data: [
      { datePart: "2025-07-04", orderCount: 8, totalOrderAmount: "2898.38" },
      { datePart: "2025-07-03", orderCount: 24, totalOrderAmount: "6910.05" },
      { datePart: "2025-07-02", orderCount: 37, totalOrderAmount: "8595.93" },
      { datePart: "2025-07-01", orderCount: 70, totalOrderAmount: "32199.13" },
      { datePart: "2025-06-30", orderCount: 60, totalOrderAmount: "18968.29" },
      { datePart: "2025-06-29", orderCount: 32, totalOrderAmount: "15067.59" },
      { datePart: "2025-06-28", orderCount: 45, totalOrderAmount: "15481.21" },
      { datePart: "2025-06-27", orderCount: 29, totalOrderAmount: "11717.31" },
      { datePart: "2025-06-26", orderCount: 53, totalOrderAmount: "10589.04" },
      { datePart: "2025-06-25", orderCount: 33, totalOrderAmount: "13982" },
      { datePart: "2025-06-24", orderCount: 88, totalOrderAmount: "14824.83" },
      { datePart: "2025-06-23", orderCount: 66, totalOrderAmount: "10613.91" },
      { datePart: "2025-06-22", orderCount: 87, totalOrderAmount: "17834.89" },
      { datePart: "2025-06-21", orderCount: 81, totalOrderAmount: "15525" },
      { datePart: "2025-06-20", orderCount: 83, totalOrderAmount: "27419.12" },
      { datePart: "2025-06-19", orderCount: 26, totalOrderAmount: "11861.62" },
      { datePart: "2025-06-18", orderCount: 38, totalOrderAmount: "10424.04" },
      { datePart: "2025-06-17", orderCount: 48, totalOrderAmount: "24204.14" },
      { datePart: "2025-06-16", orderCount: 39, totalOrderAmount: "11834.13" },
      { datePart: "2025-06-15", orderCount: 29, totalOrderAmount: "14770.33" }
    ]
  };

  useEffect(() => {
    const parsedData = rawSalesData.data.map(item => ({
      ...item,
      totalOrderAmount: parseFloat(item.totalOrderAmount)
    }));
    setSalesData(parsedData);
  }, [timeframe]);

  const totalOrders = salesData.reduce((sum, item) => sum + item.orderCount, 0);
  const totalAmount = salesData.reduce((sum, item) => sum + item.totalOrderAmount, 0).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-blue-100 to-white min-h-screen p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Retail Master Dashboard</h2>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="border px-4 py-2 rounded-md shadow"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Total Orders" value={totalOrders} />
        <MetricCard title="Total Order Amount" value={`₹ ${totalAmount}`} />
        <MetricCard title="Pending Orders" value={5} />
        <MetricCard title="Confirmed by Retailer" value={6} />
        <MetricCard title="Out for Delivery" value={4} />
        <MetricCard title="Delivered Orders" value={21} />
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Order Amount vs Date">
          <LineChart data={salesData} margin={{ top: 20, right: 30, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datePart" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#ffffffdd', borderRadius: 10, border: '1px solid #ccc' }}
              labelStyle={{ fontWeight: 'bold', color: '#555' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalOrderAmount"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: '#3b82f6', stroke: '#fff' }}
              activeDot={{ r: 6 }}
              fill="url(#colorAmount)"
              isAnimationActive={true}
            />
          </LineChart>
        </ChartCard>

        <ChartCard title="Order Count vs Date">
          <BarChart data={salesData} margin={{ top: 20, right: 30, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datePart" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#ffffffdd', borderRadius: 10, border: '1px solid #ccc' }}
              labelStyle={{ fontWeight: 'bold', color: '#555' }}
            />
            <Legend />
            <Bar
              dataKey="orderCount"
              fill="url(#colorCount)"
              radius={[6, 6, 0, 0]}
              barSize={30}
              isAnimationActive={true}
            />
          </BarChart>
        </ChartCard>
      </div>
    </motion.div>
  );
};

const MetricCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 transition hover:scale-[1.02]">
    <h4 className="text-sm text-gray-500">{title}</h4>
    <p className="text-xl font-semibold mt-1 text-gray-800">{value}</p>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white shadow rounded-lg p-4 min-h-[350px] transition hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  </div>
);

export default RetailMaster;
