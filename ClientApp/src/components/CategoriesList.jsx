import React, { useEffect } from 'react';
import { DisplayItem } from './DisplayItem';
import { ItemsTotal } from './ItemsTotal';
import { AddItem } from './AddItem';
import { useStore } from '../store/storeProvider';
import { getInitData } from '../api/read';
import { formatter } from './formatter';

export const CategoriesList = () => {

    const { state, dispatch } = useStore();

    // load initial data
    useEffect(() => {
        getInitData((data) => dispatch({ type: 'SET_CATEGORIES', data }));
    }, []);

    return <div className="container">

        {state.categories.map((category, categoryIndex) => category.items && category.items.length > 0
            ? <>
                <div key={category.id} className={categoryIndex > 0 ? "row total title pad-top-20" : "row total title"}>
                    <div className="col-6">{category.name}</div>
                    <div className="col-3">{formatter.format(category.items.reduce((total, item) => total += item.price, 0))}</div>
                </div>
                {category.items.map((item, itemIndex) => <DisplayItem key={category.id * 199 + item.id} props={{ ...item, index: itemIndex, categoryId: category.id, }} />)}
            </>
            : undefined
        )}
        <ItemsTotal />

        <AddItem />
    </div>;
}