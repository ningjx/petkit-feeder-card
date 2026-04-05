# PetKit 喂食器 Lovelace 卡片

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

[English](README_EN.md) | 简体中文

专为 PetKit 智能喂食器设计的 Home Assistant Lovelace 卡片。

> ⚠️ **重要提示**：本卡片必须配合 [PetKit 喂食器集成](https://github.com/ningjx/Home-Petkit) 使用，请先安装后端集成。

## 卡片预览

![卡片预览](card.png)

## 功能

- **喂食计划管理** - 可视化管理一周喂食计划，支持新增、编辑、删除
- **喂食历史记录** - 追踪每次喂食详情，显示计划喂食量与实际进食量
- **手动喂食** - 一键出粮，快速补充喂食
- **状态监控** - 实时显示设备在线状态、WiFi 信号、干燥剂状态
- **周视图切换** - 快速切换查看不同日期的喂食计划

## 交互

| 操作 | 效果 |
|------|------|
| 点击时间 | 编辑时间 |
| 点击名称 | 编辑名称 |
| 点击克数 | 编辑出粮量 |
| 点击开关 | 启用/禁用计划 |
| 点击删除 | 删除计划 |
| 失焦 | 自动保存 |
| ESC | 取消编辑 |
| 点击虚线框 | 新增计划 |

## 前置要求

1. 已安装 Home Assistant（2024.1.0 或更高版本）
2. 已安装 [PetKit 喂食器集成](https://github.com/ningjx/Home-Petkit)
3. 已配置好 PetKit 喂食器设备

## 安装

### HACS 安装（推荐）

1. HACS → 前端 → 探索并下载仓库
2. 搜索 "Petkit Feeder Card"
3. 点击下载
4. 在仪表盘中添加卡片

### 手动安装

1. 下载 `dist/petkit-feeder-card.js`
2. 复制到 Home Assistant 的 `www` 目录
3. 在 Lovelace 配置中添加资源引用：
   ```yaml
   resources:
     - url: /local/petkit-feeder-card.js
       type: module
   ```

## 配置

```yaml
type: custom:petkit-feeder-card
device_id: "YOUR_DEVICE_ID"
```

> 💡 **提示**：`device_id` 可在 Home Assistant 集成设备的「设备 ID」传感器中获取。

### 配置选项

| 参数 | 类型 | 必需 | 默认 | 说明 |
|------|------|------|------|------|
| `device_id` | string | 是* | - | 设备 ID |
| `entity` | string | 否 | 自动推断 | 喂食计划传感器 |
| `history_entity` | string | 否 | 自动推断 | 历史记录传感器 |
| `name` | string | 否 | 设备名 | 卡片标题 |
| `show_timeline` | bool | 否 | true | 显示时间线 |
| `show_summary` | bool | 否 | true | 显示统计 |
| `show_actions` | bool | 否 | true | 显示操作按钮 |

*`device_id` 和 `entity` 二选一必填

## 支持设备

| 设备 | 型号 | 状态 |
|------|------|------|
| Fresh Element Solo | D4 | ✅ 已支持 |
| Fresh Element | D3 | 🚧 暂不支持 |
| Fresh Element Duo | D4s | 🚧 暂不支持 |
| Feeder Mini | Mini | 🚧 暂不支持 |

## 相关项目

- [PetKit 喂食器集成](https://github.com/ningjx/Home-Petkit) - 后端集成

## 开发

```bash
npm install
npm run build
```

## 注意

- 本项目非小佩官方产品
- API 可能随时变更

## 许可证

MIT