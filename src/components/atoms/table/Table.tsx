type TTable = {
  headings: { id: number; title: string }[];
  children: JSX.Element;
  className?: string;
};
const Table = ({ headings, children, className }: TTable): JSX.Element => {
  return (
    <table
      className={
        className
          ? className
          : "w-full text-center bg-white rounded-lg p-3 shadow-primary_shadow"
      }
    >
      <thead>
        <tr className="text-gray_dark border-b border-solid border-light_gray text-sm lg:text-base">
          {headings.map((item) => (
            <th
              key={item.id}
              className="font-normal pt-4 pb-2 px-3 lg:px-2 whitespace-nowrap"
            >
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
