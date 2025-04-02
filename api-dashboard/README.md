# Web Development Project 6 - *Car Listing Dashboard*

Submitted by: **Aditya Koul**

This web app: **This is a car listing dashboard that takes data from the [Auto.dev API](https://www.auto.dev/)**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [X] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] The app includes a debug section where the API JSON is displayed
* [X] Upon an invalid search, the app tells the user how they could potentially improve their search criteria
* [X] Dynamic Price and Mileage handling for new cars or sellers accepting offers for price

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/overview.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LICEcap

## Notes

At first, I was having issues with the API not returning anything. I discovered it was due to a Cross-Origin Resource Sharing (CORS) restriction. To get past this, I used a development proxy server which sends requests to the actual API endpoint. Additionally, I encountered some strange API behavoir (unrecognized make led to returning all cars, model did not work without make) which I had to deal with by writing special cases. After I got the initial APi responses working, it was fairly smooth

## License

    Copyright 2025 Aditya Koul

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.