import Link from "next/link";

const articles = [
  {
    slug: "why-honest-people-lose",
    title: "为什么老实人总是吃亏？",
    excerpt: "不是因为善良，而是因为他们不懂这个社会的博弈规则。",
    category: "人性",
    date: "2024-01-15",
  },
  {
    slug: "poor-people-first-step",
    title: "穷人翻身的第一步，不是努力",
    excerpt: "是搞清楚钱的流动规律，以及谁在从中获利。",
    category: "底层生存",
    date: "2024-01-10",
  },
  {
    slug: "marriage-silence",
    title: "婚姻中的沉默，比争吵更可怕",
    excerpt: "很多婚姻不是死于冲突，而是死于两个人都不再说话。",
    category: "婚姻",
    date: "2024-01-05",
  },
  {
    slug: "workplace-hard-workers",
    title: "职场上，为什么努力的人反而被排挤？",
    excerpt: "因为你太专注于做事，而忽略了做人的游戏规则。",
    category: "职场",
    date: "2024-01-01",
  },
  {
    slug: "why-being-used",
    title: "你为什么总是被人利用？",
    excerpt: "不是别人太坏，是你给了他们机会。",
    category: "社会关系",
    date: "2023-12-28",
  },
];

const categories = ["全部", "人性", "底层生存", "社会关系", "婚姻", "职场", "思考"];

export default function Articles() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            正直清泉
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/articles" className="text-blue-600">文章</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">关于</Link>
            <Link href="/#newsletter" className="hover:text-blue-600 transition-colors">订阅</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">文章</h1>
          <p className="text-zinc-600 mb-8">深度思考，真实记录</p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  cat === "全部"
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="p-6 bg-white rounded-2xl border border-zinc-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
                  <span className="px-2 py-0.5 bg-zinc-100 rounded">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <Link href={`/articles/${article.slug}`}>
                  <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-zinc-600">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2024 正直清泉. 保留所有权利。</p>
          <div className="flex gap-6">
            <a href="https://www.douyin.com/user/MS4wLjABAAAA8WRqistYPpYcssJefHgefySAEJnyFvIaEP6oMf0wqpg" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">抖音</a>
            <a href="https://xhslink.com/m/5jQO5THH0Hf" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">小红书</a>
            <a href="https://v.kuaishou.com/nm9fAml1" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">快手</a>
            <a href="https://profile.zjurl.cn/rogue/ugc/profile/?app=news_article&category_new=profile&module_name=Android_tt_url&share_did=MS4wLjACAAAAwBjzgAa12Pj-OYC3pn5dgoKqhJaKW8f-YeGrA_OCCpDf7WvHL4ZYkCimRV6ppsPW&share_token=3a9909e4-a821-4472-93ce-71ff52ac1542&share_uid=MS4wLjABAAAA3mRRBc7sVKTYwucYNzFH787lh4R3QswFvp5ucKW04zQ&timestamp=1774875080&tt_from=copy_link&upstream_biz=Android_url&user_id=105172160911&utm_campaign=client_share&utm_medium=toutiao_android&utm_source=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">今日头条</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
