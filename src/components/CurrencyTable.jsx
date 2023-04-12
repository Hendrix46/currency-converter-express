import React from 'react';
import {Table} from 'antd';
import {useCurrency} from "../hooks/useCurrency";
import {useSelector} from "react-redux";
import {ObjectToPairs} from "../uitls";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
    }
];

export const CurrencyTable = () => {
    const {baseCurrency} = useSelector(state => state.baseCurrencySlicer)
    const {rates, loading} = useCurrency(baseCurrency)
    const data = ObjectToPairs(rates, 'rate', 'name')

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (!loading) {
        return (
            <Table pagination={false} columns={columns} dataSource={data} />
        )
    }
};