import React, { useContext, useEffect } from "react";
import ContextAPI from "../ContextAPI/ContextAPI";
import ShowItems from "./ShowItems";
import style from "./ShowItem.module.css";
import DragToRight from "../DragToRight/DragToRight";
import DragToLeft from "../DragToLeft/DragToLeft";

const ShowItem = () => {
  const context = useContext(ContextAPI);

  // useEffect(() => {
  //   fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(context.setDatas(data));
  //       context.setDatas(data);
  //     })
  //     .catch((errore) => console.log(errore));
  // }, []);

  return (
    <div>
      {context.datas.map((item) => (
        <h3 className={style.item} key={item._id}>
          <span
            className={style.left_container}
            onMouseEnter={() => context.setDragRight(true)}
            onMouseLeave={() => context.setDragRight(false)}
          >
            {context.dragRight && <DragToRight />}
            {/* {item.name} */}
            <ShowItems item={item} />
          </span>
          <span
            className={style.right_container}
            onMouseEnter={() => context.setDragLeft(true)}
            onMouseLeave={() => context.setDragLeft(false)}
          >
            {context.dragLeft && <DragToLeft />}
          </span>
        </h3>
      ))}
    </div>
  );
};

export default ShowItem;

ShowItem.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
