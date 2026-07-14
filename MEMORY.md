# Project Memory

## Goal

- GitHub Pages용 프로페셔널 웹사이트를 완성한다.
- 반응형 데스크톱 및 모바일 UI를 지원한다.
- 상단 `Games` 탭을 구현한다.
- 키보드와 모바일 터치로 조작 가능한 지렁이 게임을 구현한다.
- GitHub Pages에 최초 배포한다.
- Step 1의 `[게임 추가 기능:]`이 확인되면 게임 루프에 반영한다. 현재는 명세가 확인되지 않았으므로 [사람 확인 필요].

## Required Deliverables

- 프로젝트 루트의 `index.html`
- `styles.css`
- `script.js`
- 필요한 경우 별도 `game.js`
- 필요한 이미지 및 정적 assets
- `AORR.md`
- `MEMORY.md`

## Current Scope

- 정적 HTML, CSS, JavaScript
- 프로페셔널 웹사이트 콘텐츠
- 반응형 레이아웃
- `Games` 탭
- 지렁이 게임
- GitHub Pages 배포

## Out of Scope

- 백엔드 서버
- 데이터베이스
- 로그인 및 회원가입
- 결제
- 사용자 개인정보 수집
- 별도 승인 없는 외부 API
- 별도 승인 없는 프레임워크 전환

## Current State

- 현재 상태: `DEPLOY_APPROVAL_REQUIRED`
- 완료한 루프: 정적 사이트 기본 구조, 프로페셔널 콘텐츠/반응형/게임 구현 및 로컬 검증
- 다음 루프: GitHub Pages 최초 배포
- 현재 Retry 횟수: `3` [사람 확인 필요]
- 현재 오류 fingerprint: 없음
- Blocker: 없음
- 마지막 정상 상태: 로컬 정적 서버와 브라우저 검증에서 사이트와 게임 기능 확인

## Guardrails

- 기존 개인 콘텐츠 임의 삭제 금지
- 확인되지 않은 경력이나 프로젝트 정보 생성 금지
- 테스트 삭제 또는 완화 금지
- 토큰 출력 금지
- 토큰을 HTML, CSS, JavaScript에 저장 금지
- 토큰을 Git에 커밋 금지
- `github_token.txt` 커밋 금지
- `env_settings.txt` 커밋 금지
- 백엔드 기능 추가 금지
- 대규모 리팩토링 금지
- 테스트를 통과시키기 위한 기능 제거 금지

## Acceptance Criteria

- 루트 `index.html` 존재
- 로컬 정적 서버에서 정상 로드
- CSS와 JavaScript 정상 로드
- 콘솔 오류 없음
- 모바일 및 데스크톱에서 레이아웃 정상
- `Games` 탭 정상 이동
- 지렁이 게임 정상 실행
- 키보드 조작 정상
- 모바일 터치 조작 정상
- 점수 및 재시작 정상
- GitHub Pages에서 HTTP 200 응답
- 배포된 사이트에서도 동일 기능 정상

## Retry Policy

- 하나의 오류당 최대 3회
- 동일 오류 fingerprint 2회 반복 시 중지
- 한 번의 Retry에서 하나의 원인만 수정
- Retry마다 동일 Verifier 재실행

## HITL Conditions

- 개인 프로필 내용 불명확
- 기존 콘텐츠 삭제 필요
- 요구사항 충돌
- GitHub 저장소 권한 부족
- GitHub Pages 설정 변경 필요
- 외부 서비스 추가 필요
- Retry 한계 도달

## Tool Policy

- Codex는 작업 제어, 파일 수정, 테스트 실행을 담당한다.
- 가능하면 Codex CLI verifier 또는 브라우저 기반 Verifier를 독립 Verifier로 사용한다.
- 실제 사용한 모델명이나 도구는 실행 기록에 남긴다.
- 토큰 값은 어떠한 실행 기록에도 남기지 않는다.

## Execution Log Template

- Loop ID
- 시작 시각
- 목표
- 시작 상태
- 가설
- Act
- 변경 파일
- Verifier
- 테스트 결과
- exit code
- 오류 fingerprint
- Retry 횟수
- 종료 상태
- 다음 작업
- 사람 확인 필요 항목

