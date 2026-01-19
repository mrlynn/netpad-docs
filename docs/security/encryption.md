# Encryption

NetPad implements multiple layers of encryption to protect your data, including connection vault encryption, field-level encryption using MongoDB Queryable Encryption, and data-in-transit protection.

## Connection Vault Encryption

### How It Works

Connection strings are encrypted using AES-256-GCM:

- **Encryption**: Before storage
- **Decryption**: On-demand when needed
- **Key Management**: Encryption keys never stored in database
- **Algorithm**: AES-256-GCM (strong encryption)

### Configuration

Set encryption key in environment:

```bash
VAULT_ENCRYPTION_KEY=base64-encoded-32-byte-key
```

Generate key:

```bash
openssl rand -base64 32
```

### Security

- **Keys Never Exposed**: Keys only in environment
- **Encrypted at Rest**: All connection strings encrypted
- **Access Control**: Role-based access to connections

## Field-Level Encryption

### MongoDB Queryable Encryption

NetPad supports MongoDB Queryable Encryption (formerly Client-Side Field Level Encryption / CSFLE) for protecting sensitive form data. Encryption happens **client-side** before data reaches the database, ensuring that even database administrators cannot read plaintext values.

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   User Input    │      │  NetPad App     │      │   MongoDB       │
│  SSN: 123-45-67 │ ───▶ │  Encrypts SSN   │ ───▶ │  Stores only    │
│                 │      │  before insert  │      │  ciphertext     │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### Key Features

- **Per-Field**: Encrypt specific fields
- **Queryable**: Can query encrypted fields (with Indexed algorithm)
- **Automatic**: Encryption/decryption is automatic
- **Transparent**: Works seamlessly with forms

### Encryption Algorithms

| Algorithm | Query Support | Use Case | Security Level |
|-----------|---------------|----------|----------------|
| `Indexed` | Equality queries | SSN lookups, email search | High |
| `Unindexed` | No queries | Medical records, bank accounts | Maximum |
| `Range` | Range queries | Salary ranges, dates | High (MongoDB 7.0+) |

### Query Types

| Type | Description | Example |
|------|-------------|---------|
| `none` | Cannot query this field | Medical history |
| `equality` | Exact match only | Find by SSN |
| `range` | Greater/less than | Salary > $50,000 |

### Sensitivity Levels

| Level | Description | Encryption |
|-------|-------------|------------|
| `public` | No sensitive data | Not needed |
| `internal` | Low sensitivity | Optional |
| `confidential` | Medium sensitivity | Recommended |
| `restricted` | High sensitivity (PII/PHI) | Required |
| `secret` | Maximum sensitivity | Mandatory |

### Encryption Configuration

Fields can be configured with encryption settings:

```typescript
interface FieldEncryptionConfig {
  enabled: boolean;              // Enable encryption
  algorithm: EncryptionAlgorithm;
  queryType: EncryptedQueryType;
  sensitivityLevel: DataSensitivityLevel;
  compliance?: ComplianceFramework[];
  contentionFactor?: number;     // For Indexed algorithm (1-8)
  rangeMin?: number | string;    // For Range algorithm
  rangeMax?: number | string;    // For Range algorithm
  encryptionReason?: string;     // Audit trail
}
```

### Configuration Examples

#### Encrypted SSN Field (Searchable)

```typescript
{
  path: 'ssn',
  label: 'Social Security Number',
  type: 'text',
  required: true,
  encryption: {
    enabled: true,
    algorithm: 'Indexed',           // Can search by SSN
    queryType: 'equality',          // Exact match only
    sensitivityLevel: 'secret',
    compliance: ['HIPAA', 'GDPR', 'CCPA'],
    contentionFactor: 4,            // Balance insert/query performance
    encryptionReason: 'PII - SSN required for identity verification',
  },
}
```

#### Encrypted Medical Records (No Query)

