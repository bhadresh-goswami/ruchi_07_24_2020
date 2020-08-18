import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

let data = [
    {
        'Name': 'Bhadresh',
        'Tech': 'ReactJs'
    },
    {
        'Name': 'Bhavesh',
        'Tech': 'Angular'
    },
    {
        'Name': 'Ruchi',
        'Tech': 'MERN Stack'
    },
    {
        'Name': 'Bhargesh',
        'Tech': 'ReactJs'
    },
    {
        'Name': 'Bhavesh',
        'Tech': 'Angular'
    },
    {
        'Name': 'Ruchi',
        'Tech': 'MERN Stack'
    },
    {
        'Name': 'Bhargesh',
        'Tech': 'ReactJs'
    },
    {
        'Name': 'Bhavesh',
        'Tech': 'Angular'
    },
    {
        'Name': 'Ruchi',
        'Tech': 'MERN Stack'
    },
    {
        'Name': 'Bhargesh',
        'Tech': 'ReactJs'
    },
    {
        'Name': 'Bhavesh',
        'Tech': 'Angular'
    },
    {
        'Name': 'Ruchi',
        'Tech': 'MERN Stack'
    },
    {
        'Name': 'Bhargesh',
        'Tech': 'ReactJs'
    }
];

const columns = [
    {
        name: 'Name',
        selector: 'Name',
        sortable: true,
    },
    {
        name: 'Tech',
        selector: 'Tech',
        sortable: true,
    }
];


class ShowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setPagination:true
        };
    }
    
    render() {

        return (
            <div>
                <DataTable
                    title="Student List"
                    columns={columns}
                    data={data}
                    pagination={this.state.setPagination}
                ></DataTable>
            </div>
        );
    }
}

export default ShowTable;