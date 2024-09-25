const Nav = ({
  titles,
  active,
  onClick,
}: {
  titles: string[];
  active: number;
  onClick: (index: number) => void;
}) => {
  return (
    <nav className="w-full h-1/6 flex flex-col gap-5 items-center ">
      <h1>Challenges</h1>
      <ul className="flex gap-5">
        {titles.map((title, i) => (
          <li
            key={`${i}__${title}`}
            className="cursor-pointer"
            style={{ opacity: active === i ? 1 : 0.5 }}
            onClick={() => onClick(i)}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
