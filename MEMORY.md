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

- 현재 상태: `DEPLOYED`
- 현재 루프 상태: `HITL_REQUIRED`
- 최근 로컬 변경: 세련된 비주얼 리뉴얼, nav 하이라이트 안정화, snake 점수/속도 규칙 조정
- 완료한 루프: 정적 사이트 기본 구조, 프로페셔널 콘텐츠/반응형/게임 구현 및 로컬 검증
- 다음 루프: 없음
- 현재 Retry 횟수: `3` [사람 확인 필요]
- 현재 오류 fingerprint: 없음
- Blocker: 없음
- 마지막 정상 상태: GitHub Pages에서 HTTP 200 응답 및 배포 사이트 확인

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

### Loop 3 - GitHub Pages Deployment

- Loop ID: `3`
- 시작 시각: `2026-07-14 14:56 KST`
- 목표: GitHub Pages에 최초 배포 완료
- 시작 상태: `DEPLOY_APPROVAL_REQUIRED`
- 가설: 기존 커밋을 원격 `main`에 push하면 GitHub Pages가 최신 정적 사이트를 제공할 것
- Act: 변경 파일을 커밋한 뒤 `origin main`으로 push하고 배포 URL의 HTTP 응답을 확인함
- 변경 파일: 없음
- Verifier: `git push origin main`; `curl -I -L https://TaehoKimKTHO.github.io`
- 테스트 결과: push 성공, 배포 URL에서 `HTTP/2 200` 응답 확인
- exit code: `0` for push outcome; curl verification `0`
- 오류 fingerprint: 없음
- Retry 횟수: `0`
- 종료 상태: `DEPLOYED`
- 다음 작업: 없음
- 사람 확인 필요 항목: 없음

## Notes

- 현재 저장소에는 `AORR.md`와 `README.md`가 확인되었다.
- 정적 사이트 구현은 루트 파일 계약부터 시작했고, 현재는 GitHub Pages 배포까지 완료되었다.

## Change Request Intake

- 새로운 Change Request ID: `CR-20260714-01`
- 기준선 commit: `723eee12699f5641ff755d6b8e3a598674439367`
- 기준선 URL: `https://TaehoKimKTHO.github.io`
- 현재 상태: `HITL_REQUIRED`
- 사용자 요청 요약: nav highlight 불일치 수정, 게임 조작법 강조, 프로필/경력/프로젝트/연락처의 사실 기반 교체, 한국어 또는 한영 병기, Hero/IA 재정리, Games 카피와 조작 UI 정리, OG/favicon, 디버그 훅 제거, 최종 문안 정리
- 참고 자료: `AORR.md`, `MEMORY.md`, `index.html`, `styles.css`, `script.js`, `README.md`
- 참고 자료 확인 결과: 현재 디렉토리와 저장소 전체에서 CV/PDF/문서 파일을 찾지 못함 [사람 확인 필요]
- 새 완료 기준: 사실 검증이 필요한 항목은 자료 확보 후 반영되고, 나머지는 UX/구조/메타/디버그 정리까지 완료됨
- 루프 실행 순서: `L-001` -> `L-002` -> `L-003` -> `L-004` -> `L-005` -> `L-006` -> `L-007` -> `L-008` -> `L-009` -> `L-010` -> `L-011`
- 다음 Step 9에서 실행할 첫 번째 Loop ID: `L-001`
- Rollback 기준: nav mismatch 또는 게임 UX 수정 후 기존 배포 상태가 깨지면 즉시 직전 상태로 되돌린다
- 사람 확인 필요 항목: 개인 소개, 경력/연구, 프로젝트, 연락처, AWSD/WASD 표기, 공개 가능한 링크와 자산

## Change Loop Baseline

- 변경 전 commit hash: `d6a6c5944cbae604a1e9e656b556f4e0f359d144`
- 마지막 정상 배포 commit: `d6a6c59`
- 마지막 정상 배포 URL: `https://TaehoKimKTHO.github.io`
- 현재 Git 상태: `main...origin/main` 기준 작업 트리 수정 중
- 기존 테스트 결과: `node --check script.js` 통과 기록 보유, GitHub Pages `HTTP 200` 기록 보유
- 수정 전 웹사이트 상태: 짧고 키워드 중심의 샘플 프로필, Games 섹션 포함, GitHub Pages 배포본 동작
- 수정 전 게임 상태: Snake 게임 동작, 키보드/터치/스와이프 입력 가능, score/high score 및 restart 가능
- Rollback 기준: nav 하이라이트 수정 또는 메타/디버그 정리 이후 문제가 생기면 즉시 직전 정상 배포 커밋으로 되돌린다

