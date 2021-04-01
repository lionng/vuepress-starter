---
prev: gd_develop
next: ./docking
---
## project bug
### 灼见
1. 模块依赖类错误
 > administration模块依赖dependency模块,项目设计不合理,在administration模块实例化了一个dependency模块中的类,由于扩展，在这个类增加了一个属性直接,set
赋值,直接编译dependency模块,报错`java: 找不到符号 代表set方法找不到，idea没提示错误`,需要先编译dependency模块,install到本地,再编译dependency模块
