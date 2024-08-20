export class HomePage {
    constructor(page) {
      this.page = page;
      this.header = page.locator('header > .wrapper');
      this.feedbackLink = this.header.getByText(/Зворотній зв'язок|Обратная связь|Rückkopplung|Realimentación|Réaction|Feedback/).first();
      this.menuLink = this.header.getByText(/Меню|Меню|Menü|Menú|Menu|Menu/).first();
    }
  
    async changeLanguage(language) {
      await this.page.locator('.language > a').click();
      const languageSelector = {
        // 'UA': '.lang-item:nth-child(0) > [href="https://zt.com.ua/"]',
        'RU': '.lang-item:nth-child(1) > [href="https://zt.com.ua/ru/"]',
        'DE': '.lang-item:nth-child(2) > [href="https://zt.com.ua/de/"]',
        'ES': '.lang-item:nth-child(3) > [href="https://zt.com.ua/es/"]',
        'FR': '.lang-item:nth-child(4) > [href="https://zt.com.ua/fr/"]',
        'EN': '.lang-item:nth-child(5) > [href="https://zt.com.ua/en/"]'
      };
      await this.page.locator(languageSelector[language]).click();
    }
  
    async toHaveTitle(title) {
      await expect(this.page).toHaveTitle(title);
    }
  
    async toHaveURL(url) {
      await expect(this.page).toHaveURL(url);
    }
  }
  