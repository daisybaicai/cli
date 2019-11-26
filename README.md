# cli

## webpack 初步入门

- 当执行npx webpack命令的时候，webpack会自动查找项目中src目录下的index.js文件，然后进行打包，生成一个dist目录并存在一个打包好的main.js文件。

- path.resolve() 将当前路径解析为绝对路径。

- rules loader执行顺序从下至上。

- 处理对应文件，需要对应的loader。

## webpack 管理输出
- 如果我们都是手动引入资源，应用程序增长，文件名哈希输入多个bundle，手动管理就会非常困难。

- entry 设置多入口，在output根据名字输出。

- HtmlWebpackPlugin: 帮助生成html文件。默认配置下，在output路径下生成index.html并且把output输出的js都通过script标签都方式插入到index.html中

- CleanWebpackPlugin,每次清除output目录下到文件，引入时用对象引入{},使用时不用传参。

- webpack-manifest-plugin-「你的模块映射到输出 bundle 的过程」保持追踪.

# webpack 开发
- 快速定位错误所在行数， devtools：inline-source-map.
- 观察模式 - watch 当文件修改会自动重新编译。浏览器还需要自己重新刷新
- webpack-dev-server，在配置文件下devServer指定contentBase路径，再命令行运行npm run webpack-dev-server --open 即可。能使得每次改动实时刷新，并且浏览器也刷新。
- webpack-dev-middleware 结合express 。可以将webpack处理后当文件传递给服务器。