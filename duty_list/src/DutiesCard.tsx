import React, { useState, useEffect } from 'react';

interface Duties{
    readonly id: number,
    name: string,
    desc: string
}

const DutiesCard = (props: {duty: Duties}) => {
    const [edit, setEdit]= useState(false);

    const updateDutyName = (event: any) => {
        props.duty.name = event.target.value;
    }

    const updateDutyDesc = (event: any) => {
        props.duty.desc = event.target.value;
    }

    return(
        <article className="dutyList">
            <p>ID: {props.duty.id}</p>
            {edit?
                (<>
                    <p>Name: <input placeholder={props.duty.name} onChange={updateDutyName}></input></p>
                    <p>Description: <input placeholder={props.duty.desc} onChange={updateDutyDesc}></input></p>
                    <button onClick={() => setEdit(false)}>Save</button>
                </>
                )
            :   (<>
                    <p>Name: {props.duty.name}</p>
                    <p>Description: {props.duty.desc}</p>
                    <button onClick={() => setEdit(true)}>Update</button>
                </>
                )
            }
        </article>
    )
}

export default DutiesCard;