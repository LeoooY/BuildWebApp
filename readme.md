### webpack打包目标

- [x] `react`
- [x] `babel` 编译loader ( `jsx`、`ES6/7/8`兼容 )
  - - [x] `@babel/plugin-proposal-class-properties`  class 实验特性支持
  - - [x] `@babel/plugin-syntax-dynamic-import` 动态导入支持
- [x] devServer 开发服务器 
- [x] HotReplace 热替换
- [x] resolve.alias 项目路径定制(`Modeul resolution`)
- [x] `Less loader` 
- [x] `code split` 代码切分
- [x] `HtmlWebpackPlugin`  定制动态生成Html文件  `HtmlWebpackPlugin`为4.0.0-beta.5版本，3.2稳定版还不支持多入口的Html注入
- [X] `Muitiple Entry` 多入口
- [x] `antd` 支持
- [x] 编译前clean `dist`目录(可选)
- [x] `compress`代码编译压缩
- [x] `sourceMap` 代码映射
- [x] `bundle` 构成分析 `webpack-bundle-analyzer`
- [x] `raw-file loader` webpack导入`markdown`文件
- [x] `marked` & `highlighjs` 解析`markdown`文件,高亮代码
```
row file loader + marked/remarkable + hightlight 
将.md文件导入为字符串再做解析、处理
```
- [x] `devtoolModuleFilenameTemplate` Point sourcemap entries to original disk location (format as URL on Windows)

- [ ] 前端路由配置 (配合devServer: v 配合nodeJs: todo)
  - - [x] 路由基本切换 
  - 路由切换动画  todo
  - 重置页面滚动 `scrollTop`
  - - [x] 代码分割、组件按需加载 `loadable(()=>import())` 

- [ ] 静态文件`loader` (图片O 音频X 视频X)


- [ ] `css`分离
- [ ] `output` 输出定制 (文件名/引入依赖自动注入)
- [ ] `import()` 按需加载
- [ ] `mode` 编译模式配置 ( `development/production` ) 不同开发环境的编译配置
```
// dev 环境不使用代码压缩，加速编译

// prod 环境使用代码压缩，生成sourceMap
``` 

### React目标
- [ ] 尝试使用 Hook
- [ ] 尝试使用 redux
- [ ] 尝试使用 mobx
- [ ] 比较 mobx、redux、react context

```
npm install --save redux


npm install --save react-redux
npm install --save-dev redux-devtools
```
