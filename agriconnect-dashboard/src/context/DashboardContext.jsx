import {createContext,useContext,useState} from 'react';

const DashboardContext = createContext();
export function DashboardProvide({children}){
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const value = {
        sidebarOpen,
        setSidebarOpen,
    };

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )

}

export function Dashboard(){
    const context = useContext(DashboardContext);
    if (context === undefined){
        throw new Error('useDashboard must be used within a Dashboard');
    }
    return context;
}