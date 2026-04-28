# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Python script (`send_whatsapp.py`) that sends WhatsApp messages via the Twilio API. Configuration is loaded from a `.env` file using `python-dotenv`.

## Setup

```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env       # then fill in real credentials
```

## Running

```bash
python send_whatsapp.py
```

## Dependencies

- `twilio==9.0.3` — Twilio SDK for sending WhatsApp messages
- `python-dotenv==1.0.0` — loads `.env` into `os.environ`
- `requests==2.31.0` — HTTP library (available if needed for direct API calls)

## Environment Variables

All credentials live in `.env` (gitignored). See `.env.example` for the required keys:

| Variable | Description |
|---|---|
| `TWILIO_ACCOUNT_SID` | Twilio account identifier |
| `TWILIO_AUTH_TOKEN` | Twilio secret token |
| `TWILIO_WHATSAPP_NUMBER` | Sender number, prefixed `whatsapp:+...` |
| `RECIPIENT_WHATSAPP_NUMBER` | Recipient number, prefixed `whatsapp:+...` |
| `MESSAGE_TEXT` | Message body to send |

Phone numbers must include the country code (e.g. `+1234567890`) and the `whatsapp:` prefix.

## Architecture Notes

The project is a single-script tool. The expected pattern is:
1. Load env vars with `python-dotenv`
2. Instantiate `twilio.rest.Client(account_sid, auth_token)`
3. Call `client.messages.create(from_=..., to=..., body=...)` 
4. Print the returned `message.sid` and `message.status`

Twilio free-trial accounts can only send to phone numbers that have been verified in the Twilio console. Messages are delivered asynchronously; the initial status returned is `queued`.
