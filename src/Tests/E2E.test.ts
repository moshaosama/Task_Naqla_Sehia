import puppeteer, { Browser, Page } from "puppeteer";
import { beforeAll, describe, it, expect } from "@jest/globals";

let browser: Browser;
let page: Page;

const Delay = async (ms: number) => {
  [
    await new Promise((resolve) => {
      setTimeout(resolve, ms);
    }),
  ];
};

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
  });

  page = await browser.newPage();

  await page.setViewport({
    width: 2000,
    height: 1000,
  });
  await page.goto("http://localhost:5173/");
});

describe("first Test", () => {
  const FilterationId = "#Filteration";
  const Theme = "#theme";
  const Language = "#Language";

  it("should check Title", async () => {
    const Title = await page.title();
    expect(Title).toBe("Vite + React + TS");
  });

  it("should click Theme test", async () => {
    Delay(5000);
    await page.waitForSelector(Theme);
    Delay(1000);
    await page.click(Theme, { count: 3 });

    Delay(4000);
    await page.click(Theme, { count: 3 });
  });

  it("should click language support", async () => {
    Delay(5000);
    await page.waitForSelector(Language);
    Delay(1000);
    await page.click(Language, { clickCount: 1 });
    Delay(4000);
    await page.click(Language, { clickCount: 1 });
  });

  it("should filter text inn input", async () => {
    await page.waitForSelector(FilterationId);
    Delay(1000);
    await page.click(FilterationId, { clickCount: 1 });
    await page.type(FilterationId, "men's clothing");
    Delay(4000);
    for (let i = 0; i < "men's clothing".length; i++) {
      await page.keyboard.press("Backspace");
    }
    await page.type(FilterationId, "jewelery");
  });
});

// afterAll(async () => {
//   await browser.close();
// });
