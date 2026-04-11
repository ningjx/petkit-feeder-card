/** 日期处理工具函数 */

/**
 * 获取今日日期字符串（YYYY-MM-DD）
 */
export function getTodayDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 获取今日周几数字（1-7）
 */
export function getTodayWeekdayNumber(): number {
  const day = new Date().getDay();
  return day === 0 ? 7 : day;
}