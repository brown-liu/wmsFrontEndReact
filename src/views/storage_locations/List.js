import React from 'react';
import { Table, Card, Button, Popconfirm } from 'antd';

const dataSource = [{
    id: 1,
    name: "soup",
    price: 5
},
{
    id: 2,
    name: 'porsche',
    price: 100000
}]


function List(props) {
    const columns = [{
        title: "index",
        key: "Id",
        width: 80,
        align: "center",
        render: (txt, record, index) => index + 1
    },
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'price',
        dataIndex: 'price'
    },
    {
        title: 'Action',
        render: (text, record, index) => {
            return (
                <div>
                    <Button type='primary' size="small">Add</Button>
                    <Popconfirm title="Confirm to delete" onCancel={() => { console.log("User cancelled") }}>
                        <Button style={{ margin: "0 1rem" }} type='danger' size="small">Delete</Button>
                    </Popconfirm>
                </div>
            )
        }
    }
    ];
    return (
        <Card
            title="Product list"
            extra={
                <Button type="primary" size="small" onClick={() => props.history.push('/storage_locations/Edit/:id?')}>
                    Add More
                </Button>
            }
        >
            <Table columns={columns} bordered dataSource={dataSource} />
        </Card>
    )
}

export default List;
