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
            en: `Led the development of an enterprise-level distributed messaging platform at SND Digital, delivering millions of notifications across 10+ channels including WeCom and DingTalk. Simultaneously built the official service platform for Suzhou Science and Technology Museum with integrated booking and payment, stably serving 10,000+ daily visitors.`,
            zh: `主导构建苏高新数科百万级分布式消息推送平台，覆盖企微、钉钉等10+渠道；同时打造苏州科技馆官方服务平台，集成预约支付等核心功能，日均稳健服务万+人次。`
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
            en: "Spearheaded the development of Hyperchain's data collaboration platform DataExplorer and middleware DataFlow. Combining blockchain with privacy computing, it achieves \"usable but invisible\" data sharing, breaks down data silos, and powers government applications such as anti-fraud privacy blacklists.",
            zh: "主导研发趣链科技数据协作平台 DataExplorer 与中间件 DataFlow，融合区块链与隐私计算，实现数据“可用不可见”，构建隐私黑名单等政务应用，打破数据孤岛。"
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
