import type { LocaleText } from '@/types/i18n'

interface Experience {
  title: LocaleText;
  time: LocaleText;
  img_path?: string;
  description: LocaleText;
  link?: LocaleText;
}

const experiences: Experience[] = [
  {
    title: {
      en: "Suzhou SND Digital Technology Co., Ltd.",
      zh: "苏州苏高新数字科技有限公司"
    },
    time: {
      en: "2023.03 - current | Intermediate Java Backend Engineer",
      zh: "2023.03 - 至今 | 中级 Java 开发工程师"
    },
    img_path: "/experiences/snd.png",
    description: {
      en: "Focuses on distributed systems, microservice architecture, high-concurrency services, and AI application integration. Led core development for reservation, message delivery, and smart digital operations platforms.",
      zh: "专注于分布式系统、微服务架构、高并发服务和 AI 应用集成，负责预约平台、消息推送中心和智慧数字运营平台的核心开发。"
    },
    link: {
      en: "https://www.snddt.cn",
      zh: "https://www.snddt.cn"
    }
  },
  {
    title: {
      en: "QuChain Technology",
      zh: "杭州趣链科技有限公司"
    },
    time: {
      en: "2021.05 - 2023.02 | Intermediate Java Backend Engineer",
      zh: "2021.05 - 2023.02 | 中级 Java 开发工程师"
    },
    img_path: "/experiences/hyperchain.png",
    description: {
      en: "Built enterprise backend applications and developed practical experience with Spring Boot, MySQL, Redis, message queues, and distributed systems.",
      zh: "参与企业级后端应用建设，积累了 Spring Boot、MySQL、Redis、消息队列和分布式系统的项目实践经验。"
    }
  },
  {
    title: {
      en: "Nanjing University of Posts and Telecommunications",
      zh: "南京邮电大学"
    },
    time: {
      en: "2018.09 - 2021.04 | Master of Computer Technology",
      zh: "2018.09 - 2021.04 | 计算机技术专业硕士"
    },
    img_path: "/experiences/njupt.png",
    description: {
      en: "Graduated with a master's degree in Computer Technology. Published one CCF-B journal paper in Computers & Security, an SCI Q2 journal, with 200+ citations according to the supplied resume.",
      zh: "获得计算机技术专业硕士学位。在 Computers & Security 发表 1 篇 CCF-B 期刊论文（SCI 二区），简历记载引用 200+。"
    }
  },
  {
    title: {
      en: "Nanjing University of Information Science and Technology Binjiang College",
      zh: "南京信息工程大学滨江学院"
    },
    time: {
      en: "2014.09 - 2018.06 | Bachelor of Software Engineering",
      zh: "2014.09 - 2018.06 | 软件工程本科"
    },
    img_path: "/experiences/inuist.jpg",
    description: {
      en: "Earned a bachelor's degree in Software Engineering.",
      zh: "获得软件工程学士学位。"
    }
  }
]

export {experiences, type Experience}
