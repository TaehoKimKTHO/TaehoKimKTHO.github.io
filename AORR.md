# AORR State Machine for Taeho Professional Website

## 1. Target

- 프로페셔널 웹사이트 개발 목표
  - 개인 프로필, 소개, 프로젝트, 연락처를 포함한 정적 프로페셔널 웹사이트를 만든다.
  - GitHub Pages에서 바로 서비스 가능한 HTML, CSS, JavaScript 기반 사이트로 완성한다.
  - 모바일과 데스크톱에서 모두 보기 좋고 조작 가능한 반응형 UI를 제공한다.

- GitHub Pages 배포 목표
  - 백엔드 없이 정적 파일만으로 동작한다.
  - 루트 디렉토리에 최소 `index.html`, `styles.css`, `script.js`가 존재해야 한다.
  - 게임 구현은 `script.js` 내부 또는 별도 JavaScript 파일로 포함할 수 있으나, 정적 리소스만 사용한다.
  - 배포 전 로컬 검증이 가능해야 하며, GitHub Pages 호환성을 만족해야 한다.

- 입력 자료
  - 현재 저장소 구조와 기존 파일
  - 개인 소개, 이름, 경력, 프로젝트, 연락처 [사람 확인 필요]
  - 선호하는 색상, 톤, 레이아웃 스타일 [사람 확인 필요]
  - 게임 추가 기능 요구사항이 별도로 존재하는 경우 해당 명세 [사람 확인 필요]
  - GitHub Pages 설정 정보 [사람 확인 필요]

- 필수 페이지와 섹션
  - 메인 소개 섹션
  - About 또는 Profile 섹션
  - Skills 또는 Expertise 섹션
  - Projects 섹션
  - Contact 섹션
  - 상단 내비게이션
  - `Games` 탭과 게임 전용 화면 또는 섹션

- Games 탭 및 지렁이 게임 요구사항
  - 상단 내비게이션에 `Games` 탭을 추가한다.
  - 지렁이 게임은 HTML, CSS, JavaScript만으로 동작해야 한다.
  - 키보드 입력으로 조작 가능해야 한다.
  - 모바일 터치로 조작 가능해야 한다.
  - 점수, 게임 오버, 재시작 흐름이 있어야 한다.
  - 게임판은 반응형으로 동작해야 하며 작은 화면에서도 사용 가능해야 한다.
  - Step 1 분석에 `[게임 추가 기능:]`이 존재한다면 그 추가 기능을 게임 루프에 반영한다. 현재 제공된 정보만으로는 확인되지 않으므로 [사람 확인 필요].

- 데스크톱 및 모바일 완료 기준
  - 데스크톱에서 레이아웃이 균형 있고 정보가 읽기 쉬워야 한다.
  - 모바일에서 콘텐츠가 잘리거나 겹치지 않아야 한다.
  - 내비게이션과 게임 조작이 터치 가능한 크기여야 한다.
  - 키보드와 터치 모두에서 게임이 정상 동작해야 한다.
  - Chrome, Safari 계열 브라우저에서 GitHub Pages 정적 호스팅 제약과 충돌하지 않아야 한다.

## 2. Act

- 한 번의 개발 루프에서 수행할 최소 작업
  - 단 하나의 실패 원인만 수정한다.
  - 관련성이 높은 최소 파일만 변경한다.
  - 동일한 Verifier를 재실행한다.
  - 기존에 통과한 기능에 대한 회귀를 확인한다.

- 수정 가능한 파일 범위
  - 루프와 직접 관련된 HTML, CSS, JavaScript 파일
  - 이미지, 아이콘, 폰트 등 정적 자산 파일
  - 배포와 직접 연관된 GitHub Pages 설정 파일 [사람 확인 필요]

- 생성할 수 있는 파일
  - `index.html`
  - `styles.css`
  - `script.js`
  - 게임용 분리 JavaScript 파일이 필요한 경우 예: `game.js`
  - 정적 자산 파일
  - 문서 파일 예: `AORR.md`

- 실행 가능한 로컬 검증 명령어
  - `python3 -m http.server 8000`
  - `npx serve .`
  - `npx htmlhint index.html`
  - `npx stylelint styles.css`
  - `npx eslint script.js`
  - 브라우저에서 `http://localhost:8000` 확인

## 3. Observe

- 파일 생성 여부
  - 루프에서 필요한 파일이 생성되었는지 확인한다.
  - 루트 필수 파일 존재 여부를 검증한다.

