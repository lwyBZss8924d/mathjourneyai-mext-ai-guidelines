# MathJourneyAI MEXT AI Guidelines

日本文部科学省《初等中等教育阶段生成式AI的合理利用指南》中文解读版本。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FlwyBZss8924d%2Fmathjourneyai-mext-ai-guidelines)
[![GitHub license](https://img.shields.io/github/license/lwyBZss8924d/mathjourneyai-mext-ai-guidelines)](https://github.com/lwyBZss8924d/mathjourneyai-mext-ai-guidelines/blob/main/LICENSE)

## 项目简介

本项目是对日本文部科学省发布的《初等中等教育阶段生成式AI的合理利用指南》的中文解读版本。我们旨在帮助中文读者理解日本在教育领域应用生成式AI的最新政策和实践指南。

### 在线演示

访问 [https://mext-ai-guidelines.mathjourneyai.com](https://mext-ai-guidelines.mathjourneyai.com) 查看在线演示。

### 项目状态

- ✅ 基础框架搭建
- ✅ 主要内容翻译
- ✅ 响应式设计
- ✅ 深度解读报告
- ✅ 案例分析
- ✅ 评论功能

## 主要内容

- 生成式AI在教育中的基本认知
- 学校现场的实施要点
- 教师和学生的使用指南
- 实际应用案例分析
- 安全和伦理考虑

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-themes

## 本地开发

```bash
# 克隆项目
git clone https://github.com/lwyBZss8924d/mathjourneyai-mext-ai-guidelines.git
cd mathjourneyai-mext-ai-guidelines

# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build

# 启动生产服务器
yarn start
```

## 部署

本项目使用 Vercel 进行部署。每次推送到 main 分支都会自动触发部署。

### 环境变量

部署时需要设置以下环境变量：

```env
NEXT_PUBLIC_SITE_URL=https://mext-ai-guidelines.mathjourneyai.com
```

## 贡献指南

欢迎提交 Issue 和 Pull Request。在提交 PR 之前，请确保：

1. 代码已经过 lint 检查
2. 所有测试通过
3. 提交信息清晰明了

### 分支命名规范

- 功能开发：`feat/feature-name`
- Bug 修复：`fix/bug-name`
- 文档更新：`docs/update-name`
- 性能优化：`perf/optimization-name`

### 提交信息规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

类型（type）：
- feat：新功能
- fix：修复
- docs：文档
- style：格式
- refactor：重构
- test：测试
- chore：构建过程或辅助工具的变动

## 许可证

MIT License

## 致谢

- 日本文部科学省
- MathJourneyAI 团队
- 所有贡献者

## 相关资源

- [日本文部科学省原文](https://www.mext.go.jp/a_menu/other/mext_02412.html)
- [MathJourneyAI 官网](https://www.mathjourneyai.com)
- [项目文档](https://docs.mathjourneyai.com/mext-ai-guidelines) 