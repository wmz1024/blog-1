# Myblog

因为学业繁忙，今年只会添加一些小功能

这是一个使用 **Nextjs** 和 **MDX** 搭建的博客

支持 Kate 数学公式渲染，阅读时间，多标签，代码高亮，RSS，标题锚点，代码标题，typographic 语法等功能

你可以 fork 该项目，然后到 Vercel 里进行部署

### 例举**typographic**语法

```shell
3 <= 2;     // 3 ≤ 2

4 >= 4;     // 4 ≥ 4

5 +- 1;     // 5 ± 1

10 -+ 1;    // 10 ∓ 1

2 << 100;   // 2 ≪ 10000

999 >> 5;     // 999999 ≫ 5

arrow -> right;     // arrow → right
```

## \*高级功能

你可以自建组件，添加到 MDXComponents，然后在文章中引用。

getPostsFrontMatter()中填入数字，可以限制获取文章的数目

## 使用提示

- Markdown 里只有四种媒体信息: title, description, tags, date。tags 里的内容要用[]包住。

- 引用图片前在 next.config.js 中添加图片的域名

- 虽然支持了代码高亮，但没有相应的 CSS。虽然支持了标题锚点，但需要给 a 标签 添加 before 伪元素。

- 阅读时间 功能并没有使用，你可以在 _pages/posts/[slug].tsx_ 中加入 `{frontMatter.readingTime}`

如果自用，请修改 源码中所有涉及到我的信息

## 更新日志

[v1.3.0] 支持了删除线，注释，链接转超链接。支持搜索功能，源代码请见 _src/pages/search.tsx_，参见[Demo](https://blog.wll.moe/search)

[v1.3.1] 修复bugs
