import React from 'react'
import "./Table.css"

const Table = () => {
  return (
    <table className='table'>
        <thead>
            <tr className='table__row'>
                <th className='table__name'> STATUS</th>
                <th className='table__name'>MOXET ID</th>
                <th className='table__name'> TRANSPORTER</th>
                <th className='table__name'>DRIVER NAME (EN)</th>
                <th className='table__name'> DRIVER NAME (AR)</th>   
                <th className='table__name'>MOBILE NO</th>
                <th className='table__name'>EXTERNAL CUSTOMER ID</th>
                <th className='table__name'> CARD NO</th> 
                <th className='table__name'> ACTIONS</th>     
            </tr>
            <tr className='table__row1'>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>
                <input type="text" className='table__rowInput'></input>    
            </tr>    
        </thead>
        <tbody className='table__body'>
            <tr className='table__row4'>
                <th className='table__name1'> <button className='table__button'>ACTIVE</button></th>
                <th className='table__name1'>MOXET ID</th>
                <th className='table__name1'> TRANSPORTER</th>
                <th className='table__name1'>DRIVER NAME (EN)</th>
                <th className='table__name1'> DRIVER NAME (AR)</th>   
                <th className='table__name1'>MOBILE NO</th>
                <th className='table__name1'>EXTERNAL CUSTOMER ID</th>
                <th className='table__name1'> CARD NO</th> 
                <th className='table__name1'> </th>     
            </tr>
            <tr className='table__row4'>
                <th className='table__name1'> <button className='table__button1'>REJECTED</button></th>
                <th className='table__name1'>MOXET ID</th>
                <th className='table__name1'> TRANSPORTER</th>
                <th className='table__name1'>DRIVER NAME (EN)</th>
                <th className='table__name1'> DRIVER NAME (AR)</th>   
                <th className='table__name1'>MOBILE NO</th>
                <th className='table__name1'>EXTERNAL CUSTOMER ID</th>
                <th className='table__name1'> CARD NO</th> 
                <th className='table__name1'> </th>     
            </tr>
            <tr className='table__row4'>
                <th className='table__name1'> <button className='table__button2'>PROCESS</button></th>
                <th className='table__name1'>MOXET ID</th>
                <th className='table__name1'> TRANSPORTER</th>
                <th className='table__name1'>DRIVER NAME (EN)</th>
                <th className='table__name1'> DRIVER NAME (AR)</th>   
                <th className='table__name1'>MOBILE NO</th>
                <th className='table__name1'>EXTERNAL CUSTOMER ID</th>
                <th className='table__name1'> CARD NO</th> 
                <th className='table__name1'> </th>     
            </tr>
            <tr className='table__row4'>
                <th className='table__name1'> <button className='table__button3'>PENDING</button></th>
                <th className='table__name1'>MOXET ID</th>
                <th className='table__name1'> TRANSPORTER</th>
                <th className='table__name1'>DRIVER NAME (EN)</th>
                <th className='table__name1'> DRIVER NAME (AR)</th>   
                <th className='table__name1'>MOBILE NO</th>
                <th className='table__name1'>EXTERNAL CUSTOMER ID</th>
                <th className='table__name1'> CARD NO</th> 
                <th className='table__name1'> </th>     
            </tr>
            <tr className='table__row4'>
                <th className='table__name1'> <button className='table__button2'>PROCESS</button></th>
                <th className='table__name1'>MOXET ID</th>
                <th className='table__name1'> TRANSPORTER</th>
                <th className='table__name1'>DRIVER NAME (EN)</th>
                <th className='table__name1'> DRIVER NAME (AR)</th>   
                <th className='table__name1'>MOBILE NO</th>
                <th className='table__name1'>EXTERNAL CUSTOMER ID</th>
                <th className='table__name1'> CARD NO</th> 
                <th className='table__name1'> </th>     
            </tr>
            
        </tbody>
         <div className='table__pagination'>
            <h8>Shown By</h8>
                <select className='select1'>
                 <option value="option1"> 5</option>
                    <option value="option2"> 10</option>
                    <option value="option3">15</option>
                </select>  
        </div>
        <button className='download'> Download Driver List </button>
    </table>
    
  )
}

export default Table