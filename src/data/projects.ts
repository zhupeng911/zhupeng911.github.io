import type {LocaleText} from '@/types/i18n'

interface Project {
    name: LocaleText;
    description: LocaleText;
    time: string;
    link?: string;
}

const projects: Project[] = [
    {
        name: {
            en: "SND Digital Technology Message Center",
            zh: "消息推送平台"
        },
        description: {
            en: "Based on a layered Redis+MQ+MySQL architecture and JetCache multi-level caching, the system prevents overselling and cache penetration while supporting 2000+ TPS (P99 ≤ 100ms). It utilizes Seata TCC+AT to handle high-concurrency order placement and cross-service refunds, integrates RocketMQ for asynchronous decoupling to ensure idempotency and a 99.99% success rate.",
            zh: "基于 Redis+MQ+MySQL 分层架构与 JetCache 多级缓存解决超卖及穿透，支撑 2000+TPS（P99≤100ms）；采用 Seata TCC+AT 处理高并发下单与跨服务退款；结合 RocketMQ 异步解耦，保证幂等与 99.99% 成功率。"
        },
        time: "2024.01 - 2025.02"
    },
    {
        name: {
            en: "Suzhou Science and Technology Museum Guide Reservation Center",
            zh: "苏州科技馆讲解预约中心"
        },
        description: {
            en: "Unified management for 10+ notification channels and templates; built a Kafka dual-topic system with dynamic degradation, retries, and thread-pool batching to handle 1M+ daily messages (99.6% success rate). Applied Template/Strategy patterns with Redis+Lua for non-intrusive rate limiting, ShardingJDBC for database sharding.",
            zh: "统一管理10+消息渠道与模板；基于Kafka双Topic、堆积监控与线程池实现降级重试与批量推送，支撑日均百万级吞吐（成功率99.6%）；采用模板/策略模式与Redis+Lua无侵入限流；通过ShardingJDBC分库分表。"
        },
        time: "2025.03 - current"
    },
    {
        name: {
            en: "SND Smart Digital Operations Platform",
            zh: "苏高新数字运营平台"
        },
        description: {
            en: "Built a multi-cloud storage platform supporting 100k+ daily uploads and PB-scale expansion; integrated with the data middle-platform for real-time and batch queries. Optimized performance using JetCache (cut P99 latency by 66%, 3s to 1s), Hive wide tables (reduced page query failure rate from 60% to 0%), and EasyExcel line-by-line parsing to eliminate OOM during large Excel exports.",
            zh: "支撑日均十万级上传与PB级扩容；对接数据中台实现实时与批量计算。通过JetCache将P99延迟降低66%（3s→1s），利用Hive宽表将查询失败率降至0%，改用EasyExcel解决大文件导出OOM问题。"
        },
        time: "2023.03 - 2024.07"
    }
]

export {projects, type Project}
