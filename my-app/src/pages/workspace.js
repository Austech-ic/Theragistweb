import React, { useState, useEffect } from 'react';
import Loading from '@/Components/Loading/loading'
import Workspace from '../Components/WorkspaceComp/workspacecomp'

const Page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an asynchronous operation (e.g., fetching data)
      const fetchData = async () => {
        // Your async logic here
        // For example, you can use setTimeout to simulate loading for 2 seconds
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      };
  
      // Call the fetchData function
      fetchData();
    }, []);
    
  return (
    <div >
    {loading ? (
      <Loading />
    ) : (
      <div>
       <Workspace />
      </div>
    )}
  </div>
  )
}

export default Page