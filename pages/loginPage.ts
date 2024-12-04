import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {
    this.page = page;
  }
  
  // selectors of elements in login page
  private emailField = "#email";
  private passwordField = "#password";
  private signInButton = "//button[@type='submit']";

  // Method to enter email 
  async enterEmail(email: string) {
    await this.page.locator(this.emailField).type(email);
    console.log("Type Email :", email);
  }
  
  // Method to enter password
  async enterPassword(password: string) {
    await this.page.locator(this.passwordField).type(password);
    console.log("Type Password :", password);
  }
  // Method to click signin button
  async clickSignInButton() {
    await this.page.locator(this.signInButton).click();
    console.log("Click SignIn Button");
  }

}
