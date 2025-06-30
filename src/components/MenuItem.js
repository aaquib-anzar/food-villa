import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../constants";
import { addItem } from "../utils/CartSlice";
const MenuItem = (props) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addItem(props.Menu))
  }
  return (
    <div  className="w-[210px] bg-amber-200 shadow-xl rounded-xl  p-2 m-2">
      <img className="w-[200px]" src={IMAGE_URL + props.Menu.imageId} />

      <p className="text-center text-xl font-bold line-clamp-1 m-2">{props.Menu.name}</p>
      <h3></h3>

      <p className="text-center">{"Rs." + props.Menu.price /100}</p>
      <span><button data-testid = "addbtn" className="" onClick={() => handleClick()}>+</button></span>
    </div>
  );
};
export default MenuItem;
