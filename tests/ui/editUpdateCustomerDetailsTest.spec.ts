import {test , expect} from "@playwright/test";
import LoginPage from "../../pages/loginPage";
import DashBoardPage from "../../pages/dashBoardPage";
import UserDetailsPage from "../../pages/userDetailsPage";
import TestData from "../../data/TestData.json";

let loginPage: LoginPage;
let dashBoardPage: DashBoardPage;
let userDetailsPage: UserDetailsPage;


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  dashBoardPage=new DashBoardPage(page);
  userDetailsPage=new UserDetailsPage(page);
  
  await page.goto(TestData.baseURL);
  await loginPage.enterEmail(TestData.Email);
  await loginPage.enterPassword(TestData.Password);
  await loginPage.clickSignInButton();
  const logo = await dashBoardPage.verifyDashboardLogo();
  await expect(logo).toBeVisible();
});

test("Test 1:Validate Edit & Update First Name In User Details", async () => {
  
  await dashBoardPage.searchUserName(TestData.CustomerName);
  await dashBoardPage.selectTheUser(TestData.CustomerName);
  const customerName = await userDetailsPage.verifyCustomerInUserDetailPage(TestData.CustomerName);
  expect.soft(customerName).toBe(TestData.expectedCustomerName);
  await userDetailsPage.clickEditButton();
  await userDetailsPage.enterFirstName(TestData.firstName);
  await userDetailsPage.clickSaveButton();
  const updatedCustomerName = await userDetailsPage.verifyCustomerInUserDetailPage(TestData.expectedUpdatedCustomerName);
  expect.soft(updatedCustomerName).toBe(TestData.expectedUpdatedCustomerName);

});
