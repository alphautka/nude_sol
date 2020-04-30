import React from 'react';
import { useStore } from '../store/storeProvider';
import { formatter } from './formatter';

export const ItemsTotal = (props) => {
    const { state } = useStore();
    const total = state.categories.reduce((categoryTotal, category) =>
        category.items
            ? categoryTotal += category.items.reduce((itemTotal, item) => itemTotal += item.price, 0)
            : 0
        , 0);

    return <div key="total-row" className="row total pad-top-20">
        <div className="col-6">TOTAL</div>
        <div className="col-3">{formatter.format(total)}</div>
    </div>;
};