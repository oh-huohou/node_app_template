# node_app_templet

## nextjs-fullstack-app-template
> 问题1: yarn storybook 报错
在package.json中添加
```
  //https://github.com/storybookjs/storybook/issues/21642
  "resolutions": {
    "@storybook/react-docgen-typescript-plugin": "1.0.6--canary.9.cd77847.0"
  }
```
> 问题2: about页面一直不显示。
不是不显示，是字体是白色，修改src/styles/globals.css
  --foreground-rgb: 255, 55, 255;



参考：https://juejin.cn/post/7194410416879960125#heading-13