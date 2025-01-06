import { ChangeEvent, FormEvent } from "react"


type IncomeFormProps = {
    handelChange: (e: ChangeEvent<HTMLInputElement>) => void
    handelSubmit:  (e: FormEvent) => void
    handelChangeDate: (e: {target:  Date}) => void
}


export function IncomeForm({handelChange, handelSubmit, handelChangeDate}: IncomeFormProps){
 



    return (
        <form onSubmit={handelSubmit}>
            <div>
            <label htmlFor="source">Income Source</label>
            <input type="text" id= "source" name="source" placeholder="Source name" onChange={handelChange}/>
            </div>

            <div>
            <label htmlFor="Amount">Income Amount</label>
            <input type="text" id= "Amount" name="amount" placeholder="SAR 0.00" onChange={handelChange}/>
            </div>

            <div>
            <label htmlFor="date">Income Date</label>
            <input type="date" id= "date" name="date" title="date" onChange={handelChange}/>
            </div>
            <button type= "submit" onChange={handelChangeDate}>Add Income</button>
            

        </form>
    )
}




