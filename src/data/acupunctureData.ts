import type {
  AcupunctureCondition,
  ClinicalMilestone,
  DeQiStage,
  TreatmentService,
} from '../types/wellness';

export const ACUPUNCTURE_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6rCv_yj2r-8ueNprcZmebNNaTKD4uJcYMgq7Krjbd2EfjS2OOAvD_k9btuwUEgF9zY703iRLT4u-wfhoAE8Sdsi7e27_edRnfR2pVi2nTREB3ShKYGypmiASX0XCgyjqCbrl8CMfIgTaYUuLPwcZYyUBtajLrjWoTCMyQvKAF01i7jiPbhZ06PF0DQfMQ6viS9H1EtVBCLtNnnVdIqKT_fnguZS95ElD9RLxiUeW-',
  vignette:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDP6BNF9r1k6kRvmkB3rPM264SXyUfWRDJyUy970OitoJbO-2KsSk7i0FlbGSWhdyP3fTx-1VhV5-5eerJQrap8vBDlRJgz8rx7Tlqum4jORx9qGzNoHnfLBSk3DA9WdFS6E6JxSjAOiIxlsh9gvGCO9Eo8yrVWhjyZ1J9G8pYWCnXcc5mR6zbyXeVE0ldFbSFGPYnU2Q_HLoCBALdU_AqmnSmrzwuUMRAK_fCF6rST',
};

export const ACUPUNCTURE_CONVERGENCE: ClinicalMilestone[] = [
  {
    icon: 'neurology',
    title: 'Endorphin Cascade',
    description:
      'Hair-thin single-use sterile filiform needles trigger micro-currents, flooding targeted tissue with beta-endorphins and enkephalins.',
  },
  {
    icon: 'release_alert',
    title: 'Decompression of Radicular Nerve',
    description:
      'Sub-muscular fascial needle glide releases trapped nerve pathways, attenuating inflammation and localized hyper-tonicity.',
  },
  {
    icon: 'all_inclusive',
    title: 'Homeostatic Qi Regulation',
    description:
      'Restores systemic bio-electric coherence across the Twelve Primary Meridians and the Governing Vessel (Du Mai).',
  },
];

export const DEQI_STAGES: DeQiStage[] = [
  {
    key: 'insertion',
    tabLabel: '1. Placement',
    description:
      'Gentle guide-tube application. Needle insertion is instantaneous and virtually imperceptible to sensory nociceptors.',
  },
  {
    key: 'activation',
    tabLabel: '2. Resonance',
    description:
      'A gentle deep warmth and dull magnetic pulse indicates Qi activation and vascular vasodilation along the neural tract.',
  },
  {
    key: 'release',
    tabLabel: '3. Serenity',
    description:
      'Profound parasympathetic ease follows immediately. Endorphins circulate as hypertonic muscle spasms untangle completely.',
  },
];

export const ACUPUNCTURE_SERVICES: TreatmentService[] = [
  {
    title: 'Classical Meridian Acupuncture',
    category: 'Pure TCM Restoration',
    icon: 'polyline',
    description:
      'Harmonizes visceral organ networks (Zang-Fu) using ultra-fine gold or stainless filiform needles along principal energetic channels.',
  },
  {
    title: 'Electro-Acupuncture Stimulation',
    category: 'Micro-Current Frequency',
    icon: 'electric_bolt',
    iconHighlighted: true,
    description:
      'Applies gentle biphasic electrical pulses across paired needles to accelerate nerve axon regeneration and treat severe muscular spasms.',
  },
  {
    title: 'Auricular Micro-Acupuncture',
    category: 'Nogier Somatotopic System',
    icon: 'hearing',
    description:
      'Stimulates vagus nerve fibers via the external ear microsystem for deep insomnia relief, psychological detoxification, and autonomic balance.',
  },
  {
    title: 'Moxibustion Heat Therapy',
    category: 'Artemisia Argyi Warming',
    icon: 'local_fire_department',
    description:
      'Therapeutic combustion of aged wild mugwort herb above acupoints to dispel internal damp-cold, boost white blood cells, and nourish Yang.',
  },
  {
    title: 'Trigger Point Dry Needling',
    category: 'Myofascial Release',
    icon: 'adjust',
    description:
      'Direct mechanical deactivation of hyper-irritable taut bands in skeletal muscle, resetting neuromuscular spindle dysfunction instantly.',
  },
  {
    title: 'Scalp Neurological Acupuncture',
    category: 'Cerebral Cortical Mapping',
    icon: 'psychology',
    description:
      'Specialized micro-needling along scalp projection zones corresponding to sensory, motor, and speech centers to support post-stroke and paralysis recovery.',
  },
  {
    title: 'Acupressure & Meridian Tapping',
    category: 'Non-Invasive Modality',
    icon: 'touch_app',
    description:
      'Manual rhythmic compression and somatic percussive tapping ideal for needle-sensitive individuals, pediatric patients, and acute emotional grounding.',
  },
];

export const ACUPUNCTURE_CONDITIONS: AcupunctureCondition[] = [
  {
    icon: 'detector_battery',
    title: 'Migraines & Tension Headaches',
    subtitle: 'Calms trigeminal vascular hypersensitivity',
    badge: '92% Relief',
  },
  {
    icon: 'accessibility_new',
    title: 'Sciatica & Lumbar Radiculopathy',
    subtitle: 'Relieves nerve root impingement & piriformis',
    badge: 'L4-S1 Focus',
  },
  {
    icon: 'coronavirus',
    title: 'Fibromyalgia & Chronic Pain',
    subtitle: 'Regulates central nervous pain amplification',
    badge: 'Systemic',
  },
  {
    icon: 'bedtime',
    title: 'Insomnia & Sleep Disorders',
    subtitle: 'Restores endogenous melatonin rhythm',
    badge: 'Circadian',
  },
  {
    icon: 'mood_bad',
    title: 'Anxiety & Depressive States',
    subtitle: 'Modulates cortisol and sympathetic overdrive',
    badge: 'Shen Calming',
  },
  {
    icon: 'flash_on',
    title: 'Trigeminal Neuralgia',
    subtitle: 'Gentle non-invasive electro-cranial damping',
    badge: 'Cranial V',
  },
  {
    icon: 'nordic_walking',
    title: 'Cervical Spondylosis',
    subtitle: 'Relieves stiff facet joints and neck rigidity',
    badge: 'Mobility',
  },
  {
    icon: 'face',
    title: "Bell's Palsy",
    subtitle: 'Facial motor reactivation with gentle warmth',
    badge: 'Cranial VII',
  },
];

export const ACUPUNCTURE_SESSION_STEPS = [
  {
    step: 1,
    title: 'Integrated Diagnostic Intake',
    description: 'Radial artery pulse palpation, sublingual vein observation, and spinal palpation check.',
  },
  {
    step: 2,
    title: 'Sanctuary Immersion & Insertion',
    description: 'Insertion of sterile, single-use filiform needles, followed by infrared thermal therapy.',
  },
  {
    step: 3,
    title: '25-Minute Restorative Resting Phase',
    description: 'Deep parasympathetic delta/theta brainwave entrainment in soft acoustic serenity.',
  },
];

export const ACUPUNCTURE_BOOKING_FOCUSES = [
  'Migraines & Tension Headaches',
  'Sciatica & Radiculopathy',
  'Fibromyalgia & Chronic Pain',
  'Insomnia & Sleep Restoration',
  'Trigeminal Neuralgia / Facial Nerve',
  'Preventive Balance & Stress Relief',
];
