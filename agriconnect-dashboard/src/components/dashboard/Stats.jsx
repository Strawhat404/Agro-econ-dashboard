// src/components/dashboard/Stats.jsx
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const stats = [
  {
    name: 'Total Products',
    value: '2,340',
    change: '+12%',
    changeType: 'increase',
  },
  {
    name: 'Active Orders',
    value: '148',
    change: '+8%',
    changeType: 'increase',
  },
  {
    name: 'Total Revenue',
    value: '$45,340',
    change: '+23.1%',
    changeType: 'increase',
  },
  {
    name: 'Active Users',
    value: '1,280',
    change: '-2%',
    changeType: 'decrease',
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-green-500 p-3">
              {/* Add appropriate icon here */}
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {item.name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {item.changeType === 'increase' ? (
                <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" />
              ) : (
                <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" />
              )}
              <span className="ml-1">{item.change}</span>
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}