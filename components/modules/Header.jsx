function Header({text,description}) {
  return (
    <div className="w-1/2 text-center">
      <p className="my-4 text-7xl font-bold capitalize">{text}</p>
      <p className="font-semibold text-xl leading-10">
       {description}
      </p>
    </div>
  );
}

export default Header;
