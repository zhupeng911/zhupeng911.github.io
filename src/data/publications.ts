import type {LocaleText} from '@/types/i18n'

interface Publication {
    title: LocaleText;
    authors: LocaleText;
    time: LocaleText;
    img_path?: string;
    description: LocaleText;
    submit_status: LocaleText;
    link?: string;
}

const publications: Publication[] = [
    {
        title: {
            en: "A Blockchain-based Scheme for Privacy-Preserving and Secure Sharing of Medical Data",
            zh: "基于区块链的医疗数据隐私保护与安全共享方案"
        },
        authors: {
            en: "Haiping Huang, Peng Zhu et al.",
            zh: "Haiping Huang, Peng Zhu et al."
        },
        time: {
            en: "2020.10 | CCF-B | Computers & Security | SCI Q2",
            zh: "2020.10 | CCF-B | Computers & Security | SCI 二区"
        },
        img_path: "/publications/paper_1.png",
        description: {
            en: "A journal paper on privacy-preserving and secure medical data sharing based on blockchain technology. The supplied resume records 200+ citations.",
            zh: "基于区块链的医疗数据隐私保护与安全共享研究，谷歌学术论文引用200+。"
        },
        submit_status: {
            en: "On Computers & Security",
            zh: "发表于 Computers & Security"
        },
        link: "https://www.sciencedirect.com/science/article/pii/S0167404820302832"
    },
    {
        title: {
            en: "Blockchain-based eHealth system for auditable EHRs manipulation in cloud environments",
            zh: "基于区块链的云环境下可审计电子健康记录操作系统"
        },
        authors: {
            en: "Haiping Huang, Xiang Sun, Peng Zhu et al.",
            zh: "Haiping Huang, Xiang Sun, Peng Zhu et al."
        },
        time: {
            en: "2021.10 | CCF-B | Journal of Parallel and Distributed Computing",
            zh: "2021.10 | CCF-B | Journal of Parallel and Distributed Computing"
        },
        img_path: "/publications/paper_2.png",
        description: {
            en: "A journal paper on blockchain-based eHealth system for auditable EHRs manipulation in cloud environments. The supplied resume records 70+ citations.",
            zh: "基于区块链的可审计电子健康系统。谷歌学术论文引用70+。"
        },
        submit_status: {
            en: "On Journal of Parallel and Distributed Computing",
            zh: "发表于 Journal of Parallel and Distributed Computing"
        },
        link: "https://www.sciencedirect.com/science/article/pii/S0743731520303853"
    },
    {
        title: {
            en: "National Invention Patent: Smart Healthcare Data Storage Scheme Based on Multi-Layered Blockchain Architecture",
            zh: "国家发明专利：基于多层次区块链体系架构的智慧医疗数据存储方案"
        },
        authors: {
            en: "Haiping Huang, Peng Zhu",
            zh: "黄海平;朱鹏"
        },
        time: {
            en: "2019.10 | National Invention Patent",
            zh: "2019.10 | 国家发明专利"
        },
        img_path: "/publications/patent_1.png",
        description: {
            en: "Smart Healthcare Data Storage Scheme Based on Multi-Layered Blockchain Architecture",
            zh: "基于多层次区块链体系架构的智慧医疗数据存储方案"
        },
        submit_status: {
            en: "Publication number: CN201911037847.6",
            zh: "公开号：CN201911037847.6"
        },
        link: "https://www.zhangqiaokeyan.com/patent-detail/06120103279015.html"
    },
    {
        title: {
            en: "National Invention Patent: Account Data Processing Method, Apparatus, Terminal, and Storage Medium",
            zh: "国家发明专利：一种账户数据处理方法、装置、终端及存储介质"
        },
        authors: {
            en: "Xiaoyi Wang, Peng Zhu",
            zh: "汪小益;朱鹏"
        },
        time: {
            en: "2022.07 | National Invention Patent",
            zh: "2022.07 | 国家发明专利"
        },
        img_path: "/publications/patent_3.png",
        description: {
            en: "Account Data Processing Method and Apparatus",
            zh: "一种账户数据处理方法、装置、终端及存储介质"
        },
        submit_status: {
            en: "Publication number: CN115309817B.",
            zh: "公开号：CN115309817B"
        },
        link: "https://d.wanfangdata.com.cn/patent/ZL_CN202210766575.9_CN115309817B_20260327"
    }
]

export {publications, type Publication}