- HTML, CSS, JavaScript 오류
  - HTML 구조 오류
  - CSS 파싱 또는 반응형 레이아웃 오류
  - JavaScript 런타임 오류

- 로컬 웹서버 응답
  - 서버가 정상 기동하는지 확인한다.
  - 브라우저에서 정적 파일이 200으로 응답하는지 확인한다.

- 브라우저 콘솔 오류
  - 콘솔 에러가 없는지 확인한다.
  - 경고는 필요 시 허용하지만 게임이나 렌더링을 방해하면 실패로 본다.

- 데스크톱 및 모바일 화면
  - 320px, 375px, 768px, 데스크톱 폭에서 레이아웃을 확인한다.
  - 탭, 버튼, 카드, 게임판의 간격과 크기를 확인한다.

- 키보드 및 터치 게임 조작
  - 키보드 방향키 또는 WASD로 지렁이가 이동하는지 확인한다.
  - 모바일에서 스와이프 또는 터치 버튼으로 조작되는지 확인한다.

- GitHub Pages 호환성
  - 상대 경로가 올바른지 확인한다.
  - 빌드 과정이 없더라도 정적 파일만으로 동작하는지 확인한다.
  - 외부 런타임 의존성이 없어야 한다.

## 4. Reason

실패 원인 분류 기준은 다음과 같이 사용한다.

- `HTML_STRUCTURE`
  - 잘못된 DOM 구조, 누락된 섹션, 잘못된 링크, 의미 구조 문제

- `CSS_RESPONSIVE`
  - 모바일 대응 실패, 레이아웃 깨짐, overflow, 비율 문제

- `JAVASCRIPT`
  - 런타임 에러, 상태 관리 오류, 이벤트 바인딩 실패

- `GAME_LOGIC`
  - 먹이 생성, 충돌 판정, 성장, 점수 등 게임 규칙 오류

- `GAME_CONTROL`
  - 키보드, 스와이프, 터치 버튼 등의 입력 제어 오류

- `CONTENT`
  - 이름, 소개, 경력, 프로젝트, 연락처 등 콘텐츠 불명확 또는 누락

- `TEST`
  - Verifier, 로컬 서버, 정적 검사 실패

- `ENVIRONMENT`
  - 로컬 실행 환경 문제, 브라우저 차이, 파일 경로 문제

- `GITHUB_PERMISSION`
  - 인증, 저장소 권한, 토큰, GitHub 설정 접근 문제

- `DEPLOYMENT`
  - GitHub Pages 경로, 브랜치, 호스팅 설정, 배포 반영 문제

- `UNKNOWN`
  - 위 범주로 자신 있게 분류할 수 없는 경우

## 5. Repeat

- 한 번에 하나의 실패 원인만 수정한다.
- 관련된 최소 파일만 변경한다.
- 수정 후 동일한 Verifier를 재실행한다.
- 기존에 통과한 기능에 대한 회귀 테스트를 실행한다.
- 동일한 실패 원인이 계속 나타나면 원인 분류를 재검토한다.

## 6. Stop

- 전체 테스트가 통과한 경우
- 최대 Retry에 도달한 경우
- 동일한 오류 fingerprint가 2회 반복된 경우
- 개인정보나 콘텐츠 확인이 필요한 경우
- GitHub 인증 또는 배포 권한 문제가 발생한 경우

## 7. Human-in-the-loop

- 이름, 소개, 경력, 프로젝트 등 개인 콘텐츠가 불명확한 경우
- 기존 콘텐츠 삭제가 필요한 경우
- 외부 분석 도구나 외부 서비스를 추가해야 하는 경우
- GitHub 저장소 설정을 변경해야 하는 경우
- 요구사항이 충돌하는 경우
- `Games` 탭의 게임 추가 기능이 Step 1에서 별도로 정의되어 있는데 해석이 불명확한 경우

## 8. AORR State Definitions

- `READY`
  - 다음 루프를 시작할 준비 상태

- `ACTING`
  - 파일 수정, 생성, 구조 조정, 문서화 중

- `VERIFYING`
  - 로컬 서버, 정적 검사, 브라우저 확인 중

- `RETRYING`
  - 실패 원인을 하나만 골라 다시 수정 중

- `PASSED`
  - 해당 루프의 검증 기준이 모두 통과한 상태

- `DEPLOY_READY`
  - 배포 전 최종 통과 상태

- `DEPLOYING`
  - GitHub Pages 배포 수행 중

- `DEPLOYED`
  - GitHub Pages에 반영 완료된 상태

- `BLOCKED`
  - 환경, 권한, 의존성, 설정 문제로 진행 불가한 상태

