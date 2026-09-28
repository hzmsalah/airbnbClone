import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddProperty from "./AddProperty";

export default function NavBar(){
    return(
        <nav className="w-full fixed top-0 left-0 py-6 border-b border-gray-200 bg-white z-10 shadow-xs">
            <div className="max-w-full mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Airbnb Logo */}
                    <Link href="/">
                        <Image 
                            src="/Airbnb-Logo.png"
                            alt="Airbnb Logo"
                            width={80}
                            height={30}>
                        </Image>
                    </Link>

                    {/* Search Bar */}
                    <div className="flex space-x-6">
                        <SearchFilters/>
                    </div>

                    {/* Airbnb Your Home */}
                    <div className="">
                        <AddProperty/>
                    </div>
                    {/* User Menu */}
                    <div className="">
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}