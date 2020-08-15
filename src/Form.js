import { Row, Col, Button } from 'antd';
import React, {useEffect, useState} from 'react';
import {PlusCircleTwoTone } from '@ant-design/icons'
const axios = require('axios');

function Forms () {

    const additionalInput = (keys) => (<div key={keys+1}>Hello <Button type="link" onClick={removeElement} >
        <PlusCircleTwoTone twoToneColor={"#eb2f96"} rotate={45}/>
    </Button></div>);

    const originalInput = [<div key={1}>Hello <Button  type="link" onClick={addElement}>
        <PlusCircleTwoTone twoToneColor={"#eb2f96"}/>
    </Button></div>];
    const [input, setInput] = useState(originalInput);

    const removeElement = () => {
        setInput(input => {
           const int = input;
           int.splice(2,1);
           return int;
        });
    }

    const getDishes = async() =>
    {
        return await axios.get("http://localhost:3000/dishes");
    }

    function addElement(){
        setInput(input => input.concat(additionalInput(input.length)));
    }

    const [dish,setDish] = useState(null);


    useEffect(() => {
        getDishes().then((result) => {
            let DishData = null;
            DishData = result.data;
            console.log(result.data);
            setDish(   DishData );
        });
    },[])


    return (
        <div style={{textAlign:'center'}}>
            {input}
            {console.log(dish)}
            <strong>{dish || 'hello'}</strong>
            <Row >
                <Col span={24}><Button type={"text"} >Submit</Button></Col>
            </Row>
            <Row >
                <Col  span={12}><div>50</div></Col>
                <Col  span={12}><div>50</div></Col>
            </Row>
            <Row >
                <Col span={8}><div>33</div></Col>
                <Col  span={8}><div>33</div></Col>
                <Col  span={8}><div>33</div></Col>
            </Row>
        </div>

    );
};

export default Forms;