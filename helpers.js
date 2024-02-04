export async function removeButtons(page) {
    const FEEDBACK_BTN_ID= '#btnAddAComment';
    const MENU_BTN_ID='#showTOCButton';

    const el = await page.waitForSelector(FEEDBACK_BTN_ID);
    await el.evaluate(el => el.remove());

    const el2 = await page.waitForSelector(MENU_BTN_ID);
    await el2.evaluate(el => el.remove());
}