import type {
  ChiropracticCondition,
  ClinicalMilestone,
  SpineZone,
  TreatmentService,
} from '../types/wellness';

export const CHIROPRACTIC_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTllY8lmey7XIpVkWqoj3ZT_BcP-1b76iZNDuXa5N_DK_pNXtXIUudHL5t2bCQ_li4Pv-vWRfsPwP1KKKbVmphtHsVrbq4PFS4kYIij8z7-8hmsaFbk1YWYRs3YT4r0Vt62oed86BhTkpTx4d8lcomfvOikQIVtLNLUrG496qLtjo7PkOW-9XmeZmn43ojbg6b-y1ZuapC-uk2vIJ0b7FJwoK5lVkBjT2zJhQY1Koj',
  suites:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB5_3kCIQVRD30gL_Q99FG8oLVLMXbkEd9yvaOlXtggfZS4KHJzz8vgy4AssD5hA5eO6Cf1MFcPTsuo1Dl3xXiBbv5AmhJ7QEoAiixd7POJBBDak6FS89UfEQjD6O8gT7Ggi3zWPreyq96pLb3y8z-SemLmb79pcPdW-sbmXgnpqn8lFpW7T36oRJm9BKQCWCDBVcMs4qDWHIIeTAi48koxz01nWCrySSv5j8dkP4Ez',
  doctor:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCNfxG6RYjYG50gm2SfhGMoRm6IlbDSDuSVBHH1jwG851moBaPjnj_wion9dp1gK4Nm-JiPf7dTpqizRe2fhUYnTy3lUiTnUKbvsIG2NQc-qY7jMuR5gAfNr6Xn6Evcanm_peEFG7wn4ieTm6ZodD5fV-hHu8O_tWt8WJzXSGUItlTRu6MMbxtg1oLUhygwHl4toazfOlsBIok5UVbUO_aT704PK3SEF4MURpBAQ1uf',
};

export const CHIROPRACTIC_PHILOSOPHY: ClinicalMilestone[] = [
  {
    icon: 'adjust',
    title: 'Subluxation Correction',
    description:
      'Relieving structural torsion on meningeal and neural sheaths, enabling unencumbered biological signal transmission between brain and visceral organs.',
  },
  {
    icon: 'self_improvement',
    title: 'Nervous System Optimization',
    description:
      'Shifting the autonomic balance from chronic sympathetic tension into deep parasympathetic restorative equilibrium without pharmaceutical load.',
  },
  {
    icon: 'shield_with_heart',
    title: 'Conservative Preservation',
    description:
      'Non-operative decompression protocols designed to protect disc cartilage integrity and sustain joint longevity throughout aging.',
  },
];

export const SPINE_ZONES: SpineZone[] = [
  {
    key: 'cervical',
    buttonLabel: 'Cervical (C1-C7)',
    title: 'Cervical Alignment (C1 – C7)',
    description:
      'Optimizes cranial circulation, calms vagus nerve reactivity, and eradicates tension headaches caused by modern digital posture.',
    icon: 'psychology',
  },
  {
    key: 'thoracic',
    buttonLabel: 'Thoracic (T1-T12)',
    title: 'Thoracic Integrity (T1 – T12)',
    description:
      'Improves lung expansion and rib cage motility while relieving chronic mid-back stiffness and diaphragmatic stress.',
    icon: 'air',
  },
  {
    key: 'lumbar',
    buttonLabel: 'Lumbar (L1-S1)',
    title: 'Lumbosacral Stability (L1 – S1)',
    description:
      'Relieves core load-bearing stress, releases piriformis/sciatic nerve irritation, and decompresses lumbosacral disc cushioning.',
    icon: 'sprint',
  },
];

export const CHIROPRACTIC_PROTOCOLS: TreatmentService[] = [
  {
    title: 'HVLA Spinal Adjustments',
    category: 'High-Velocity Low-Amplitude',
    icon: 'bolt',
    description:
      'Precision cavitation adjustments directed with pinpoint speed and minimal depth to swiftly restore locked facet joints without muscular trauma.',
  },
  {
    title: 'Flexion-Distraction Decompression',
    category: 'Gentle Disc Hydration Protocol',
    icon: 'unfold_more',
    description:
      'Motorized rhythmic traction creates negative intra-discal pressure, coaxing herniated gel back into its central annulus while soothing sciatic nerve pathways.',
  },
  {
    title: 'Extremity Joint Mobilization',
    category: 'Shoulders, Hips, Knees & Ankles',
    icon: 'directions_walk',
    description:
      'Targeting kinetic chain imbalances outside the vertebral axis to normalize gait mechanics, release impingement, and restore fluid articulation.',
  },
  {
    title: 'Postural & Ergonomic Rehab',
    category: 'Long-Term Neuromuscular Reprogramming',
    icon: 'accessibility_new',
    description:
      'Proprioceptive neuromuscular re-education exercises designed to train stabilizing deep core musculature and prevent recidivist postural collapse.',
  },
  {
    title: 'IASTM Soft Tissue Therapy',
    category: 'Instrument-Assisted Myofascial Release',
    icon: 'brush',
    description:
      'Contoured medical-grade stainless instruments glide along fascial sheaths to dissolve micro-scar tissue adhesions and accelerate cellular collagen remodeling.',
  },
  {
    title: 'Thermography & Motion Palpation',
    category: 'Precision Neurological Scans',
    icon: 'thermostat',
    description:
      'Infrared paraspinal differential scanning mapping cutaneous thermal asymmetries indicative of sympathetic nerve root irritation.',
  },
  {
    title: 'Pediatric & Prenatal Care',
    category: 'Webster Technique Certified',
    icon: 'child_care',
    description:
      'Featherlight fingertip palpation (under 500 grams of pressure) assisting pelvic balance in expecting mothers and gentle developmental spinal ease for infants.',
  },
];

export const CHIROPRACTIC_CONDITIONS: ChiropracticCondition[] = [
  { icon: 'disc_full', title: 'Herniated & Bulging Discs', subtitle: 'Decompression relief' },
  { icon: 'airline_seat_recline_extra', title: 'Chronic Lower Back Pain', subtitle: 'Lumbar spine realign' },
  { icon: 'front_hand', title: 'Whiplash & Neck Stiffness', subtitle: 'Cervical lordosis cure' },
  { icon: 'conversion_path', title: 'Scoliosis & Deformities', subtitle: 'Asymmetry compensation' },
  { icon: 'drag_handle', title: 'Spondylolisthesis', subtitle: 'Facet stabilization' },
  { icon: 'electric_bolt', title: 'Pinched Nerves & Numbness', subtitle: 'Foraminal release' },
  { icon: 'sports_tennis', title: 'Sports Injuries', subtitle: 'Kinetic recalibration' },
  { icon: 'bedtime', title: 'Postural Fatigue', subtitle: 'Desk syndrome release' },
];