- `HITL_REQUIRED`
  - 사람 확인이 없으면 다음 단계로 갈 수 없는 상태

## 9. Loop State Machine

| 단계 | 상태 | 입력 | Act | Observe | 출력 | 테스트 기준 | 다음 상태 |
|---|---|---|---|---|---|---|---|
| 저장소 및 기존 파일 확인 | READY | 저장소 URL, 현재 파일 목록, README | 저장소 구조와 초기 제약을 파악한다 | 파일 유무, 브랜치 상태, 초기 구조 | 작업 전제 조건 요약 | 루트 구조와 초기 진입점이 확인됨 | PASSED 또는 HITL_REQUIRED |
| 정적 사이트 기본 구조 | READY | 콘텐츠 초안, 레이아웃 목표, 정적 호스팅 제약 | `index.html`, `styles.css`, `script.js`의 기본 골격을 만든다 | HTML 구조, 기본 스타일, 스크립트 연결 | 사이트의 최소 골격 | 메인 페이지가 렌더링되고 콘솔 에러 없음 | PASSED 또는 RETRYING |
| 프로페셔널 콘텐츠 영역 | READY | 이름, 소개, 경력, 프로젝트, 연락처 [사람 확인 필요] | 소개, About, Skills, Projects, Contact 섹션을 구성한다 | 텍스트 배치, 시맨틱 구조, 링크 | 콘텐츠 렌더링 결과 | 섹션이 읽히고 모바일에서 잘림 없음 | PASSED 또는 HITL_REQUIRED |
| 반응형 내비게이션 | READY | 메뉴 항목, 모바일 우선 기준 | 상단 내비게이션과 반응형 동작을 만든다 | 데스크톱/모바일 탭 동작, sticky 여부 | 반응형 헤더 | 320px와 데스크톱에서 조작 가능 | PASSED 또는 RETRYING |
| Games 탭 | READY | 게임 섹션 위치, 전환 방식 | `Games` 탭과 게임 진입 UI를 추가한다 | 탭 전환, 활성 상태, 접근성 | 게임 진입점 | 탭이 명확히 보이고 터치 가능 | PASSED 또는 RETRYING |
| 지렁이 게임 핵심 로직 | READY | 게임판 크기, 속도, 충돌 규칙 | 지렁이 이동, 먹이, 성장, 충돌, 점수를 구현한다 | 게임 상태 변화, 점수 증가, 종료 조건 | 핵심 게임 루프 | 먹이 섭취와 충돌이 정상 작동 | PASSED 또는 RETRYING |
| 키보드 조작 | READY | 방향키 또는 WASD 규칙 | 키 입력 이벤트를 연결한다 | 키 입력 반응, 반대 방향 차단 | 키보드 제어 | 키 입력으로 이동 가능 | PASSED 또는 RETRYING |
| 모바일 터치 조작 | READY | 스와이프 또는 터치 버튼 선택 [사람 확인 필요] | 모바일 조작 방식을 구현한다 | 터치/스와이프 반응, 오작동 여부 | 모바일 제어 | 손가락으로 안정적으로 조작 가능 | PASSED 또는 HITL_REQUIRED |
| 게임 UI 및 점수 | READY | 점수, 시작, 재시작, 게임 오버 문구 | HUD와 상태 표시를 다듬는다 | 점수 표시, 재시작 UX | 게임 UI 완성 | 상태가 분명하고 재시작 가능 | PASSED 또는 RETRYING |
| 접근성과 반응형 검증 | READY | 포커스, 대비, 화면 폭, 대체 텍스트 | 접근성과 반응형을 전체 점검한다 | 콘솔, 레이아웃, 키보드 탐색 | 검증 기록 | 모바일/데스크톱 모두 정상 | PASSED 또는 RETRYING |
| GitHub Pages 호환성 검증 | READY | 정적 경로, 외부 의존성 없음 | Pages 호환성 점검을 수행한다 | 상대 경로, 스크립트 로딩, 정적 파일만 사용 여부 | 배포 가능성 판단 | GitHub Pages에서 그대로 열림 | DEPLOY_READY 또는 BLOCKED |
| 배포 | DEPLOY_READY | GitHub 권한, Pages 설정, 배포 대상 브랜치 [사람 확인 필요] | GitHub Pages에 배포한다 | 배포 반영, URL 접근, 캐시 상태 | 배포 완료 | 배포 URL이 정상 응답 | DEPLOYED 또는 BLOCKED |

## 10. State Transition Rules

