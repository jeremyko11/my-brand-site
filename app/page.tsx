import Link from "next/link";
import NewsletterForm from "./components/NewsletterForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            正直清泉
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/articles" className="hover:text-blue-600 transition-colors">文章</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">关于</Link>
            <Link href="#newsletter" className="hover:text-blue-600 transition-colors">订阅</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              思考世界的<br />底层逻辑
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
              探索人性、底层生存、社会关系、婚姻、职场。<br />
              记录真实，深度思考。
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/articles"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                开始阅读
              </Link>
              <Link
                href="#newsletter"
                className="px-6 py-3 border border-zinc-300 rounded-full font-medium hover:bg-zinc-100 transition-colors"
              >
                订阅更新
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 px-6 bg-zinc-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">核心内容</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <TopicCard
                title="人性"
                description="理解人的本质，洞察行为背后的动机"
              />
              <TopicCard
                title="底层生存"
                description="在资源有限的环境中如何破局"
              />
              <TopicCard
                title="社会关系"
                description="处理人与人之间的复杂关系"
              />
              <TopicCard
                title="婚姻"
                description="两性关系的真相与经营"
              />
              <TopicCard
                title="职场"
                description="职场生存法则与晋升逻辑"
              />
              <TopicCard
                title="思考"
                description="深度思考，认知升级"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">关于我</h2>
              <p className="text-zinc-600 leading-relaxed">
                一个持续思考的创作者。关注人性、关系、生存这些永恒的话题。
                相信只有深度思考，才能看透本质。
                在这里分享我的观察、思考和感悟。
              </p>
              <Link href="/about" className="inline-block mt-4 text-blue-600 hover:underline">
                了解更多 →
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 px-6 bg-zinc-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">订阅更新</h2>
            <p className="text-zinc-400 mb-8">
              输入邮箱，每周日收到我的最新思考。不发垃圾邮件。
            </p>
            <NewsletterForm />
          </div>
        </section>
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

function TopicCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-zinc-600 text-sm">{description}</p>
    </div>
  );
}
