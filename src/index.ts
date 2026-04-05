/** 小佩喂食器卡片 - 入口文件 */

// 注册到卡片选择器
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'petkit-feeder-card',
  name: '小佩喂食器',
  description: '显示小佩喂食器状态、喂食计划和历史记录',
  preview: true,
  documentationURL: 'https://github.com/ningjx/petkit-feeder-card',
});

// 导入组件（确保执行装饰器和自定义元素注册）
import './petkit-feeder-card';
import './editor';

// 导出组件
export { PetkitFeederCard } from './petkit-feeder-card';
export { PetkitFeederCardEditor } from './editor';
export type { PetkitSoloCardConfig, TimelineItem, TodaySummary } from './types';