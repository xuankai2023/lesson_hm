# prompt 设计模式


- 吴恩达 prompt Engineering


- LLM 开发模版
 - 代码工程
 1. npm init -y(初始化)
 2. 将dependencies:{}部分拷贝过去
   npm i 
   node 后端项目的依赖


- dotenv 的理解
    - process.env 对象
    - key 不能在代码中明文出现
    - 项目的根目录下添加.env 文件，包含key等信息
    - 不能提交到github gitignore 添加这类文件声明
    - dotenv.config()将,env 读入procedd.env 对象中


- 了解prompt 设计模式，开发功能需求 prompt 模板，AI 应用
    - 总结模板
