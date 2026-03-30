import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "请输入有效的邮箱地址" },
        { status: 400 }
      );
    }

    // 如果你想收集订阅者名单，可以发送邮件通知自己
    // 或者接入邮件营销服务如 Resend + Audiences
    await resend.emails.send({
      from: "正直清泉 <onboarding@resend.dev>",
      to: email,
      subject: "欢迎订阅正直清泉",
      html: `
        <h1>欢迎加入正直清泉</h1>
        <p>感谢你的订阅！每周日我会发送最新思考给你。</p>
        <p>在这里你会收到：</p>
        <ul>
          <li>深度思考文章</li>
          <li>人性、职场、婚姻的真实洞察</li>
          <li>不鸡汤，只有实打实的认知</li>
        </ul>
        <p>—— 正直清泉</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("订阅错误:", error);
    return NextResponse.json(
      { error: "订阅失败，请稍后重试" },
      { status: 500 }
    );
  }
}
