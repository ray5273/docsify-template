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
 
- 추후 지원 할 기능은 아래와 같습니다.
  - 자동 번역 (한글문서 -> 영어문서, 영어문서 -> 한글문서) (auto generated로 명시하기)
  - 브랜치 별로 문서를 볼 수 있게 하기

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

1. deploy_docsify.yml의 action을 통해서 필요한 sidebar 내용들을 _sidebar.md에 추가하고 모든 파일들을 gh-pages 브랜치의 /(root)에 추가
2. github pages에서 gh-pages의 /(root) 경로로 deploy 하기

[Auto generate _sidebar.md](https://github.com/ray5273/docsify-examples/blob/main/.github/workflows/deploy_docsify.yml)
