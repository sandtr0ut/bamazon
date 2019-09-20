# bamazon

<p>
    <img alt="Stack: Back-End" src="https://img.shields.io/static/v1?label=stack&message=back-end&color=important&style=flat-square" />
    <img alt="Version" src="https://img.shields.io/badge/version-1.2.7-blue.svg?cacheSeconds=2592000&style=flat-square" />
    <a href="https://github.com/sandtr0ut/bamazon#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen?style=flat-square" target="_blank" />
    </a>
    <a href="https://github.com/sandtr0ut/bamazon/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-blueviolet?style=flat-square" target="_blank" />
    </a>
    <a href="https://github.com/sandtr0ut/bamazon/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/sandtr0ut/crystals-collector?style=flat-square" target="_blank" />
    </a>
    <a href="https://github.com/sandtr0ut/bamazon/blob/master/README.md">
    <img alt="Website" src="https://img.shields.io/badge/Website%3F-n/a-inactive?style=flat-square" target="_blank">
    </a>
    <a href="https://github.com/sandtr0ut/bamazon/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" target="_blank" />
  </a>
</p>

Bamazon is an ultra-simple, 100% back-end, storefront application. It is written in Node.js with the Inquirer npm package and accessed by command line interface. All product information is stored in a MySQL database.

### 🏠 [Homepage](https://github.com/sandtr0ut/burger#readme)

## Install

```
npm install
```

## Usage

```
1. node bamazonCustomer.js

2. Review the displayed inventory

3. Follow prompts to place an order
```

> Bamazon will alert you if your order quantity exceeds available inventory, then will prompt you for another request.

> Once you place an order, the items you selected will be removed from inventory and Bamazon will display the updated available quantity.

## Demo Images

![initialDisplay](assets/images/initialDisplay.jpg)

#### Prompts

> `? What would you would like to purchase? Please enter item id or Q to quit:`

> `? How many would you like? Please enter quantity:`

#### Order Confirmation - Success

> `Confirmation: You purchased 4 G.Skill Ripjaws V Series 64GB (4x16GB) DDR$ SDRAM`

![display2](assets/images/display2.jpg)

#### Order Confirmation - Insufficient Stock

> `Not enough in stock. Please try a smaller quantity.`

![display3](assets/images/display3.jpg)
