export function Income(){
    return (
        <form>
            <div>
            <label htmlFor="resource">Income Source</label>
            <input type="text" id= "resource" name="resource" placeholder="Source name"/>
            </div>

            <div>
            <label htmlFor="Amount">Income Amount</label>
            <input type="text" id= "Amount" name="amount" placeholder="SAR 0.00"/>
            </div>

            <div>
            <label htmlFor="date">Income Date</label>
            <input type="date" id= "date" name="date" title="date"/>
            </div>
        </form>
    )
}




