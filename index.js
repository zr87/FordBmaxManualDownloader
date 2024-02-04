import puppeteer, {TimeoutError} from 'puppeteer';
import {
    downloadPage,
    getNextButton,
    goToNextPage,
    LastPageException,
    removeButtons
} from "./helpers.js";

const START_PAGE_URL = `https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?variantid=3548&languageCode=hu&countryCode=HUN&Uid=G1470770&ProcUid=G1467680&userMarket=HUN&div=f&vCode=WF0KXXERJKFM14824&vFilteringEnabled=False&buildtype=web`;
const LAST_PAGE_URL = `https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?variantid=3548&languageCode=hu&countryCode=HUN&Uid=G1946637&ProcUid=G1941190&userMarket=HUN&div=f&vCode=WF0KXXERJKFM14824&vFilteringEnabled=False&buildtype=web`;


(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(LAST_PAGE_URL, {waitUntil: 'networkidle0'});

    //To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');


    let pageCounter = 1;
    try {
        do {
            await removeButtons(page);

            await downloadPage(page, pageCounter)
            console.log("page counter: ", pageCounter);

            if (page.url() == LAST_PAGE_URL) {
                throw new LastPageException();
            }
            await goToNextPage(page)
            pageCounter++;

        } while (await getNextButton(page))
    } catch (error) {
        if (error instanceof TimeoutError || error instanceof LastPageException) {
            console.info("Already on last page");
        }
    } finally {
        console.info("Download finished")
    }


    await browser.close();
})();


