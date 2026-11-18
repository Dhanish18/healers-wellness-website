import type { ClinicalMilestone, ConditionChip, TreatmentService } from '../types/wellness';

export const NATUROPATHY_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr4KvDIP__6Oo6YdFVOoIH0szNZ-wHmnZkK-_jlBeM91pmMhkhdwWO6fwxcQSnmFzcxY1D-S6_YkHhiwmpdpDLqc-XlkTiD0zmfUvdyXqVEMufOLAsgymLM2FM2_Fal2sn73zwuDitHJF17wbRzRuouLLz_vKuLrRTHH8SQhIG91s7pZ-PlwTcN_EgCCCP47G-_TcQ1hh7zocXwf1Yrp-UzymBdv4iw9H88z-FsDVQ',
  experience:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYsI3njEmgtXP0RVnbzbEh6p7jmQAe-93sNqVtgbcMPQ7v-TeP3vU4dENpNIS-IEEcMhFcuxWWUTfZm60tD4R9zXwbkO_EBjai5XZV68YYy-9F1Idjtl7rSI4Otzoq1VRlhBCyUZxBtFD2Oz5wJrEhSQ14jLYi0kVoCOSEM29W8GOGhA3N8EbJvufAAlK9b3gWSaS-4U8tlRvP5a0reows-nV2BhVJqeJRN6mD0TmM',
};

export const NATUROPATHY_BADGES = [
  { icon: 'spa', label: '100% Biogenic' },
  { icon: 'water_drop', label: 'Hydro Balance' },
  { icon: 'vital_signs', label: 'Vital Force' },
];

export const NATUROPATHY_MILESTONES: ClinicalMilestone[] = [
  {
    icon: 'science',
    title: 'Non-Invasive Diagnostic Precision',
    description:
      'Evaluating cellular stress, tissue intoxication, and autonomic tone through iris analysis, pulse mapping, and bio-elemental profiling.',
  },
  {
    icon: 'restart_alt',
    title: 'Systemic Bio-Elimination',
    description:
      'Clearing accumulated metabolic residues from the colon, kidneys, skin, and lymphatic ducts with guided fasting and elemental stimulants.',
  },
  {
    icon: 'balance',
    title: 'Bio-Elemental Restoration',
    description:
      'Calibrating Earth, Water, Light, Air, and Thermal balance to rekindle the autonomic nervous system and deep immune response.',
  },
];

export const NATUROPATHY_SERVICES: TreatmentService[] = [
  {
    title: 'Hydrotherapy & Mud Baths',
    category: 'Elemental',
    description:
      'Mineral-dense volcanic mud applications alongside contrast water soaks to stimulate circulation, transdermal mineral absorption, and soothe somatic pain.',
  },
  {
    title: 'Colon Hydro-Detoxification',
    category: 'Internal',
    description:
      'Gentle, temperature-regulated filtration cleansing of the large intestine to release putrefactive waste, restore mucosal lining, and recalibrate gut microbiota.',
  },
  {
    title: 'Steam & Sauna Bio-Therapy',
    category: 'Thermal',
    description:
      'Herbal-infused eucalyptus wet steam and cedar infrared sauna for intense diaphoresis, opening microcapillaries and expelling heavy metal metabolites.',
  },
  {
    title: 'Heliotherapy & Chromotherapy',
    category: 'Solar',
    description:
      'Structured exposure to natural solar frequencies combined with spectral light chambers to harmonize pineal gland secretions and mitochondrial synthesis.',
  },
  {
    title: 'Herbal Infusions & Compresses',
    category: 'Botanical',
    description:
      'Targeted hepatic castor packs, mustard chest poultices, and bio-active phytotherapeutic decoctions carefully customized to patient diagnostic status.',
  },
  {
    title: 'Clinical Fasting & Juice Cleansing',
    category: 'Autophagy',
    description:
      'Physician-monitored water or enzymatic vegetable juice fasting regimens that trigger rapid cellular autophagy, stem cell activation, and insulin recalibration.',
  },
  {
    title: 'Wet Sheet Packs & Spinal Sprays',
    category: 'Neuro-Hydro',
    description:
      'Specialized full-body cold linen wraps and alternating warm-cool pressurized spinal cascades that stimulate the parasympathetic vagal trunk.',
  },
];

export const NATUROPATHY_CONDITIONS: ConditionChip[] = [
  { icon: 'vital_signs', label: 'Chronic Metabolic Disorders' },
  { icon: 'science', label: 'Fatty Liver' },
  { icon: 'water_bottle', label: 'Irritable Bowel Syndrome (IBS)' },
  { icon: 'bedtime', label: 'Chronic Fatigue' },
  { icon: 'spa', label: 'Skin Psoriasis & Eczema' },
  { icon: 'female', label: 'Hormonal Imbalances (PCOS/Thyroid)' },
  { icon: 'favorite', label: 'Hypertension' },
  { icon: 'shield', label: 'Autoimmune Inflammation' },
];

export const NATUROPATHY_BOOKING_OBJECTIVES = [
  'Metabolic Reset & Weight Regulation',
  'Gut Dysbiosis & IBS Healing',
  'Skin Detoxification (Eczema / Psoriasis)',
  'Hormonal & Thyroid Rebalancing',
  'General Systemic Fasting Program',
];
