import React from 'react';
import CurrencySelect from "../components/CurrencySelect";
import {CurrencyTable} from "../components/CurrencyTable";
import {Divider} from "antd";

function CurrencyList() {
    return (
        <>
            <CurrencySelect/>
            <Divider/>
            <CurrencyTable/>
        </>
    );
}

export default CurrencyList;