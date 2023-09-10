import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_Data from "../mocks/mockResList.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

global.fetch= jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOCK_Data)
            }
        }
    )
   
})
it("Should render the body component with search button",async ()=>{
    
   await act( async ()=> render(
    <BrowserRouter>

   <Body/>
    </BrowserRouter>
   ))
    
   const searchBtn = screen.getByRole("button",{name:"Search"})
   expect(searchBtn).toBeInTheDocument();



   
})
it("Should render the body component with search button",async ()=>{
    
    await act( async ()=> render(
     <BrowserRouter>
 
    <Body/>
     </BrowserRouter>
    ))
     
    const searchBtn = screen.getByRole("button",{name:"Search"})
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchBtn)
    const cards= screen.getAllByTestId("resCard")
    expect(cards.length).toBe(2)
 })