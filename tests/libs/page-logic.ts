import type { Page } from '@playwright/test';

export async function newPage(page: Page) {
  //return page.getByText('New Page').click();
  const newPageButton = await page.waitForSelector('div:has-text("New Page")');
  await newPageButton.click();
}

export async function clickPageMoreActions(page: Page) {
  return page
    .getByTestId('editor-header-items')
    .getByRole('button')
    .nth(1)
    .click();
}
