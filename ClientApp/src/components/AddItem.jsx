import React, { useState } from 'react';
import { useStore } from '../store/storeProvider';
import { addItem, addCategory, } from '../api/create';

export const AddItem = (props) => {
    const [name, setName] = useState('');
    const [newCategoryName, setNewCategoryName] = useState('');
    const [price, setPrice] = useState(NaN);
    const [categoryId, setCategoryId] = useState(1);
    const [dropDownClass, setDropDownClass] = useState('dropdown-menu dropdown-menu-right');
    const { state, dispatch } = useStore();
    const selectedCategoryArray = state.categories
        ? state.categories.filter((category) => category.id == categoryId)
        : [];
    const selectedCategory = selectedCategoryArray.length > 0
        ? selectedCategoryArray[0].name
        : 'No Categories';

    const isAddButtonDisabled = () => name.length == 0 || price === undefined || price === 0 || price.toString() === 'NaN';
    const isInvalidCategoryName = () => !newCategoryName || setNewCategoryName.length == 0;

    const addCategoryElement = <div key="addCategoryElement" className="input-group dropdown-item" style={{ padding: '0px 2px 0px 2px' }}>
        <input type="text" placeholder="New Category" className="form-control"
            style={{ paddingLeft: '5px' }}
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)} />
        <div className="input-group-append">
            <span className="input-group-text"
                style={{
                    cursor: isInvalidCategoryName() ? 'not-allowed' : 'pointer',
                }}
                disabled={isInvalidCategoryName()}
                onClick={() => {
                    if (!isInvalidCategoryName()) {
                        addCategory((data) => dispatch({ type: 'ADD_CATEGORY', data }), newCategoryName);
                        setNewCategoryName('');
                    }
                }}
            >+</span>
        </div>
    </div>;

    //const submitAdd = 

    return <div className="row pad-top-20">
        <div className="col-4 input-group">
            <input type="text" className="form-control" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-2 input-group">
            <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={isNaN(price) ? '' : price}
                onKeyDown={(e) => {
                    if (e.keyCode == 13) {
                        if (!isAddButtonDisabled()) {
                            addItem((data) => dispatch({ type: 'ADD_ITEM', data }), {
                                name,
                                price,
                                categoryId,
                            });
                            setName('');
                            setPrice(NaN);
                        }
                    } 
                }}
                onChange={(e) => setPrice(Math.abs(parseFloat(e.target.value)))} />
        </div>

        <div className="col-2 remove-padding">
            <div className="btn-group col-12 remove-padding">
                <button type="button" className="btn btn-secondary dropdown-toggle col-12"
                    style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        display: 'block',
                    }}
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    onClick={() => {
                        if (dropDownClass.includes('show')) {
                            setDropDownClass(dropDownClass.split('show')[0]);
                        } else {
                            setDropDownClass(dropDownClass + ' show');
                        }
                    }}>
                    {selectedCategory}
                </button>

                <div className={dropDownClass}>
                    {state.categories
                        ? [...state.categories.map((category, index) => <button key={`${index}-dropdown-item`} className="dropdown-item" type="button" onClick={() => {
                            setCategoryId(category.id);
                            setDropDownClass(dropDownClass.split('show')[0]);
                        }}>{category.name}</button>), addCategoryElement]
                        : addCategoryElement}
                </div>
            </div>
        </div>
        <div className="col">
            <button className="btn btn-primary"
                style={{ cursor: isAddButtonDisabled() ? 'not-allowed' : 'pointer' }}
                onClick={() => {
                    if (!isAddButtonDisabled()) {
                        addItem((data) => dispatch({ type: 'ADD_ITEM', data }), {
                            name,
                            price,
                            categoryId,
                        });
                        setName('');
                        setPrice(NaN);
                    }
                }}
                disabled={isAddButtonDisabled()}
            >
                Add
            </button>
        </div>
    </div>;
}