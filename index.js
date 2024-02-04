import puppeteer from 'puppeteer';
import {removeButtons} from "./helpers.js";

const START_PAGE_URL = `https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?variantid=3548&languageCode=hu&countryCode=HUN&Uid=G1470770&ProcUid=G1467680&userMarket=HUN&div=f&vCode=WF0KXXERJKFM14824&vFilteringEnabled=False&buildtype=web`;
const NEXT_PAGE_BTN_CLASS = 'ui-btn-right menuButton ui-link ui-btn ui-shadow ui-corner-all';


(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(START_PAGE_URL, { waitUntil: 'networkidle0' });

    //To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    await removeButtons(page)

    try {
        const pdf = await page.pdf({
            path: 'result.pdf',
            margin: { top: '0', right: '50px', bottom: '0', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
    } catch (error) {
        console.error(error)
    }

    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);

    await browser.close();
})();


