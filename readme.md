# Ford Manual Downloader

This Node.js program utilizes Puppeteer to automate the downloading of pages from the Ford owner's manual website. The goal is to download the content of each page, excluding unnecessary elements such as buttons and footers, and save them locally as PDF files.

## Installation

Before running the program, ensure you have Node.js installed on your machine. You can install the required dependencies using the following command:

```bash
npm install
```

# Usage
To run the program, execute the following command in your terminal:

```bash
node run start
```
# Configuration
The program is configured to start from a specific page (`START_PAGE_URL`) and end at another page (`LAST_PAGE_URL`). You can modify these URLs in the script according to your requirements.

```javascript
const START_PAGE_URL = 'your_start_page_url_here';
const LAST_PAGE_URL = 'your_last_page_url_here';
```

# Helper Functions
- `removeButtons()`
This function removes unnecessary buttons (feedback and menu) from the page to ensure clean content extraction.

- `getNextButton()`
This function waits for the next page button to appear on the page.

- `goToNextPage(page)`
This function clicks the next page button, navigating to the subsequent page.

- `hideFooter()`
This function hides the footer element on each page by changing its opacity to zero.

- `downloadPage(page, counter)`
This function saves the current page as a PDF file in the 'pages' directory, with the filename formatted as page-${counter}.pdf.

- `LastPageException`
This exception class is used to identify when the last page is reached during the download process.

# Note
Ensure that the Puppeteer version and its dependencies are compatible with your system.
The program is set to run in headful mode (`headless: false`). Adjust the configuration based on your preference.
The PDF pages are saved in the `pages` directory within the script's working directory. Make sure this directory exists before running the script.
Feel free to customize the script and helper functions based on your specific use case or requirements.

