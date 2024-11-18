#怎么发送
#pip install request
import requests
#pip install lxml
url="https://m.ac.qq.com/comic/index/id/649513"

# 发送给谁
headers={
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'}
resp=requests.get(url,headers=headers)
# 发送请求
resp.encoding='utf-8'
#发送响应信息
print(resp.text)
#保存
