import { Card } from "../features/card/Card";
import Grid from "../features/grid/Grid";
import Navbar from "../features/navbar/Navbar";
import GridUser from "../features/gridUser/GridUser";
import GridPriority from "../features/gridPriority/GridPriority";
import { useState } from "react";
import './Home.css'


export default function Home() {
  const [order,setOrder]=useState("priority");
  const [state,setState]=useState("status");
  console.log(state);
  return (
    <div className="main">
      <Navbar setState={setState} setOrder={setOrder}></Navbar>
      {state==='status' && <Grid order={order}></Grid>}
      {state==='user' && <GridUser order={order}></GridUser>}
      {state==='priority' && <GridPriority order={order}></GridPriority>}
      
    </div>
  );
}
