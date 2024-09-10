# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot
<img src="./src/assets/images/screenshot.png" alt="Screenshot" width="300"/>

### Links

- [Solution URL](https://github.com/edpau/fm_product_preview_card_component)
- [Live Site URL](https://edpau.github.io/fm_product_preview_card_component/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- React
- Tailwind CSS

### What I learned

#### Centralized Assets Management

Consolidates the management of product-related assets into a single module(index.js), making the application more organized and easier to maintain.

##### Pros
1. Centralized Management: All product-related assets and data are consolidated in one place, making it easier to manage and update.
2. Reusability: The products array can be easily imported and reused across different components or modules.
3. Maintainability: Changes to product details or images can be made in a single file, reducing the risk of inconsistencies.
4. Scalability: New products can be added to the array without modifying other parts of the codebase.
5. Readability: The structure is clear and easy to understand, which improves code readability.

##### Cons
1. Single Point of Failure: If the index.js file becomes corrupted or has an error, it can affect all parts of the application that rely on it.
2. Performance: If the products array grows significantly, it could impact performance, especially if the file is loaded on every page.
3. Complexity: For very large applications, having all product data in a single file might become unwieldy and harder to navigate.
4. Coupling: Components that import the products array become tightly coupled to the structure of this file, making it harder to refactor.
5. Initial Load Time: Loading all product images and data at once might increase the initial load time of the application.

###### More on 5. Initial Load Time:
Importing images directly in this way can lead to larger bundle sizes because the images are bundled with the JavaScript code (build output directory). This could increase the initial load time of the application.

Store the images on a separate static asset server or Content Delivery Network (CDN). Reference these images via URLs rather than importing them directly. This way, the JavaScript bundle remains smaller, and images are loaded from a separate source optimized for fast delivery.

```js
export const products = [
    {
        id: 1,
        category: "Perfume",
        productName: "Gabrielle Essence Eau De Parfum",
        description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        discountedPrice: "149.99",
        originalPrice: "169.99",
        image: {
            desktop: "<https://cdn.example.com/images/image-product-perfume-desktop.jpg>",
            mobile: "<https://cdn.example.com/images/image-product-perfume-mobile.jpg>",
        },
        imgAlt: "Square glass bottle of Gabrielle Chanel perfume with a sleek gold cap, placed beside green leaves on a neutral surface.",
    }
];
```

## Author
- Website - [Edward Pau](https://www.edpau.me)
- Frontend Mentor - [@edpau](https://www.frontendmentor.io/profile/edpau)

## Acknowledgments
Thank you, Grace Snow, for reviewing my code and helping me improve it.