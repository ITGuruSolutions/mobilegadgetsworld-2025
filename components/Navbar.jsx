'use client'
import { Menu, Search, ShoppingCart, X, Package } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useUser, useClerk, UserButton} from "@clerk/nextjs";

const Navbar = () => {
    const { user } = useUser();
    const {openSignIn} = useClerk();

    const router = useRouter();

    const [search, setSearch] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="relative bg-white shadow-sm">
            <div className="mx-4 md:mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-3 md:py-4 transition-all">

                    <Link href="/" className="relative">
                        <Image src={assets.mobilegadgaetsworld} alt="Mobile Gadgets World" width={180} height={45} className="max-sm:w-[160px]" />
                        <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-[#fa6f06]">
                            plus
                        </p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full hover:bg-slate-200 transition-all">
                            <Search size={18} className="text-slate-600" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
                            <ShoppingCart size={18} />
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-[#fa6f06] size-3.5 rounded-full">{cartCount}</button>
                        </Link>
{
    !user ? (
 <button onClick={openSignIn} className="px-8 py-2 bg-[#38b6ff] hover:bg-[#2a9fe0] transition text-white rounded-full font-medium shadow-sm">
                            Login
                        </button>
    ) : ( <UserButton >
        <UserButton.MenuItems>
            <UserButton.Action labelIcon={<Package size={16} />} label="My Orders" onClick={() => router.push('/orders')} />
        </UserButton.MenuItems>
        </UserButton> )
}
                       

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden flex items-center gap-4">
                        {
                            user ? (
                                <div>
                                    <UserButton>
        <UserButton.MenuItems>
            <UserButton.Action labelIcon={<Package size={16} />} label="My Orders" onClick={() => router.push('/orders')} />
        </UserButton.MenuItems>
        </UserButton>
                                </div>
                                )   :(
                                    <button onClick={openSignIn}
                            className="px-6 py-2 bg-[#38b6ff] hover:bg-[#2a9fe0] text-sm font-medium transition text-white rounded-full shadow-sm"
                 
                        >
                            Login
                        </button>
                                )                     }
                        
                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
                            <ShoppingCart size={18} />
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-[#fa6f06] size-3.5 rounded-full">{cartCount}</button>
                        </Link>
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="ml-2 p-2 text-white bg-[#38b6ff] hover:bg-[#2a9fe0] rounded-full focus:outline-none transition shadow-sm"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`sm:hidden bg-white w-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 overflow-hidden'}`}>
                <div className="flex flex-col space-y-3 px-4 md:px-6">
                    <Link href="/" className="text-slate-600 py-2 border-b border-gray-100 font-medium">Home</Link>
                    <Link href="/shop" className="text-slate-600 py-2 border-b border-gray-100 font-medium">Shop</Link>
                    <Link href="/" className="text-slate-600 py-2 border-b border-gray-100 font-medium">About</Link>
                    <Link href="/" className="text-slate-600 py-2 border-b border-gray-100 font-medium">Contact</Link>
                    <form onSubmit={handleSearch} className="flex items-center w-full text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full mt-2">
                        <Search size={18} className="text-slate-600" />
                        <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                    </form>
                </div>
            </div>
            
            <hr className="border-gray-300" />
        </nav>
    )
}

export default Navbar