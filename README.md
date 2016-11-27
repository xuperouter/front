前端技术选型： 
1. react
2. webpack

技术环境： 
布局flex。

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



