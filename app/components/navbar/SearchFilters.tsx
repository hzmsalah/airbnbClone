export default function SearchFilters(){
    return(
        <div className="cursor-pointer h-[64px] flex flex-row items-center justify-between border border-gray-200 rounded-full shadow-xs">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">
                            Where?
                        </p>
                        <p className="text-sm">
                            Wanted Locaction
                        </p>
                    </div>

                    <div className=" h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">
                            Check In?
                        </p>
                        <p className="text-sm">
                            Add Dates
                        </p>
                    </div>

                    <div className=" h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">
                            Check Out?
                        </p>
                        <p className="text-sm">
                            Add Date?
                        </p>
                    </div>

                    <div className=" h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">
                           Who?
                        </p>
                        <p className="text-sm">
                            Add Guests
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="p-4 bg-airbnb rounded-full text-white hover:bg-airbnb-dark transition">
                    Search
                </div>
            </div>
        </div>
    )
}

// Stopped at 37:45