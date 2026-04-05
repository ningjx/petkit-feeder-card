# PetKit Feeder Lovelace Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

English | [简体中文](README.md)

A Home Assistant Lovelace card designed for PetKit smart feeders.

> ⚠️ **Important**: This card requires the [PetKit Feeder Integration](https://github.com/ningjx/Home-Petkit) to be installed first.

## Preview

![Card Preview](card.png)

## Features

- **Feeding Schedule Management** - Visually manage weekly feeding schedules with support for adding, editing, and deleting
- **Feeding History** - Track feeding details, showing planned vs actual amounts
- **Manual Feeding** - One-click food dispensing
- **Status Monitoring** - Real-time device status, WiFi signal, desiccant status
- **Weekly View** - Quick navigation between different days

## Prerequisites

1. Home Assistant (2024.1.0 or higher)
2. [PetKit Feeder Integration](https://github.com/ningjx/Home-Petkit) installed
3. PetKit feeder device configured

## Installation

### HACS (Recommended)

1. HACS → Frontend → Explore and download repositories
2. Search for "Petkit Feeder Card"
3. Click download
4. Add the card to your dashboard

### Manual Installation

1. Download `dist/petkit-feeder-card.js`
2. Copy to your Home Assistant `www` directory
3. Add resource reference in Lovelace configuration:
   ```yaml
   resources:
     - url: /local/petkit-feeder-card.js
       type: module
   ```

## Usage

Add the card to your Lovelace dashboard:

```yaml
type: custom:petkit-feeder-card
device_id: "YOUR_DEVICE_ID"
```

### Configuration Options

| Parameter | Required | Description |
|-----------|----------|-------------|
| `device_id` | Yes | PetKit device ID, found in the integration device page |

## Supported Devices

| Device | Model |
|--------|-------|
| Fresh Element Solo | D4 |
| Fresh Element | D3 |
| Fresh Element Duo | D4s |
| Feeder Mini | Mini |

## Related Projects

- [PetKit Feeder Integration](https://github.com/ningjx/Home-Petkit) - Backend integration

## Disclaimer

- This is not an official PetKit product
- API may change without notice