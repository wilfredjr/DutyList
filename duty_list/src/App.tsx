
import React, { useState, useEffect } from 'react';
// ded8f8d4
// http://www.omdbapi.com/?i=tt3896198&apikey=ded8f8d4
import './App.css';
import DutiesCard from './DutiesCard';

interface Duties{
    readonly id: number
    name: string
    desc: string
}

const App = () => {

    let duties: Duties[] = [
    
    
        {id: 1, name: "Employee Login", desc: "Employee login for the day"},
        {id: 2, name: "Check emails", desc: "Check emails for the day"},
    ]

    const [dutyList, setDutyList] = useState(duties);
    const [dutyName, setDutyName] = useState("");
    const [dutyDesc, setDutyDesc] = useState("");

    useEffect(() => {
        setDutyList(dutyList);
    }, [dutyList]);

    const displayValue = () => {
        console.log(dutyList);
    }

    const submit = () => {
        let newDuty: Duties = {
            id: dutyList.length + 1,
            name: dutyName,
            desc: dutyDesc
        }
        dutyList.push(newDuty)
        setDutyList(dutyList)
        setDutyName("")
        setDutyDesc("")
        displayValue();
    }

    const handleDelete = (val: Duties) =>{
        const newDuties = dutyList.filter((selected: any) => selected !== val)
        setDutyList(newDuties)
    }

    return(
        <main className="App">
            <section className="App-header">
                <h1 >List of duties</h1>
            </section>
            <section className="AppList">
                <article className="dutyList">
                    {dutyList.map((duty) => (
                        <>
                        <DutiesCard duty={duty}></DutiesCard>
                        <button onClick={() => handleDelete(duty)}>Delete</button>
                        </>
                    ))}
                    </article>
                </section>
            <section>
                <article className="dutyList">
                    <p>ID: {dutyList.length + 1}</p>
                    <p>Name: <input placeholder="Enter Name" value={dutyName} onChange={e => setDutyName(e.target.value)}></input></p>
                    <p>Description: <input placeholder="Enter Description" value={dutyDesc} onChange={e => setDutyDesc(e.target.value)}></input></p>
                    <button onClick={submit}>Add</button>
                </article>
            </section>
            {/* <section>
            <button onClick={displayValue}>Check</button>
            </section> */}
        </main>
    );
}

export default App;