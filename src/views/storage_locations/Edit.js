import React from 'react';
import { Form, Card, Input, Button,message } from 'antd';


function Edit(props) {
   
    const onFinish=(value)=>{
        console.log("Success",value);
    };
    
    const onFinishFailed =(error)=>
    {
        console.log("Failed",error);
        message.error("Errrrrrr");
    };

    return (
        <Card title="Edit location">
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label="Name" name="Name" rules={[{required:true}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Age" name="Age" rules={[{required:true}]}>
                    <Input />
                </Form.Item>
                <Form.Item><Button type='primary' htmlType="submit">Save </Button></Form.Item>
            </Form>
        </Card>
    )
}

export default Edit;
