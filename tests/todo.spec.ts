import {test, expect} from '@playwright/test';
import User from '../models/User';
import ToDoApi from '../apis/ToDoApi';
import SignUpPage from '../pages/SignUpPage';
import ToDoPage from '../pages/ToDoPage';
import NewToDoPage from '../pages/NewToDoPage';

test("Should be able to add a new todo", async({page, request, context}) => {
    const user = new User()
    const signUpPage = new SignUpPage()
    await signUpPage.signUpUsingApi(request, user, context)
    const newToDoPage = new NewToDoPage()
    await newToDoPage.load(page)
    await newToDoPage.addToDo(page, 'Learn Playwright')
    const toDoPage = new ToDoPage()
    const todoItem = await toDoPage.getToDoItem(page)
    expect(await todoItem.innerText()).toEqual('Learn Playwright')
})

test('Should be able to delete a todo', async({page, request, context}) => {

    const user = new User()
    const signUpPage = new SignUpPage()
    await signUpPage.signUpUsingApi(request, user, context)
    const newToDoPage = new NewToDoPage()
    await newToDoPage.load(page)
    await newToDoPage.addToDo(page, 'Learn Playwright')
    const toDoPage = new ToDoPage()
    await toDoPage.deleteToDo(page)
    const noToDoMessage =  await toDoPage.getNoToDoMessage(page)
    await expect(noToDoMessage).toBeVisible()
})