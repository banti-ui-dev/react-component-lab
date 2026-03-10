import React from 'react'

const Datagrid = (props) => {
  return (
    <div>
        <table className="border mt-4">
            <thead>
                <tr>
                    {
                        props.fields.map(field => <th key={field} className="border px-3">{field}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index)=>
                    <tr key={index}>
                        {
                            Object.keys(item).map(key => 
                                <td key={key} className="border px-3">{item[key]}</td>
                            )
                        }
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Datagrid