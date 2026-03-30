# 📖 正直清泉网站 - 运营说明书

> 本网站基于 Next.js + Vercel 构建，完全免费。

---

## 一、网站现状

### 技术架构
```
你写文章 → GitHub → Vercel 自动部署 → 网站上线
```

### 已完成功能
- ✅ 首页（展示个人品牌）
- ✅ 关于页
- ✅ 文章列表页
- ✅ 5篇示例文章
- ✅ 邮件订阅（Resend）
- ✅ 社交媒体链接（抖音/小红书/快手/头条）
- ✅ 访客统计（Vercel Analytics）

### 域名
- Vercel 免费域名：`my-brand-site.vercel.app`
- 自定义域名：可在 Vercel 设置（需购买域名）

---

## 二、域名与访问

### 查看网站地址
1. 打开 https://vercel.com/dashboard
2. 点击项目 `my-brand-site`
3. 点击 **Domains** 可以看到你的网址

### 绑定自定义域名（可选）
1. 购买域名（如阿里云、腾讯云）
2. Vercel 项目 → Settings → Domains
3. 添加你的域名，按提示配置 DNS

---

## 三、写文章（直接在代码里改）

### 3.1 打开文章文件
```
app/articles/[slug]/page.tsx
```

### 3.2 找到 articles 对象
```typescript
const articles: Record<string, {
  title: string;      // 文章标题
  category: string;    // 分类：人性/底层生存/社会关系/婚姻/职场/思考
  date: string;        // 日期：2024-01-15
  content: string;     // 文章内容
}> = {
  "slug-url": {
    title: "你的标题",
    category: "分类",
    date: "2024-01-15",
    content: `...文章内容...`,
  },
};
```

### 3.3 添加新文章格式
```typescript
"your-slug-url": {
  title: "为什么老实人总是吃亏？",
  category: "人性",
  date: "2024-01-15",
  content: `
老实人吃亏，不是因为善良，而是因为他们不懂这个社会的博弈规则。

## 第一段标题

内容...

## 第二段标题

内容...
  `,
},
```

### 3.4 在文章列表页添加入口
打开 `app/articles/page.tsx`，在 articles 数组里添加：
```typescript
{
  slug: "your-slug-url",  // 和上面的一致
  title: "你的标题",
  excerpt: "摘要，一句话介绍",
  category: "分类",
  date: "2024-01-15",
},
```

### 3.5 提交发布
```bash
git add -A
git commit -m "feat: 添加新文章《你的标题》"
git push
```
Vercel 会自动检测 GitHub 更新，约1-2分钟自动上线。

---

## 四、图片管理

### 上传图片
1. 打开 GitHub 仓库：https://github.com/jeremyko11/my-brand-site
2. 进入 `public` 文件夹
3. 点击 **Add file** → **Upload files**
4. 上传你的图片

### 使用图片
```markdown
![描述](/image-name.jpg)
```

### 头像修改
在 `app/page.tsx` 里找到头像区块，替换背景色或上传图片。

---

## 五、修改个人信息

### 修改名字/描述
| 文件 | 修改位置 |
|------|----------|
| 全站名字 | `app/layout.tsx` 的 metadata.title |
| 首页标语 | `app/page.tsx` 的 Hero Section |
| 关于页内容 | `app/about/page.tsx` |

### 修改社交媒体链接
在以下文件里修改 `href` 链接：
- `app/page.tsx`
- `app/about/page.tsx`
- `app/articles/[slug]/page.tsx`

### 修改邮箱
- `app/components/NewsletterForm.tsx` - 订阅邮箱在 Resend 后台配置
- `app/about/page.tsx` - 联系邮箱

---

## 六、Vercel 后台管理

### 登录 Vercel
1. 打开 https://vercel.com
2. 用 GitHub 账号登录

### 查看访客数据
1. 项目 → **Analytics**
2. 可以看到：访问量、页面浏览、独立访客等

### 重新部署
如果发布失败或想重新部署：
1. 项目 → **Deployments**
2. 点击右上角 **Redeploy**

### 配置环境变量（发送邮件用）
1. 项目 → **Settings**
2. 左侧 **Environment Variables**
3. 确保有 `RESEND_API_KEY`

---

## 七、Resend 邮件配置

### 登录 Resend
1. 打开 https://resend.com
2. 用 GitHub 登录

### 查看发送记录
1. 左侧 **Emails**
2. 可以看到发送历史

### 修改订阅欢迎邮件
1. 打开 `app/api/subscribe/route.ts`
2. 修改邮件内容
3. 提交推送即可

---

## 八、本地开发

### 8.1 安装 Node.js
如果没有，先安装：https://nodejs.org

### 8.2 克隆代码到本地
```bash
git clone https://github.com/jeremyko11/my-brand-site.git
cd my-brand-site
npm install
```

### 8.3 本地预览
```bash
npm run dev
```
打开 http://localhost:3000 查看

### 8.4 添加环境变量（本地开发）
创建 `.env.local` 文件：
```env
RESEND_API_KEY=your_api_key_here
```

---

## 九、常见问题

### 网站打不开？
1. 去 Vercel 看 Deployments 状态
2. 有红色报错说明有代码错误
3. 联系我帮你看

### 提交后网站没更新？
1. 确认 git push 成功
2. 等待 2 分钟 Vercel 自动部署
3. 清除浏览器缓存试试

### 邮件收不到？
1. 检查垃圾邮件
2. 去 Resend 看发送记录
3. 确认邮箱格式正确

---

## 十、联系方式

有问题随时问我：
- GitHub Issue：https://github.com/jeremyko11/my-brand-site/issues

---

## 十一、日常更新流程

```
1. 写文章（修改代码）
       ↓
2. git add → commit → push
       ↓
3. Vercel 自动部署（1-2分钟）
       ↓
4. 网站自动更新
       ↓
5. 去 Vercel Analytics 看数据
```

---

## 十二、进阶功能（以后可加）

| 功能 | 说明 | 难度 |
|------|------|------|
| Notion 后台管理 | 在 Notion 写文章自动同步 | 中等 |
| 评论系统 | Giscus/Utterances | 简单 |
| SEO 优化 | 更详细的 meta 标签 | 简单 |
| 网站地图 | 自动生成 sitemap | 简单 |
| RSS 订阅 | 让读者用 RSS 阅读器订阅 | 简单 |

---

**最后更新：2024年**