- `READY -> ACTING`
  - 개발 루프 시작

- `ACTING -> VERIFYING`
  - 최소 구현이 끝났을 때

- `VERIFYING -> PASSED`
  - 테스트 기준을 모두 만족했을 때

- `VERIFYING -> RETRYING`
  - 실패 원인이 하나로 식별되고 수정 가능할 때

- `VERIFYING -> HITL_REQUIRED`
  - 개인 콘텐츠, 게임 추가 기능, 저장소 설정 같은 사람 확인이 필요할 때

- `VERIFYING -> BLOCKED`
  - 권한, 환경, 배포, 인증 문제로 더 진행할 수 없을 때

- `RETRYING -> ACTING`
  - 한 가지 실패 원인만 수정하기로 결정했을 때

- `PASSED -> READY`
  - 다음 루프로 넘어갈 때

- `PASSED -> DEPLOY_READY`
  - 최종 검증을 모두 통과했을 때

- `DEPLOY_READY -> DEPLOYING`
  - 배포 수행 시점

- `DEPLOYING -> DEPLOYED`
  - 배포가 성공했을 때

- `DEPLOYING -> BLOCKED`
  - 배포 권한이나 설정 문제로 실패했을 때

## 11. Recommended First Loop

가장 안전한 첫 번째 루프는 `저장소 및 기존 파일 확인`이다.

## 12. Change Request Loop Plan

### Change Request Overview

- Change Request ID: `CR-20260714-01`
- Baseline commit: `723eee12699f5641ff755d6b8e3a598674439367`
- Baseline URL: `https://TaehoKimKTHO.github.io`
- Overall request state: `HITL_REQUIRED`
- Current blocker: 실제 프로필/경력/프로젝트/연락처의 검증 가능한 사실 자료가 없음

### Loop Plan Table

