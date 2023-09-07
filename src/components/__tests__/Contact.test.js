import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Should load Contact us Component",()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
test("Should load Button inside Contact us Component",()=>{
    render(<Contact/>)
    const button  = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})
test("Should load Button inside Contact us Component",()=>{
    render(<Contact/>)
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})
test("Should load Input inside Contact us Component",()=>{
    render(<Contact/>)
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
})
test("Should load 2 Inputboxes inside Contact us Component",()=>{
    render(<Contact/>)
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})