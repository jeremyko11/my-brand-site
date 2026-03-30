import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, {
  title: string;
  category: string;
  date: string;
  content: string;
}> = {
  "why-honest-people-lose": {
    title: "为什么老实人总是吃亏？",
    category: "人性",
    date: "2024-01-15",
    content: `
老实人吃亏，不是因为善良，而是因为他们不懂这个社会的博弈规则。

## 老实人的三个思维误区

**误区一：以为付出就有回报**

在自然界，付出和回报从来不成正比。在职场也一样，你会干活，你就得干更多的活。老板不是按劳分配，是按"谁更难被替代"分配。

**误区二：以为忍让能换来尊重**

你退一步，别人就会进一步。这是人性，不是品德问题。你越忍，别人越觉得你好欺负。

**误区三：以为真诚能感动人**

真诚是优点，但放在错误的对象身上，就是弱点。对狼讲真诚，狼只会觉得你傻。

## 那该怎么办？

**第一，学会"不"**

不敢拒绝的人，永远是那个干最多活、拿最少钱的人。你的时间很贵，别浪费在不值得的人和事上。

**第二，看清利益链条**

在任何一个环境里，都存在利益分配规则。老实人总是埋头干活，从不抬头看路。殊不知，路比干活重要一万倍。

**第三，建立自己的底线**

让别人知道你的底线在哪里。没有底线的人，别人对你的底线就是没有底线。

记住：善良是美德，但善良必须带点锋芒。没有锋芒的善良，叫软弱。
    `,
  },
  "poor-people-first-step": {
    title: "穷人翻身的第一步，不是努力",
    category: "底层生存",
    date: "2024-01-10",
    content: `
穷人翻身，最重要的不是努力，而是搞清楚钱的流动规律。

## 努力是最廉价的借口

多少人用"我很努力"来安慰自己？每天工作12小时，周末不休息，然后呢？依然穷。

因为你只是在重复劳动，不是在创造价值。

## 钱的流动规律

钱不是从劳动中来，钱是从**需求**中来。

谁有需求？谁愿意付费？谁在付费？

你要做的不是更努力地劳动，而是**找到那个愿意为你付费的人**。

## 穷人翻身的三个关键**

**第一：找到离钱近的事情**

销售、技术、流量——这些是离钱近的事情。去学这些，不是去工厂打工。

**第二：建立自己的渠道**

渠道比能力重要。你有能力，但没有渠道，钱就流不进来。

**第三：学会用杠杆**

时间杠杆、资金杠杆、流量杠杆。没有杠杆，再努力也是线性增长，不可能翻身。

记住：方向不对，努力白费。找对方向，比努力重要一百倍。
    `,
  },
  "marriage-silence": {
    title: "婚姻中的沉默，比争吵更可怕",
    category: "婚姻",
    date: "2024-01-05",
    content: `
很多婚姻不是死于争吵，而是死于沉默。

## 沉默是婚姻的癌症

争吵至少说明还在沟通，还有欲望让对方理解自己。沉默呢？沉默是我已经放弃理解你，也不再奢望你理解我。

## 为什么会沉默？

**第一种：心死了**

无数次争吵之后，发现改变不了对方，于是选择闭嘴。这是最危险的。

**第二种：不知道怎么开口**

有些话说出来像指责，不说出来又憋得慌。于是选择沉默。

**第三种：习惯了**

婚龄久了，很多人把"无话可说"当成"老夫老妻"的正常状态。其实这是慢性死亡。

## 怎么破？

**第一，打破沉默，哪怕吵架也行**

宁可吵架，不要冷战。吵架是激烈的沟通，冷战是放弃沟通。

**第二，建立"约会时间"**

每周至少有一次不带孩子的二人时间，重新找回当年的感觉。

**第三，学会说"我需要你"**

很多人嘴硬，不愿意表达需要。但每个人都需要被需要。

记住：婚姻需要经营，不经营就会死。
    `,
  },
  "workplace-hard-workers": {
    title: "职场上，为什么努力的人反而被排挤？",
    category: "职场",
    date: "2024-01-01",
    content: `
职场上，努力工作的人被排挤，不是因为别人坏，是因为你不懂职场规则。

## 职场不只是做事

职场有三个层次：**做事、做关系、做局**。

大多数人一辈子停留在"做事"这个层次，以为自己做好事就行了。错，大错特错。

## 为什么努力反而被排挤？

**原因一：你太突出，显得别人无能**

你一个人干三个人的活，别人呢？别人衬托得像废物。别人不恨你恨谁？

**原因二：你威胁到了别人**

你太优秀，显得领导没眼光。领导不打压你打压谁？

**原因三：你不懂政治**

职场政治不是阴谋，是现实。你不参与政治，政治就会来搞你。

## 怎么办？

**第一，学会藏锋**

在该表现的时候表现，不该表现的时候低调。锋芒太露，容易被折。

**第二，建立盟友**

不要一个人战斗。找到和你利益一致的人，互相支持。

**第三，了解领导的意图**

干活之前，先搞清楚领导想要什么。不是让你按自己的想法干活，是按领导的想法干活。

记住：职场是江湖，江湖不是打打杀杀，江湖是人情世故。
    `,
  },
  "why-being-used": {
    title: "你为什么总是被人利用？",
    category: "社会关系",
    date: "2023-12-28",
    content: `
被人利用，不是别人太坏，是你给了他们机会。

## 为什么是你？

**第一，你太好说话**

让你帮忙，你从不拒绝。久而久之，别人觉得用你是理所当然。

**第二，你太在乎别人怎么看**

怕拒绝之后别人不喜欢你。结果呢？别人利用的就是你这个心理。

**第三，你分不清谁值得**

对谁都掏心掏肺，把感情给错了人。你的真心，在不值得的人眼里就是傻。

## 怎么避免被利用？

**第一，学会筛选**

不是所有人都值得你帮忙。帮之前先问自己：这个人值得吗？他会回报吗？

**第二，敢于拒绝**

拒绝是你的权利。你不欠任何人。不愿意的事，就说不。

**第三，建立交换思维**

帮忙可以，但不是免费的。要么现在回报，要么将来回报。没有回报的帮忙，长期下去就是吃亏。

记住：你的善良，必须有点选择性。没有选择的善良，叫软弱。
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

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
        <article className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link href="/articles" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-8">
            ← 返回文章列表
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-zinc-500 mb-4">
              <span className="px-2 py-0.5 bg-zinc-100 rounded">{article.category}</span>
              <span>{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{article.title}</h1>
          </header>

          {/* Article content */}
          <div className="prose prose-zinc max-w-none">
            {article.content.trim().split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-bold mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <p key={i} className="font-bold mt-4">{trimmed.replace(/\*\*/g, '')}</p>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={i} className="ml-4">{trimmed.replace('- ', '')}</li>;
              }
              if (trimmed.match(/^\d+\./)) {
                return <li key={i} className="ml-4 list-decimal">{trimmed.replace(/^\d+\.\s*/, '')}</li>;
              }
              return <p key={i} className="text-zinc-600 leading-relaxed my-4">{trimmed}</p>;
            })}
          </div>

          {/* Share section */}
          <div className="mt-16 pt-8 border-t">
            <p className="text-sm text-zinc-500 mb-4">如果这篇文章对你有帮助，欢迎分享</p>
            <div className="flex gap-4">
              <a href={`https://www.douyin.com/user/MS4wLjABAAAA8WRqistYPpYcssJefHgefySAEJnyFvIaEP6oMf0wqpg`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-100 rounded-full text-sm hover:bg-zinc-200">抖音</a>
              <a href="https://xhslink.com/m/5jQO5THH0Hf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-100 rounded-full text-sm hover:bg-zinc-200">小红书</a>
            </div>
          </div>
        </article>
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
