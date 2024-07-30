# Docsify examples

- Submodule의 README.md 파일을 docsify로 변환하여 제공합니다.


- 현재는 아래 기능들을 제공합니다. 
  - repo 별 디렉토리 지원 
  - 검색기능 지원 
  - 다크모드 지원 
  - mermaid 지원 
  - 일부 언어 코드 하이라이팅 지원 (bash, c)


- 아래 기능은 지원하지 않습니다.
  - golang 문법은 미지원

## Target Repositories
- packer-template
- review-dashboard


## Installation

### Prerequisite
- NodeJs

### 1. Install docsify
```
npm i docsify-cli -g
```

## 2. Local Deploy

### 2-1. Update submodules
```
git clone https://github.com/ray5273/packer-qemu-template.git
git clone https://github.com/ray5273/Github-Review-Dashboard-and-Alarm-Bot
```

### 2-2. Run _sidebar.md file auto generation of submodule documentations
```
node startDocsify.js
```

## 2. Github pages Deploy
- Need Action runner