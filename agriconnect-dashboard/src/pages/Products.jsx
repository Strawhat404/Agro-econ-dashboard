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
                    </select>
                    
                </div>
            </div>
            
        </div>
    )
}