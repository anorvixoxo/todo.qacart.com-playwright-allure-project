import {test, expect} from '@playwright/test'
import User from '../models/User'
import SignUpPage from '../pages/SignUpPage'
import ToDoPage from '../pages/ToDoPage'

test('Should be able to register to our application', async({page}) => {

    const user = new User()
    const signUpPage = new SignUpPage()
    await signUpPage.load(page)
    await signUpPage.signUp(page, user)
    const toDoPage = new ToDoPage()
    const welcomeMessage = toDoPage.getWelcomeMessageLocator(page)
    await expect(welcomeMessage).toBeVisible()
})