# 📚 正直清泉网站 - Notion 后台配置图文教程

> 用浏览器打开这个文件，按照步骤一步步操作即可。

---

## 第一步：创建 Notion Integration（获取 API Key）

### 1.1 打开 Notion 开发者页面

**复制下面链接到浏览器打开：**
```
https://www.notion.so/my-integrations
```

![示意](https://i.imgur.com/placeholder.jpg)
> 打开后你会看到这样的页面，点击右上角 **+ New integration**

---

### 1.2 点击新建集成

点击 **+ New integration** 按钮

---

### 1.3 填写集成信息

填写以下内容：

| 字段 | 填什么 |
|------|--------|
| **Name** | 正直清泉网站 |
| **Associated workspace** | 选择你的工作区 |

填写完成后，点击 **Submit**（提交）

---

### 1.4 复制 API Key

1. 进入你创建的 integration 页面
2. 找到 **Internal Integration Token** 部分
3. 点击 **Show** 按钮显示密钥
4. 点击 **Copy** 复制

**重要：这个密钥以 `secret_` 开头，复制好放在一边备用！**

---

## 第二步：创建文章数据库

### 2.1 创建新页面

1. 打开 https://www.notion.so
2. 点击左侧 **+ New page**

---

### 2.2 添加数据库

1. 在新页面里
2. 鼠标移到页面顶部工具栏
3. 点击 **Table** 图标（或输入 `/table`）
4. 选择 **Full page** 表格

---

### 2.3 设置列（数据库的列）

点击每个列的标题修改类型：

| 列名 | 类型 | 设置方法 |
|------|------|----------|
| Title | Title | 默认就有，不用改 |
| Slug | Text | 点击 **+** → 选 **Text**，改名 Slug |
| Category | Select | 点击 **+** → 选 **Select**，改名 Category |
| Date | Date | 点击 **+** → 选 **Date**，改名 Date |
| Excerpt | Text | 点击 **+** → 选 **Text**，改名 Excerpt |
| Published | Checkbox | 点击 **+** → 选 **Checkbox**，改名 Published |

---

### 2.4 添加测试文章

在表格里添加一行，填写内容：

| 列 | 填什么 |
|----|--------|
| Title | 为什么老实人总是吃亏？ |
| Slug | why-honest-people-lose |
| Category | 人性 |
| Date | 2024-01-15 |
| Excerpt | 不是因为善良，而是因为他们不懂这个社会的博弈规则。 |
| Published | ✅ 打勾 |

**注意：Slug 必须是英文，用横线连接，不能有空格！**

---

## 第三步：连接数据库到 Integration

### 3.1 打开数据库页面

打开你刚才创建的数据库页面

---

### 3.2 添加连接

1. 点击右上角 **...**（更多菜单）
2. 向下滚动找到 **+ Add connections**
3. 点击它

---

### 3.3 搜索并添加

1. 在搜索框里输入你创建的 integration 名字：`正直清泉网站`
2. 点击出现的选项
3. 确认添加

---

### 3.4 获取数据库 ID

看你的数据库 URL：

```
https://notion.so/你的名字/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?v=...
```

**xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx** 这32位就是数据库 ID！

复制好备用。

---

## 第四步：把信息发给我

完成以上步骤后，你手里应该有：

1. **API Key**：`secret_xxxxxxxxxxxx...`
2. **数据库 ID**：`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

把这两个发给我，我来帮你完成代码配置！

---

## 常见问题

**Q：找不到 Table 选项？**
A：在页面顶部输入 `/table` 然后按回车

**Q：Slug 是什么？**
A：是文章链接的别名，如 `why-honest-people-lose`，必须是英文和横线

**Q：添加不了 connection？**
A：确认你已经在 integration 页面正确创建了 integration，并且名字是「正直清泉网站」

---

## 完成后，把这两个发给我：

```
API Key: secret_xxx...
数据库 ID: xxxx-xxxx-xxxx-xxxx-xxxx
```
