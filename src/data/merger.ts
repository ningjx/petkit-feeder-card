/** 时间线合并模块 */

import { FeedingPlanItem, FeedingRecord, TimelineItem } from '../types';

/** 待提交变更类型 */
export type PendingChange = {
  time: string;
  name: string;
  amount: number;
  enabled?: boolean;
  deleted?: boolean;
  isNew?: boolean;
};

/**
 * 合并计划与记录，生成时间线
 * @param plans 喂食计划列表
 * @param records 喂食记录列表
 * @param pendingChanges 待提交变更（可选）
 * @returns 合并后的时间线
 */
export function mergeTimeline(
  plans: FeedingPlanItem[],
  records: FeedingRecord[],
  pendingChanges?: Map<string, PendingChange>
): TimelineItem[] {
  const planItems: TimelineItem[] = plans.map((plan, index) => {
    return {
      id: `plan_${plan.itemId || plan.time}_${index}`,
      itemId: plan.itemId || plan.time,
      time: plan.time,
      name: plan.name,
      itemType: 'plan' as const,
      plannedAmount: plan.amount,
      isExecuted: false,
      isEnabled: plan.enabled,
      canDisable: true,
      canDelete: true,
    };
  });

  const recordItems: (TimelineItem | null)[] = records.map((record, index) => {
    let matchedPlan: TimelineItem | undefined;

    if (record.src === 1) {
      matchedPlan = planItems.find(p => {
        // 精准时间匹配
        const timeMatch = p.time === record.time;
        
        // 克数相同
        const amountMatch = p.plannedAmount === record.amount;
        
        // 匹配条件：时间相同 且 克数相同
        return timeMatch && amountMatch;
      });
    }

    if (matchedPlan) {
      matchedPlan.isExecuted = record.is_completed;
      matchedPlan.actualAmount = record.real_amount;
      matchedPlan.completedAt = record.completed_at;

      const pendingChange = pendingChanges?.get(matchedPlan.itemId);
      if (pendingChange?.enabled !== undefined) {
        matchedPlan.isEnabled = pendingChange.enabled;
        matchedPlan.status = pendingChange.enabled ? 0 : 1;
      } else {
        matchedPlan.isEnabled = record.status === 0;
        matchedPlan.status = record.status;
      }

      return null;
    }

    if (record.src === 1) {
      return {
        id: `deleted_plan_${record.id || record.time}_${index}`,
        itemId: record.id || record.time,
        time: record.time,
        name: record.name || '已删除计划',
        itemType: 'deleted_plan' as const,
        plannedAmount: record.amount,
        actualAmount: record.real_amount,
        isExecuted: record.is_completed,
        isEnabled: false,
        completedAt: record.completed_at,
        canDisable: false,
        canDelete: false,
      } as TimelineItem;
    }

    return {
      id: `manual_${record.id || record.time}_${index}`,
      itemId: record.id || record.time,
      time: record.time,
      name: record.name || '手动喂食',
      itemType: 'manual' as const,
      plannedAmount: 0,
      actualAmount: record.real_amount,
      isExecuted: record.is_completed,
      isEnabled: true,
      completedAt: record.completed_at,
      canDisable: false,
      canDelete: false,
    } as TimelineItem;
  });

  const validItems = recordItems.filter((item): item is TimelineItem => item !== null);
  return [...planItems, ...validItems]
    .sort((a, b) => a.time.localeCompare(b.time));
}

/**
 * 将待提交的新计划添加到时间线
 * @param timeline 原时间线
 * @param pendingChanges 待提交变更
 * @returns 添加新计划后的时间线
 */
export function addPendingNewPlans(
  timeline: TimelineItem[],
  pendingChanges?: Map<string, PendingChange>
): TimelineItem[] {
  if (!pendingChanges) return timeline;

  pendingChanges.forEach((change, itemId) => {
    if (change.isNew && !change.deleted) {
      const newItem: TimelineItem = {
        id: itemId,
        itemId: itemId,
        time: change.time,
        name: change.name,
        itemType: 'plan',
        plannedAmount: change.amount,
        isExecuted: false,
        isEnabled: true,
        canDisable: true,
        canDelete: true,
      };
      timeline.push(newItem);
    }
  });

  return timeline.sort((a, b) => a.time.localeCompare(b.time));
}