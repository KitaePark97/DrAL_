# 🔥 Firebase 설정 가이드

**총 소요시간: 약 10분**

---

## 1단계 — Firebase 프로젝트 생성

1. [console.firebase.google.com](https://console.firebase.google.com) 접속 (구글 계정으로 로그인)
2. **"프로젝트 추가"** 클릭
3. 프로젝트 이름: `dral-lab` (또는 원하는 이름)
4. Google Analytics: **사용 안 함** 선택 → **프로젝트 만들기**
5. 약 30초 후 완료 → **계속** 클릭

---

## 2단계 — Firestore 데이터베이스 활성화

1. 왼쪽 메뉴 → **빌드** → **Firestore Database**
2. **"데이터베이스 만들기"** 클릭
3. 시작 모드: **테스트 모드** 선택 → **다음**
4. 위치: `us-central1` (또는 가장 가까운 지역) → **완료**
5. 잠시 기다리면 데이터베이스가 생성됩니다

### Firestore 보안 규칙 설정
> 테스트 모드는 30일 후 만료됩니다. 영구 설정을 위해:

1. Firestore → **규칙** 탭 클릭
2. 아래 내용으로 교체:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /lab/data {
      allow read: if true;       // 누구나 읽기 가능 (공개 사이트)
      allow write: if true;      // 쓰기도 허용 (비밀번호는 사이트에서 관리)
    }
  }
}
```

3. **게시** 클릭

---

## 3단계 — 웹 앱 등록 및 설정값 복사

1. Firebase Console → 프로젝트 홈 → **`</>`** (웹 아이콘) 클릭
2. 앱 닉네임: `dral-lab-web` → **앱 등록**
3. 아래와 같은 설정값이 나타납니다:

```javascript
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "dral-lab-xxxxx.firebaseapp.com",
  projectId:         "dral-lab-xxxxx",
  storageBucket:     "dral-lab-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef"
};
```

4. 이 값 전체를 복사

---

## 4단계 — index.html에 설정값 붙여넣기

`index.html` 파일을 열고 아래 부분을 찾으세요:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

Firebase에서 복사한 값으로 교체하세요:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",          // ← 복사한 값
  authDomain:        "dral-lab.firebaseapp.com",
  projectId:         "dral-lab-xxxxx",
  storageBucket:     "dral-lab-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef"
};
```

---

## 5단계 — GitHub에 올리기

수정된 `index.html`을 GitHub에 업로드하면 완료입니다.

**GitHub 웹에서:**
1. 레포지토리 → `index.html` 클릭 → ✏️ 편집
2. 전체 내용 교체 (Ctrl+A → Ctrl+V)
3. **Commit changes**

---

## 완료 확인

사이트를 열었을 때:
- ⏳ "Connecting to database…" 로딩 화면이 잠깐 나타나면 **정상**
- 바로 멤버/프로젝트가 보이면 **완료**

관리자 패널에서 수정 → **다른 기기/브라우저에서도 반영** → Firebase 연동 성공! ✅

---

## 자주 묻는 질문

**Q: 무료 플랜으로 충분한가요?**
Firebase Spark(무료) 플랜 기준:
- 하루 읽기 50,000회 / 쓰기 20,000회 / 삭제 20,000회
- 랩 웹사이트 수준에서는 평생 무료로 사용 가능합니다.

**Q: 데이터는 어디에 저장되나요?**
Google 클라우드(Firestore)에 저장됩니다. Firebase Console → Firestore에서 직접 데이터를 확인할 수 있습니다.

**Q: 비밀번호를 바꾸고 싶어요.**
`index.html`에서 이 줄을 찾아서 교체:
```javascript
const PW_HASH = btoa('dral2026');
// → 새 비밀번호:
const PW_HASH = btoa('새비밀번호');
```

**Q: 실시간 업데이트는 어떻게 작동하나요?**
Firestore의 `onSnapshot` 리스너를 사용합니다. 관리자가 저장하면 모든 방문자의 화면이 자동으로 업데이트됩니다 (새로고침 불필요).