| Loop ID | 연결된 Change Item | Target | 입력 자료 | Act | Observe | Reason | Verifier | 완료 기준 | Retry 정책 | Stop 조건 | HITL 조건 | 예상 수정 파일 | 선행 Loop | 다음 Loop | 상태 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| L-001 | 전체 | 기준선 재확인과 요청 매핑 | AORR.md, MEMORY.md, 현재 git 상태, 배포 URL, 변경 요청 원문 | 현재 상태를 다시 확인하고 Change Item과 의존성을 정리한다 | git status, remote, last deploy, reference file availability | CHANGE_INTAKE | `git status`, `git remote -v`, `curl -I -L`, `rg --files` | 기준선과 change map이 문서화됨 | 최대 1회 | 기준선 불일치, 권한 문제, 자료 누락 확인 | 개인 자료 누락 확인 | `CHANGE_REQUEST.md`, `AORR.md`, `MEMORY.md` | 없음 | L-002 | CHANGE_INTAKE |
| L-002 | CR-001 | 상단 메뉴 하이라이트 mismatch 수정 | 현재 nav 구조, scrollspy 로직 | 메뉴 활성 상태를 클릭/스크롤 기준에 맞게 조정한다 | 브라우저 클릭, hash 이동, scrollspy, 모바일 메뉴 | BUG 우선 처리 | 브라우저, `rg`, 필요 시 로컬 서버 | 메뉴 클릭과 하이라이트가 일관됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 회귀 발생 | 없음 | `script.js`, `styles.css` | L-001 | L-003 | READY |
| L-003 | CR-003 | Hero/언어 톤/정보 우선순위 정리 | 사용자 승인된 브랜드 톤, 언어 정책 | Hero와 섹션 우선순위를 재구성한다 | 문장 톤, 섹션 순서, 모바일 가독성 | IA 및 UI_UX | 브라우저, 로컬 서버 | 톤과 구조가 일관됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 과한 재작성 | [사람 확인 필요] 브랜드 방향 | `index.html`, `styles.css` | L-002 | L-004~L-007 | HITL_REQUIRED |
| L-004 | CR-004 | About 사실 기반 교체 | 검증된 소개 문구 | About 섹션을 실제 소개로 교체한다 | 문장, 줄바꿈, 모바일 렌더링 | CONTENT | 브라우저, 로컬 서버 | 플레이스홀더 제거 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 사실 미검증 | [사람 확인 필요] 소개 사실 | `index.html` | L-003 | L-005 | HITL_REQUIRED |
| L-005 | CR-005 | Experience 사실 기반 교체 | 검증된 경력/연구 사실 | 타임라인을 실제 경력으로 교체한다 | 연도, 기관, 성과, 모바일 렌더링 | CONTENT | 브라우저, 로컬 서버 | 실제 경력 항목이 표시됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 사실 미검증 | [사람 확인 필요] 경력/연구 사실 | `index.html` | L-004 | L-006 | HITL_REQUIRED |
| L-006 | CR-006 | Projects 사실 기반 교체 | 검증된 프로젝트 사실과 링크 | 프로젝트 카드를 실제 사례로 교체한다 | 제목, 설명, 링크, 카드 정렬 | CONTENT | 브라우저, 링크 응답 확인 | 실제 프로젝트 카드가 표시됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 사실 미검증 | [사람 확인 필요] 프로젝트 사실 | `index.html`, `styles.css` | L-005 | L-007 | HITL_REQUIRED |
| L-007 | CR-007 | Contact 사실 기반 교체 | 공개 가능한 연락처와 링크 | Contact 카드에 실제 연락처를 넣는다 | 링크 클릭, 모바일 터치 영역 | CONTENT | 브라우저, 링크 응답 확인 | 공개 가능한 연락처가 표시됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 사실 미검증 | [사람 확인 필요] 공개 범위 | `index.html`, `styles.css` | L-006 | L-008 | HITL_REQUIRED |
| L-008 | CR-002, CR-008 | Games 카피와 조작 UI 정리 | 게임 안내문, 버튼 라벨, 상태 텍스트 | 조작법, 상태 메시지, 터치 레이아웃을 정리한다 | 키보드/WASD, touch, swipe, state text | GAME_CONTROL / UI_UX | 브라우저, 로컬 서버, 콘솔 | 조작/상태 문구가 즉시 이해됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 조작 회귀 | AWSD/WASD 표기 의도 | `index.html`, `styles.css`, `script.js` | L-007 | L-009 | READY |
| L-009 | CR-009 | OG 태그와 파비콘 추가 | 공유 미리보기 자산 | head 메타와 아이콘을 추가한다 | head, 탭 아이콘, 공유 미리보기 | UI_UX / CONTENT | 브라우저, HTML 검사 | 메타와 파비콘이 존재함 | 하나의 원인만 3회까지 | 동일 fingerprint 2회 | 대표 이미지/아이콘 | `index.html`, `assets/*` | L-008 | L-010 | READY |
| L-010 | CR-010 | 디버그 브리지 제거 | 현재 script.js | 테스트 브리지와 진단 표식을 비활성화한다 | 검색 결과, 브라우저 콘솔 | REFACTOR / TEST | `rg`, 브라우저, 로컬 서버 | 공개 코드에서 디버그 훅이 제거됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회 | 공개 검증 대안 | `script.js` | L-009 | L-011 | READY |
| L-011 | CR-011 | 최종 문안 정리 | 확정된 콘텐츠와 검토 결과 | placeholder와 중복 표현을 제거한다 | 전역 텍스트 검색, 브라우저 읽기 검수 | CONTENT / UI_UX | `rg`, 브라우저, 로컬 서버 | `[사람 확인 필요]` 표기가 정리됨 | 하나의 원인만 3회까지 | 동일 fingerprint 2회, 사실 미확정 | 콘텐츠 확정 필요 | `index.html`, `AORR.md`, `MEMORY.md` | L-010 | DEPLOY_READY | HITL_REQUIRED |

### State Notes

- 이 요청은 사실 기반 콘텐츠가 핵심이므로 전체 상태는 `HITL_REQUIRED`다.
- 코드로 바로 들어갈 수 있는 루프는 `L-002`, `L-008`, `L-009`, `L-010`이다.
- 사실 검증이 필요한 루프(`L-003`~`L-007`, `L-011`)는 자료가 들어오기 전까지 보류한다.

## 13. Change Loop Execution Notes

- 실행한 루프: `L-002`, `L-008`, `L-009`, `L-010`
- 상태 전이: `READY -> ACTING -> VERIFYING -> PASSED`
- 실패 원인: 초기에 `NAVIGATION` 하이라이트 지연, 공개 메타/아이콘 부재, 공개용 디버그 브리지가 남아 있었음
- Retry 결과: nav highlight는 마지막 활성 섹션을 기억하도록 수정, 디버그 브리지는 제거, 게임 점수/속도 규칙을 5점 단위로 강화
- Stop 또는 HITL 사유: `CR-002`, `CR-003`, `CR-004`, `CR-005`, `CR-006`, `CR-007`, `CR-011`은 사실 확인 또는 표기 의도 확인이 필요함

## 14. Visual Refresh Notes

