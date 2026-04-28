# WhatsApp Message Sender (Node.js + Twilio)

Sends a WhatsApp message to a target number using the Twilio API.

---

## Prerequisites

- Node.js 18+
- A free [Twilio account](https://www.twilio.com/try-twilio)
- The recipient's phone must have WhatsApp installed

---

## Twilio Sandbox Setup (step-by-step)

### 1. Create a Twilio account
Go to <https://www.twilio.com/try-twilio> and sign up for free.

### 2. Open the WhatsApp Sandbox
In the Twilio Console navigate to:
**Messaging → Try it out → Send a WhatsApp message**

You will see a sandbox number — it is always **+1 415 523 8886**.

### 3. Activate the sandbox for the recipient
The recipient (the +52 55 8687 3187 number) must opt-in **once**:

1. Open WhatsApp on the target phone.
2. Send the following message to **+1 415 523 8886**:
   ```
   join <your-sandbox-keyword>
   ```
   (the exact keyword is shown in the Twilio Console sandbox page)
3. Twilio will reply with a confirmation — the number is now enabled.

### 4. Get your credentials
In the Twilio Console go to **Account → Account Info** and copy:
- **Account SID** (starts with `AC…`)
- **Auth Token**

---

## Installation

```bash
# 1. Clone the repo
git clone <repo-url>
cd What-s-app-check

# 2. Install dependencies
npm install

# 3. Create your .env file
cp .env.example .env
```

Edit `.env` with your real credentials:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
RECIPIENT_WHATSAPP_NUMBER=whatsapp:+525586873187
MESSAGE_TEXT=Hi
```

---

## Usage

```bash
npm start
```

Expected output:
```
Message sent successfully!
Message SID: SMxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Status: queued
```

---

## Troubleshooting

| Error | Cause | Fix |
|---|---|---|
| `20003 Authentication error` | Wrong SID or token | Re-copy from Twilio Console |
| `63007 Channel: WhatsApp` | Recipient hasn't joined sandbox | Send the join code from the target phone |
| `21211 Invalid To number` | Number format wrong | Use `whatsapp:+<country><number>` |
| `21608 Unverified number` | Trial account restriction | Verify the number in Twilio Console |

---

## Notes

- The free sandbox is for development only. For production you need a Twilio-provisioned WhatsApp number.
- `.env` is in `.gitignore` — never commit real credentials.

## License

MIT
