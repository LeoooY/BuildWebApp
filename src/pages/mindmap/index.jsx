import './index.less'
import React, { useState, useEffect } from 'react';
import RMind from './RMind/App';

function Mindmap(props) {
//   const { data } = props;

//   const [example, setExample] = useState('initialValue');
//   useEffect(() => {
//     // 使用浏览器的 API 更新页面标题
//     // document.title = `You clicked count times`;
//   });
  return (
    <div className="MindMap">
      mindmap
      <RMind/>
    </div>
  )
}

export default Mindmap;