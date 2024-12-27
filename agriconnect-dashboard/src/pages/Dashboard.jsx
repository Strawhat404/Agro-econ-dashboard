import Stats from '../components/dashboard/Stats';
import RecentOrders from '../components/dashboard/RecentOrders';
import WeatherWidget from '../components/dashboard/WeatherWidget';


export default function Dashboard(){
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <div className="flex space-x-3">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                        Add Product
                    </button>
                    <button className='inline-flex items-center px-4 py-2 border border-transparent tex-sm font-medium rounde-md shawod-sm text-white bg-glue-600 hover:bg-blue-700'>
                        View Reports
                    </button>
                </div>
            </div>

            <Stats/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentOrders />
                </div>
            </div>
            <WeatherWidget/>
        </div>
    )
}