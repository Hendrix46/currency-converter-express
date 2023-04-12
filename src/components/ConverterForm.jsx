import React, {useState} from 'react';
import Input from "antd/es/input/Input";
import {Button, Card, Col, Divider, Row, Statistic} from "antd";
import {useSelector} from "react-redux";
import {useCurrency} from "../hooks/useCurrency";

function ConverterForm() {
    const {baseCurrency} = useSelector(state => state.baseCurrencySlicer)
    const [fromCurrency, setFromCurrency] = useState(baseCurrency)
    const [toCurrency, setToCurrency] = useState('')
    const [amount, setAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)
    const rates = useCurrency(baseCurrency)



    const converter =(text)=>{
        const temp = []
        text = text.split(" ")

        text.map((el, i) => {
            if (!isNaN(el) && !isNaN(parseInt(el))){
                setAmount(text[i])
            }

            if(Object.keys(rates).includes(text[i].toUpperCase())){
                temp.push(text[i].toUpperCase())
            }
        })
        setFromCurrency(temp[0])
        setToCurrency(temp[1])
    }

    const handleChange = (e) =>{
        converter(e.target.value)
    }

    const handleConvert = (e) =>{
        e.preventDefault()
        const result = amount * (rates[toCurrency] / rates[fromCurrency])
        setConvertedAmount(result)
    }


    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <form onSubmit={handleConvert}>
                        <Col>
                            <Input onChange={handleChange} placeholder="Convert Currency" />
                        </Col>
                        <Divider />
                        <Col>
                            <Button block onClick={handleConvert} type="primary">Convert</Button>
                        </Col>
                    </form>
                    <Divider />
                    <Col>
                        <Card bordered={false}>
                            <Statistic
                                title="Converted Amount"
                                value={convertedAmount}
                                precision={2}
                                valueStyle={{ color: '#3f8600', textAlign: 'center' }}
                                suffix={toCurrency}
                            />
                        </Card>
                    </Col>
                </Col>
            </Row>
        </>
    );
}

export default ConverterForm;