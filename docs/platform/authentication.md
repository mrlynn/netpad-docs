# Authentication

NetPad supports multiple authentication methods for secure access.

## Authentication Methods

### Magic Links

Passwordless email authentication:
- **No Password**: No password to remember
- **Secure**: Time-limited, single-use tokens
- **Email Required**: Must provide email address

**How It Works**:
1. Enter email address
2. Receive magic link email
3. Click link to sign in
4. Automatically signed in

### Passkeys (WebAuthn)

Biometric and hardware key authentication:
- **Biometric**: Use fingerprint, face ID
- **Hardware Keys**: Use security keys
- **Passwordless**: No password needed
- **Secure**: FIDO2/WebAuthn standard

**How It Works**:
1. Register passkey
2. Use biometric or key to sign in
3. Fast and secure authentication

### OAuth

Sign in with third-party providers:
- **Google**: Sign in with Google
- **GitHub**: Sign in with GitHub
- **More Providers**: Additional providers available

**How It Works**:
1. Click provider button
2. Authorize NetPad
3. Automatically signed in

## Setting Up Authentication

### Magic Links

Requires SMTP configuration:
- **SMTP Host**: Email server
- **SMTP Port**: Server port
- **SMTP Credentials**: Username and password
- **From Email**: Sender address

See [Configuration](../getting-started/configuration.md) for setup.

### Passkeys

Automatic setup:
- **Browser Support**: Modern browsers support
- **Device Support**: Biometric devices
- **Registration**: One-time setup

### OAuth

Requires provider setup:
1. **Create App**: With provider (Google, GitHub)
2. **Get Credentials**: Client ID and secret
3. **Configure Callback**: Set callback URL
4. **Add to NetPad**: Configure in settings

## Session Management

### Session Duration

- **Default**: 7 days
- **Configurable**: Adjust in settings
- **Remember Me**: Extend session

### Session Security

- **HTTP-Only Cookies**: Secure cookie storage
- **Secure Flag**: HTTPS only
- **SameSite**: CSRF protection
- **Encryption**: Encrypted session data

## Multi-Factor Authentication

### Enabling MFA

1. **Go to Settings**: Account settings
2. **Enable MFA**: Turn on multi-factor
3. **Setup Method**: Configure method
4. **Verify**: Complete setup

### MFA Methods

- **TOTP**: Time-based one-time password
- **SMS**: Text message codes
- **Email**: Email codes
- **Passkeys**: Hardware keys

## Account Management

### Profile Settings

- **Email**: Update email address
- **Name**: Change display name
- **Avatar**: Upload profile picture
- **Preferences**: User preferences

### Security Settings

- **Change Password**: (if using password auth)
- **Manage Passkeys**: Add/remove passkeys
- **Connected Accounts**: Manage OAuth connections
- **Active Sessions**: View and revoke sessions

## Best Practices

1. **Use Strong Methods**: Prefer passkeys or OAuth
2. **Enable MFA**: Add extra security layer
3. **Review Sessions**: Regularly check active sessions
4. **Secure Email**: Protect email account
