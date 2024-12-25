import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import RequireAuth from './components/auth/RequireAuth';
import {DashboardProvider} from './context/DashboardContext';

import{Login,Dashboard,Products,Orders,Users,Weather,News,Logistics,Settings,Profile,AddProduct,ProductDetails,OrderDetails,UserManagement,Analytics} from './pages';

export default function App(){
  return(
    <BrowserRouter>
      <DashboardProvider>
        <Routes>
          {/* public route */}
          <Route path="/login" element={<login/>} />

          {/* protected route */}
          <Route element={<RequireAuth><DashboardLayout/></RequireAuth>}>
          <Route path="/" element={<Dashboard />} />
          
          {/* Products route */}
          <Route path="/products" element={<Products />} />
          <Route path = "/products/add" element={<AddProduct />} />  
          <Route path = "/products/:id" element= {<ProductDetails/>}/>

          {/* Orders Route    */}
          <Route path="/orders" element={<Orders/>} />
          <Route path = "/orders/:id" element ={<OrderDetails />}/>

          {/* users route */}
          <Route path="/users" element={<Users/>} />
          <Route path="/users/management" element={<UserManagement/>} />

          {/* other routes */}
          <Route path="/weather" element={<Weather/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/logistics" element={<Logistics/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>

        {/* Catch all route */}
        <Route path="*" element = {<Navigate to="/" replace />} />
      </Route>
      </DashboardProvider>
    </BrowserRouter>

  )

}
