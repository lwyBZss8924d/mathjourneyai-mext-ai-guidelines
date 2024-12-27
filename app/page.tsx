"use client"

import React from 'react'
import { Logo } from "../components/ui/logo"
import { SectionHeader } from "../components/ui/section-header"
import { CheckList } from "../components/ui/check-list"
import { Card } from "../components/ui/card"
import { Collapsible } from "../components/ui/collapsible"

export default function AIGuidelines() {
  const teacherChecklist = [
    "是否基于教育委员会的方针（包含信息安全相关规则、指示等）进行利用？",
    "是否遵守了学校信息安全管理的要求，未在未经允许的情况下将个人ICT终端用于校务？",
    "是否确认并遵守了生成式AI服务提供方最新的使用条款与规定？",
    "在考虑使用生成式AI的场合，是否事先审慎评估了其在校务管理或课堂中的运用目的、对学生学习效果与影响，并结合具体情况做出判断？",
    "在输入提示词（Prompt）时，是否避免输入机密信息、重要个人隐私信息等？",
    "在输入提示词时，是否完全避免了包含他人个人信息的内容？",
    "生成式AI的输出内容在被他人看是否进行了适当的保密处理或管理？",
    "是否对生成式AI产出的信息进行充分的准确性、可靠性验证（例如核查其正确性与来源），再进行引用或应用？",
    "如果引用了生成式AI的输出，是否对出处、引用来源进行了标注？"
  ]

  const studentChecklist = [
    "是否明确了使用生成式AI进行学习的目标与意义，并确保这符合教学大纲及育人目标？",
    "是否已确认并遵守生成式AI服务提供者所制定的最新使用条款，避免违规或不当使用？",
    "对生成式AI的运行机制、可能存在的缺陷或局限性（例如生成谬误、错误信息），以及判断信息真伪的方法，是否进行了适当的教学指导？",
    "在学生输入提示词时，是否强调不得输入个人隐私等敏感内容，并明确说明哪些使用场合是不适当的？",
    "是否指导学生对生成式AI产生的输出结果进行甄别、修订或补充，培养其在信息处理方面的批判性思维？",
    "学生如需引用生成式AI的输出内容，是否能根据需要进行出典、引用标注？",
    "针对不同学龄阶段、学生能力水平与使用场景，是否确保对生成式AI的使用方法与注意事项做了充分说明？"
  ]

  return (
    <div className="max-w-7xl mx-auto bg-[#f5f5f5] min-h-screen p-4">
      {/* 头部 */}
      <div className="bg-white mb-6 p-4 lg:p-8 rounded-lg shadow-sm">
        <div className="flex flex-col gap-6">
          {/* Logo和标题行 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-auto">
              {/* 品牌行 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src="/logo.svg"
                    alt="MathJourneyAI"
                    className="h-8 w-auto object-contain"
                    crossOrigin="anonymous"
                  />
                </div>
                <h2 className="text-lg md:text-xl font-bold">
                  <span className="text-[#0060C8]">MathJourneyAI</span>
                  <span className="text-gray-500 ml-2">AI Deep Research</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 flex-grow">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-[#1a4ca1] leading-tight mt-4 lg:mt-6">
                    🇯🇵日本国 初等中等教育阶段在校使用生成式AI的指导方针
                  </h1>
                  <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-0 md:items-center text-sm">
                    <div className="flex flex-wrap items-center">
                      <span className="text-gray-500">本页面内容由</span>
                      <span className="ml-2 font-medium text-[#0060C8] whitespace-nowrap">MathJourneyAI AI Deep Research</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-gray-500 md:ml-2">生成自:</span>
                      <a 
                        href="https://www.mext.go.jp/a_menu/other/mext_02412.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-gray-900 hover:text-[#0060C8] transition-colors whitespace-nowrap"
                      >
                        日本文部科学省 "生成AIの利用について" 项目
                      </a>
                    </div>
                    <div className="hidden md:block text-gray-300 mx-3">•</div>
                    <div className="flex items-center">
                      <span className="text-gray-500">发布日期:</span>
                      <span className="ml-2 text-gray-900 whitespace-nowrap">Dec 27, 2024</span>
                    </div>
                  </div>
                </div>

                {/* 资源卡片容器 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* PDF 预览卡片 */}
                  <a
                    href="https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                      <div className="grid grid-cols-12 gap-0">
                        {/* 封面图片 */}
                        <div className="relative aspect-video lg:aspect-[1.414/1] bg-gradient-to-br from-[#1a2c4c] to-[#2a3c5c] overflow-hidden col-span-5">
                          <img
                            src="/pdf-cover.jpeg"
                            alt="PDF封面预览"
                            className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                        {/* 文档信息 */}
                        <div className="p-4 col-span-7">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-50 rounded-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
                                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                              </svg>
                            </div>
                            <div className="flex-grow min-w-0">
                              <h3 className="text-base font-medium text-gray-900 leading-snug truncate">初等中等教育段階における生成AIの利活用に関するガイドライン</h3>
                              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
                                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v-2.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5z" />
                                  </svg>
                                  <span>PDF文档</span>
                                </span>
                                <span className="hidden sm:inline text-gray-300">•</span>
                                <span className="whitespace-nowrap">2.4MB</span>
                                <span className="hidden sm:inline text-gray-300">•</span>
                                <span className="whitespace-nowrap">Ver.2.0</span>
                                <span className="hidden sm:inline text-gray-300">•</span>
                                <span className="whitespace-nowrap">令和6年12月26日</span>
                              </div>
                              <div className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 group-hover:text-blue-700">
                                <span>查看或下载原文</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* 项目链接卡片 */}
                  <a
                    href="https://www.mext.go.jp/a_menu/other/mext_02412.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                      <div className="grid grid-cols-12 gap-0 h-full">
                        {/* 预览区域 */}
                        <div className="relative aspect-video lg:aspect-[1.414/1] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden col-span-5">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img
                              src="/top_a_menu_ta_imgs_logo_mext.jpg"
                              alt="文部科学省"
                              className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 to-blue-200/10 mix-blend-multiply group-hover:from-blue-100/5 group-hover:to-blue-200/5 transition-colors duration-300" />
                        </div>
                        {/* 链接信息 */}
                        <div className="p-4 col-span-7">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" />
                              </svg>
                            </div>
                            <div className="flex-grow min-w-0">
                              <h3 className="text-base font-medium text-gray-900 leading-snug truncate">生成AIの利用について</h3>
                              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
                                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z" clipRule="evenodd" />
                                  </svg>
                                  <span>官方网站</span>
                                </span>
                                <span className="hidden sm:inline text-gray-300">•</span>
                                <span className="whitespace-nowrap">文部科学省</span>
                                <span className="hidden sm:inline text-gray-300">•</span>
                                <span className="whitespace-nowrap">生成AI指南</span>
                              </div>
                              <div className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 group-hover:text-blue-700">
                                <span>访问项目原始链接</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              本指导方针面对教职员以及教育委员会等学校教育相关人员，通过阅读本资料，可在学校现场实现对生成式AI的恰当利用。
              为此，我们在此汇总了生成式AI的概要、基本思路，以及在不同场所和参与主体中需重点关注的要点。
            </p>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="space-y-6">
        {/* 参考资料编 */}
        <Card className="p-0">
          <SectionHeader number="1" title="实施检查清单" color="blue" />
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <CheckList 
              title="教职员的校务" 
              items={teacherChecklist}
            />
            <CheckList 
              title="儿童学生的学习活动" 
              items={studentChecklist}
            />
            
            <div className="md:col-span-2 bg-white p-4 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1a4ca1] mb-2">生成AI试点学校中已有的先行案例</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  就"在学校中如何运用生成式AI"开展的实践事例、研究成果等进行了先行试点，今后将不断积累并开相关成果。
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1a4ca1] mb-2">学校现场可用的培训教材等</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  文部科学省所实施的培训（含存档）以及各教育委员会自主开发的相关学习内容等示例均已在此汇总，可作为学校教学与培训的辅助材��。
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* 生成AI简介 */}
        <Card className="p-0">
          <SectionHeader number="2" title="关于学习场景中利用的先行实践案例" />
          <div className="p-6">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="/examples-used-educational-settings.png"
                alt="学习场景中的生成式AI应用案例"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </Card>

        {/* 基本思路 */}
        <Card className="p-0">
          <SectionHeader number="3" title="基本思路" color="orange" />
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold">学校地点的人本利用</h3>
                <ul className="list-disc pl-4 space-y-2 text-base md:text-lg">
                  <li>生成式AI的使用应基于"以人为本"的原则，通过适当运用，辅助教职员减轻繁琐工作、激发学生的探究思维</li>
                  <li>需要权衡��生的学习目标与生成式AI的能边界，保证技术仅作为辅助，而非替代学生的思考过程或教师的教育职责</li>
                  <li>对儿童学生而言，需要在正确的德育与价值观指引下，理解AI辅助工具的优点与局限</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold">结合生成式AI存来强化信息活用能力</h3>
                <ul className="list-disc pl-4 space-y-2 text-base md:text-lg">
                  <li>在教学各科或信息教育中，引入对生成式AI的认识，培养学生的信检索、判断和运用能力</li>
                  <li>针对生成式AI生成结果的"查证""编辑"与"再利用"环节，加强教学与演示，让学生学会批判性思考与辨别</li>
                  <li>通过校内外联合培训等方式，让教职员与学生获得持续成长的机会，掌握时代所需的数字素养</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* 学校现场中需掌握的关键点 */}
        <Card className="p-0">
          <SectionHeader number="3" title="学校现场需掌握的关键点" color="blue" />
          <div className="p-6 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              在实际的学校环境中，根据教职员的校务和儿童学生的学习活动两大主要应用场��，
              以及教育委员会等管理机构的统筹考虑，需要综合以下要点。
            </p>
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold">1. 教职员的校务</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>学校事务（如出勤、分配、办公文书等）的效率提升；</li>
                <li>教学准备（如教案的初稿、试题编写的思路辅助等）；</li>
                <li>对外或对内文案写与通知书制作；</li>
                <li>
                  运用���成式AI辅助构思教育内容或教学活动时，应考虑实际教学效果和信息安全。
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold">2. 儿童学生的学习活动</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>需在明确学习目标的前提下引导学生合理运用生成式AI；</li>
                <li>
                  让学生了解生成式AI的机制和特性（可能出现不正确信息、带有偏见的输出等）；
                </li>
                <li>培养学生的信息素养和批判性思考能力；</li>
                <li>
                  教师需对学生使用AI所生成的内容进行适时检查，防止不当内容或违规使用。
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold">3. 教育委员会等管理机构应掌握的要点</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>制定和完善统一的政策与操作指引，确保全市/全县/全区学校执行；</li>
                <li>针对教职员与学生，提供培训和使用指导；</li>
                <li>对不当使用或出现问题的状况，及时给予咨询与支持；</li>
                <li>
                  共同整理、共享各��在使用生成式AI过程中的有效实践与典型案例。
                </li>
              </ul>
            </div>

            <h3 className="font-bold mt-6">利用时的重点</h3>
            <ul className="list-disc pl-4 space-y-1 text-base md:text-lg">
              <li>AI服务的最新使用规则定期确认使用方针与条款；</li>
              <li>严禁输入个人信息或机密数据：保障学生及教职员的隐私与数据安全；</li>
              <li>著作权与引用：充分尊重著作权法律，对所引用和参考的AI输出标明出处；</li>
              <li>AI输出的正确性：生成式AI可能产生不准确或不恰当内容，需要用户进行核查、编辑和校正；</li>
              <li>信息安全与数据管理：注意服务供应商的数据处理方式，避免泄露；</li>
              <li>培养信息素养：教学过程中，使学生逐步掌握信息甄别与批判性思维能力。</li>
            </ul>

            <h3 className="font-bold mt-6">适切利用所需考虑的要点</h3>
            <ul className="list-disc pl-4 space-y-1 text-base md:text-lg">
              <li>充分理解生成式AI的输入和输出原理，不向其输入敏感或个人隐私信息；</li>
              <li>校内应就安全使用、信息道德、律合规等向师���进行培训与宣讲；</li>
              <li>对于自动生成内容，需要做好编辑、查证与质量把关，确保输出结果真实、合法合规；</li>
              <li>建立对机制，及时发现和处理生成式AI使用过程中产生的各种风险。</li>
            </ul>
          </div>
        </Card>

        {/* 参考资料 */}
        <Card className="p-0">
          <SectionHeader number="4" title="延伸阅读与参考文献" color="orange" />
          <div className="p-6 space-y-6 text-base md:text-lg leading-relaxed">
            <div className="space-y-8">
              {/* 主要参考资料 */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">主要参考资料</h3>
                <ul className="list-disc pl-4 space-y-4">
                  <li>
                    <span className="font-bold">各场所与主体对应的检查项目：</span>
                    本资料中列举了教职员的校务、学生的学习活动以及教育委员会等整体管理层面，
                    各自需要注意的细则检查要点，可作为实际操作的指引。
                    <div className="mt-2">
                      <a
                        href="https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <span>初等中等教育段階における生成AIの利活用に関するガイドライン</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">生成AI试点校先行案例：</span>
                    通过先行试点校的经验，可以为其它学校提供可借鉴的流程与方法，
                    包括系统部署、课堂融入及安全管理等方面的实践成果。
                    <div className="mt-2 space-y-2">
                      <a
                        href="https://leadingdxschool.mext.go.jp/ai_school/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <span>リーディング DX スクール事業のHP</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="https://leadingdxschool.mext.go.jp/achieve/ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <span>指定校実践事例・動画</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">学校现场可活用的培训教材：</span>
                    介绍了文部科学省所举办或录制的相关培训（含档案视频）、部分教育委员会独立开发联合企业开发的
                    学习内容案例，学校可参考并结合本校实际情况进行定制使用。
                  </li>
                </ul>
              </div>

              {/* 国内参考资料 */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">国内参考资料</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">文部科学省</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/1397369.htm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>教育情報セキュリティポリシーに関するガイドライン</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mext.go.jp/a_menu/other/data_00007.htm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>教育データの利活用に関する指針</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">内阁府</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://www8.cao.go.jp/cstp/ai/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>AI戦略</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 国际参考资料 */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">国际参考资料</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">UNESCO & OECD</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>UNESCO: Guidance for generative AI in education and research</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.oecd.org/en/publications/the-potential-impact-of-artificial-intelligence-on-equity-and-inclusion-in-education_15df715b-en.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>OECD: The potential impact of AI on equity and inclusion in education</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">各国教育部门</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://tech.ed.gov/ai-future-of-teaching-and-learning/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>US Department of Education: AI and the Future of Teaching and Learning</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.gov.uk/government/publications/generative-artificial-intelligence-in-education"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <span>UK: Generative artificial intelligence in education</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 分析报告 */}
        <Card className="p-0 mt-8 border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="relative bg-gradient-to-r from-[var(--brand-blue-start)] via-[var(--brand-blue-mid)] to-[var(--brand-blue-end)] text-[var(--text-white)] px-6 py-5 flex items-center gap-4 rounded-t-xl group animate-fade-in">
            <span className="text-2xl lg:text-3xl font-bold opacity-90 min-w-[2ch] text-center transition-opacity group-hover:opacity-100">
              5
            </span>
            <div className="w-px h-8 bg-[var(--text-white)]/20 group-hover:bg-[var(--text-white)]/30 transition-colors" />
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="MathJourneyAI Logo"
                className="w-8 h-8 object-contain"
              />
              <h2 className="text-xl lg:text-2xl font-medium tracking-tight">
                Deep Research Report
              </h2>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-t-xl" />
          </div>
          <div className="p-6 md:p-8 lg:p-10 space-y-8 bg-white">
            {/* 前言 */}
            <div className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-transparent p-6 md:p-8 rounded-xl border border-blue-100/50 shadow-sm">
              <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">前言</span>
                <div className="h-px flex-grow bg-gradient-to-r from-blue-100 to-transparent" />
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                生成式AI技术的快速发展为教育领域带来了前所未有的机遇和挑战。日本文部科学省发布的
                "初等中等教育阶段生成式AI的合理利用指南"（以下简称"指南"）
                <a href="https://www.mext.go.jp/a_menu/other/mext_02412.html" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="no-underline">
                  <sup className="text-blue-600 hover:text-blue-700">1</sup>
                </a>，
                旨在指导学校在确保学生安全和尊重教育本质的前提下，有效利用生成式AI提升教学质量和学生的学习体验。
                本报告将结合指南原文和分析结果，对指南进行深度解读，并探讨生成式AI如何帮助日本的老师和学生。
              </p>
            </div>

            {/* 使用统一容器包裹所有Collapsible，为其增加统一样式 */}
            <div className="space-y-4">
              {/* 一、指南的背景和目标 */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                <Collapsible title="一、指南的背景和目标" defaultOpen={true}>
                  <div className="space-y-6 p-6">
                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">1. AI时代教育面临的挑战</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        指南指出，生成式AI的普及对社会产生了深远影响，教育领域也不例外
                        <a href="https://www.mext.go.jp/a_menu/other/mext_02412.html" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">1</sup>
                        </a>。
                        一方面，生成式AI可以辅助教学，提高效率；另一方面，也引发了对学习意义、伦理、安全等方面的担忧
                        <a href="https://www.datacamp.com/blog/ai-in-education" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">2</sup>
                        </a>。
                      </p>
                    </div>

                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">2. 培养未来人才</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        指南强调，在AI时代，培养能够熟练使用包括生成式AI在内的技术工具、并能充分发挥个人才能的下一代至关重要
                        <a href="https://monsha.ai/blog/ethical-and-effective-use-of-generative-ai-in-education/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">3</sup>
                        </a>。
                        学校合理利用生成式AI是实现这一目标的重要手段。
                      </p>
                    </div>

                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">3. 政府的立场</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        指南提到日本政府已发布"以人为中心的AI社会原则"等文件，强调尊重人权和社会多性的前提下发展和利用AI
                        <a href="https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001.pdf" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">7</sup>
                        </a>。
                        文部科学省也基于专家意见发布了初步指南，并根据技术发展和实践经验不断完善。
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>

              {/* 二、生成式AI的基本认知 */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                <Collapsible title="二、生成式AI的基本认知">
                  <div className="space-y-6 p-6">
                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">1. 定义</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        指南将生成式AI定义为能够生成文章、图像、程序等内容的AI模型
                        <a href="https://www.neurond.com/blog/generative-ai-in-education" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">4</sup>
                        </a>。
                      </p>
                    </div>

                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">2. 能力和应用</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        生成式AI可以像与人对话一样进行交流，进行信息收集、整理和分析。
                        在教育领域，它可以辅助文章草案撰写图像生成、语言学习、编程代码生成、头脑风暴等多种场景
                        <a href="https://litslink.com/blog/generative-ai-in-education-the-impact-ethical-considerations-and-use-cases" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">5</sup>
                        </a>。
                      </p>
                    </div>

                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">3. 风险和对策</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        指南也指出了生成式AI的潜在风险，例如产生错误信息（幻觉）、偏见、缺乏透明度等。
                        针对这些风险，指南建议采用如检索增强生成等技术来抑制错误答案，并根据输入提示词来限制权限
                        <a href="https://community.openai.com/t/the-benefits-of-using-generative-ai-in-higher-education/730491" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="no-underline">
                          <sup className="text-blue-600 hover:text-blue-700">6</sup>
                        </a>。
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>

              {/* 三、基本理念 */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                <Collapsible title="三、基本理念：以人为中心的生成式AI的合理利用">
                  <div className="space-y-6 p-6">
                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">1. "以人为中心"原则</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        指南强调，AI的利用应以不侵犯人权为前提，旨在扩展人类能力，促进社会发展。
                        在学校层面，这意味着不应将AI与人对立，而是将其视为辅助人类、拓展可能性、提升效率的工具。
                      </p>
                    </div>

                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-full">
                      <h4 className="font-semibold text-lg text-gray-900">2. 学生的学习</h4>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        利用生成式AI应有助于培养学生的资质疑问能力，并以教育活动目标为导向。
                        关键在于培养学生正确设定问题、理解信息真伪的能力，而非仅仅依赖AI的输出。
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>

              {/* 四、核心要点 */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                <Collapsible title="四、核心要点：学校现场需要注意的几个方面">
                  <div className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-transparent border border-blue-100/50">
                        <h5 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">安全性</h5>
                        <p className="text-base md:text-lg text-gray-600">必须遵守相关法律法规和服提供商的规定，确保适当地使用生成式AI服务。</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-transparent border border-blue-100/50">
                        <h5 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">信息安全</h5>
                        <p className="text-base md:text-lg text-gray-600">保护学校信息安全至关重要。参考文部科学省的信息安全指南，制定符合学校实际情况的策略。</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-transparent border border-blue-100/50">
                        <h5 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">个人信息与隐私</h5>
                        <p className="text-base md:text-lg text-gray-600">尊重个人隐私，遵守个人信息保护法等法规。</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-transparent border border-blue-100/50">
                        <h5 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">公平性</h5>
                        <p className="text-base md:text-lg text-gray-600">避免因生成式AI的学习数据输入提示词中存在的偏见而产生不公平的结果。</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-transparent border border-blue-100/50">
                        <h5 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">透明度</h5>
                        <p className="text-base md:text-lg text-gray-600">整理并向相人员提供关于生成式AI使用目的、方式和风险等必要信息。</p>
                      </div>
                    </div>
                  </div>
                </Collapsible>
              </div>

              {/* 五、针对不同角色的具体指导 */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                <Collapsible title="五、针对不同角色的具体指导">
                  <div className="space-y-6 p-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 via-blue-50/50 to-transparent border border-blue-100/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-gray-900">教师在校务中的利用</h4>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-blue-700">基本理念：</span>
                            <p className="mt-1 text-gray-600">在理解AI机制和特点的前提下，积极利用AI来提高工作效率和质量。</p>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">具体应用：</span>
                            <p className="mt-1 text-gray-600">辅助备课、部团活动、学生指导、教务管理等。</p>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">注意事项：</span>
                            <p className="mt-1 text-gray-600">遵循核心要点，特别注意区分个人账号和学校账号。</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 via-blue-50/50 to-transparent border border-blue-100/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                              <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-gray-900">学生在学习活动中的��用</h4>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-blue-700">基本理念：</span>
                            <p className="mt-1 text-gray-600">理解AI是辅助工具，培养学生的资质疑问能力。</p>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">具体应用：</span>
                            <p className="mt-1 text-gray-600">学习AI本身、使用AI辅助学习、各学科应用等。</p>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">注意事项：</span>
                            <p className="mt-1 text-gray-600">避免过度依赖，保持独立思考能力。</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 via-blue-50/50 to-transparent border border-blue-100/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                              <path fillRule="evenodd" d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 4a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-gray-900">教育委员会的职责</h4>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-blue-700">基本理念：</span>
                            <p className="mt-1 text-gray-600">主导制度设计和利用方向，制定灵活政策。</p>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">具体措施：</span>
                            <p className="mt-1 text-gray-600">组织培训、共享案例、提供支持等。</p>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">注意事项：</span>
                            <p className="mt-1 text-gray-600">全面考虑安全性、公平性等因素。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapsible>
              </div>

              {/* 参考文献 */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                <Collapsible title="参考文献">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-gray-50 to-transparent rounded-xl p-6 border border-gray-100">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Works cited</h4>
                      <div className="space-y-4 text-base md:text-lg">
                        {[
                          {
                            number: "1",
                            title: "生成AIの利用について：文部科学省",
                            url: "https://www.mext.go.jp/a_menu/other/mext_02412.html"
                          },
                          {
                            number: "2",
                            title: "AI in Education: Benefits, Challenges, and Ethical Considerations | DataCamp",
                            url: "https://www.datacamp.com/blog/ai-in-education"
                          },
                          {
                            number: "3",
                            title: "Ethical and Effective Use of Generative AI in Education - Monsha.AI",
                            url: "https://monsha.ai/blog/ethical-and-effective-use-of-generative-ai-in-education/"
                          },
                          {
                            number: "4",
                            title: "Generative AI In Education: Benefits, Barriers, And Use Cases - Neurond AI",
                            url: "https://www.neurond.com/blog/generative-ai-in-education"
                          },
                          {
                            number: "5",
                            title: "Generative AI in Education: The Impact, Ethical Considerations, and Use Cases - Litslink",
                            url: "https://litslink.com/blog/generative-ai-in-education-the-impact-ethical-considerations-and-use-cases"
                          },
                          {
                            number: "6",
                            title: "The benefits of using generative AI in higher education - OpenAI Developer Forum",
                            url: "https://community.openai.com/t/the-benefits-of-using-generative-ai-in-higher-education/730491"
                          },
                          {
                            number: "7",
                            title: "初等中等教育段階における生成AIの利活用に関するガイドライン - 文部科学省",
                            url: "https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001.pdf"
                          }
                        ].map((ref) => (
                          <div key={ref.number} className="flex items-start gap-3 group">
                            <span className="text-gray-400 flex-shrink-0 mt-1">{ref.number}.</span>
                            <a
                              href={ref.url}
                              className="text-blue-600 hover:text-blue-700 transition-colors hover-underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {ref.title}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
                                   className="w-4 h-4 inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="MathJourneyAI Logo"
                className="h-8 w-auto"
              />
              <div className="text-lg font-bold">
                <span className="text-[#0060C8]">MathJourneyAI</span>
                <span className="text-gray-500 ml-2">AI Deep Research</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-sm text-gray-500">
                © 2024 MathJourneyAI. All rights reserved.
              </div>
              <div className="text-xs text-gray-400 italic">
                AI can make mistakes. Please double-check responses.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}