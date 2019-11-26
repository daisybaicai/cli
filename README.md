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