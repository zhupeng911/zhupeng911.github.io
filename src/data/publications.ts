import type { LocaleText } from '@/types/i18n'

interface Publication {
  title: string;
  authors: string;
  time: string;
  img_path?: string;
  description: LocaleText;
  submit_status: LocaleText;
  link?: string;
}

const publications: Publication[] = [
  {
    title: "A Blockchain-based Scheme for Privacy-Preserving and Secure Sharing of Medical Data",
    authors: "Peng Zhu et al.",
    time: "CCF-B | Computers & Security | SCI Q2",
    description: {
      en: "A journal paper on privacy-preserving and secure medical data sharing based on blockchain technology. The supplied resume records 200+ citations.",
      zh: "基于区块链的医疗数据隐私保护与安全共享研究。简历记载该论文已获得 200+ 次引用。"
    },
    submit_status: {
      en: "Journal paper",
      zh: "期刊论文"
    }
  }
]

export {publications, type Publication}
