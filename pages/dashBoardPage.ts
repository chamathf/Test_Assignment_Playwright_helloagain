import { Page } from "@playwright/test";

export default class dashBoardPage{
  constructor(public page: Page) {
    this.page = page;
  }
  // selectors of elements in dashbaord login page
  private searchField = "//input[@class='search-input__field']";
  private dashboardLabel  = "//h1[contains(text(), 'Dashboard')]";

  private userName(customerName: string): string {
    return "//span[text()='"+ customerName +"']";
  }

  // Method to verify dashboard
  async verifyDashboardLogo() {
    const logoLocator = this.page.locator(this.dashboardLabel);
    await logoLocator.waitFor({ state: 'visible' }); // 
    return logoLocator;
  }
  
  // Method to serach the username
  async searchUserName(name: string) {
    await this.page.locator(this.searchField).type(name);
    console.log("Type Users Name in Search Field :", name);
  }
  
  // Method to select the user
  async selectTheUser(customerName: string) {
    const customerNameLocator = this.userName(customerName);    
    await this.page.locator(customerNameLocator).click();
    console.log("Select the User:", customerName); 

  }
}