- 최근 시각 리뉴얼: 레이어드 배경, 섹션 리빌, 카드 호버, 헤더 글라스 처리, 게임 보드 대비 강화
- 목적: 오래된 느낌 감소, 더 세련된 인상, 정보 가독성 유지
- 상태: 로컬 반영 완료, 새 배포는 요청 시 진행

- 이유
  - 현재 저장소는 초기 상태이므로 구조 파악 비용이 낮다.
  - 개인 콘텐츠나 게임 규칙처럼 사람 확인이 필요한 항목을 먼저 분리할 수 있다.
  - 나중 루프의 파일 범위와 검증 기준을 안정적으로 고정할 수 있다.

- 첫 루프의 목표 출력
  - 실제 루트 파일 목록
  - 정적 사이트에 필요한 최소 파일 목록
  - 개인 콘텐츠와 GitHub Pages 설정에서 [사람 확인 필요] 항목 목록
  - 이후 루프에 사용할 상태 전이 기준

## 12. Current Verifier Inventory

- 현재 저장소 구조
  - 루트에 실제로 존재하는 파일은 `README.md`, `AORR.md`뿐이다.
  - 아직 `index.html`, `styles.css`, `script.js`는 존재하지 않는다.

- 현재 환경에서 확인된 검증 도구
  - `python3`
  - `node`
  - `npm`
  - `npx`
  - `git`
  - `codex`

- Codex CLI verifier 확인 결과
  - `codex doctor` 가 실행 가능하다.
  - `codex review --uncommitted` 가 실행 가능하다.
  - Codex CLI는 현재 프로젝트의 기본 독립 Verifier로 사용한다.
  - 실제 사용한 Codex 모델명은 각 실행 로그에 기록한다.

- 현재 단계에서 확정하지 않은 것
  - `htmlhint`, `stylelint`, `eslint`, `serve` 같은 npm 기반 검증 도구는 설치 여부를 아직 확인하지 않았다.
  - `package.json`이 저장소에 존재하지 않으므로 프로젝트 고유 npm 스크립트도 아직 없다.
  - 위 도구들은 실제 설치 또는 프로젝트 파일 확인 이후에만 Verifier에 편입한다.

## 13. Self-Correcting TDD Loop

### 13.1 Loop Goal

이 루프는 GitHub Pages에서 동작하는 정적 HTML/CSS/JavaScript 사이트를 작은 실패 단위로 검증하고, 실패 원인을 하나씩만 고쳐서 완성하는 Verifier 중심의 TDD 흐름이다.

### 13.2 Verifier Stack

아래 순서로 검증을 시도한다.

1. 파일/구조 Verifier
   - 루트 파일 존재 여부
   - 상대 경로 사용 여부
   - 대소문자 불일치 여부

2. 정적 문서 Verifier
   - HTML 구조
   - viewport meta
   - 시맨틱 태그
   - 링크와 `Games` 영역

3. 스타일 Verifier
   - 데스크톱, 태블릿, 모바일 폭
   - 가로 스크롤 여부
   - 네비게이션과 Games UI 반응성

4. JavaScript Verifier
   - 문법 및 초기화 오류
   - DOM null 참조
   - 페이지 로드 오류
   - 중복 이벤트 리스너

5. 게임 Verifier
   - 시작, 일시정지, 재시작
   - 점수와 음식 생성
   - 벽/자기 몸 충돌
   - 키보드 및 터치 조작
   - 반대 방향 즉시 전환 방지
   - Games 탭 재진입 시 중복 실행 방지

6. 로컬 서버 Verifier
   - 정적 서버 응답
   - `index.html` 로드
   - CSS/JavaScript 응답

7. 브라우저 Verifier
   - 약 `375px`, `768px`, `1440px` viewport
   - 콘솔 오류
   - 레이아웃 안정성

8. GitHub Pages Verifier
   - 루트 `index.html`
   - 정적 상대 경로
   - 서버 전용 기능 미사용
   - 로컬 파일 시스템 의존성 미사용
   - 백엔드 API 의존성 미사용

9. Codex CLI Verifier
   - `codex review --uncommitted` 또는 필요한 `codex` 서브커맨드를 기본 독립 Verifier로 사용한다.
   - 정적 파일을 읽고, 변경 전후의 차이와 실패 fingerprint를 독립적으로 판단하는 보조 Verifier로 사용한다.

### 13.3 Failure Log Schema

실패 로그에는 아래 항목을 반드시 남긴다.

