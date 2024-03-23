import data from "../data/navbar";

const NavbarList = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex gap-12">
        {data.map((item, index) => (
          <li
            key={index}
            className="border-b-2 border-transparent text-[1.25rem] font-semibold text-indigo-700 transition-all duration-300 ease-linear hover:border-indigo-700 dark:text-indigo-300 dark:hover:border-indigo-300"
          >
            <a href="#">{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarList;
