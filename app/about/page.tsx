import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            jeremyko
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/articles" className="hover:text-blue-600 transition-colors">文章</Link>
            <Link href="/about" className="text-blue-600">关于</Link>
            <Link href="/#newsletter" className="hover:text-blue-600 transition-colors">订阅</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">关于我</h1>

          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>
              你好，我是 jeremyko。
            </p>

            <p>
              一个持续思考的创作者。我关注的领域很杂，但归根结底都在研究一个核心问题：
              <strong>人在这个复杂世界里，如何活得清醒、透彻、有力量</strong>。
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 pt-4">我写什么</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>人性</strong> — 人为什么会有各种弱点，如何理解并利用这些认知</li>
              <li><strong>底层生存</strong> — 资源有限时，如何做出最优选择</li>
              <li><strong>社会关系</strong> — 人与人之间复杂的利益与情感</li>
              <li><strong>婚姻</strong> — 两性关系的真相与经营智慧</li>
              <li><strong>职场</strong> — 晋升逻辑、职场政治、如何保护自己</li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 pt-4">我的信念</h2>
            <p>
              大多数人的痛苦，来自于对世界运行规律的无知。不是他们不够努力，
              而是一开始就跑偏了。认知决定选择，选择决定命运。
            </p>
            <p>
              我希望通过我的思考，能帮你看清一些东西。不是鸡汤，是实打实的洞察。
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 pt-4">联系方式</h2>
            <p>
              如果你有想聊的话题，或者只是想交个朋友，可以联系我：
            </p>
            <p className="text-blue-600">
              contact@jeremyko.com
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2024 jeremyko. 保留所有权利。</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">小红书</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">知乎</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
