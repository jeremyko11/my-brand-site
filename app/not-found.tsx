import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            正直清泉
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/articles" className="hover:text-blue-600 transition-colors">文章</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">关于</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-zinc-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">页面不存在</h2>
          <p className="text-zinc-600 mb-8">你访问的页面可能已被删除或地址有误</p>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </main>

      <footer className="border-t py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-zinc-500">
          <p>© 2024 正直清泉. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}
