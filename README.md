

# create search box

To create a search box to display products using React


## basic 

BBefore start, Strongly recommend that learn this below first

1. [Learn ES6](http://webapplog.com/es6/)

1. [Developing_with_webpack](http://survivejs.com/webpack_react/developing_with_webpack/)

1. [React-using-refs-to-access-components](https://egghead.io/lessons/react-using-refs-to-access-components)

1. [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
 

## Getting Started

Make sure you have the latest packages installed

```
npm i

```

Note: If you don't have `npm` installed, make sure you have
[node](http://nodejs.com) installed. 


## Running the server

You can run your app using `npm start`. This will start a
server on `http://localhost:8080` and open a browser to this location.

Any modification on the html, css, scss or javascript will be detected
and the page on the browser will be reloaded automatically


## Building the application

This application uses webpack to load the various modules in
the app folder. However, upon build, all of these files are
concatenated and minified together to create a small, compressed
javascript file.



Tasking
---

1. ![Mockup](mockup/mock-1.png)
1. ![Mockup](mockup/mock-2.png)


### Add product list in the table. (15 min) 

1. Display product category in the table.

1. Display products name and price in the table

1. Display products that not in the stock in red color.


### Display the products in the stock by default. (10 min)

1. Set the checkbox status checked by default.

1. Only display the products in the stock by default.


### Make the filterable-product-table can get status from the search-box. (15min)

1. Make the checkbox clickable.

1. Pass the status of the checkbox to the filterable-product-table.


### Display the corresponding products when checkbox change . (10min)

1. Display the products that in the stock when checkbox is checked.

1. Display all the products when checkbox is unchecked.


