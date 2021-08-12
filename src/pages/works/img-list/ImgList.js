import { Image } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";

export default memo(function ImgList(props) {
  const { workImages } = props;
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);
  let [preImag, setPreImag] = useState([]);
  const [columnNum, setColumnNum] = useState(1);
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const container = imgRef.current;
      const imgItems = Object.values(container.childNodes);
      const clientWidth = container.clientWidth;
      const itemWidth = imgItems[0] && imgItems[0].offsetWidth;
      const num = Math.floor(clientWidth / itemWidth);
      const callback = (arrs) => {
        console.log(arrs);
        arrs.forEach((arr) => {
          if (arr.isIntersecting) {
            const image = arr.target;
            const data_src = image.getAttribute("data-src");
            image.setAttribute("src", data_src);
            observe.unobserve(image);
            console.log("触发");
          }
        });
      };
      const observe = new IntersectionObserver(callback);
      setColumnNum(num);
      container.style.width = num * itemWidth + "px";
      const hrr = [];
      const arr = [];
      imgItems
        .forEach((item, index) => {
          observe.observe(item);
          // console.log(index, num, item.offsetHeight, item.clientHeight);
          if (index < num) {
            arr.push({});
            hrr.push(item.offsetHeight);
          } else {
            const style = {
              position: "absolute",
            };
            item.style.position = "absolute";
            const minHeight = Math.min(...hrr);
            const minIndex = hrr.indexOf(minHeight);
            item.style.top = minHeight + "px";
            item.style.left = minIndex * itemWidth + "px";
            arr.push(style);
            // console.log('================================',item.offsetHeight,index)
            hrr[minIndex] += item.offsetHeight;
            console.log("style===", hrr);
          }
        });
      const maxHeight = Math.max(...hrr);
      container.style.height = maxHeight + "px";
      // setStyles(arr);
    });
  },);
  // console.log(styles);
  return (
    <div>
      <div className="container" ref={imgRef}>
        {workImages.map((item, index) => {
          return (
            <img
              data-src={item}
              className="work-list"
              key={index}
              alt=""
              // style={styles[index]}
              onClick={function () {
                setPreImag(workImages.slice(index));
                preImag = workImages
                  .slice(index)
                  .concat(workImages.slice(0, index));
                console.log(preImag);
                setVisible(true);
              }}
            ></img>
          );
        })}
      </div>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {preImag.map((item, index) => {
            return <Image src={item} />;
          })}
        </Image.PreviewGroup>
      </div>
    </div>
  );
});
