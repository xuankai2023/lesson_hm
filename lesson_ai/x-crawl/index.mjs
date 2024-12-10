// es6 模块话 导包
// 解构运算符
import { 
    createCrawl,  // 返回爬虫实例
    createCrawlOpenAI // openai 配置项
  } from 'x-crawl';
  
  // 实例化爬虫应用
  const cralwApp = createCrawl({
    maxRetry: 3,
    intervalTime: { max: 2000, min: 1000}
  })
  
  const crawlOpenAIApp = createCrawlOpenAI({
    clientOptions: {
      apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
      baseURL: 'https://api.302.ai/v1/'
    },
    defaultModel: {
      chatModel: 'gpt-4-turbo-preview'
    }
  })
  
  cralwApp.crawlPage('https://movie.douban.com/chart')
    .then(async (res) => {
      const { page, browser } = res.data;
      const targetSelector = '.indent';
      await page.waitForSelector(targetSelector);
      const highlyHTML = await page.$eval(
        targetSelector, 
        (el) => el.innerHTML
      )
      console.log(highlyHTML)
    })