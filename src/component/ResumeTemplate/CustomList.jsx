const CustomList = ({ data }) => {
  return (
    <span
      className="badge badge-secondary m-1"
      style={{
        backgroundColor: "gray",
        fontSize: "1.2rem",
        whiteSpace: "normal",
      }}
    >
      {data}
    </span>
  );
};

export default CustomList;
