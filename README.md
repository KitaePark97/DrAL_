# 🏃 DrAL Lab Website

**Design Research for Active Living @ Texas A&M University**

---

## 📁 파일 구조

```
dral-lab/
├── data.js      ← ✏️ 데이터 파일 (유일하게 수정하는 파일)
├── index.html   ← 웹사이트 (건드리지 않음)
└── README.md    ← 이 파일
```

---

## 🚀 GitHub Pages 배포 (최초 1회)

### 1. GitHub 레포지토리 만들기
1. [github.com](https://github.com) → **New repository**
2. Repository name: `dral-lab`
3. **Public** 선택 → **Create repository**

### 2. 파일 올리기
GitHub 웹에서 **"uploading an existing file"** 클릭 → `data.js`, `index.html`, `README.md` 드래그앤드롭 → **Commit changes**

(터미널이 편하다면:)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[USERNAME]/dral-lab.git
git push -u origin main
```

### 3. GitHub Pages 켜기
레포지토리 → **Settings** → **Pages** → Branch: `main` → **Save**

→ 약 1–2분 후 `https://[USERNAME].github.io/dral-lab/` 완성

---

## ✏️ 업데이트 방법 (Claude 활용)

**모든 데이터는 `data.js` 하나에 있습니다.**

### Claude에게 요청하는 예시

```
"새 멤버 추가:
  이름: Jane Doe, 역할: PhD Student
  이메일: janedoe@tamu.edu, 지도교수: Chanam Lee"

"Kitae Park를 AEP 프로젝트 팀에 추가해줘"

"AEP 프로젝트 Drive 링크:
  https://drive.google.com/drive/folders/ABC123"

"새 채용 공고:
  제목: PhD RA – Green Campus Project
  유형: PhD Position, 프로젝트: Green Campus
  마감: 2025-07-01, 이메일: chanam@tamu.edu"

"Sungju Jung 상태를 Former로 변경해줘"

"채용공고 ID 2번 status를 Closed로 변경해줘"
```

### 업데이트 적용 (GitHub 웹에서)
1. GitHub 레포지토리 열기
2. `data.js` 클릭 → ✏️ 연필 아이콘 클릭
3. 내용 교체 붙여넣기
4. **Commit changes** → 1–2분 후 반영

(터미널이 편하다면:)
```bash
git add data.js
git commit -m "update: [변경 내용]"
git push
```

---

## 📊 데이터 구조 참조

### 멤버 추가
```javascript
{ id: 34,                        // 기존 최대 id + 1
  name: "Jane Doe",
  role: "PhD Student",           // Faculty | PhD Student | Post Doc | Researcher | Visiting Scholar
  email: "janedoe@tamu.edu",
  status: "Active",              // Active | Former | Visiting
  advisor: "Chanam Lee",         // 없으면 null
  scholar: null,                 // Google Scholar URL 또는 null
  tamu: null,                    // TAMU 프로필 URL 또는 null
  bio: null },
```

### 프로젝트 팀원 추가
```javascript
// 해당 프로젝트의 memberIds 배열에 id 추가
memberIds: [1, 4, 6, 13, 17, 31, 34],
```

### Drive 링크 연결
```javascript
driveUrl: "https://drive.google.com/drive/folders/FOLDER_ID",
```

### 채용 공고 추가
```javascript
{ id: 5,
  title: "PhD RA – Green Campus Project",
  type: "PhD Position",          // PhD Position | Postdoc | RA | Undergraduate
  projectId: 10,                 // 해당 프로젝트의 id
  contactEmail: "chanam@tamu.edu",
  deadline: "2025-07-01",        // 없으면 null
  funding: "RA stipend + tuition waiver",
  status: "Open",                // Open | Closed | Filled
  urgent: false,
  desc: "공고 상세 내용..." },
```
