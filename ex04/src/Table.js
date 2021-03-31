
import { Component } from "react"

// src/Table.js
const TableBody = (props) => {
    const rows = props.charachterData.map((row, index) => {
        return (
             <tr key={index}>
                 <td>{row.firsName}</td>
                 <td>{row.lastName}</td>
                 <td>
                    <button onClick={() => props.removeCharacter(index)}>Delite</button>

                 </td>
            </tr>
        );
    });
    
  return <tbody>{rows}</tbody>;  
}







export default TableBody;




























