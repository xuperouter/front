前端技术选型： 
1. react+webpack: 一直想尝试一个框架，以为不是很难，但当真的接触发现内容还是很多。 react本身有很多优势
2. 打算加入glup。
3. 目前css直接按照传统的方式，没有采用sass或者less的形式
4. 前端加入React-Router来设置路由信息
5. 前后端数据交互可以采用 Fetch

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
*bcrypt.js  npm install bcrypt.js





structure
* app/
	1 index.jsx(program entry)
	2 components/ 
	3 containers/
	4 actions/
	5 reducers/
	3 utils/
* templates 
	1 index.html
	2 mobile.html
* package.json
* webpack.config.js



Problems:
1. antd no css:  import the style: import 'antd/dist/antd.css';
2. You are using prebuilt antd,please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
3. from 'redux' and from 'react-redux' is different

Router:
/:  default is login page
/login: 
/register:用户注册


deploy：
Ubuntu:
1. install nginx

#nginx启动和关闭：
#nginx -c /etc/nginx/nginx.conf
#nginx -s stop


程序逻辑
1. 如果用户已经登陆了！直接进入主界面！否则进入登陆界面，已经通过登陆界面可以进入注册界面


为了解决跨域的问题，这里在部署代码的nginx服务器上反向代理


12/16  注册登陆界面写好了,登陆逻辑实现
将要写:  注册逻辑.  前端密码加密实现  rememberme功能 前端本地存储token  
		前端页面结构设计,注册登陆界面:  直接单独界面写死目前.
		用户不友好  这里要考虑交互设计  如何让路人注册.  引导用户的眼球
		服务器端数据库需要开始设计起来