```typescript
{
  path: 'medicalHistory',
  label: 'Medical History',
  type: 'textarea',
  encryption: {
    enabled: true,
    algorithm: 'Unindexed',         // Maximum security
    queryType: 'none',              // Cannot be searched
    sensitivityLevel: 'restricted',
    compliance: ['HIPAA'],
    encryptionReason: 'PHI - Protected health information',
  },
}
```

#### Encrypted Bank Account

```typescript
{
  path: 'accountNumber',
  label: 'Bank Account Number',
  type: 'text',
  required: true,
  encryption: {
    enabled: true,
    algorithm: 'Unindexed',         // Never needs to be searched
    queryType: 'none',
    sensitivityLevel: 'secret',
    compliance: ['PCI-DSS', 'SOC2'],
    encryptionReason: 'Financial data - Bank account for direct deposit',
  },
}
```

### Use Cases

- **PII Data**: Personal identifiable information (SSN, driver's license)
- **PHI Data**: Protected health information (medical records, diagnoses)
- **Financial Data**: Bank accounts, credit card numbers, salaries
- **Compliance**: Meet HIPAA, PCI-DSS, GDPR, SOC2, CCPA, FERPA requirements

## Compliance Frameworks

### Supported Frameworks

| Framework | Full Name | Use Case |
|-----------|-----------|----------|
| `HIPAA` | Health Insurance Portability and Accountability Act | Healthcare data (PHI) |
| `PCI-DSS` | Payment Card Industry Data Security Standard | Payment/financial data |
| `GDPR` | General Data Protection Regulation | EU personal data |
| `SOC2` | Service Organization Control 2 | Security audits |
| `CCPA` | California Consumer Privacy Act | California residents' data |
| `FERPA` | Family Educational Rights and Privacy Act | Student records |

### Templates with Encryption

NetPad includes pre-built templates with encryption already configured:

| Template | Encrypted Fields | Compliance |
|----------|------------------|------------|
| Patient Intake | SSN, DOB, Insurance, Medical Conditions | HIPAA, GDPR, CCPA |
| Employee Onboarding | SSN, DOB, Bank Routing, Bank Account | GDPR, CCPA, PCI-DSS, SOC2 |
| Payment Form | Credit Card, CVV, Billing Address | PCI-DSS |
| Student Enrollment | SSN, DOB, Parent Info | FERPA |

See [@netpad/templates](../developer/packages-templates.md) for more details.

## KMS Provider Setup

To use field-level encryption, you must configure a Key Management Service (KMS) provider.

### Option 1: Local KMS (Development Only)

:::warning
Local KMS is NOT secure for production. Use only for development/testing.
:::

```bash
# .env.local
QE_KMS_PROVIDER=local
QE_LOCAL_MASTER_KEY=<96-byte-base64-key>
QE_KEY_VAULT_DB=encryption
QE_KEY_VAULT_COLLECTION=__keyVault
```

Generate a local master key:

```bash
node -e "console.log(require('crypto').randomBytes(96).toString('base64'))"
```

### Option 2: AWS KMS (Recommended for Production)

```bash
# .env
QE_KMS_PROVIDER=aws
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_KMS_KEY_ARN=arn:aws:kms:us-east-1:123456789:key/12345678-1234-...
AWS_KMS_KEY_REGION=us-east-1
```

**AWS Setup Steps:**

1. Create a KMS key in AWS Console
2. Create an IAM user with `kms:Encrypt` and `kms:Decrypt` permissions
3. Copy the key ARN and credentials to environment variables

### Option 3: Azure Key Vault

```bash
# .env
QE_KMS_PROVIDER=azure
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<secret>
AZURE_KEY_VAULT_ENDPOINT=https://vault-name.vault.azure.net/
AZURE_KEY_NAME=netpad-master-key
```

### Option 4: Google Cloud KMS

```bash
# .env
QE_KMS_PROVIDER=gcp
GCP_SERVICE_ACCOUNT_EMAIL=<email>
GCP_PRIVATE_KEY=<private-key>
GCP_PROJECT_ID=my-project
GCP_LOCATION=global
GCP_KEY_RING=netpad-keys
GCP_KEY_NAME=master-key
```

### MongoDB Requirements

| Feature | MongoDB Version |
|---------|-----------------|
| Queryable Encryption | 7.0+ |
| Legacy CSFLE | 4.2+ |
| Range Queries | 7.0+ (preview) |

## Data in Transit

### HTTPS

All connections use HTTPS:

- **TLS/SSL**: Encrypted connections
- **Certificate**: Valid SSL certificate required
- **Forced**: HTTP redirects to HTTPS

### MongoDB Connections

- **TLS**: MongoDB connections use TLS
- **Certificate Validation**: Verify certificates
- **Encrypted**: All data encrypted in transit

## Enabling Encryption in Forms

### Via Form Builder UI

1. **Open Form Settings** - Click the settings icon in the form builder
2. **Navigate to Security** - Select the "Security" tab
3. **Enable Field Encryption** - Toggle encryption for specific fields
4. **Configure Settings** - Set algorithm, query type, and compliance
5. **Save** - Encryption is enabled

### Via API

```typescript
// Create form with encrypted fields
const form = await netpad.forms.create({
  name: 'Secure Patient Intake',
  fields: [
    {
      path: 'ssn',
      label: 'Social Security Number',
      type: 'text',
      encryption: {
        enabled: true,
        algorithm: 'Indexed',
        queryType: 'equality',
        sensitivityLevel: 'secret',
        compliance: ['HIPAA'],
      },
    },
  ],
});
```

### Via Templates

Use pre-configured encrypted templates:

```typescript
import { getTemplateById } from '@netpad/templates';

const template = getTemplateById('patient-intake');
// Template already has encryption configured for sensitive fields
```

## Best Practices

### Key Management

1. **Rotate Keys**: Regularly rotate encryption keys
2. **Secure Storage**: Protect encryption keys in KMS
3. **Access Control**: Limit who can access master keys
4. **Backup Keys**: Maintain secure key backups

### Field Selection

1. **Encrypt Sensitive Data**: SSN, DOB, financial info, medical records
2. **Choose Right Algorithm**: Use Indexed only if you need to query
3. **Document Reasons**: Include encryptionReason for audit trail
4. **Compliance Tagging**: Tag fields with applicable compliance frameworks

### Monitoring

1. **Monitor Access**: Track who accesses encrypted data
2. **Audit Logs**: Enable audit logging for encryption operations
3. **Alert on Anomalies**: Set up alerts for unusual access patterns
4. **Regular Reviews**: Periodically review encryption configurations

### Performance

1. **Contention Factor**: Tune for insert vs. query performance (1-8)
2. **Selective Encryption**: Only encrypt fields that need it
3. **Index Strategy**: Plan indexes around encrypted field query patterns
4. **Test Performance**: Benchmark with your expected data volume

## Troubleshooting

### Common Issues

#### "Encryption key not found"

- Ensure KMS provider environment variables are set
- Verify the key vault collection exists in MongoDB
- Check that the Data Encryption Key (DEK) was created

#### "Cannot query encrypted field"

- Field may be using `Unindexed` algorithm (no queries allowed)
- Change to `Indexed` algorithm if queries are needed
- Ensure `queryType` matches your query needs

#### "MongoDB version not supported"

- Queryable Encryption requires MongoDB 7.0+
- For MongoDB 4.2-6.x, use legacy CSFLE mode
- Range queries require MongoDB 7.0+

### Debug Mode

Enable encryption debug logging:

```bash
DEBUG=netpad:encryption npm run dev
```

## Resources

- [MongoDB Queryable Encryption Documentation](https://www.mongodb.com/docs/manual/core/queryable-encryption/)
- [@netpad/templates Package](../developer/packages-templates.md)
- [HIPAA Compliance Guide](https://www.hhs.gov/hipaa/index.html)
- [PCI-DSS Requirements](https://www.pcisecuritystandards.org/)
- [GDPR Official Text](https://gdpr.eu/)

## Next Steps

- [Access Control](./access-control.md) - Understand access control
- [Best Practices](./best-practices.md) - Security best practices
- [@netpad/templates](../developer/packages-templates.md) - Templates with encryption
