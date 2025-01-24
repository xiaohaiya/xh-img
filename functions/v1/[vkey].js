export async function onRequestGet({ request }) {
  const { url, method, headers, body } = request
  const newUrl = new URL(url)

  const crypto = require('crypto');
  // 生成密钥和IV
  const algorithm = 'aes-256-cbc';
  const key = crypto.randomBytes(32); // 256位密钥
  const iv = crypto.randomBytes(16); // 128位IV

  // 加密数据
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update('secret message', 'utf8', 'hex');
  encrypted += cipher.final('hex');
  console.log('Encrypted:', encrypted);
  console.log('Key:', key.toString('hex'));
  console.log('IV:', iv.toString('hex'));

  /*return fetch(`https://i.imgur.com/${newUrl.pathname.replace('vh-img-proxy', '')}`, {
    method,
    headers: {
      ...headers,
      referer: 'https://www.vhimg.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
    },
    body
  })*/
}
