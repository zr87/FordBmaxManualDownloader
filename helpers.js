const NEXT_PAGE_BTN_CLASS = 'aria/Next Page';

export async function removeButtons(page) {
    const FEEDBACK_BTN_ID = '#btnAddAComment';
    const MENU_BTN_ID = '#showTOCButton';

    const el = await page.waitForSelector(FEEDBACK_BTN_ID);
    await el.evaluate(el => el.remove());

    const el2 = await page.waitForSelector(MENU_BTN_ID);
    await el2.evaluate(el => el.remove());
}

export async function getNextButton(page) {
    return await page.waitForSelector(NEXT_PAGE_BTN_CLASS);
}

export async function goToNextPage(page) {
    const nextBtn = await page.waitForSelector(NEXT_PAGE_BTN_CLASS);
    return await nextBtn.click()
}

export async function downloadPage(page, counter) {
    try {
        const pdf = await page.pdf({
            path: `pages/page-${counter}.pdf`,
            margin: { top: '0', right: '50px', bottom: '0', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
    } catch (error) {
        console.error(error)
    }
}


export class LastPageException {}
