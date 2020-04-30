import React from 'react';
import { CategoriesList } from './CategoriesList';
import { StoreProvider } from '../store/storeProvider';

export const HighValueItems = (props) => {
    return <div>
        <StoreProvider>
            <CategoriesList />
        </StoreProvider>
    </div>;
}