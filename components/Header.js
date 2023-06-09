import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-white flex item-center p-2 lg:px-5 shadow-md">

            {/*left */}
            <div className="flex items-center">
                <Image className="text-gray-600"
                    src={'/download.png'}
                    width={40} height={40}
                    alt='fb-logo' />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <Image
                        src="/svgs/search.svg"
                        alt="search" width={20}
                        height={20} />
                    <input
                        className="hidden flex md:inline-flex  ml-2 items-center bg-transparent outline-none
                    placeholder-gray-500 flex-shrink  "
                        type="text" placeholder="Search Facebook" />
                </div>
            </div>

            {/*Center */}

            <div className="flex justify-center bg-transparent flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />

                </div>
            </div>

            {/*Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/**profile pic */}
                <p className="whitespace-nowrap font-semibold pr-3">EnDer</p>
                <ViewGridIcon className="icon"/>
            <ChatIcon className='icon'/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>
            
            </div>
        </div>
    );
}

export default Header;