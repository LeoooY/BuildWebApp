import './index.less'
import React, { useState, useEffect } from 'react';

function Blog(props) {
  const { data } = props;

  const [example, setExample] = useState('initialValue');
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    // document.title = `You clicked count times`;
  });
  return (
    <div className="Blog">
      <div className="Blog-Welcome">WelCome</div>
      <div className="Blog-Content">
        博客内容
      </div>
    </div>
  )
}

export default Blog;