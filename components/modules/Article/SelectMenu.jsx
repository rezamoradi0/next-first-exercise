import Tag from "../Tag";

function SelectMenu({ items }) {
  return (
    <div className="flex items-center gap-x-2">
      {items.map((item, i) => {
        return <Tag text={item.text} url={item.url} key={i} />;
      })}
    </div>
  );
}

export default SelectMenu;
