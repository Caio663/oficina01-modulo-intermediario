import { Page } from '@playwright/test';

export class AcharOTitlePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://127.0.0.1:8080/');
  }

  async clickHeading() {
    await this.page.getByRole('heading', { name: 'IMC e ALIMENTAÇÃO CORRETA' }).click();
  }
}