/** 头部样式 */

import { css } from 'lit';

export const headerStyles = css`
  /* 头部 */
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--divider-color);
    position: relative;
  }
  
  .header-title {
    font-size: 15px;
    font-weight: bold;
    z-index: 1;
    /* 设备名称在底层，允许日期覆盖 */
    position: relative;
  }
  
  .header-date {
    font-size: 14px;
    font-weight: bold;
    color: var(--secondary-text-color);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    /* 背景色与卡片背景相同，两边渐变过渡更短 */
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--card-background-color, var(--card-background-color, var(--paper-card-background-color, #fff))) 2%,
      var(--card-background-color, var(--card-background-color, var(--paper-card-background-color, #fff))) 98%,
      transparent 100%
    );
    /* 背景比文字宽一些 */
    padding: 2px 12px;
    border-radius: 4px;
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    z-index: 3;
  }
`;