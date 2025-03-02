# CryptoTracker


Welcome to the project called CryptoTracker!

Main Features:
  - Tracks the current price of most popular cryptocurrencies in the market
  - Shows the 24 hour price changes and more (depending on your modification, there is a lot of useful data coming from API call, feel free to integrate what you like)
  - Indicates the total capitalization of the currency


Tech Stack Used:
  - Python FastAPI := backend part
  - JS React js := frontend part
  - CoinMarketCap := for API calls that fetch the cryptocurrencies and their data
  - Tailwind UI, Daisy UI := for sytles and components


HOW TO RUN THIS APPLICATION:
  BACKEND PART (YOU SHOULD HAVE PYTHON 3.10 > INSTALLED)
  
  - Create a CoinMarketCap accound and get your API KEY
  - Create a .env file inside backend directory and paste your CMC_API_KEY (e.g  CMC_API_KEY=45feb940-dd82-4b00-937d-rwjeijdsf9399sdf9s90939rw03r9d) 
  - Create your virutal environment inside "backend" directory
  - Install all dependencies in "requirements.txt"
  - Add the allowed origins for CORS in main.py.


  FRONTEND PART (YOU SHOLD HAVE NODE JS, NPM INSTALLED)
  
  - Navigate to the Frontend Directory (cd frontend)
  - Install Project Dependencies (npm install)
  - Configure your base backend URL in App.jsx

