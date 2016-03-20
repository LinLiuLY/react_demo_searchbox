import React from 'react';
import CategoryRow from './category-row';

const ProductTable = ({products}) => {
    let rows = [],
        lastCategory = null;

    products.map((product)=>{
      if(product.category != lastCategory) {
        rows.push(
            <CategoryRow category={product.category} />
        )
      }

      lastCategory = product.category;

    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;