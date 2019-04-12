# CurrencyCatalog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## launch the project

In package json in "scripts" add:
"start": "ng serve --port 8000" in order to run npm start on port 8000 directly
 
## Public API

The chosen API is https://api.coinpaprika.com/v1/coins
The API allows to display all bitcoins as well as their details.

## Display all Bitcoin

The display of bitcoin list respects the responsiveness: for tablets displays 4 bitcoins per row, for phones displays 2 bitcoins per row and for desktops displays 6 bitcoins per row. 

The display of bitcoin contains 10 bitcoins per default. It contains pagination which allows for 10 bitcoins per page to be displayed.
The search Bar allows to find bitcoins while using name, ID, code, type as filter. A Pipe, called SearchPipe was implemented to develop the filter.

## Call for API

Thecall for the public API was made through a http GET request.


