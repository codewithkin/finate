import { budget } from "@/types/budget";

export default function validate (values: budget) {
    const errors: { 
        name?: string, 
        amount?: string, 
        endsOn?: string } = {};

    if(values.name === "") {
        errors.name = "Please give your budget a name"
    } else if(values.amount === 0) {
        errors.amount = "Amount cannot be zero"
    } else if (values.endsOn === "") {
        errors.endsOn = "Please give your budget an ending date"
    } 

    return  errors;
}