import { sum } from "../sum"


test("Sum func should calculate the sum of two nummers",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
})