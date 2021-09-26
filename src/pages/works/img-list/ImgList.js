import { Image, Input } from "antd";
import { memo, useEffect, useRef, useState } from "react";
import { ImgListStyle } from "./style";
import useSize from "./winSize";
export default memo(function ImgList(props) {
  const { Search } = Input;
  const { workImages } = props;
  const imgListRef = useRef();
  const [visible, setVisible] = useState(false);
  let [preImag, setPreImag] = useState([]);

  const [height, setHeight] = useState(0);
  const size = useSize();
  useEffect(() => {
    //定义图片加载函数
    imgListRef.current.style.width = size.width * 0.66 + "px";
    // 加载图片
    const columns = 2; // 列数
    const gap = 30; // 间隔
    // 计算每一张图片的宽度
    let itemWidth = Math.max(size.width * 0.66, 1200) / columns - gap;
    const arr = [];
    let tmpCount = 0;
    let items = Array.from(imgListRef.current.children);
    for (let i = 0; i < items.length; i++, tmpCount++) {
      // 获取图片元素
      const img = items[i].getElementsByTagName("img")[0];
      // 图片有缓存时直接布局(主要在窗口尺寸变化时调用)
      if (img.complete) {
        reflow(items[i], itemWidth, columns, gap, arr);
      }
      // 图片无缓存时先对加载速度快的图片进行布局
      else {
        img.addEventListener("load", () => {
          reflow(items[i], itemWidth, columns, gap, arr);
        });
      }
    }
  }, [size, workImages]);

  useEffect(() => {
    imgListRef.current.style.height = height + 700 + "px";
  }, [height]);

  const onSearch = (value) => console.log(value);

  const reflow = (el, itemWidth, columns, gap, arr) => {
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
      el.style.top = minHeight + gap + "px";
      el.style.left = (itemWidth + gap) * index + "px";
      arr[index] = arr[index] + el.offsetHeight + gap;
      setHeight(minHeight);
    }
  };

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
        {workImages &&
          workImages.map((item, index) => {
            return (
              <div className="box">
                <figure className="sample">
                  <img
                    src={item.picUrl}
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
                  <div className="tt">
                    <div className="title">
                      <h2 className="type">11{item.type}</h2>
                    </div>
                    <figcaption>
                      <p>{item.text}</p>
                    </figcaption>
                  </div>
                </figure>
              </div>
            );
          })}
      </div>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {preImag.map((item, index) => {
            return <Image src={item.picUrl} />;
          })}
        </Image.PreviewGroup>
      </div>
    </ImgListStyle>
  );
});
