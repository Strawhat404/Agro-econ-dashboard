import React from 'react'
import {useState} from 'react';
import {format } from 'date-fns';


export default function RecentOrders(){
  const [orders] = useState([
    {
    id:1,
    product:'Organic Tomatoes',
    customer:'Behailu ',
    status:'Processing',
    total:'Etb 234,00',
    date:new Date(),

  },
  {
    id:1,
    product:'Barley',
    customer:'BlackPurpose ',
    status:'Processing',
    total:'Etb 50,000',
    date:new Date(),

  },
])
return (
  <div className="bg-white shadow rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Recent Orders
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-fill divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>

          </tr>

        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #{order.id}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {order.product}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {order.customer}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounder-full bg-yellow-100 text-yellow-800">
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(order.date,'MM dd,yyy')}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

}
  

