import { Page } from "@playwright/test";

export default class UserDetailsPage {
  constructor(public page: Page) {
    this.page = page;
  }

  // selectors of elements in customers user detail section
  private editButton = "//span[text()=' Edit']";
  private firstNameField='#first_name';
  private saveButton= "//button[contains(@class,'btn btn-success')]";

  // Method to get dynamic customer name locator 
  private getCustomerNameLocator(customerName: string): string {
    return "//div[1]/ul/li[2]/span[text()='" + customerName + "']";
  }

  // Method to verify correct customer name
  async verifyCustomerInUserDetailPage(customerName: string): Promise<string> {
    const customerNameLocator = this.getCustomerNameLocator(customerName);
    const customerName1 = this.page.locator(customerNameLocator);
    await customerName1.waitFor({ state: 'visible' });
    const textContent = await customerName1.textContent();
    console.log("Get the Customer Name:", textContent);
    return textContent as string;
  }

  // Method to click the Edit button
  async clickEditButton() {
    await this.page.locator(this.editButton).click();
    console.log("Click Edit Button");
  }
  
  // Method to enter first name
  async enterFirstName(fname: string) {
    await this.page.locator(this.firstNameField).fill(fname);
    console.log("Type User's Name in Search Field:", fname);
  }

  // Method to click save button
  async clickSaveButton() {
    await this.page.locator(this.saveButton).click();
    console.log("Click Save Button");
  }

}