- 실행 명령어
- exit code
- 실패한 검증 항목
- 핵심 오류 메시지
- 관련 파일과 라인
- 브라우저 콘솔 메시지
- 오류 fingerprint

오류 fingerprint는 다음 형식을 권장한다.

- `<reason>|<file>|<line>|<message-fragment>|<viewport>|<browser>`

예시 규칙

- 파일이나 라인이 같고 메시지 일부가 같으면 같은 fingerprint로 본다.
- 브라우저 폭이나 브라우저 종류가 달라도 동일한 코드 결함이면 같은 fingerprint로 묶는다.
- 콘솔 메시지의 본문이 달라지면 새 fingerprint 후보로 본다.

### 13.4 TDD Cycle

| 순서 | 상태 | 입력 | Verifier | Observe | Output | Test 기준 | 다음 상태 |
|---|---|---|---|---|---|---|---|
| 1. Baseline 확인 | READY | 저장소 루트, 기존 파일 목록 | `git status`, 파일 목록 확인, `codex review --uncommitted` 기반 독립 리뷰 | 루트 파일, 누락 파일, 초기 제약 | 현재 baseline | 필수 파일과 제약이 문서화됨 | PASSED 또는 HITL_REQUIRED |
| 2. 실패 재현 | ACTING | 현재 실패 원인 1개 | 해당 Verifier 1개만 실행 | 실패 여부, 에러 메시지 | 실패 로그 초안 | 실패가 재현됨 | VERIFYING |
| 3. 원인 분류 | VERIFYING | 실패 로그 | Reason 분류 규칙 | 단일 원인 식별 | 원인 태그 | 하나의 reason으로 좁혀짐 | RETRYING 또는 BLOCKED |
| 4. 최소 수정 | RETRYING | 분류된 원인, 관련 파일 | 코드/문서 최소 수정 | 변경 범위, 영향 | 후보 수정본 | 하나의 원인만 수정됨 | ACTING |
| 5. 동일 Verifier 재실행 | VERIFYING | 수정본 | 동일 Verifier | 패스/실패, 콘솔, 파일 응답 | 재검증 결과 | 원래 실패가 사라짐 | PASSED 또는 RETRYING |
| 6. 회귀 확인 | VERIFYING | 수정본, 이미 통과한 기능 목록 | 이전에 통과한 핵심 Verifier 재실행 | 회귀 여부 | 회귀 결과 | 기존 통과 기능 유지 | PASSED 또는 RETRYING |
| 7. 종료 판단 | PASSED | 모든 통과 결과 | 최종 통합 Verifier | 전체 통과 여부 | 완료 판정 | 전체 기준 만족 | DEPLOY_READY 또는 READY |

### 13.5 Loop Map for This Project

| 루프 | 입력 | Act | Observe | 출력 | 테스트 기준 | 실패 원인 분류 | 다음 상태 |
|---|---|---|---|---|---|---|---|
| 저장소 및 기존 파일 확인 | 루트 파일 목록, README, AORR | 누락 파일과 baseline을 파악한다 | 루트에 `index.html`/`styles.css`/`script.js`가 없는지 확인 | baseline 요약 | 현재 구조와 제약이 명확함 | `CONTENT`, `ENVIRONMENT`, `TEST`, `UNKNOWN` | PASSED 또는 HITL_REQUIRED |
| 기본 파일 검증 | `index.html` 계약, 정적 파일 참조 | 루트 계약을 만든다 | 연결 경로, 대소문자, 절대 로컬 경로를 확인 | 파일 계약 상태 | 루트의 참조가 전부 정적 상대 경로임 | `HTML_STRUCTURE`, `TEST`, `ENVIRONMENT` | RETRYING 또는 PASSED |
| HTML 검증 | `index.html` | 문서 구조를 만든다 | title, meta viewport, 시맨틱, nav, Games, alt, 내부 링크를 본다 | HTML 검증 결과 | 기본 문서 구조와 링크가 정상 | `HTML_STRUCTURE`, `CONTENT`, `TEST` | RETRYING 또는 PASSED |
| CSS 검증 | `styles.css` | 반응형 레이아웃을 만든다 | 375px, 768px, 1440px, 가로 스크롤, nav/Game UI 반응성 확인 | CSS 검증 결과 | 화면 폭별로 겹침/잘림 없음 | `CSS_RESPONSIVE`, `TEST` | RETRYING 또는 PASSED |
| JavaScript 검증 | `script.js` | 앱 부트스트랩과 이벤트를 만든다 | 문법, 콘솔, null 참조, 중복 리스너, 로드 시 오류 확인 | JS 검증 결과 | 초기화가 안정적으로 완료 | `JAVASCRIPT`, `TEST` | RETRYING 또는 PASSED |
| 지렁이 게임 검증 | `script.js` 또는 게임 파일 | 게임 루프를 만든다 | 시작, 일시정지, 재시작, 점수, 음식, 충돌, 입력, 중복 실행 방지 확인 | 게임 검증 결과 | 모든 게임 규칙이 일관됨 | `GAME_LOGIC`, `GAME_CONTROL`, `JAVASCRIPT` | RETRYING 또는 PASSED |
| 로컬 실행 검증 | 정적 파일, 로컬 서버 | 정적 서버로 연다 | HTTP 응답, `index.html`, CSS, JS 응답 확인 | 서버 smoke 결과 | 정적 서버에서 정상 로드 | `TEST`, `ENVIRONMENT` | RETRYING 또는 PASSED |
| 브라우저 검증 | 375px, 768px, 1440px viewport | 브라우저에서 확인한다 | 레이아웃, 콘솔, 탭, 게임 반응 확인 | 시각 검증 결과 | 모든 주요 viewport에서 정상 | `CSS_RESPONSIVE`, `JAVASCRIPT`, `GAME_CONTROL` | RETRYING 또는 PASSED |
| GitHub Pages 호환성 | 배포 경로, 정적 파일 | Pages 제약을 점검한다 | 상대 경로, 백엔드 미사용, 로컬 파일 미사용 확인 | 배포 가능성 판단 | Pages에서 그대로 열림 | `DEPLOYMENT`, `GITHUB_PERMISSION`, `ENVIRONMENT` | DEPLOY_READY 또는 BLOCKED |

