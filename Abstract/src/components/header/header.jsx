export default function HeaderComp() {
  return (
    <header className="grid-cols-2 flex justify-between items-center bg-[#000000] h-[88px]">
      <div className="flex items-center">
        <img src="../../images/logo.png" alt="Logo" className="w-126px h-32px" />
        <a href="http://google.com" className="text-[24px] text-white">
          Help Center
        </a>
      </div>
      <div className="flex justify-between gap-x-[10px]">
          <button className={"text-[24px] text-white w-[230px] h-[49px] bg-[#191a1b] rounded-[2vw] border-white"}>
              Submit a request
          </button>
        <button className={"text-[24px] w-[140px] h-[49px] text-white bg-blue rounded-[2vw] border-(#fff)"}>Sign in</button>
      </div>
    </header>
  );
}
