# 胖大海图床

English | [简体中文](https://github.com/xiaohaiya/xh-img)

> In the modern Internet environment, fast and stable image access is one of the important factors to improve user experience. This article will introduce how to use Cloudflare Pages to deploy a stable unlimited image bed Imgur, realize image upload and access, and further accelerate through WordPress's WP.COM global image cache to improve image loading speed. It can be used for free image hosting solutions, alternatives such as Flickr.

## Introduction

- [Cloudflare Pages](https://pages.cloudflare.com/) is a powerful static website hosting service that combines the advantages of Cloudflare's global CDN (content distribution network).

- [Imgur](https://imgur.com/) is a A free high-quality image hosting.

- [WordPress's global image cache](https://01.wp.com/) is an efficient CDN service specifically designed to accelerate WordPress-hosted image content. It uses globally distributed nodes to cache images and provide fast access.

- [Cloudflare CDN (Content Delivery Network)](https://www.cloudflare.com/zh-cn/application-services/products/cdn/) is a service provided by Cloudflare that is designed to accelerate and protect global web applications.

### Page

![Sudden Rain and Heavy Mountains Image Hosting](https://xiaohaiya.github.io/image/2024/12/1733727671001.jpg)

[Click to experience Demo](https://img.suxun.fun/)

## How to deploy

- 1. Prepare a Cloudflare account
- 2. Fork this repository and freely modify the text in the `App.vue` and `index.html` files
- 3. Log in to `Cloudflare Dashboard`, open `Workers and Pages`, and create `Pages`
- 4. `Connect to Git`, select the project you just forked in `Github` or `Gitlab`, and click Start Setup
- 5. Just change `framework preset` to `Vue`, click Save and Deploy, and the deployment will be successful and put into use

**Picture steps**

![Sudden Rain and Heavy Mountains Picture Bed](https://xiaohaiya.github.io/image/2024/12/1733727671002.png)
![Sudden Rain and Heavy Mountains Picture Bed](https://xiaohaiya.github.io/image/2024/12/1733727671003.png)
![Sudden Rain and Heavy Mountains Picture Bed](https://xiaohaiya.github.io/image/2024/12/1733727671004.png)

### Features

- Unlimited image storage, you can upload an unlimited number of images to `Imgur`

- No need to purchase a server, hosted on `Cloudflare Pages`, 100,000 requests per day

- No need to buy a domain name, you can use the free second-level domain name `*.pages.dev` provided by `Cloudflare Pages`, and it also supports binding custom domain names

### Project address

[xh-img - Github](https://github.com/xiaohaiya/xh-img)