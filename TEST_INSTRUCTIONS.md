# Testing Instructions

## ✅ BOTH FIXES ARE DEPLOYED!

The production bundle at https://ajaymiryala.com/assets/index-DDGtbfPx.js contains:

1. **Lazy Loading**: `loading:"lazy"` + `decoding:"async"` ✓
2. **Scroll Fix**: `sessionStorage.getItem("journey-visited")` + `scrollTo` ✓

## Why You're Still Seeing Issues

Your browser has cached data from BEFORE these fixes:

1. **sessionStorage flag** - `journey-visited` is set from old visit
2. **HTTP cache** - Old HTML/images cached
3. **Service Worker** (if any) - Serving stale assets

## How to Test Properly

### Option 1: Incognito/Private Window
**This is the BEST way to test:**

1. Close all browser windows
2. Open **new incognito/private window**:
   - Chrome: `Ctrl+Shift+N`
   - Firefox: `Ctrl+Shift+P`
   - Edge: `Ctrl+Shift+N`
3. Go to https://ajaymiryala.com/journey
4. **Expected behavior**:
   - Page should load at TOP (not middle)
   - Timeline images should load only when you scroll to them
   - Network tab should show images loading progressively

### Option 2: Clear Browser Data

1. Open Developer Tools (`F12`)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Click **Clear Storage** or **Clear Site Data**
4. Check ALL boxes:
   - Cookies
   - Local Storage
   - Session Storage
   - Cache Storage
   - Service Workers
5. Click "Clear site data"
6. Hard refresh: `Ctrl+Shift+R`

### Option 3: Manual SessionStorage Clear

1. Go to https://ajaymiryala.com/journey
2. Open Console (`F12` → Console tab)
3. Run:
   ```javascript
   sessionStorage.clear();
   location.reload();
   ```

## Verification Checklist

After clearing cache, verify:

- [ ] Page loads **at top** on first visit to /journey
- [ ] Scroll position **preserved** on second visit (reload page)
- [ ] Timeline images **don't all load** immediately
- [ ] Network waterfall shows **progressive image loading**
- [ ] Check Network tab filtered to "Img" - should see 3-5 images initially, then more as you scroll

## Technical Proof

Run in browser console at https://ajaymiryala.com/:

```javascript
// Check if scroll fix exists in bundle
fetch('/assets/index-DDGtbfPx.js')
  .then(r => r.text())
  .then(t => {
    console.log('Scroll fix deployed:', t.includes('journey-visited'));
    console.log('Lazy loading deployed:', t.includes('loading:"lazy"'));
  });
```

Both should log `true`.

## Contact Me After Testing

Test in incognito first, then let me know:
1. Does page load at top on first visit?
2. Do images load progressively as you scroll?
3. Are there still issues?

If still broken after incognito test, I'll investigate deeper.
