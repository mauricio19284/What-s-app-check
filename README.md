# WhatsApp Message Sender

A simple Python script to send WhatsApp messages using Twilio API and Claude.

## Prerequisites

- Python 3.7+
- Twilio Account (free trial available)
- A Twilio WhatsApp number
- Recipient's WhatsApp number

## Installation

1. **Clone or download this repository**

2. **Create a virtual environment:**
```bash
python -m venv venv
```

3. **Activate the virtual environment:**
   - On macOS/Linux:
   ```bash
   source venv/bin/activate
   ```
   - On Windows:
   ```bash
   venv\Scripts\activate
   ```

4. **Install dependencies:**
```bash
pip install -r requirements.txt
```

## Setup

1. **Sign up for Twilio:**
   - Go to [twilio.com](https://www.twilio.com)
   - Create a free account

2. **Get your credentials:**
   - Navigate to Console → Account Info
   - Copy your **Account SID** and **Auth Token**

3. **Enable WhatsApp:**
   - Go to Messaging → Try it out → Send a WhatsApp message
   - Get your WhatsApp number and sandbox credentials

4. **Configure environment variables:**
```bash
cp .env.example .env
```
   - Edit `.env` with your actual credentials
   - Format phone numbers with country code: `+1234567890`

5. **Run the script:**
```bash
python send_whatsapp.py
```

## Expected Output

```
✅ Message sent successfully!
Message SID: SMxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Status: queued
```

## Troubleshooting

- **"Invalid credentials"**: Check your Account SID and Auth Token
- **"Invalid To number"**: Ensure phone number includes country code and is verified
- **"Invalid From number"**: Verify your Twilio WhatsApp number

## Notes

- Twilio free trial only sends to verified numbers
- Messages are queued and may take a few seconds to deliver
- Keep your `.env` file private (it's in `.gitignore`)

## License

MIT