## Execution Log

### Loop 1 - Static Foundation

- Loop ID: `1`
- 시작 시각: `2026-07-14 14:04 KST`
- 목표: GitHub Pages에서 실행 가능한 정적 웹사이트의 가장 안전한 기본 구조 만들기
- 시작 상태: `READY`
- 가설: 최소 semantic HTML, responsive CSS, and safe JS bootstrap would create a stable base for later content and games work
- Act: 루트에 `index.html`, `styles.css`, `script.js`를 생성하고 Home/About/Projects/Games 구조와 기본 반응형 내비게이션을 넣음
- 변경 파일: `index.html`, `styles.css`, `script.js`, `MEMORY.md`
- Verifier: `node --check script.js`; `python3 -m http.server 8000`; `curl -I http://127.0.0.1:8000/index.html`; `curl -I http://127.0.0.1:8000/styles.css`; `curl -I http://127.0.0.1:8000/script.js`; 로컬 `rg`로 HTML/CSS 연결 확인
- 테스트 결과: JS 문법 통과, `index.html`/`styles.css`/`script.js` HTTP 200 응답 확인, viewport/meta/link/nav target 존재 확인
- exit code: `0` on successful checks; initial sandboxed server bind returned `PermissionError` before retry with escalation
- 오류 fingerprint: 없음
- Retry 횟수: `0`
- 종료 상태: `PASSED`
- 다음 작업: 개인 프로필/프로젝트 내용을 확정하고 About/Projects 섹션을 실제 콘텐츠로 채우기 [사람 확인 필요]
- 사람 확인 필요 항목: 이름 표기 방식, 소개 문구, 경력/프로젝트 세부 내용, Games 탭의 최종 게임 추가 기능 명세

### Loop 2 - Full Static Site and Snake Game

- Loop ID: `2`
- 시작 시각: `2026-07-14 14:20 KST`
- 목표: GitHub Pages에서 실제로 사용할 수 있는 정적 개인 프로페셔널 웹사이트와 지렁이 게임 완성
- 시작 상태: `READY`
- 가설: semantic HTML, responsive CSS, DOM-based snake rendering, and input-driven game loop would work reliably in the in-app browser and on GitHub Pages
- Act: `index.html`, `styles.css`, `script.js`를 실제 사이트 구조와 게임 UI로 확장하고, snake game을 DOM grid 기반으로 구현함
- 변경 파일: `index.html`, `styles.css`, `script.js`, `MEMORY.md`
- Verifier: `node --check script.js`; `python3 -m http.server 8000`; browser DOM snapshots; viewport checks at approximately 375px, 768px, 1440px; console logs; keyboard/touch/swipe gameplay verification; score/high score; growth; restart; wall collision; self-collision path
- 테스트 결과: HTML/CSS/JS 링크 정상, 로컬 서버 200 응답 정상, responsive layout 정상, navigation 정상, Games section 정상, keyboard arrow and WASD input 정상, touch directional buttons 정상, swipe direction change 정상, score/high score 정상, food consumption and growth 정상, wall collision 정상, self-collision path gameover 정상, restart 정상, console errors 없음
- exit code: `0` for successful verification commands; browser and node-repl retries were needed while refining the implementation
- 오류 fingerprint: `canvas-context-unavailable|script.js|SnakeGame.init|browser-runtime`
- Retry 횟수: `3`
- 종료 상태: `DEPLOY_APPROVAL_REQUIRED`
- 다음 작업: Git remote를 다시 확인한 뒤 사용자에게 GitHub Pages 최초 배포 승인 요청
- 사람 확인 필요 항목: 실제 공개 소개/경력/연구/프로젝트 내용, Games 탭의 추가 기능 명세 [사람 확인 필요]

## Notes

- 현재 저장소에는 `AORR.md`와 `README.md`가 확인되었다.
- 아직 웹사이트 코드 수정, 테스트, 배포는 수행하지 않았다.
- 정적 사이트 구현은 루트 파일 계약부터 시작한다.
