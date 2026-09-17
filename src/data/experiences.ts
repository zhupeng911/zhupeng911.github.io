import type {LocaleText} from '@/types/i18n'

interface Experience {
    title: LocaleText;
    time: LocaleText;
    img_path?: string;
    description: LocaleText;
    link?: LocaleText;
    category: 'work' | 'education';
}

const experiences: Experience[] = [
    {
        category: 'work',
        title: {
            en: "Suzhou SND Digital Technology Co., Ltd.",
            zh: "苏高新数字科技有限公司"
        },
        time: {
            en: "2023.03 - current",
            zh: "2023.03 - 至今"
        },
        img_path: "/experiences/snd.png",
        description: {
            en: `Responsible for the design and optimization of the Message Push Center and the Suzhou Science and Technology Museum cultural tourism project at SND`,
            zh: `在 <a href="https://www.snddt.cn">苏高新数科</a> 负责消息推送中心和苏州科技馆文旅项目的设计与优化`
        },
        link: {
            en: "https://www.snddt.cn",
            zh: "https://www.snddt.cn"
        }
    },
    {
        category: 'work',
        title: {
            en: "HyperChain Technology",
            zh: "杭州趣链科技有限公司"
        },
        time: {
            en: "2021.05 - 2023.02",
            zh: "2021.05 - 2023.02"
        },
        img_path: "/experiences/hyperchain.png",
        description: {
            en: "Built enterprise backend applications and developed practical experience with Spring Boot, MySQL, Redis, message queues, and distributed systems.",
            zh: "参与企业级后端应用建设，积累了 Spring Boot、MySQL、Redis、消息队列和分布式系统的项目实践经验"
        }
    },
    {
        category: 'education',
        title: {
            en: "Nanjing University of Posts and Telecommunications",
            zh: "南京邮电大学"
        },
        time: {
            en: "2018.09 - 2021.04 | Computer Technology | Professional Master's Degree",
            zh: "2018.09 - 2021.04 | 计算机技术 ｜ 专业硕士"
        },
        img_path: "/experiences/njupt.png",
        description: {
            en: "Research direction: Blockchain security and privacy. Published one CCF-B journal paper in Computers & Security, an SCI Q2 journal. <strong style=\"color: #d00;\">200+ citations, Outstanding Graduate Student of the Class of 2021</strong>",
            zh: "研究方向：区块链安全与隐私。在 Computers & Security 发表 1 篇 CCF-B 期刊论文，<strong style=\"color: #d00;\">引用量 200+，2021级优秀毕业研究生</strong>"
        }
    },
    {
        category: 'education',
        title: {
            en: "Nanjing University of Information Science and Technology Binjiang College",
            zh: "南京信息工程大学滨江学院"
        },
        time: {
            en: "2014.09 - 2018.06 | Bachelor of Software Engineering",
            zh: "2014.09 - 2018.06 | 软件工程 ｜ 本科"
        },
        img_path: "/experiences/inuist.jpg",
        description: {
            en: "CET-6 | Mid-level Software Designer | First Prize in Lanqiao Cup (Provincial Level)",
            zh: "CET-6 | 中级软件设计师 | 蓝桥杯省赛一等奖"
        }
    }
]

const workExperiences = experiences.filter((experience) => experience.category === 'work')
const educationExperiences = experiences.filter((experience) => experience.category === 'education')

export {experiences, workExperiences, educationExperiences, type Experience}
