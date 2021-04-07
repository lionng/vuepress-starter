---
prev: zj_develop
next: ./projectBug
---
# gd
## 版本更新内容
### commit_#16996
1. 媒体权限节点  
> **针对分链点击总计 节点 按照媒体权限单独划分了出一个节点**  

[comment]: <> (> 用户模块->所有数据权限信息，在权限组上添加`该权限组用户的媒体权限`信息  )

[comment]: <> (> 要看到媒体数据节点-改数据库==>  )

[comment]: <> (```)

[comment]: <> (INSERT INTO tb_role_menu&#40;role_id,menu_id&#41; VALUES&#40;1,505003&#41;)

[comment]: <> (```)
和灼见`commit_#16992`功能一致
