import React, { memo, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import axios from 'axios';
import marked from "@/utils/marked"
import {
  getHomePagesAction,
  getPageTypesAction,
} from "@/pages/home/store/actionCreators";
import { PageStyle, TypeList } from "./style";


export default memo(function PageAll() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePagesAction());
    dispatch(getPageTypesAction());
  }, [dispatch]);

  const { pageData, types } = useSelector((state) => ({
    pageData: state.getIn(["home", "homePages"]),
    types: state.getIn(["home", "pageTypes"]),
  }));
  console.log(pageData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const [listData, setListData] = useState(null);
  console.log(listData);
  const indexChange = useCallback(
    (item, index) => {
      console.log(item, pageData[0].type);
      setCurrentIndex(index);
      if (item === "All") {
        setListData(pageData);
      } else {
        const tmpData = pageData.filter((page) => page.type === item);
        setListData(tmpData);
      }
    },
    [pageData]
  );

  return (
    <PageStyle>
      <BackTop />
      <TypeList>
        {types.map((item, index) => (
          <div className="type-list" key={index}>
            <text
              className={index === currentIndex ? "active" : ""}
              key={index}
              onClick={() => indexChange(item, index)}
            >
              {item}
            </text>
          </div>
        ))}
      </TypeList>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={listData === null ? pageData : listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={<img width={372} alt="logo" src={item.pic} />}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href="http://localhost:3000/#/pages/detail">{item.title}</a>}
              description={item.description}
            />
            <div dangerouslySetInnerHTML={{__html:marked(item.introduce.length>150? (item.introduce.slice(0,150)+"...") : item.introduce)}}>
            </div>
          </List.Item>
        )}
      />
    </PageStyle>
  );
});
