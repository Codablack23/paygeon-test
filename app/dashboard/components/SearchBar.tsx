export default function SearchBar(){
    return(
       <>
        <div className="hidden md:flex gap-2 component-500 items-center rounded-md p-2 px-2 border-500">
            <i className="bi bi-search"></i>
            <input
            type="text"
            placeholder="Type to search..."
            className="component-500"
            style={{
                outline:"none"
            }}
            />
        </div>
        <div className="md:hidden gap-2 items-center justify-center border border-light-800 rounded-md flex h-8 w-8">
            <i className="bi bi-search"></i>
        </div>
        </>
    )
}