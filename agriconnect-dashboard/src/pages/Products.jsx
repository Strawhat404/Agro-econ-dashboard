import {useState} from 'react';
import {PlusIcon} from '@heroicons/react/24/outline';

export default function Products(){
    const [products, setProducts] = useState([
        {
            id:1,
            name:'Organic Tomatores',
            category:'Vegetables',
            price:2.99,
            stock:150,
            unit:'Kg',
            farmer:"Alemayehu Feyisa",
            status:'In Stock'
        },
        {
            id:2,
            name:'Organic Carrot',
            category:'Vegetables',
            price:2.99,
            stock:150,
            unit:'Kg',
            farmer:"Abebe Belachew",
            status:'In Stock'
        }

    ]);
    return(
        <div className="space-y-6">
            <div className="felx justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        
            <button className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700'>
                <PlusIcon className='h-5 w-5 mr-2' />
                Add Product
            </button>
        </div>

           {/* Product Filters*/}
            <div className='bg-white p-4 rounded-lg shadow'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Search products..." className="border rounded-md px-4 py-2"/>
                    <select className='border rounded-md px-4 py-2'>
                        <option>All Categories</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Grains</option>
                    </select>

                    <select className='border rounded-md px-4 py-2'>
                        <option>All Status</option>
                        <option>In Stock</option>
                        <option>Low Stock</option>
                        <option>All Status</option>

                    </select>
                    <select className='border rounded-md px-4 py-2'>
                        <option>Sort By</option>
                        <option>Price:Low to High</option>
                        <option>Price:High to Low</option>
                        <option>A to Z</option>
                    </select>
                    
                </div>
            </div>

            {/* Product Table */}
            <div className='bg-white shadow rounded-lg overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Product
                            
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Category
                            
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Price
                            
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                               Stock
                            
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Status
                            
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Actions
                            
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center'>
                                        <div className='h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center'>
                                        🌾
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {product.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {product.farmer}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {product.category}
        
                                    </span>

                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-500'>per {product.unit}</div>

                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    {product.stock} {product.unit}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-greeen-100 text-green-800'>
                                        {product.status}
                                    </span>
                                
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                    <button className='text-indigo-600 hover:text-indigo-900 mr-3'>
                                        Edit
                                    </button>
                                    <button className='text-red-600 hover:text-red-900'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
                <div className='flex-1 flex justify-between sm:hidden'>
                    <button className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
                        Previous
                    </button>
                </div>
            </div>
            
        </div>
    )
}