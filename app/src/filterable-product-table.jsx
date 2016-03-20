import React from 'react';
import ProductTable from './components/product-table';
import SearchBar from './components/search-bar';

class FilterableProductTable extends React.Component {

  constructor() {
    super();

    this.state = {
      inStockOnly: true
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(inStockOnly) {
    this.setState({
      inStockOnly:inStockOnly
    });
  }

  render() {

    const products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    return (
      <div>
        <SearchBar
            inStockOnly={this.state.inStockOnly}
            onUserInput={this.handleUserInput}
        />
        <ProductTable
            products={products}
        />
      </div>
    )
  }

}

export default FilterableProductTable;
