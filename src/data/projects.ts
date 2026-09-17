import type { LocaleText } from '@/types/i18n'

interface Project {
  name: LocaleText;
  description: LocaleText;
  time: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: {
      en: "Suzhou Science and Technology Museum Guide Reservation Platform",
      zh: "苏州科技馆讲解预约平台"
    },
    description: {
      en: "Core developer of the official service platform for ticket reservations, real-name verification, online payment, and order management, serving 10,000+ visitors per day. Designed custom session scheduling and SKU lifecycle management with XXL-JOB, Redis Lua pre-deduction, RocketMQ asynchronous processing, and MySQL optimistic locking. The inventory service reached P99 latency of ≤100 ms, supported peaks of 2,000+ TPS, and achieved 99.8% inventory accuracy. Implemented Seata TCC/AT transactions, JetCache multi-level caching, reliable order messaging, API Key + Secret authentication, and configurable rate limiting.",
      zh: "项目核心开发，负责苏州科技馆官方服务平台的门票预约、实名制管理、在线支付和订单管理，日均服务 10,000+ 人次。基于 XXL-JOB 实现场次排期与 SKU 生命周期管理，采用 Redis Lua 预扣减、RocketMQ 异步处理和 MySQL 乐观锁构建分层库存方案，库存接口 P99 ≤ 100ms，支持 2,000+ TPS 峰值下单，库存准确率达 99.8%。同时落地 Seata TCC/AT 分布式事务、JetCache 多级缓存、订单可靠消息、API Key + Secret 鉴权和可配置限流。"
    },
    time: "2025.03 - current"
  },
  {
    name: {
      en: "SND Digital Technology Message Center",
      zh: "苏高新数科消息推送中心"
    },
    description: {
      en: "Core developer of a distributed message center integrating 10+ channels, including WeChat Mini Programs, DingTalk, SMS, email, Feishu, and WeCom, with million-scale daily delivery. Built a Kafka dual-topic pipeline with backlog monitoring, automatic degradation, batch delivery, and retry handling, achieving a 99.6% delivery success rate. Standardized channel processing with Template Method and Strategy patterns, added Redis + Lua distributed rate limiting with four algorithms, and partitioned high-volume logs by channel and time using ShardingJDBC. Also contributed to 75%+ unit-test coverage, two high-tech research topics, and one national invention patent application.",
      zh: "项目核心开发，搭建分布式消息推送中心，统一接入微信小程序、钉钉、短信、邮件、飞书、企微等 10+ 消息渠道，支持日均百万级消息推送。基于 Kafka 双 Topic 架构实现消息堆积监控、自动降级、批量推送和失败重试，消息推送成功率达 99.6%。通过模板方法和策略模式规范消息处理流水线，基于 Redis + Lua 实现包含固定窗口、滑动窗口、令牌桶和漏桶在内的分布式限流，并使用 ShardingJDBC 按渠道和时间分片存储海量消息日志。单元测试覆盖率达到 75%+，参与 2 个高新课题并申报 1 项国家发明专利。"
    },
    time: "2024.01 - 2025.02"
  },
  {
    name: {
      en: "SND Smart Digital Operations Platform",
      zh: "苏高新智慧数字运营平台"
    },
    description: {
      en: "Core developer of a digital-twin operations platform combining IoT, big data, and AI for intelligent building management. Designed a unified file storage service supporting Alibaba Cloud, Huawei Cloud, and MinIO, with 100,000+ daily uploads and PB-scale elastic capacity. Built reusable data dictionary, tag, physical-space, and subsystem services, and integrated real-time and batch queries with the data platform. Reworked high-concurrency paths with JetCache to reduce P99 latency from 3 s to 1 s, used Hive wide tables to reduce query failure from 60% to 0%, and replaced Apache POI DOM exports with streaming Alibaba EasyExcel to prevent out-of-memory errors.",
      zh: "项目核心开发，参与建设融合数字孪生、物联网、大数据和人工智能的智慧运营平台，服务建筑体的智能化管理。搭建统一文件存储服务，支持阿里云、华为云和 MinIO 等存储服务商，稳定支撑日均十万级文件上传和 PB 级弹性扩容；建设数据字典、标签库、物理空间和子系统等通用基础服务，并对接数据中台实现实时查询、历史数据批量查询和实时计算。通过 JetCache 重构高并发链路，将核心接口 P99 从 3 秒降低至 1 秒；通过 Hive 宽表将页面查询平均失败率从 60% 降至 0%；使用 Alibaba EasyExcel 流式导出替代 Apache POI DOM 模式，解决大文件导出 OOM 问题。"
    },
    time: "2023.03 - 2024.07"
  }
]

export {projects, type Project}
