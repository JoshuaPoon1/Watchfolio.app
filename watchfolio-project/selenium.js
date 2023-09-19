const { Builder, By, Key, until } = require('selenium-webdriver');

// Set up the WebDriver
const driver = new Builder().forBrowser('chrome').build();

// eBay listing URLs (replace with your own list of URLs)
const ebayUrls = [
  'https://www.ebay.com/your-listing-url-1',
  'https://www.ebay.com/your-listing-url-2',
  // Add more eBay listing URLs as needed
];

async function getListingsPrices() {
  const prices = [];
  try {
    for (const url of ebayUrls) {
      // Open the eBay listing page
      await driver.get(url);

      // Wait for the element that contains the listing price to be visible (you may need to adjust the selector)
      const priceElement = await driver.wait(until.elementLocated(By.xpath("//span[@itemprop='price']")), 10000);

      // Get the listing price text
      const listingPrice = await priceElement.getText();

      // Convert the listing price to a number (remove currency symbols, commas, etc.)
      const priceAsNumber = parseFloat(listingPrice.replace(/[^\d.]/g, ''));

      // Push the price to the prices array
      prices.push(priceAsNumber);
    }

    // Calculate the mean (average) of the prices
    const meanPrice = calculateMean(prices);

    // Print the listing prices and mean
    console.log('Listing Prices:', prices);
    console.log('Mean Price:', meanPrice);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

// Function to calculate the mean of an array of numbers
function calculateMean(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

// Run the function to get listing prices and calculate the mean
getListingsPrices();
