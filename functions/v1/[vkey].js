export async function onRequestGet({ request }) {
  const { url, method, headers, body } = request
  const newUrl = new URL(url)

  let score = 55;
   
  if (score >= 60) {
      console.log("及格");
      console.log(newUrl.pathname);
  } else {
      console.log("不及格");
      console.log(newUrl.pathname);
  }
  return fetch(`https://openani.an-i.workers.dev/${newUrl.pathname.replace('v1', '')}`, {
    method,
    headers: {
      ...headers,
      referer: 'https://openani.an-i.workers.dev',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
    },
    body
  })
}
