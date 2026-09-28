import Image from "next/image"
import ReservationSidebar from "@/app/components/properties/ReservationSidebar"

export default function PropertyDetailPage(){
    return(
        <main className="max-w-full mx-auto px-6 pb-6">
            {/* Image Area */}
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach_1.jpg"
                    alt="Picture of a Beach"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">
                        Property Name
                    </h1>
                    <span className="mb-6 block text-lg text-gray-600 ">
                        4 Guests - 2 Bedrooms - 1 Bathroom
                    </span>
                    <hr className="border-gray-200"/>
            {/* Host Details Area */}
                    <div className="py-6 flex item-center space-x-4">
                        <Image
                        src="/profile_pic_1.jpg"
                        alt="Host Profile Pic"
                        width={50}
                        height={50}
                        className="rounded-full"
                        />

                        <p>
                            John Doe is your host
                        </p>
                    </div>
                    <hr className="border-gray-200"/>
            {/* Description */}
                    <p className="mt-6 text-lg">
                        Great beach house, right by the -you guessed it- Beach! Duh!
                    </p>
                </div>
                
            {/* On the right side (bottom on mobile)
                The reservation sidebar */}

                <ReservationSidebar />

            </div>     
        </main>
    )
}