# Deposit Onboarding Router Prototype

Local-only clickable prototype for routing deposit holders to the correct onboarding call page.

## Start the Server

From this project folder, install dependencies once:

```bash
npm install
```

Then start the local development server:

```bash
npm run dev
```

Open the local URL shown by Next.js, usually:

```text
http://localhost:3000
```

To stop the server, press `Ctrl+C` in the terminal where it is running.

## Prototype Behavior

- Enter an email on `/`.
- The email is trimmed and lowercased.
- Emails starting with `i`, `m`, or `c` route to Initiate, Master, or Council.
- Any other email routes to `/select`, where the user is asked to confirm the email or contact `support@petersage.com`.
- Booking pages are placeholders only. No database, API route, authentication, or real booking links are included.

## Test Emails

- `initiate@example.com` -> Initiate
- `master@example.com` -> Master
- `council@example.com` -> Council
- `  Initiate@example.com  ` -> Initiate
- `unknown@example.com` -> confirm email / contact support
