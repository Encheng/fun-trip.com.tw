# 靜態頁面管理系統

這是一個用於管理獨立靜態 HTML 頁面的系統，特別設計以保護隱私，確保訪客無法發現其他頁面的路徑。

## 目錄結構

```
pages/
├── README.md                 # 本說明文件
├── index.html               # 頁面列表管理界面（本地專用，不推送到 GitHub）
├── _registry.js             # 頁面註冊表（本地專用，不推送到 GitHub）
├── pages-manager.js         # 頁面管理器邏輯（本地專用，不推送到 GitHub）
├── guides/                  # 指南類別
├── travel-logs/             # 旅遊記錄類別
├── shopping/                # 購物相關類別
└── others/                  # 其他類別
```

## 隱私保護機制

### 管理檔案（本地專用）
以下檔案已添加到 `.gitignore`，**不會**被推送到 GitHub：
- `pages/index.html` - 列表管理頁面
- `pages/_registry.js` - 頁面註冊表
- `pages/pages-manager.js` - 管理器邏輯

這些檔案只存在於您的本地環境，供您管理和瀏覽所有靜態頁面使用。

### 靜態頁面（公開部署）
位於各類別目錄中的 HTML 檔案（如 `guides/example.html`）**會**被推送到 GitHub 並部署。

**重要特性：**
- 每個靜態頁面都是獨立的，沒有指向其他頁面的連結
- 訪客無法通過任何入口發現其他頁面的路徑
- 只有知道確切 URL 的人才能訪問特定頁面

## 如何使用

### 1. 本地管理頁面

在瀏覽器中打開 `pages/index.html`：
```
file:///Users/peterlu/docker/mount/var/www/fun-trip.com.tw/pages/index.html
```

或透過本地伺服器訪問：
```
http://localhost:8000/pages/index.html
```

這個頁面提供以下功能：
- 瀏覽所有靜態頁面
- 按類別篩選
- 按標籤篩選
- 搜尋頁面
- 排序功能

### 2. 新增靜態頁面

#### 步驟 1：建立 HTML 檔案
將您的完整 HTML 檔案放入對應的類別目錄，例如：
```bash
pages/guides/my-new-page.html
```

建議參考 `guides/example.html` 的結構，使用主應用的設計系統。

#### 步驟 2：註冊頁面資訊
編輯 `pages/_registry.js`，在 `pages` 陣列中添加新條目：

```javascript
{
  id: 'my-new-page',
  title: '我的新頁面',
  description: '頁面描述',
  path: 'guides/my-new-page.html',
  category: '指南',
  tags: ['標籤1', '標籤2'],
  date: '2025-12-15',
  author: 'PeterLu',
}
```

#### 步驟 3：提交到 Git
```bash
git add pages/guides/my-new-page.html
git commit -m "feat: 新增靜態頁面 - 我的新頁面"
git push
```

**注意：** 管理檔案不會被提交，只有靜態頁面本身會被推送。

### 3. 訪問靜態頁面

#### 本地訪問
通過本地伺服器：
```
http://localhost:8000/pages/guides/my-new-page.html
```

#### 線上訪問（部署後）
```
https://fun-trip.com.tw/pages/guides/my-new-page.html
```

## 類別說明

| 類別 | 目錄 | 用途 |
|------|------|------|
| 指南 | `guides/` | 使用指南、教學文件等 |
| 旅遊記錄 | `travel-logs/` | 旅遊記錄、遊記等 |
| 購物 | `shopping/` | 購物指南、伴手禮推薦等 |
| 其他 | `others/` | 不屬於以上類別的內容 |

您可以根據需要自行添加新的類別目錄。

## 設計系統整合

所有靜態頁面都應引用主應用的設計系統：

```html
<link rel="stylesheet" href="../../design-system.css">
```

### 可用的設計 Tokens

```css
/* 顏色 */
var(--color-primary-600)
var(--color-neutral-700)

/* 字體大小 */
var(--font-size-xl)
var(--font-size-lg)

/* 間距 */
var(--spacing-4)
var(--spacing-8)

/* 圓角 */
var(--border-radius-md)
var(--border-radius-lg)

/* 陰影 */
var(--shadow-sm)
var(--shadow-lg)
```

完整的設計 tokens 請參考 `design-system.css`。

## 安全注意事項

1. **不要在靜態頁面中添加指向其他頁面的連結**
   - 這會破壞隱私保護機制
   - 訪客可能會發現其他頁面的路徑

2. **不要在公開的地方分享列表頁 URL**
   - `pages/index.html` 只應在本地使用
   - 不會被推送到 GitHub

3. **謹慎分享靜態頁面 URL**
   - 只分享給需要查看該特定頁面的人
   - URL 本身就是訪問憑證

## 常見問題

### Q: 如何在本地預覽所有頁面？
A: 在瀏覽器中打開 `pages/index.html`。

### Q: 為什麼我的管理檔案沒有被推送到 GitHub？
A: 這是設計好的！管理檔案已添加到 `.gitignore`，只保留在本地。

### Q: 如何添加新的類別？
A: 在 `pages/` 下建立新目錄，然後在 `_registry.js` 中使用該類別名稱即可。

### Q: 靜態頁面可以包含 JavaScript 和 CSS 嗎？
A: 可以！您可以在 HTML 中內嵌或引用外部的 JS 和 CSS 檔案。

### Q: 如何刪除頁面？
A: 從目錄中刪除 HTML 檔案，並從 `_registry.js` 中移除對應的註冊條目。

## 技術優勢

1. **零後端依賴** - 完全靜態，無需伺服器配置
2. **GitHub Pages 友好** - 與 GitHub Pages 完美相容
3. **隱私保護** - 管理檔案不公開，訪客無法發現其他頁面
4. **設計一致** - 繼承主應用設計系統
5. **易於維護** - 集中管理，結構清晰

## 範例

查看 `guides/example.html` 獲取完整的範例頁面。

---

**版本：** 1.0.0
**最後更新：** 2025-12-15
**作者：** PeterLu
