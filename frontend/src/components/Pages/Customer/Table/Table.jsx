import React from 'react';
import "./Table.css"

export default function Table() {
    const customers = [
        {
        name: "Shyam Kumar",
        service: "RD",
        amt: "1000.00",
        emiNo: "4",
        emiDate: "26 Jul 2022",
        crtBy: "Mahesh Sharma"
        },
        {
        name: "Virat Kohli",
        service: "FD",
        amt: "1000.00",
        emiNo: "4",
        emiDate: "1 Jul 2022",
        crtBy: "Mahesh Sharma"
        },
    {
        name: "Cristiano Ronaldo",
        service: "NFRD1",
        amt: "1000.00",
        emiNo: "4",
        emiDate: "26 Jun 2022",
        crtBy: "Mahesh Sharma"
    },
        {
            name: "Cristiano Ronaldo",
            service: "NFRD1",
            amt: "1000.00",
            emiNo: "4",
            emiDate: "26 Jun 2022",
            crtBy: "Mahesh Sharma"
        },
        {
            name: "Cristiano Ronaldo",
            service: "NFRD1",
            amt: "1000.00",
            emiNo: "4",
            emiDate: "26 Jun 2022",
            crtBy: "Mahesh Sharma"
        },
        {
            name: "Cristiano Ronaldo",
            service: "NFRD1",
            amt: "1000.00",
            emiNo: "4",
            emiDate: "26 Jun 2022",
            crtBy: "Mahesh Sharma"
        },
        {
            name: "Cristiano Ronaldo",
            service: "NFRD1",
            amt: "1000.00",
            emiNo: "4",
            emiDate: "26 Jun 2022",
            crtBy: "Mahesh Sharma"
        },
        {
            name: "Cristiano Ronaldo",
            service: "NFRD1",
            amt: "1000.00",
            emiNo: "4",
            emiDate: "26 Jun 2022",
            crtBy: "Mahesh Sharma"
        },
        {
        name: "Messi",
        service: "RD",
        amt: "10000.00",
        emiNo: "2",
        emiDate: "15 Aug 2022",
        crtBy: "Mahesh Sharma"
    }
] 

return (
    <div className = "table-2">
    <div className="table-data">
        <div><b>MEMBER NAME</b></div>
        <div><b>SERVICE</b></div>
        <div><b>AMOUNT</b></div>
        <div><b>EMI NO</b></div>
        <div><b>EMI DATE</b></div>
        <div><b>CREATED BY</b></div>  
    </div>
        {
            customers.map((customer) => {
                return (
                    <div className="table-data-1">
                        <div>{customer.name}</div>
                        <div>{customer.service}</div>
                        <div>{customer.amt}</div>
                        <div>{customer.emiNo}</div>
                        <div>{customer.emiDate}</div>
                        <div>{customer.crtBy}</div>
                    </div>
                )
            })
        }
    <div className = "view"><button>View All</button></div>
    </div>
)
}