### 13.6 Retry Policy

- 한 Retry에서는 하나의 원인만 수정한다.
- 관련 파일만 수정한다.
- 테스트 기준을 완화하지 않는다.
- 전체 사이트를 불필요하게 재작성하지 않는다.
- 이미 통과한 기능을 깨뜨리는 수정은 허용하지 않는다.
- 외부 프레임워크로 임의 전환하지 않는다.
- 하나의 오류에 대해 최대 3회까지만 시도한다.
- 동일한 오류 fingerprint가 2회 반복되면 중지한다.
- 각 Retry에는 반드시 가설, 변경 파일, 실행한 Verifier, 결과를 기록한다.
- 환경 또는 권한 문제는 코드 수정으로 해결하려 하지 않는다.

### 13.7 Stop Conditions

- 전체 테스트가 통과한 경우
- 최대 Retry에 도달한 경우
- 동일한 오류 fingerprint가 2회 반복된 경우
- 개인정보나 콘텐츠 확인이 필요한 경우
- GitHub 인증 또는 배포 권한 문제가 발생한 경우
- 환경 문제로 더 이상 로컬에서 판단할 수 없는 경우

### 13.8 Human-in-the-loop Triggers

- 이름, 소개, 경력, 프로젝트 등 개인 콘텐츠가 불명확한 경우
- 기존 콘텐츠 삭제가 필요한 경우
- 외부 분석 도구나 외부 서비스를 추가해야 하는 경우
- GitHub 저장소 설정을 변경해야 하는 경우
- 요구사항이 충돌하는 경우
- Games 탭의 추가 기능 명세가 따로 있는데 의미가 불명확한 경우
- 배포 권한이나 GitHub 인증이 필요한 경우

### 13.9 Recommended Self-Correcting Flow

1. 저장소 및 기존 파일 확인
2. 루트 파일 계약 확인
3. HTML 구조 확인
4. CSS 반응형 확인
5. JavaScript 초기화 확인
6. 지렁이 게임 동작 확인
7. 로컬 서버 확인
8. 브라우저 viewport 확인
9. GitHub Pages 호환성 확인
10. 배포 준비 또는 중지

### 13.10 Operational Note

- 이 루프는 설계 문서이며, 아직 코드 수정이나 실제 테스트 실행은 하지 않는다.
- 현 시점에서 확정 가능한 독립 Verifier는 `codex review --uncommitted` 기반 Codex CLI이다.
- 앞으로는 Codex CLI verifier를 우선 사용한다.

## 14. Notes

- 이 문서는 설계 전용이며, 코드 수정, 테스트, 배포를 수행하지 않는다.
- 추측이 필요한 항목은 명시적으로 [사람 확인 필요]로 표기한다.
- 현재 제공된 정보 기준으로 Step 1에 별도 `[게임 추가 기능:]` 문구는 확인되지 않았다.
