
export function Input({placeholder,onChange,value}:{placeholder:string,onChange:(e:any)=>void,value:string}) {
    return (<div>
        <input type="text" placeholder={placeholder} onChange={onChange} className="px-4 py-2 rounded-lg" value={value} />
    </div>)
    }