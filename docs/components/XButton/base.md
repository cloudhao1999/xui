# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo

```vue
<template>
  <x-button>默认按钮</x-button>
  <x-button type="primary">主要按钮</x-button>
  <x-button type="success">成功按钮</x-button>
  <x-button type="info">信息按钮</x-button>
  <x-button type="warning">警告按钮</x-button>
  <x-button type="danger">危险按钮</x-button>
</template>
```
:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |
