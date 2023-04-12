import {Select} from 'antd';
import React from 'react';
import {baseCurrencySlicer} from "../app/reducers";
import {useDispatch} from "react-redux";
import {ObjectToPairs} from "../uitls";
import {useSymbols} from "../hooks/useSymbol";

const CurrencySelect = () =>{
    const {setBaseCurrency} = baseCurrencySlicer.actions
    const dispatch = useDispatch()
    const symbols = useSymbols()
    const onChange = (value) => dispatch(setBaseCurrency(value))

    return (
            <Select
                showSearch
                placeholder="Select base currency"
                optionFilterProp="children"
                onChange={onChange}
                style={{minWidth: 160}}
                filterOption={(input, option) =>
                    (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={ObjectToPairs(symbols, 'name', 'value')}
            />
)}

export default CurrencySelect;