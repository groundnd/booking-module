# Booking_module

Abode.ly 's booking component provides a user-friendly experience to browsing the availability of an accommodation, including:
  - Overall Price
  - Itemized Price Breakout
  - Guest handling (number and type)
  
## Installation

  To install the latest version:
  ```sh
  git clone https://github.com/abode-ly/booking_module
  ```

## Getting started
  
  After navigating to the booking module folder, run the following commands:
  ```sh
  npm install
  npm run seed
  npm run build
  npm start
  ```
  
  Then, browse to localhost at port 3003 with a path of '/bookings/num', where num is the accommodation id you want to review. Note: the maximum accommodation id that will be served is 100.

  ```sh
  localhost:30003/bookings/1
  ```

## CRUD API
  
  The booking module has the following functions:
  ### 1. MAKE A BOOKING RESERVATION - (CREATE)
  It is possible to make a booking with check-in and check-out dates and the number of guests stayings

  **POST**
  ```sh
  /api/bookings/
  ```

  ### 2. GET ALL RESERVED DATES PER ACCOMMODATION - (READ)
  The components can retrieve the booked dates from the database for a specific accommodation

   **GET**
  ```sh
  /api/bookings/:accommodationid
  ```

  ### 3. POTENTIALLY UPDATE BOOKED DATES AFTER BOOKING IS RESERVED - (UPDATE)
  The components can update the booked dates from the database for a specific accommodation
  
   **PATCH**
  ```sh
  /api/bookings/:accommodationid
  ```
  - *There is no delete API for this component*
  
  
  Then, browse to localhost at port 3003 with a path of '/bookings/num', where num is the accommodation id you want to review. Note: the maximum accommodation id that will be served is 100.

  ```sh
  localhost:30003/bookings/1
  ```

## Bugs & Feedback:
  - If you notice any bugs or have suggestions, please feel free to make a pull request with the changes. Thank you!
