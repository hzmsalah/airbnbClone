import Image from "next/image"

export default function Categories(){
    return(
        <div className="cursor-pointer pt-3 pb-6 flex items-center space-x-12">
            {/* Beach */}
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-600">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Beach Category"
                    width={20}
                    height={20}
                />
                <span className="text-xs">
                    Beach
                </span>
            </div>
            {/* Villas */}
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-600">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Beach Category"
                    width={20}
                    height={20}
                />
                <span className="text-xs">
                    Villas
                </span>
            </div>
            {/* Cabins */}
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-600">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Beach Category"
                    width={20}
                    height={20}
                />
                <span className="text-xs">
                    Cabins
                </span>
            </div>
            {/* Tiny Homes */}
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-600">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Beach Category"
                    width={20}
                    height={20}
                />
                <span className="text-xs">
                    Tiny Homes
                </span>
            </div>
        </div>
    )
}