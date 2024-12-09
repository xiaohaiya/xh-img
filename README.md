# 胖大海图床

> 在现代互联网环境中，快速稳定的图片访问是提升用户体验的重要因素之一。本文将介绍如何利用Cloudflare Pages部署稳定的无限图床Imgur，实现图片上传和访问，并进一步通过WordPress的WP.COM全球图片缓存进行加速，提高图片加载速度。可用于免费图片托管解决方案，Flickr 等替代品。

简体中文 | [English](https://github.com/xiaohaiya/xh-img/blob/main/README_EN.md)

## 简介

- [Cloudflare Pages](https://pages.cloudflare.com/) 是一个强大的静态网站托管服务，结合了 Cloudflare 的全球 CDN（内容分发网络）优势。

- [Imgur](https://imgur.com/) 是一个免费优质的图床。

- [WordPress 的全球图片缓存](https://01.wp.com/) 是一个高效的 CDN 服务，专门用于加速 WordPress 托管的图片内容。它利用全球分布的节点，将图片缓存并提供快速访问。

- [Cloudflare CDN（内容分发网络）](https://www.cloudflare.com/zh-cn/application-services/products/cdn/)是由Cloudflare提供的服务，旨在加速和保护和加速全球网络应用程序。

### 页面

![胖大海图床](https://xiaohaiya.github.io/image/2024/12/1733727671001.jpg)

[点击体验Demo](https://img.suxun.fun/)

## 如何部署

- 1、准备一个 Cloudflare 账户
- 2、Fork 本仓库，自由修改`App.vue`和`index.html`文件中的文案
- 3、登录`Cloudflare Dashboard`打开`Workers 和 Pages`创建`Pages`
- 4、`连接到Git`选择`Github`或`Gitlab`中你刚刚Fork的项目，点击开始设置
- 5、只需要修改`框架预设`为`Vue`即可，点击保存并部署，即可部署成功并投入使用

**图片步骤**

![胖大海图床](https://xiaohaiya.github.io/image/2024/12/1733727671002.png)
![胖大海图床](https://xiaohaiya.github.io/image/2024/12/1733727671003.png)
![胖大海图床](https://xiaohaiya.github.io/image/2024/12/1733727671004.png)

### 特点

- 无限图片储存数量，你可以上传不限数量的图片到`Imgur`

- 无需购买服务器，托管于`Cloudflare Pages`上，每天10万次的请求

- 无需购买域名，可以使用`Cloudflare Pages` 提供的`*.pages.dev`的免费二级域名，同时也支持绑定自定义域名

### 项目地址

[XH-IMG - Github](https://github.com/xiaohaiya/xh-img)
