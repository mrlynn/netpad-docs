/**
 * Category Metadata
 * Icons, colors, and labels for template categories
 */

import type { TemplateCategory, CategoryMeta } from '../types';

export const categoryMeta: Record<TemplateCategory, CategoryMeta> = {
  business: {
    label: 'Business & Sales',
    icon: '💼',
    color: '#10B981',
    description: 'Contact forms, lead capture, quotes',
  },
  healthcare: {
    label: 'Healthcare & Wellness',
    icon: '🏥',
    color: '#3B82F6',
    description: 'Patient intake, medical history, appointments',
  },
  hr: {
    label: 'HR & Recruitment',
    icon: '👥',
    color: '#8B5CF6',
    description: 'Job applications, onboarding, time off',
  },
  finance: {
    label: 'Finance & Accounting',
    icon: '💰',
    color: '#F59E0B',
    description: 'Expense reports, invoices, budgets',
  },
  education: {
    label: 'Education & Training',
    icon: '📚',
    color: '#EC4899',
    description: 'Course enrollment, evaluations, certifications',
  },
  events: {
    label: 'Events & Registration',
    icon: '🎫',
    color: '#06B6D4',
    description: 'Event registration, RSVPs, ticketing',
  },
  feedback: {
    label: 'Feedback & Surveys',
    icon: '📊',
    color: '#84CC16',
    description: 'Customer satisfaction, NPS, reviews',
  },
  support: {
    label: 'Customer Service',
    icon: '🎧',
    color: '#F97316',
    description: 'Help desk, bug reports, feature requests',
  },
  ecommerce: {
    label: 'E-commerce',
    icon: '🛒',
    color: '#EF4444',
    description: 'Order forms, product inquiries, returns',
  },
  'real-estate': {
    label: 'Real Estate & Property',
    icon: '🏠',
    color: '#14B8A6',
    description: 'Property inquiries, rental applications, maintenance',
  },
  legal: {
    label: 'Legal & Compliance',
    icon: '⚖️',
    color: '#6366F1',
    description: 'NDAs, contracts, compliance forms',
  },
  nonprofit: {
    label: 'Nonprofit & Donations',
    icon: '❤️',
    color: '#F43F5E',
    description: 'Donation forms, volunteer signup, grants',
  },
  marketing: {
    label: 'Marketing & Research',
    icon: '📣',
    color: '#A855F7',
    description: 'Lead magnets, research surveys, campaign forms',
  },
  operations: {
    label: 'Operations & IT',
    icon: '⚙️',
    color: '#64748B',
    description: 'IT requests, asset tracking, incident reports',
  },
};

export const getCategoryMeta = (category: TemplateCategory): CategoryMeta => {
  return categoryMeta[category] || {
    label: category,
    icon: '📋',
    color: '#6B7280',
    description: '',
  };
};

export const getAllCategories = (): TemplateCategory[] => {
  return Object.keys(categoryMeta) as TemplateCategory[];
};
