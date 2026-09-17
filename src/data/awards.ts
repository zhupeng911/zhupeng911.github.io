import type { LocaleText } from '@/types/i18n'

interface Award {
  year: number;
  name: LocaleText;
  description: LocaleText;
}

const awards: Award[] = [
  {
    year: 2017,
    name: {
      en: "Software Designer (Intermediate) Certificate",
      zh: "软件设计师（中级）证书"
    },
    description: {
      en: "Professional qualification certificate.",
      zh: "专业技术资格证书。"
    }
  },
  {
    year: 2017,
    name: {
      en: "Second Prize, Jiangsu Blue Bridge Cup C/C++ Programming Competition",
      zh: "江苏省蓝桥杯 C/C++ 程序设计二等奖"
    },
    description: {
      en: "Provincial programming competition award.",
      zh: "省级程序设计竞赛奖项。"
    }
  },
  {
    year: 2021,
    name: {
      en: "National Invention Patent: Smart Healthcare Data Storage Scheme",
      zh: "国家发明专利：基于多层次区块链体系架构的智慧医疗数据存储方案"
    },
    description: {
      en: "Publication number: CN201911037847.6.",
      zh: "公开号：CN201911037847.6。"
    }
  },
  {
    year: 2022,
    name: {
      en: "National Invention Patent: Account Data Processing Method and Apparatus",
      zh: "国家发明专利：一种账户数据处理方法、装置、终端及存储介质"
    },
    description: {
      en: "Publication number: CN202210766575.9.",
      zh: "公开号：CN202210766575.9。"
    }
  }
]

export {awards, type Award}
