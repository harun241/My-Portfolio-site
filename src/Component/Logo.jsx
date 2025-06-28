const Logo = () => {
  return (
    <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] shadow-lg">
      {/* Icon Part */}
      <div className="bg-white text-blue-600 font-black text-xl w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-500 shadow-inner">
        MH
      </div>

      {/* Text Part */}
      <div className="text-white leading-tight">
        <h1 className="text-lg font-bold tracking-wide"> Harun</h1>
        
      </div>
    </div>
  );
};

export default Logo;
