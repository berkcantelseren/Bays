export default function Navbar() {
  return (
    <div className="h-[12vh] z-[100] w-full top-0 sticky">
      <div
        className="flex items-center h-full w-[80%] xl:w-[90%] mx-auto bg-[#1E1E1E] mt-5 rounded-xl
      "
      >
        {/* Logo Section  */}
        <div className="flex items-center justify-between align-middle w-[80%] h-[60%] mx-auto">
          <h1 className="text-white font-bold text-2xl">BAYS</h1>

          <div className="absolute left-1/2 -translate-x-1/2 flex space-x-6 text-white">
            <a href="">Home</a>
            <a href="">Featuring</a>
            <a href="">Pricing</a>
          </div>
          <div className="ml-auto flex space-x-4">
            <a
              href="#_"
              className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white"
            >
              Login
            </a>
            <a
              href="#_"
              className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
