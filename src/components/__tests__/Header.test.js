import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"


it("Should render Header Component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})
it("Should render Header Component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
})
it("Should render Header Component with a CartItem 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const CartItem = screen.getByText("Cart - (0 items)");
    expect(CartItem).toBeInTheDocument();
})

it("Should render Header Component with a Cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const CartItem = screen.getByText(/Cart/);
    expect(CartItem).toBeInTheDocument();
})

it("Should render Header Component with a LogOut button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument();
})