import React, { useReducer, useRef } from 'react';

const initialState = {
    patient : []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT' :
            const newPatients = {
                id : action.id,
                name : action.name
            }
            const allPatients = [...state.patient, newPatients]

            return {patient: allPatients};
        case 'REMOVE_PATIENT' :
            const remaining = state.patient.filter(pt => pt.id !== action.id)
            
            return {patient: remaining}
            default :
            return state
    }
}
const ReducerPatientCount = () => {
    const userRef = useRef()
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = event => {
       dispatch({
           type: 'ADD_PATIENT',
           id: state.patient.length + 1,
           name : userRef.current.value
       })
       userRef.current.value = ''
        event.preventDefault();
    }
    return (
        <div>
            <h1>const patientCount {state.patient.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={userRef} type="text"/>
                </form> 

                {state.patient.map(pt =>
                    <li onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}>{pt.name}</li>
                    )}
        </div>
    );
};

export default ReducerPatientCount;