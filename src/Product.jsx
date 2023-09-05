// eslint-disable-next-line react/prop-types
const Product = ({ title, category }) => {
  return (
    <div className=" bg-yellow-300 flex flex-col gap-2 p-2 border border-black text-[40%] w-20 m-2">
      <div>{title}</div>
      <hr />
      <div>{category}</div>
    </div>
  );
};
export default Product;
