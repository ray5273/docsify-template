# POS-Essential ADR Pages

- POS-Essential 깃허브의 모든 markdown (주로 ADR과 architecture 문서)의 리스트들을 렌더링했습니다.


- 현재는 아래 기능들을 제공합니다. 
  - repo 별 디렉토리 지원 
  - 검색기능 지원 
  - 다크모드 지원 
  - mermaid 지원 
  - 일부 언어 코드 하이라이팅 지원 (bash, c)


- 아래 기능은 지원하지 않습니다.
  - golang 문법은 미지원

## Target Repositories
- pos-essential-orchestrator
- pos-essential-ioworker
- pos-essential


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
git clone https://github.samsungds.net/PBSSD/pos-essential-orchestrator
git clone https://github.samsungds.net/PBSSD/pos-essential
```

### 2-2. Run _sidebar.md file auto generation of submodule documentations
```
node startDocsify.js
```

## 2. Github pages Deploy
- Need Action runner