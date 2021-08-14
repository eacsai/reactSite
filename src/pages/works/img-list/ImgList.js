import { Image } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";

export default memo(function ImgList(props) {
  const { workImages } = props;
  const imgListRef = useRef();
  const [visible, setVisible] = useState(false);
  let [preImag, setPreImag] = useState([]);
  const [columnNum, setColumnNum] = useState(1);
  const [imgIndex, setImgIndex] = useState([]);
  const [minIndex, setMinIndex] = useState(0);
  const [curIndex, setCurIndex] = useState(0)
  const [curStyle, setCurStyle] = useState([])
  const reFresh = (e, index) => {
    console.log("====开始更新高度", imgIndex);
    const freshImg = imgIndex;
    const minHeight = Math.min(...imgIndex);
    const freshMin = freshImg.indexOf(minHeight);
    freshImg[freshMin] += e.target.offsetHeight;
    setImgIndex(freshImg);
    setMinIndex(freshMin);
    setCurIndex(index);
    console.log("====结束更新高度",index,imgIndex);
    if(index >= 2){
      const left = 500 * minIndex + "px";
      const top = imgIndex[minIndex] + "px";
      const style = {
        position: "absolute",
        left,
        top
      };
      setCurStyle([...curStyle,style]);
      console.log("===============================开始设置样式2",index, curStyle);
    }
  };

  useEffect(() => {
    const nums = Math.floor(imgListRef.current.clientWidth / 500);
    setColumnNum(nums);
    const initArray = Array(nums).fill(0);
    setImgIndex(initArray);
    // setStyles(arr);
  }, []);
  // console.log(styles);
  return (
    <div>
      <div className="container" ref={imgListRef}>
        {workImages.map((item, index) => {
          //先加载第一行的图片
          if (index < columnNum) {
            return (
              <img
                src={item}
                className="work-list"
                key={index}
                alt=""
                onLoad={(e) => {
                  reFresh(e, index);
                }}
                // style={styles[index]}
                onClick={function () {
                  setPreImag(workImages.slice(index));
                  preImag = workImages
                    .slice(index)
                    .concat(workImages.slice(0, index));
                  setVisible(true);
                }}
              ></img>
            );
          } else {
            console.log("================================================开始设置样式3",index, curStyle);
            return (
              <img
                src={item}
                className="work-list"
                key={index}
                style={curStyle[index-2]}
                alt=""
                onLoad={(e) => {
                  reFresh(e, index);
                }}
                // style={styles[index]}
                onClick={function () {
                  setPreImag(workImages.slice(index));
                  preImag = workImages
                    .slice(index)
                    .concat(workImages.slice(0, index));
                  setVisible(true);
                }}
              ></img>
            );
          }
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
