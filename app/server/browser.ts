import { chromium, Browser, BrowserContext, Page } from "playwright";

let browser: Browser | null = null;

export async function getBrowser() {
    if(!browser){
        browser = await chromium.launch({headless: false})
    }
    return browser;
}

export interface PageSession {
    page: Page;
    cleanup: () => Promise<void>;
}

export async function getPage(): Promise<PageSession> {
    const browserInstance = await getBrowser();
    const context: BrowserContext = await browserInstance.newContext();
    const page: Page = await context.newPage();
    return {
        page,
        cleanup: async () => {
            await page.close();
            await context.close();
        },
    };
}