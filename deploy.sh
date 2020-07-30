# 拉去代码
git pull

# 安装依赖
npm --registry=https://registry.npm.taobao.org install

# 打包
npm --registry=https://registry.npm.taobao.org run build

# 删除容器
docker rm -f zcool

# 映射容器 - 启动服务
docker run -d --name=zcool \
-p 8088:80 \
-v $PWD/build:/usr/share/nginx/html \
8cf1bfb43ff5
