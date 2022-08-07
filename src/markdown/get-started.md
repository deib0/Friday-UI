# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
// 按需引入需要使用的组件
import {Button, Tabs, Switch, Dialog} from "friday-ui"
// 引入样式
import 'friday-ui/dist/index.css'
```

接下来就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "friday-ui"
import 'friday-ui/dist/index.css'
export default {
  components: {Button}
}
</script>
```
<center>
🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉

🎉 &nbsp;&nbsp;&nbsp;你成功了！去了解更多特性吧！&nbsp;&nbsp;&nbsp;🎉

🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
</center>

下一步：[Layout 布局](#/doc/layout)
