export default function Cart(){
    return (
        <div className="font-sans">
          <div className="grid lg:grid-cols-3 gap-10 p-4">
            <div className="lg:col-span-2 bg-white divide-y">
              <div className="flex items-start max-sm:flex-col gap-4 py-4">
                <div className="w-32 h-full shrink-0">
                  <img 
                    src="https://readymadeui.com/images/product6.webp" 
                    alt="Black T-Shirt" 
                    className="w-full aspect-[112/149] object-contain" 
                  />
                </div>
    
                <div className="flex items-start gap-4 w-full">
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1">Black T-Shirt</h3>
                    <div className="space-y-1">
                      <h6 className="text-sm text-gray-800">Size: <strong className="ml-2">7.5</strong></h6>
                      <h6 className="text-sm text-gray-800">Color: <strong className="ml-2">Black</strong></h6>
                    </div>
    
                    <div className="mt-6 flex flex-wrap gap-4">
                      <button type="button" className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
    
                  <div className="ml-auto text-right">
                    <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                      <button type="button" className="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                          <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" />
                        </svg>
                      </button>
                      <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                      <button type="button" className="border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 512 512">
                          <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-base font-bold text-gray-500 mb-1"><strike className="font-medium">$22.5</strike></h4>
                      <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}