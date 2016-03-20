import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.props.onUserInput(
          this.refs['inStockOnlyInput'].checked
      );
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;