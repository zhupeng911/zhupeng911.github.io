import type {LocaleText} from '@/types/i18n'

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
    }
]

export {awards, type Award}
