前端技术选型： 
1. react+webpack: 一直想尝试一个框架，以为不是很难，但当真的接触发现内容还是很多。 react本身有很多优势
2. 打算加入glup。
3. 目前css直接按照传统的方式，没有采用sass或者less的形式

技术环境： 
布局flex:未实现

dependencies:
* webpack相关包   --$ npm install webpack webpack-dev-server html-webpack-plugin --save-dev
* css\scss样式文件，图片文件相关包   
	$ npm install css-loader style-loader sass-loader node-sass --save-dev
	$ npm install file-loader url-loader --save-dev
* babel\react\es6支持包
	$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
	$ npm install jshint jshint-loader --save-dev
	$ npm install react react-dom --save
	$ npm install bootstrap@4.0.0-alpha.2 --save-dev
*bootstrap\jquery\moment支持包
	$ npm install bootstrap@4.0.0-alpha.2 --save-dev
	$ npm install jquery moment --save-dev
*antd 
	1. package.theme: config in package.json the theme field.  

structure
* app/
	1 index.jsx(program entry)
	2 components/ 
	3 utils/
* templates 
	1 index.html
	2 mobile.html
* package.json
* webpack.config.js



Problems:
1. antd no css:  import the style: import 'antd/dist/antd.css';