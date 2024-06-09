const Header = () => {
  return (
      <header className="w-full">
          <nav className="flex flex-row">
              <button className="w-1/3 p-2 text-base text-center focus:bg-black focus:text-white border-solid border-2">users</button>
              <button className="w-1/3 p-2 text-base text-center focus:bg-black focus:text-white border-solid border-2">posts</button>
              <button className="w-1/3 p-2 text-base text-center focus:bg-black focus:text-white border-solid border-2">coments</button>
          </nav>
      </header>
  );
}

export default Header
