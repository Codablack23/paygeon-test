export default function SearchBar(){
    return(
        <div className="flex gap-2 items-center rounded-md p-2 px-2 border border-light-800">
            <i className="bi bi-search"></i>
            <input
            type="text"
            placeholder="Type to search..."
            style={{
                outline:"none"
            }}
            />
        </div>
    )
}