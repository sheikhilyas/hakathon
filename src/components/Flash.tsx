import React from "react";
export default function FlashSale() {

    return (
        <div className="w-full flex justify-center items-center mt-4 mb-1 pt-20">
            <div className="sm:w-full md:w-[80%] pb-10">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-red-500 font-bold border-1-8 border-red-500 pl-3 ml-1">Today's</h3>
                        <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-2"> Flash Sales</h1>
                    </div>
                    {/* Timer */}
                    <div className="w-[702px] h-[50px] relative flex">
                        {/* Day Section */}
                        <div className="left-0 top-0 absolute flexcol gap-1 inline-flex">
                            <div className="w-[31px] text-black text-xs font-medium font-['poopins'] leading-[18px]">
                                Days
                            </div>
                            <div className="w-[46px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
                                03
                            </div>
                        </div>
                        {/* Hours Section */}
                        <div className="w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex ">
                            <div className="w-[35px] text-black text-xs font-medium font-[poppins] leading-[18px]">
                                Hours
                            </div>
                            <div className="text-black text-[32px] font-bold">
                                23
                            </div>
                        </div>
                        {/* Miniutes Section */}
                        <div className="w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="w-[49px] text-black font-medium font-['Poppins'] leading-[18px]">
                                Miniutes
                            </div>
                            <div className="w-[39px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-widder tracking-wider w=[39px]">
                                19
                            </div>
                        </div>

                    </div>
                    {/* End */}
                </div>
            </div>
        </div>
    );
}