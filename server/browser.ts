import { chromium, Browser, Page } from "playwright";

let browser: Browser | null = null;

export async function getBrowser() {
    if(!browser){
        browser = await chromium.launch({headless: false})
    }
    return browser;
}

export async function getPage() {
    const browser = await getBrowser();
    const context = await browser.newContext(); 
    const page = await context.newPage();
    return page;
}