import React from 'react';
import { Delete } from './Delete';
import { formatter } from './formatter';
import { useStore } from '../store/storeProvider';
import { removeItem } from '../api/delete';

export const DisplayItem = ({ props }) => {
    const { dispatch } = useStore();
    return <div key={`${props.index || 0}-item`} className="row pad-left-15">
        <div className="col-6">{props.name}</div>
        <div className="col-2">{formatter.format(props.price)}</div>
        <div className="col"><a href="#" style={{ color: '#212529' }} 
            onClick={() => {
                removeItem((data) => dispatch({ type: 'REMOVE_ITEM', data }), props);
            }
        }><Delete /></a></div>
    </div>;
}