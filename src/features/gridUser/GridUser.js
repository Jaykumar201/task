import React, { useEffect, useState } from "react";
import "./GridUser.css";
import CardUser from "../cardUser/CardUser";
import Headername from "../header/Headername";

const Grid = ({order}) => {
    const [data, setData] = useState([]);
    const reduce = (title) => {
        let s = "";
        if (title.length > 30) {
            s = title.slice(0, 30);
            s += "...";
        }
        else {
            s = title;
        }
        return s;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const items = data?.tickets;
    const names = data?.users;
    const dictionary = new Map();
    names?.forEach((name) => {
        dictionary.set(name?.id, name?.name);
    });

    // console.log(dictionary);
    const dictionary1 = new Map();
    names?.forEach((name) => {
        dictionary1.set(name?.id, name?.available);
    });
    const uniqueStatusValues = [...new Set(items?.map(ticket => ticket.userId))];

   


    const values=(status)=>{
        const filteredData = items && items.filter(item => item.userId === status);
        if(order==='priority'){
            const filteredData1=filteredData && filteredData.sort((a, b) => b.priority - a.priority);
            return filteredData1;
            }
            else{
                const filteredData1 =filteredData &&  filteredData.sort((a, b) => a.title.localeCompare(b.title));
                return filteredData1;
            }
    }
    return(
        <div className="grid-container" style={{ gridTemplateColumns: `repeat(${uniqueStatusValues.length}, 1fr)`}}>
            {uniqueStatusValues?.map((category)=>(
                <div className="grid-item">
                <Headername text={dictionary.get(category)} length={values(category)?.length}></Headername>
                {values(category)?.map((item) => (
                    <CardUser id={item.id} title={reduce(item.title)} tag={item.tag} status={item.status} />
                ))}
            </div>
            ))}
        </div>
    );
}

export default Grid;