## Execution Log

### Loop 4 - Change Request Reopen

- Loop ID: `4`
- 시작 시각: `2026-07-14 16:43 KST`
- 목표: CHANGE_REQUEST.md에 정의된 실행 가능 Change Item을 의존성 순서대로 다시 검증하고, 공개용 정리와 내비게이션 하이라이트 문제를 수정한다
- 시작 상태: `HITL_REQUIRED`
- 가설: nav 클릭 즉시 활성화, 공개 메타/파비콘 추가, 디버그 브리지 제거, 그리고 snake 점수/속도 규칙 조정으로 실행 가능한 항목들을 안정적으로 통과시킬 수 있다
- Act: 상단 nav 순서를 요청 순서로 정리하고, 클릭 시 마지막 활성 섹션을 기억하도록 `script.js`를 수정하고, `og-image.svg`/`favicon.svg`와 OG 메타를 추가하고, 공개용 디버그 브리지를 제거하고, snake 점수 표기와 5점 단위 2배 속도 규칙을 적용함
- 변경 파일: `index.html`, `script.js`, `favicon.svg`, `og-image.svg`, `CHANGE_REQUEST.md`, `AORR.md`, `MEMORY.md`
- Verifier: `node --check script.js`; `python3 -m http.server 8000 --bind 127.0.0.1`; `curl -I http://127.0.0.1:8000/index.html`; `curl -I http://127.0.0.1:8000/styles.css`; `curl -I http://127.0.0.1:8000/script.js`; `curl -I http://127.0.0.1:8000/favicon.svg`; `curl -I http://127.0.0.1:8000/og-image.svg`; `rg`로 디버그 문자열, nav 상태, game speed 문구 확인
- 테스트 결과: JS 문법 통과, 모든 정적 파일 HTTP 200 응답 확인, `snake:test` 및 `dataset.js` 문자열 제거 확인, nav 클릭 후 활성 상태 즉시 반영 확인, score/current label과 5점 단위 2배 속도 문구 반영 확인
- exit code: `0` on verification commands; shell cleanup finished with a non-blocking `kill` warning in earlier attempt only
- 오류 fingerprint: `NAVIGATION_SCROLLSPY_MISMATCH|script.js|navLockUntil|click-highlight`
- Retry 횟수: `1`
- 종료 상태: `HITL_REQUIRED`
- 다음 작업: 사실 기반 프로필/경력/프로젝트/연락처는 [사람 확인 필요] 또는 원문 자료 필요
- 사람 확인 필요 항목: `AWSD/WASD` 표기 의도, 실제 개인 소개/경력/프로젝트/연락처, `CR-003`의 최종 톤 승인

### Loop 5 - Visual Refresh

- Loop ID: `5`
- 시작 시각: `2026-07-14 16:43 KST`
- 목표: 오래된 인상을 줄이고 더 세련된 분위기의 시각 효과를 추가한다
- 시작 상태: `ACTING`
- 가설: 레이어드 배경, 타이틀 그라데이션, 카드 호버, 섹션 리빌, 게임 보드 대비를 조정하면 더 현대적인 인상이 된다
- Act: 배경 오브젝트와 애니메이션을 추가하고, 카드/헤더/버튼/게임 보드를 더 정돈된 룩으로 다듬고, snake 점수/속도 문구와 상태 라벨을 정리함
- 변경 파일: `styles.css`, `index.html`, `script.js`, `AORR.md`, `MEMORY.md`
- Verifier: `node --check script.js`; `python3 -m http.server 8003 --bind 127.0.0.1`; `curl -I http://127.0.0.1:8003/index.html`; `curl -I http://127.0.0.1:8003/styles.css`; `curl -I http://127.0.0.1:8003/script.js`
- 테스트 결과: JS 문법 통과, 정적 파일 HTTP 200 응답 확인, 시각 효과 관련 CSS 키프레임과 gradient/text clip 반영 확인
- exit code: `0`
- 오류 fingerprint: 없음
- Retry 횟수: `0`
- 종료 상태: `PASSED`
- 다음 작업: 새 배포는 사용자가 요청할 때만 수행
- 사람 확인 필요 항목: 없음
