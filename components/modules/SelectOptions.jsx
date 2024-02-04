function SelectOptions({items,callback,name="selectOption"}) {
    return (
        <div className="flex items-center justify-center  rounded-lg border border-zinc-700 px-4 py-2 bg-gray-50">
            <select className="w-full h-full block bg-transparent outline-none" name={name} id={name} onChange={(e)=>{callback(e.target.value)}}>
                <option value="default"  >Select</option>
            {items?.map((item,i)=>{
                return <option key={i} value={item.value}>{item.text}</option>
            })}

            </select>
        </div>
    )
}

export default SelectOptions
