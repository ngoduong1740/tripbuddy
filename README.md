# 🏖️ Trip Buddy - PRN231

## 📝 Giới thiệu

> 🚧 *Đang cập nhật...*

## 🌟 Demo

### 🔗 Live Demo

[![Deployed on Azure](https://img.shields.io/badge/deployed_on-azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://tripbuddy.site)

### 📊 Project Stats

<!-- Repository Stats -->
![GitHub repo size](https://img.shields.io/github/repo-size/ngoduong0710/tripbuddy?style=for-the-badge&logo=github)
![GitHub code size](https://img.shields.io/github/languages/code-size/ngoduong0710/tripbuddy?style=for-the-badge&logo=github)

<!-- Activity Stats -->
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ngoduong0710/tripbuddy?style=for-the-badge&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/ngoduong0710/tripbuddy?style=for-the-badge&logo=github)

<!-- Issues & PRs -->
![GitHub issues](https://img.shields.io/github/issues/ngoduong0710/tripbuddy?style=for-the-badge&logo=github)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ngoduong0710/tripbuddy?style=for-the-badge&logo=github)

<!-- Quality & CI -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/ngoduong0710/tripbuddy/azure-static-web-apps-ashy-desert-0db2c0f00.yml?style=for-the-badge&logo=github-actions)](https://github.com/ngoduong0710/tripbuddy/actions)
[![Quality Gate Status](https://img.shields.io/sonar/quality_gate/ngoduong0710_tripbuddy?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge&logo=sonarcloud)](https://sonarcloud.io/summary/new_code?id=ngoduong0710_tripbuddy)
[![Dependencies Status](https://img.shields.io/librariesio/github/ngoduong0710/tripbuddy?style=for-the-badge)](https://libraries.io/github/ngoduong0710/tripbuddy)

## 👥 Đội ngũ phát triển

| [![](https://github.com/pnquyen24.png)](https://github.com/pnquyen24) | [![](https://github.com/ngoduong0710.png)](https://github.com/ngoduong0710) | [![](https://github.com/bngbtran.png)](https://github.com/bngbtran) | [![](https://github.com/Dungnguyengl.png)](https://github.com/Dungnguyengl) | [![](https://github.com/CanhTruongKool.png)](https://github.com/CanhTruongKool) |
|:---:|:---:|:---:|:---:|:---:|
| **Phạm Ngọc Quyền**<br>Team Lead | **Ngô Dương**<br>Full-stack Developer | **Bùi Ngọc Bảo Trân**<br>Frontend Developer | **Nguyễn Trung Dũng**<br>Backend Developer | **Trương Thế Cảnh**<br>Backend Developer |

## 🚀 Công nghệ sử dụng

### 🎨 Frontend
- **Ngôn ngữ lập trình:** <img src="https://cdn.simpleicons.org/typescript" width="16" height="16" /> TypeScript
- **Framework:** <img src="https://cdn.simpleicons.org/react" width="16" height="16" /> React
- **Build Tool:** <img src="https://cdn.simpleicons.org/vite" width="16" height="16" /> Vite
- **Styling:**
  - <img src="https://cdn.simpleicons.org/tailwindcss" width="16" height="16" /> Tailwind CSS
  - <img src="https://cdn.simpleicons.org/shadcnui/black" width="16" height="16" /> shadcn/ui (UI Component Library)
- **Package Manager:** <img src="https://cdn.simpleicons.org/yarn" width="16" height="16" /> Yarn

### 🛠️ Development Tools
- **Code Quality:**
  - <img src="https://cdn.simpleicons.org/biome" width="16" height="16" /> Biome (Formatter, Linter, và Import sorting)
  - <img src="https://cdn.simpleicons.org/commitlint" width="16" height="16" /> CommitLint (Kiểm tra commit messages)
  - <img src="https://cdn.simpleicons.org/lefthook" width="16" height="16" /> Lefthook (Git hooks management)

### ⚡ DevOps
- <img src="https://cdn.simpleicons.org/docker" width="16" height="16" /> Docker
- Azure (Deployment)

## 💻 Yêu cầu hệ thống
- <img src="https://cdn.simpleicons.org/nodedotjs" width="16" height="16" /> Node.js (phiên bản 20.x trở lên)
- <img src="https://cdn.simpleicons.org/yarn" width="16" height="16" /> Yarn package manager
- <img src="https://cdn.simpleicons.org/docker" width="16" height="16" /> Docker (tùy chọn)

## 📥 Hướng dẫn cài đặt

### ⚡ Cài đặt thông thường

1. Clone repository
```bash
git clone https://github.com/ngoduong0710/tripbuddy
cd tripbuddy
```

2. Cài đặt dependencies
```bash
yarn install
```

3. Chạy ứng dụng ở môi trường development
```bash
yarn dev
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### 🐳 Sử dụng Docker

1. Build Docker image
```bash
docker build -t tripbuddy .
```

2. Chạy container
```bash
docker run -p 3000:80 tripbuddy
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

## ⚙️ Scripts có sẵn

### 🔨 Development

```bash
yarn dev          # Chạy development server
yarn build        # Build production
yarn preview      # Preview production build locally
```

### 🔍 Code Quality

```bash
# Kiểm tra và sửa code
yarn biome:check          # Kiểm tra format, lint và import sorting (chỉ báo lỗi)
yarn biome:check --write  # Tự động sửa các lỗi có thể sửa được

# Lint
yarn biome:lint          # Kiểm tra linting (chỉ báo lỗi)
yarn biome:lint --write  # Tự động sửa các lỗi lint có thể sửa được

# Format
yarn biome:format          # Kiểm tra format (chỉ báo lỗi)
yarn biome:format --write  # Tự động format code

# CI/CD
yarn biome:ci     # Chạy kiểm tra trong môi trường CI (chỉ báo lỗi, không sửa)
```

## 📐 Quy trình phát triển

### 📝 Commit Convention

Dự án này sử dụng CommitLint để đảm bảo các commit messages tuân theo [Conventional Commits](https://www.conventionalcommits.org/).

**Format cơ bản:**
```bash
type(scope?): subject
```

**Các types được hỗ trợ:**

| Type | Mô tả |
|------|-------|
| `🏗️ build` | Thay đổi ảnh hưởng đến build system hoặc external dependencies |
| `🔧 chore` | Thay đổi không ảnh hưởng đến code (cập nhật tasks, etc.) |
| `⚙️ ci` | Thay đổi CI configuration files và scripts |
| `📚 docs` | Chỉ thay đổi documentation |
| `✨ feat` | Tính năng mới |
| `🐛 fix` | Sửa lỗi |
| `⚡ perf` | Cải thiện performance |
| `♻️ refactor` | Refactor code không sửa lỗi hay thêm tính năng |
| `⏮️ revert` | Revert commit trước đó |
| `🎨 style` | Thay đổi không ảnh hưởng đến code (space, formatting, etc) |
| `🧪 test` | Thêm hoặc sửa tests |

### 🔄 Git Hooks (Lefthook)

Dự án sử dụng Lefthook để quản lý git hooks với các cấu hình sau:

#### 📋 pre-commit
Tự động format và kiểm tra code trước khi commit:
```yaml
pre-commit:
  commands:
    check:
      glob: "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}"
      run: npx @biomejs/biome check --write --no-errors-on-unmatched --files-ignore-unknown=true --colors=off {staged_files}
      stage_fixed: true
```

#### ✍️ commit-msg
Kiểm tra commit message:
```yaml
commit-msg:
  commands:
    lint-commit-msg:
      run: yarn commitlint --edit
```

#### 🚀 pre-push
Kiểm tra code trước khi push:
```yaml
pre-push:
  commands:
    check:
      glob: "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}"
      run: npx @biomejs/biome check --no-errors-on-unmatched --files-ignore-unknown=true --colors=off {push_files}
```

## 🔌 Cài đặt VS Code Extensions

Dự án cung cấp script PowerShell để tự động cài đặt các VS Code extensions được đề xuất:

```powershell
./scripts/Install-VSCodeExtensions.ps1
```

**🎯 Tính năng của script:**
- ✅ Kiểm tra sự tồn tại của lệnh `code`
- 📋 Đọc danh sách extensions từ `.vscode/extensions.json`
- 📥 Cài đặt các extensions chưa được cài đặt
- 📝 Hiển thị log chi tiết về quá trình cài đặt

## 📄 Giấy phép

Dự án sử dụng giấy phép MIT License. Chi tiết xem tại [LICENSE](LICENSE).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
