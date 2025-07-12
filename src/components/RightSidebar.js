import {
  FaBox, FaMotorcycle, FaTags, FaAndroid, FaWarehouse
} from 'react-icons/fa';

const RightSidebar = () => {
  const items = [
    { icon: <FaBox />, label: 'Category' },
    { icon: <FaMotorcycle />, label: 'Delivery Boys' },
    { icon: <FaTags />, label: 'Coupons' },
    { icon: <FaAndroid />, label: 'Delivery Boy APK' },
    { icon: <FaWarehouse />, label: 'Warehouse Orders' },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4 fixed right-0 top-0 h-full hidden md:block z-40">
      <h2 className="text-xl font-bold text-blue-700 mb-6">Retail Options</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer transition"
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
