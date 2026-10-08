# Collect early-access emails in a Google Sheet (optional, free)

By default the "Notify me" box opens the visitor's email app, so each sign-up arrives as an email to
support@navastha.com. If you would rather have a tidy list in a Google Sheet, do this once.

1. Open **sheets.google.com**, create a blank sheet and name it `Navastha early access`.
2. In the sheet: **Extensions -> Apps Script**.
3. Delete what is there and paste this, then press the save icon:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var email = (e.parameter.email || '').trim();
  if (email) {
    sheet.appendRow([new Date(), email, e.parameter.source || '']);
  }
  return ContentService.createTextOutput('ok');
}
```

4. Press **Deploy -> New deployment -> Select type: Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Press **Deploy** and allow the permissions it asks for.
5. Copy the **Web app URL** (it starts with `https://script.google.com/macros/s/`).
6. In the website code, open `src/config.ts` and paste it between the quotes:

```ts
export const WAITLIST_ENDPOINT: string = 'https://script.google.com/macros/s/PASTE-YOUR-URL/exec'
```

7. Commit and push. The site rebuilds and new sign-ups appear as rows in the sheet (time, email, source).

Notes
- The privacy policy already says emails are used only to tell people about the launch.
- To stop collecting, set `WAITLIST_ENDPOINT` back to `''`.
