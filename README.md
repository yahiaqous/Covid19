<!-- @format -->

<!-- README Template Source => https://www.grepper.com/tpc/readme+template/273816 -->

# Covid19

Simple Dashboard page for Corona virus statistics created using React library and [Coronavirus COVID19 API](https://cutt.ly/MLH5xKR).

[Website Live Link](https://covid19-assignment.netlify.app/)

## Table of Contents

- [Covid19](#covid19)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
    - [Task Description Provided By NADSOFT](#task-description-provided-by-nadsoft)
    - [Figma Design](#figma-design)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Demo Video](#demo-video)
  - [Setup](#setup)
  - [Features to be Added](#features-to-be-added)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

## General Information

- Simple Dashboard page for Corona virus statistics.
- Technical assignment requested by NADSOFT for the application of **React Developer** position.

### Task Description Provided By NADSOFT

> You're required to Create a React app dashboard for Corona virus with the following requirements:
>
> 1. User should be able to view global statistics (cases, deaths, recovered).
> 2. User should be able to view a list of statistics per country (cases, deaths, recovered).
> 3. User should be able to search for countries.
> 4. User should be able to rank countries in order.
>
> Note: To solve the assignment, use the API from here: [https://cutt.ly/MLH5xKR](https://cutt.ly/MLH5xKR).

### Figma Design

<div align="center">
  <img src="./design/Dashboard%20Page%20Design.png" alt="Dashboard Page Design" width="75%"/>
</div>

## Technologies Used

- [React Library](https://reactjs.org) | A JavaScript library for building user interfaces.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) | [State Hook](https://reactjs.org/docs/hooks-state.html) and [Effect Hook](https://reactjs.org/docs/hooks-effect.html).
- [Axios Library](https://axios-http.com/docs/intro) | To make requests to:
  - [Coronavirus COVID19 API](https://api.covid19api.com/summary) in order to fetch data.
  - [IP API](https://ipapi.co/json) in order to analyze the user connection IP.
- [React Bootstrap Components](https://react-bootstrap.github.io) | [Container](https://react-bootstrap.netlify.app/layout/grid/#container-props), [Row](https://react-bootstrap.netlify.app/layout/grid/#row-props), [Col](https://react-bootstrap.netlify.app/layout/grid/#col-props), [Navbar](https://react-bootstrap.netlify.app/components/navbar/#navbar-props), [Nav](https://react-bootstrap.netlify.app/components/navs/#nav-props), [Form](https://react-bootstrap.netlify.app/forms/overview/#form-props), [Card](https://react-bootstrap.netlify.app/components/cards/#card-props), [Carousel](https://react-bootstrap.netlify.app/components/carousel/#carousel-props), [Table](https://react-bootstrap.netlify.app/components/table/#table-props), [OverlayTrigger](https://react-bootstrap.netlify.app/components/overlays/#overlay-trigger-props), and [Tooltip](https://react-bootstrap.netlify.app/components/overlays/#tooltip-props).
- [React Icons](https://react-icons.github.io/react-icons) | [FaLongArrowAltUp](https://react-icons.github.io/react-icons/icons?name=fa), [FiArrowDown](https://react-icons.github.io/react-icons/icons?name=fi).

## Features

- User can navigate between dashboard sections (Global, Your Country, and Other Countries statistics).

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215826781-1a414013-676d-4060-a739-58c521ca9441.gif' alt='Navigate Between Dashboard Sections' width='75%'/>
</div>
<br />

- User can view global statistics (cases, deaths, recovered).

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215827142-47c44347-c1a7-42c3-826a-6e8a36be1cdb.gif' alt='Global Statistics' width='75%'/>
</div>
<br />

- User by default can view their country statistics (cases, deaths, recovered) based on their device IP.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215827652-77cafa86-e9a6-4be7-adfe-2c1a722177a0.gif' alt='Your Country Statistics' width='75%'/>
</div>
<br />

- User can search for countries statistics.

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215827854-5f3722e6-57cc-4c47-aeed-d0963181115d.gif' alt='Search for Country' width='75%'/>
</div>
<br />

- User can view summary and table of statistics for all countries (cases, deaths, recovered).

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215844546-5d9ac8c5-46ef-48de-aa02-f15f41a2a2aa.gif' alt='Countries Statistics Summary and Table' width='75%'/>
</div>
<br />

- User can sort countries in order (alphabetical, total cases, total deaths, or total recovered).

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215828033-6e18ea83-9fd1-478f-a88b-b1b348d3e22a.gif' alt='Countries Table Sorting' width='75%'/>
</div>
<br />

## Demo Video

<div align="center">
  <img src='https://user-images.githubusercontent.com/80676788/215846347-0b441f2d-9056-4116-8d84-705f0ddf8296.gif' alt='Covid19 App Demo' width='75%'/>
</div>
<br />

## Setup

```bash
$ git clone git@github.com:yahiaqous/Covid19.git
$ cd Covid19
Covid19 git:(main)$ npm i
Covid19 git:(main)$ npm start
```

## Features to be Added

- Divide the table with "view more" button.
- Design and Develop the Footer Component.
- Add "Return to Top" button.
- Create count up animation for the cards numbers.
- Create loading component until fetching data.
- Create API errors handler.

## Acknowledgements

- This project was inspired and requested by NADSOFT.
- This [Stack Overflow Answer](https://stackoverflow.com/a/53530097) helped me to create function that sorts dictionary based on value.
- This [Sandbox Tutorial](https://codesandbox.io/s/50bi9) helped me how to get the user country by analyzing their connection IP through this [API](https://ipapi.co/json).

## Contact

Created by [Yahia Qous](https://github.com/yahiaqous) - feel free to contact me!
