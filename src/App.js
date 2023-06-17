import React from "react"
import { Header } from "./component/Header";
import { AllRoutes } from "./component/AllRoutes";


function App() {
  return (
   
      <div className="flex flex-col h-full">
          <Header/>
          <AllRoutes/>
    </div>
  
  );
}

export default App;
