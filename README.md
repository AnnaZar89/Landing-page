# Landing Page

Simple website application created with React.js, TypeScript, and CSS Modules.

## Table of contents

- [General Info](#general)
- [Project Description](#description)
- [Installation](#installation)
- [Demo](#demo)

## General Info

This project can be used for marketing purposes such as company promotion by showing to the potential customers the company's offer in order to encourage them to buy theirs products.

## Project Description

The project 'Landing Page' is fully responsive. Breakpoints have been created thanks to that the website is adapted to devices with various resolutions: from small phones (e.g. Nokia Lumia - 320px) to large screens (2000px). To have an easy access to these breakpoints, @mixin was created, where the rules for their use were defined. In CSS we can easily implement these rules using @include and overwriting the old rules.

'Landing Page' can be displayed in light and dark mode. Using Redux Toolkit allows you to control the mode change and as a result modifies the application view. It helps you to create and manage global application state. How it works? After clicking the toggle Button, thanks to dispatch function, the action (setToggle) with the information (change the mode to the opposite) is sent to the reducer (themeSlice); the reducer accepts the action and information about the current state and creates a new state based on the changes made in the view. Thanks to the usage of localStorage, even after refreshing the page, the data is retained, i.e. if we are in dark mode, we will still be in the same mode after refreshing the page.

The colors in the project are handled using global variables, specified within the :root selector. We can access the values ​​of those global variables by using the var() function.

The project contains sliders created after implementing the react-multi-carousel library. Thanks to it, we have access to the ready-made Carousel component, which allows us to customize sliders and navigate them.


## Installation

1. Clone the repository:

```bash
git clone https://github.com/AnnaZar89/Landing-page.git
```

2. Enter to to the repository:

```bash
cd Landing-page
```

3. Install dependencies:

```bash
npm install
```

4. Start the project:

```bash
npm start
```

## Demo

The live demo you can find [here](https://master--responsive-landing-page-business.netlify.app/).
