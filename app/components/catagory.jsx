import Image from "next/image";

export default function Catagory() {
    return(
        <section className=" bg-slate-100 pb-4 ">
            <h1 className="ml-10 md:ml-20 text-2xl font-bold pt-6">Our Product Range</h1>
            <div className=" md:flex justify-center items-center gap-2 py-8 flex-wrap px-10">
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="tile.png" alt="" />   
                </div>
                <div>
                    <h2>TILE ADHESIVES,</h2>
                    <h2>TILE GROUTS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline" ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="bond.png" alt="" />   
                </div>
                <div>
                    <h2>BONDING AGENTS,</h2>
                    <h2>ADMIXTURS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="ac.png" alt="" />   
                </div>
                <div>
                    <h2>CENTRAL AC COATINGS,</h2>
                    <h2>DUCT GLUE</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="waterproof.png" alt="" />   
                </div>
                <div className="">
                    <h2>WATER PROOF COATINGS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="crackfiller.png" alt="" />   
                </div>
                <div className="" >
                    <h2>CRACK FILLERS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="jointcompound.png" alt="" />   
                </div>
                <div className="">
                    <h2>JOINT COMPOUNDS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="concreat.png" alt="" />   
                </div>
                <div>
                    <h2>CONCREAT REPAIRING MORTAR</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="bitumen.png" alt="" />   
                </div>
                <div className="">
                    <h2>COLD BITUMEN EMULSIONS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            <div className="flex items-center  p-4 md:w-1/4 mb-2 md:mb-0 bg-white shadow font-semibold relative group cursor-pointer">
                <div className="text-blue-900 pr-4">
                    <img className="w-10 group-hover:scale-150 transition duration-500 cursor-pointer" src="texturepaint.png" alt="" />   
                </div>
                <div className="">
                    <h2>TEXTURE PAINTS</h2>
                </div>
                <div className="absolute top-3 right-3">
                <ion-icon name="arrow-forward-outline"  ></ion-icon>
                </div>
            </div>
            </div>
        </section>
    )
}