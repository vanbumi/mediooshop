import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from "./../../components/collections-overview/CollectionsOverviewComponent";
import CategoryPage from '../category/CategoryComponent';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}

export default ShopPage;