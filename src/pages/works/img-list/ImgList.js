import { Image, Input, Space } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";
import { ImgListStyle } from "./style";
import { AudioOutlined } from "@ant-design/icons";
export default memo(function ImgList(props) {
  const { Search } = Input;
  const { workImages } = props;
  const imgListRef = useRef();
  const [visible, setVisible] = useState(false);
  let [preImag, setPreImag] = useState([]);
  const [isReSize, setIsReSize] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [height, setHeight] = useState(0);
  const [lock, setLock] = useState(true);

  const onSearch = (value) => console.log(value);

  const reflow = (el, itemWidth, columns, gap) => {
    el.style.width = itemWidth + "px";
    // 第一行
    if (arr.length < columns) {
      el.style.top = 0;
      el.style.left = (itemWidth + gap) * arr.length + "px";
      arr.push(el.offsetHeight);
    }
    // 其他行
    else {
      // 最小的列高度
      const minHeight = Math.min(...arr);
      // 当前高度最小的列下标
      const index = arr.indexOf(minHeight);
      // console.log(index, minHeight)

      el.style.top = minHeight + gap + "px";
      el.style.left = (itemWidth + gap) * index + "px";

      arr[index] = arr[index] + el.offsetHeight + gap;
      setHeight(minHeight);
    }
  };

  //定义图片加载函数
  const waterFall = () => {
    // 加载图片
    const columns = 3; // 列数
    const gap = 20; // 间隔
    // 计算每一张图片的宽度
    const itemWidth = imgListRef.current.clientWidth / columns - gap;
    console.log(itemWidth);
    if (isReSize) {
      loadCount = 0;
      arr = [];
      isReSize = false;
    }
    let tmpCount = loadCount;
    let items = imgListRef.current.children;
    for (let i = tmpCount; i < items.length; i++, tmpCount++) {
      // 获取图片元素
      const img = items[i].getElementsByTagName("img")[0];
      console.log(img);
      // 图片有缓存时直接布局(主要在窗口尺寸变化时调用)
      if (img.complete) {
        reflow(items[i], itemWidth, columns, gap);
      }
      // 图片无缓存时先对加载速度快的图片进行布局
      else {
        img.addEventListener("load", () => {
          reflow(items[i], itemWidth, columns, gap);
        });
      }
    }
    imgListRef.current.style.height = height + 500 + "px";
    setLoadCount(tmpCount);
  };
  useEffect(() => {
    waterFall();
  });


  
  // console.log(styles);
  return (
    <ImgListStyle>
      <div className="works-img">
        <div class="img-text">Inno's Blog</div>
        <div class="img-subtext">Welcome to My World</div>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 800 }}
          size="large"
        />
      </div>
      <div className="container" ref={imgListRef}>
        {workImages.map((item, index) => {
          return (
            <div className="box">
              <img
                src={item}
                className="work-list"
                key={index}
                alt=""
                // style={styles[index]}
                onClick={function () {
                  setPreImag(workImages.slice(index));
                  preImag = workImages
                    .slice(index)
                    .concat(workImages.slice(0, index));
                  setVisible(true);
                }}
              ></img>
            </div>
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
    </ImgListStyle>
  );
});
