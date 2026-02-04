---
sidebar_position: 1
title: API Endpoint Catalog
description: Complete catalog of all NetPad API endpoints
---

# API Endpoint Catalog

NetPad exposes **362 API endpoints** across **55 categories**.

:::info Auto-generated
This catalog is generated from the NetPad source code. Endpoints marked with `?` use dynamic exports.
:::

## Summary

| Category | Endpoints |
|----------|-----------|
| [admin](#admin) | 47 |
| [ai](#ai) | 20 |
| [api-keys](#apikeys) | 2 |
| [applications](#applications) | 24 |
| [auth](#auth) | 23 |
| [billing](#billing) | 6 |
| [broadcasts](#broadcasts) | 1 |
| [chatbot](#chatbot) | 1 |
| [collaborator](#collaborator) | 1 |
| [collections](#collections) | 2 |
| [connections](#connections) | 4 |
| [consent](#consent) | 1 |
| [contact](#contact) | 1 |
| [conversational](#conversational) | 1 |
| [cron](#cron) | 1 |
| [data-explorer](#dataexplorer) | 1 |
| [data-export](#dataexport) | 1 |
| [data-import](#dataimport) | 5 |
| [debug](#debug) | 2 |
| [demo](#demo) | 2 |
| [deployments](#deployments) | 5 |
| [dev](#dev) | 2 |
| [executions](#executions) | 1 |
| [ext](#ext) | 2 |
| [extensions](#extensions) | 2 |
| [files](#files) | 2 |
| [forms](#forms) | 29 |
| [forms-save](#formssave) | 1 |
| [generate-filter](#generatefilter) | 1 |
| [generate-pipeline](#generatepipeline) | 1 |
| [help](#help) | 2 |
| [integrations](#integrations) | 12 |
| [landing](#landing) | 1 |
| [marketplace](#marketplace) | 10 |
| [migration](#migration) | 1 |
| [mongodb](#mongodb) | 12 |
| [onboarding](#onboarding) | 14 |
| [organizations](#organizations) | 32 |
| [orgs](#orgs) | 3 |
| [platform](#platform) | 11 |
| [projects](#projects) | 12 |
| [rag](#rag) | 12 |
| [redirect](#redirect) | 1 |
| [referrals](#referrals) | 1 |
| [samples](#samples) | 1 |
| [telemetry](#telemetry) | 1 |
| [templates](#templates) | 4 |
| [terminal](#terminal) | 3 |
| [user](#user) | 2 |
| [v1](#v1) | 11 |
| [vault](#vault) | 1 |
| [waitlist](#waitlist) | 1 |
| [webhooks](#webhooks) | 1 |
| [workflow-templates](#workflowtemplates) | 1 |
| [workflows](#workflows) | 20 |

## Public API (v1)

The `/api/v1/` endpoints are the stable public API for external integrations.

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/v1/applications` | GET | List applications |
| `/v1/auth/validate` | GET, POST | API key validation |
| `/v1/forms` | GET, POST | List/create forms |
| `/v1/forms/{formId}` | GET, PATCH, DELETE | Get/update/delete form |
| `/v1/forms/{formId}/submissions` | GET, POST | List/create submissions |
| `/v1/forms/{formId}/submissions/{submissionId}` | GET, DELETE | Get/delete submission |
| `/v1/health` | GET | Health check |
| `/v1/mcp-metrics` | GET, POST | MCP metrics |
| `/v1/openapi.json` | GET | OpenAPI specification |
| `/v1/organizations` | GET | List organizations |
| `/v1/projects` | GET | List projects |

## Administration {#admin}

**47 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/admin/ai-analytics` | GET |
| `/admin/ai-analytics/top-users` | GET |
| `/admin/alerts/history` | GET |
| `/admin/alerts/history/{alertId}` | PATCH |
| `/admin/alerts/rules` | GET, POST |
| `/admin/alerts/rules/{ruleId}` | GET, PATCH, DELETE |
| `/admin/alerts/rules/{ruleId}/test` | POST |
| `/admin/api-metrics` | ? |
| `/admin/assignments` | GET |
| `/admin/audit-logs` | GET |
| `/admin/broadcasts` | GET, POST |
| `/admin/broadcasts/{broadcastId}` | GET, PATCH, DELETE |
| `/admin/clusters` | GET |
| `/admin/clusters/purge-deleted` | POST |
| `/admin/clusters/{clusterId}` | GET, PATCH, DELETE |
| `/admin/clusters/{clusterId}/connection-string` | GET |
| `/admin/conversations` | GET, POST |
| `/admin/conversations/{conversationId}` | GET |
| `/admin/deployments` | GET |
| `/admin/errors` | GET |
| `/admin/errors/{errorId}` | GET, PATCH |
| `/admin/extensions` | GET |
| `/admin/extensions/{extensionId}` | GET, PATCH, DELETE |
| `/admin/groups` | GET |
| `/admin/impersonate` | POST |
| `/admin/impersonate/end` | POST |
| `/admin/instance` | GET |
| `/admin/instance/restart` | GET, POST |
| `/admin/mcp-analytics` | GET |
| `/admin/organizations` | GET |
| `/admin/organizations/search` | GET |
| `/admin/performance` | GET, POST, DELETE |
| `/admin/platform-stats` | GET |
| `/admin/referrals` | GET |
| `/admin/referrals/codes` | GET, POST |
| `/admin/referrals/codes/{code}/assign` | POST |
| `/admin/referrals/payouts` | GET |
| `/admin/referrals/payouts/{payoutId}/approve` | POST |
| `/admin/referrals/payouts/{payoutId}/reject` | POST |
| `/admin/roles` | GET |
| `/admin/system-status` | ? |
| `/admin/users` | GET |
| `/admin/users/stats` | GET |
| `/admin/users/{userId}` | GET, PUT, DELETE |
| `/admin/waitlist` | GET |
| `/admin/waitlist/stats` | GET |
| `/admin/waitlist/{userId}` | PUT |

## AI & Agents {#ai}

**20 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/ai` | GET |
| `/ai/chat` | POST |
| `/ai/completion-hints` | POST |
| `/ai/compliance-audit` | POST |
| `/ai/explain-formula` | POST |
| `/ai/form-optimization` | POST |
| `/ai/generate-application` | POST |
| `/ai/generate-conditional-logic` | POST |
| `/ai/generate-form` | POST |
| `/ai/generate-formula` | POST |
| `/ai/generate-validation` | GET, POST |
| `/ai/generate-workflow` | POST |
| `/ai/health` | GET |
| `/ai/node-config` | POST |
| `/ai/process-response` | POST |
| `/ai/provider-info` | GET |
| `/ai/response-insights` | POST |
| `/ai/status` | GET |
| `/ai/suggest-fields` | POST |
| `/ai/translate` | GET, POST |

## API Keys {#apikeys}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/api-keys` | GET, POST |
| `/api-keys/{keyId}` | GET, PATCH, DELETE |

## Applications {#applications}

**24 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/applications` | ? |
| `/applications/by-slug/{slug}` | GET |
| `/applications/grouped` | GET |
| `/applications/installed` | GET |
| `/applications/installed/{id}` | GET, POST |
| `/applications/installed/{id}/updates` | GET |
| `/applications/installed/{id}/upgrade` | POST |
| `/applications/recent` | GET |
| `/applications/{applicationId}` | ? |
| `/applications/{applicationId}/access` | POST |
| `/applications/{applicationId}/components/lock` | POST |
| `/applications/{applicationId}/components/protected` | GET |
| `/applications/{applicationId}/components/unlock` | POST |
| `/applications/{applicationId}/contracts` | GET, POST |
| `/applications/{applicationId}/contracts/by-version/{version}` | GET |
| `/applications/{applicationId}/contracts/compare` | GET |
| `/applications/{applicationId}/contracts/{contractId}` | GET, PATCH, DELETE |
| `/applications/{applicationId}/download` | POST |
| `/applications/{applicationId}/permissions` | GET, POST |
| `/applications/{applicationId}/permissions/me` | GET |
| `/applications/{applicationId}/permissions/{permissionId}` | PATCH, DELETE |
| `/applications/{applicationId}/releases` | GET, POST |
| `/applications/{applicationId}/releases/next-version` | GET |
| `/applications/{applicationId}/schema` | GET |

## Authentication {#auth}

**23 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/auth/cli/authorize` | POST |
| `/auth/cli/device` | POST |
| `/auth/cli/device-flow` | GET, POST |
| `/auth/cli/magic-link` | POST |
| `/auth/cli/magic-link/poll/{cliToken}` | GET |
| `/auth/cli/magic-link/{token}` | GET |
| `/auth/cli/session` | GET, POST |
| `/auth/cli/token` | POST |
| `/auth/credentials` | GET, POST |
| `/auth/google` | GET |
| `/auth/google/callback` | GET |
| `/auth/magic-link/send` | POST |
| `/auth/magic-link/verify` | POST |
| `/auth/oauth/callback/{provider}` | GET |
| `/auth/oauth/providers` | GET |
| `/auth/oauth/{provider}` | GET |
| `/auth/passkey/login` | POST |
| `/auth/passkey/login-options` | POST |
| `/auth/passkey/register` | POST |
| `/auth/passkey/register-options` | POST |
| `/auth/passkey/reset` | DELETE |
| `/auth/profile` | GET, PATCH |
| `/auth/session` | GET, DELETE |

## Billing {#billing}

**6 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/billing/cancel` | POST, DELETE |
| `/billing/checkout` | POST |
| `/billing/features` | GET |
| `/billing/portal` | POST |
| `/billing/usage` | GET, POST |
| `/billing/webhook` | POST |

## Broadcasts {#broadcasts}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/broadcasts/active` | GET, POST |

## Chatbot {#chatbot}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/chatbot` | POST |

## Collaborator {#collaborator}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/collaborator/notify` | POST |

## Collections {#collections}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/collections` | GET, POST |
| `/collections/{collectionName}` | GET, DELETE |

## Connections {#connections}

**4 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/connections/delete` | POST |
| `/connections/list` | ? |
| `/connections/load` | POST |
| `/connections/save` | POST |

## Consent {#consent}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/consent` | GET, POST, DELETE |

## Contact {#contact}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/contact` | POST |

## Conversational {#conversational}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/conversational/stream` | POST |

## Cron {#cron}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/cron/observability` | GET |

## Data Explorer {#dataexplorer}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/data-explorer/linked-resources` | GET |

## Data Export {#dataexport}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/data-export` | GET, POST |

## Data Import {#dataimport}

**5 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/data-import` | GET, POST |
| `/data-import/{importId}` | GET, DELETE |
| `/data-import/{importId}/analyze` | POST |
| `/data-import/{importId}/configure` | POST |
| `/data-import/{importId}/execute` | POST |

## Debug {#debug}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/debug/form-config` | GET |
| `/debug/platform-status` | GET |

## Demo {#demo}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/demo/conversational-stream` | POST |
| `/demo/save-contact` | GET, POST |

## Deployments {#deployments}

**5 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/deployments` | GET, POST |
| `/deployments/{deploymentId}` | GET, PATCH, DELETE |
| `/deployments/{deploymentId}/deploy` | POST |
| `/deployments/{deploymentId}/inject-bundle` | GET, POST |
| `/deployments/{deploymentId}/status` | GET |

## Dev {#dev}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/dev/reset` | GET, POST |
| `/dev/subscription` | GET, POST |

## Executions {#executions}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/executions/{executionId}` | GET |

## Ext {#ext}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/ext/workflow-nodes` | GET |
| `/ext/{...path}` | GET, POST, PUT, PATCH, DELETE |

## Extensions {#extensions}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/extensions/features` | GET |
| `/extensions/status` | GET |

## Files {#files}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/files/delete` | DELETE |
| `/files/upload` | GET, POST |

## Forms {#forms}

**29 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/forms/batch-stats` | GET |
| `/forms/by-collection` | GET |
| `/forms/check-slug` | GET |
| `/forms/import` | GET, POST |
| `/forms/import/{importId}` | GET, POST |
| `/forms/list` | ? |
| `/forms/search` | POST |
| `/forms/thumbnail` | POST |
| `/forms/{formId}` | ? |
| `/forms/{formId}/analytics` | GET |
| `/forms/{formId}/analytics/interactions` | GET, POST |
| `/forms/{formId}/audit` | GET |
| `/forms/{formId}/bundle` | GET |
| `/forms/{formId}/conversations` | GET |
| `/forms/{formId}/conversations/{conversationId}` | GET |
| `/forms/{formId}/definition` | GET |
| `/forms/{formId}/draft` | GET, POST, DELETE |
| `/forms/{formId}/export` | GET |
| `/forms/{formId}/move` | POST |
| `/forms/{formId}/reactions` | GET, POST |
| `/forms/{formId}/reactions/execute` | POST |
| `/forms/{formId}/reactions/{reactionId}` | GET, PUT, DELETE |
| `/forms/{formId}/responses` | GET, POST |
| `/forms/{formId}/responses/{responseId}` | GET, PATCH, DELETE |
| `/forms/{formId}/slug` | GET, PATCH |
| `/forms/{formId}/submissions` | GET, DELETE |
| `/forms/{formId}/submit` | POST |
| `/forms/{formId}/versions` | GET, POST |
| `/forms/{formId}/versions/{versionId}` | GET, POST, DELETE |

## Forms Save {#formssave}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/forms-save` | ? |

## Generate Filter {#generatefilter}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/generate-filter` | POST |

## Generate Pipeline {#generatepipeline}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/generate-pipeline` | POST |

## Help {#help}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/help` | GET |
| `/help/{topicId}` | GET |

## Integrations {#integrations}

**12 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/integrations/google-forms` | GET |
| `/integrations/google-forms/addon-import` | POST |
| `/integrations/google-forms/import` | POST |
| `/integrations/google-forms/import-url` | POST |
| `/integrations/google-forms/parse-url` | POST |
| `/integrations/google-forms/preview` | GET |
| `/integrations/google-forms/validate` | POST |
| `/integrations/slack/install` | GET |
| `/integrations/slack/oauth` | GET, POST |
| `/integrations/vercel/callback` | GET |
| `/integrations/vercel/env` | GET, POST |
| `/integrations/vercel/provision` | GET, POST |

## Landing {#landing}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/landing/generate-form-stream` | POST |

## Marketplace {#marketplace}

**10 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/marketplace/applications` | GET, POST |
| `/marketplace/applications/admin/pending` | GET |
| `/marketplace/applications/{id}` | GET, POST, PUT, DELETE |
| `/marketplace/applications/{id}/review` | PUT |
| `/marketplace/applications/{id}/reviews` | GET, POST |
| `/marketplace/applications/{id}/reviews/me` | GET |
| `/marketplace/applications/{id}/reviews/{reviewId}` | PUT, DELETE |
| `/marketplace/npm/install` | POST |
| `/marketplace/npm/search` | GET |
| `/marketplace/npm/sync` | GET, POST |

## Migration {#migration}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/migration/orphaned-forms` | GET, POST |

## MongoDB Operations {#mongodb}

**12 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/mongodb/collections` | POST |
| `/mongodb/distinct-values` | GET, POST |
| `/mongodb/document` | GET, PUT, DELETE |
| `/mongodb/execute-pipeline` | POST |
| `/mongodb/insert-document` | POST |
| `/mongodb/lookup-options` | POST |
| `/mongodb/query` | POST |
| `/mongodb/sample-data` | POST |
| `/mongodb/sample-documents` | POST |
| `/mongodb/schema` | POST |
| `/mongodb/test-connection` | POST |
| `/mongodb/update-document` | POST |

## Onboarding {#onboarding}

**14 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/onboarding/admin/auth/login` | POST |
| `/onboarding/admin/auth/logout` | POST |
| `/onboarding/admin/auth/status` | GET |
| `/onboarding/analytics` | GET |
| `/onboarding/database` | POST |
| `/onboarding/intent` | POST |
| `/onboarding/settings` | GET, PUT |
| `/onboarding/signup` | GET, POST |
| `/onboarding/signup/database` | POST |
| `/onboarding/skip` | POST |
| `/onboarding/status` | GET |
| `/onboarding/submissions` | GET |
| `/onboarding/submissions/{id}` | GET, PATCH, DELETE |
| `/onboarding/submit` | POST |

## Organizations {#organizations}

**32 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/organizations` | ? |
| `/organizations/{orgId}` | ? |
| `/organizations/{orgId}/atlas-invite` | GET, POST |
| `/organizations/{orgId}/cluster` | GET, POST, DELETE |
| `/organizations/{orgId}/cluster/initialize` | POST |
| `/organizations/{orgId}/cluster/users` | GET, POST, DELETE |
| `/organizations/{orgId}/export` | GET |
| `/organizations/{orgId}/integrations` | GET, POST |
| `/organizations/{orgId}/integrations/email` | GET |
| `/organizations/{orgId}/integrations/test-atlas` | POST |
| `/organizations/{orgId}/integrations/test-moltboard` | POST |
| `/organizations/{orgId}/integrations/{credentialId}` | GET, DELETE |
| `/organizations/{orgId}/invites` | GET, POST |
| `/organizations/{orgId}/members` | GET |
| `/organizations/{orgId}/referrals` | GET |
| `/organizations/{orgId}/referrals/code` | GET, POST |
| `/organizations/{orgId}/referrals/earnings` | GET |
| `/organizations/{orgId}/referrals/payouts` | GET, POST |
| `/organizations/{orgId}/referrals/stats` | GET |
| `/organizations/{orgId}/reset` | POST |
| `/organizations/{orgId}/sample-data` | GET, POST |
| `/organizations/{orgId}/slug` | GET, PATCH |
| `/organizations/{orgId}/templates` | GET, POST |
| `/organizations/{orgId}/templates/{templateId}` | GET, PATCH, DELETE |
| `/organizations/{orgId}/templates/{templateId}/archive` | POST |
| `/organizations/{orgId}/templates/{templateId}/clone` | POST |
| `/organizations/{orgId}/templates/{templateId}/publish` | POST |
| `/organizations/{orgId}/vault` | GET, POST |
| `/organizations/{orgId}/vault/{vaultId}` | GET, PATCH, DELETE |
| `/organizations/{orgId}/vault/{vaultId}/decrypt` | GET |
| `/organizations/{orgId}/vault/{vaultId}/duplicate` | POST |
| `/organizations/{orgId}/vault/{vaultId}/test` | POST |

## Orgs {#orgs}

**3 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/orgs/{orgId}/analytics` | GET |
| `/orgs/{orgId}/analytics/conversations` | GET, POST |
| `/orgs/{orgId}/analytics/forms` | GET |

## Platform RBAC {#platform}

**11 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/platform/orgs/{orgId}` | GET, PATCH |
| `/platform/orgs/{orgId}/assignments` | GET, POST, DELETE |
| `/platform/orgs/{orgId}/groups` | GET, POST |
| `/platform/orgs/{orgId}/groups/{groupId}` | GET, PATCH, DELETE |
| `/platform/orgs/{orgId}/invitations` | GET, POST |
| `/platform/orgs/{orgId}/members` | GET |
| `/platform/orgs/{orgId}/members/{memberId}` | GET, PATCH, DELETE |
| `/platform/orgs/{orgId}/members/{memberId}/permissions` | GET |
| `/platform/orgs/{orgId}/roles` | GET, POST |
| `/platform/orgs/{orgId}/roles/{roleId}` | GET, PATCH, DELETE |
| `/platform/users/me/permissions` | GET |

## Projects {#projects}

**12 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/projects` | ? |
| `/projects/{projectId}` | ? |
| `/projects/{projectId}/bundle` | GET |
| `/projects/{projectId}/data-views` | GET, POST |
| `/projects/{projectId}/data-views/discover-fields` | POST |
| `/projects/{projectId}/data-views/{slug}` | GET, PATCH, DELETE |
| `/projects/{projectId}/data-views/{slug}/query` | POST |
| `/projects/{projectId}/data-views/{slug}/rows` | POST |
| `/projects/{projectId}/data-views/{slug}/rows/{id}` | PATCH, DELETE |
| `/projects/{projectId}/default-vault` | GET |
| `/projects/{projectId}/download` | POST |
| `/projects/{projectId}/stats` | GET |

## RAG & Knowledge {#rag}

**12 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/rag/admin/diagnostics` | GET |
| `/rag/admin/ensure-index` | GET, POST |
| `/rag/cluster/validate` | POST |
| `/rag/config` | GET, PUT, DELETE |
| `/rag/documents` | GET |
| `/rag/documents/upload` | POST |
| `/rag/documents/{documentId}` | GET, DELETE |
| `/rag/faqs` | GET, POST |
| `/rag/faqs/search` | POST |
| `/rag/faqs/{faqId}` | GET, PATCH, DELETE |
| `/rag/retrieve` | POST |
| `/rag/usage` | GET |

## Redirect {#redirect}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/redirect/legacy-app` | GET |

## Referrals {#referrals}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/referrals/validate` | GET |

## Samples {#samples}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/samples` | GET |

## Telemetry {#telemetry}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/telemetry/performance` | POST |

## Templates {#templates}

**4 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/templates/built-in` | GET |
| `/templates/built-in/{templateId}/clone` | POST |
| `/templates/import` | POST |
| `/templates/{templateId}/instantiate` | POST |

## Terminal {#terminal}

**3 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/terminal` | POST |
| `/terminal/completions` | GET, POST |
| `/terminal/fs` | POST |

## User {#user}

**2 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/user/data-deletion` | GET, POST |
| `/user/data-export` | GET, POST |

## Vault {#vault}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/vault/connections` | GET |

## Waitlist {#waitlist}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/waitlist/signup` | POST |

## Webhooks {#webhooks}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/webhooks/moltboard` | GET, POST |

## Workflow Templates {#workflowtemplates}

**1 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/workflow-templates` | GET |

## Workflows {#workflows}

**20 endpoints**

| Endpoint | Methods |
|----------|---------|
| `/workflows` | ? |
| `/workflows/import` | GET, POST |
| `/workflows/import/{importId}` | GET |
| `/workflows/jobs` | GET |
| `/workflows/process` | GET, POST |
| `/workflows/public/executions/{executionId}` | GET |
| `/workflows/public/{workflowSlug}` | GET |
| `/workflows/public/{workflowSlug}/execute` | POST |
| `/workflows/thumbnail` | POST |
| `/workflows/{workflowId}` | ? |
| `/workflows/{workflowId}/definition` | GET |
| `/workflows/{workflowId}/execute` | POST |
| `/workflows/{workflowId}/executions` | GET |
| `/workflows/{workflowId}/executions/{executionId}` | GET, POST |
| `/workflows/{workflowId}/move` | POST |
| `/workflows/{workflowId}/publish` | POST |
| `/workflows/{workflowId}/rollback` | POST |
| `/workflows/{workflowId}/status` | PATCH |
| `/workflows/{workflowId}/versions` | GET |
| `/workflows/{workflowId}/versions/{version}` | GET |

