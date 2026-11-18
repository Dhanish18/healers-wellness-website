import { HOME_IMAGES } from './homeData';
import { NATUROPATHY_IMAGES } from './naturopathyData';
import { CHIROPRACTIC_IMAGES } from './chiropracticData';

const SERVICE_PAGE_CONTENT = {
  yoga: {
    heroImage: HOME_IMAGES.heroPavilion,
    heroAlt: 'Peaceful wellness space for yoga therapy',
    schedule: '6:30 AM – 7:30 AM',
    title: 'Yoga Therapy',
    eyebrow: 'Mindful movement & breath',
    headline: 'Build a steadier connection between movement, breath, and wellbeing.',
    intro: 'Individualized yoga therapy uses accessible movement, breathing practices, and guided relaxation to support mobility, balance, and stress management.',
    icon: 'self_improvement',
    approachTitle: 'A practice shaped around you',
    approach: 'Your sessions are adapted to your comfort, experience, and goals. Practices can be gentle and restorative or focus on gradually building strength and mobility.',
    highlights: [
      { icon: 'accessibility_new', title: 'Movement that meets your needs', text: 'Use supported, adjustable postures selected for your abilities and comfort.' },
      { icon: 'air', title: 'Breath practices', text: 'Explore simple breathing exercises that encourage awareness and relaxation.' },
      { icon: 'spa', title: 'Rest and recovery', text: 'Include guided relaxation and mindful pauses as part of a balanced practice.' },
    ],
    steps: ['Discuss your health history, experience, and goals.', 'Build a comfortable sequence with clear modifications.', 'Review your practice and adjust it as your needs change.'],
  },
  diet: {
    heroImage: HOME_IMAGES.apothecary,
    heroAlt: 'Natural ingredients for personalized nutrition',
    title: 'Diet & Nutrition',
    eyebrow: 'Personalized nutrition guidance',
    headline: 'Make everyday food choices with a plan built around your life.',
    intro: 'Nutrition consultations help you understand your eating patterns and identify practical changes that fit your health goals, preferences, and routine.',
    icon: 'nutrition',
    approachTitle: 'Practical, personal guidance',
    approach: 'We discuss your current habits, food preferences, schedule, and health goals, then work together on realistic steps you can maintain.',
    highlights: [
      { icon: 'restaurant', title: 'Food habit review', text: 'Talk through meals, preferences, routines, and questions you want help with.' },
      { icon: 'fact_check', title: 'Clear next steps', text: 'Set manageable goals and meal-planning ideas that work for your day-to-day life.' },
      { icon: 'monitoring', title: 'Ongoing support', text: 'Review what is working and refine your plan during follow-up consultations.' },
    ],
    steps: ['Share your goals, health history, and typical routine.', 'Review practical food choices and a personalized plan.', 'Follow up to discuss progress and make adjustments.'],
  },
  massage: {
    heroImage: NATUROPATHY_IMAGES.experience,
    heroAlt: 'Restorative wellness therapy setting',
    title: 'Therapeutic Massage',
    eyebrow: 'Hands-on restorative care',
    headline: 'Thoughtful soft-tissue care for relaxation and everyday movement.',
    intro: 'Therapeutic massage uses hands-on techniques selected with your comfort, preferences, and care goals in mind.',
    icon: 'spa',
    approachTitle: 'Comfort and communication first',
    approach: 'Before a session, your therapist discusses your health history, areas of concern, pressure preferences, and any movements or techniques to avoid.',
    highlights: [
      { icon: 'favorite', title: 'Personalized sessions', text: 'The session plan reflects your comfort, preferences, and areas you want addressed.' },
      { icon: 'self_improvement', title: 'Relaxation support', text: 'A calm setting and considered pace help make time for rest and body awareness.' },
      { icon: 'accessibility_new', title: 'Movement goals', text: 'Care can be planned alongside other movement or rehabilitation goals when appropriate.' },
    ],
    steps: ['Discuss your needs, preferences, and health history.', 'Agree on a comfortable session plan and pressure level.', 'Share feedback so future sessions can be adjusted.'],
  },
  cupping: {
    heroImage: NATUROPATHY_IMAGES.hero,
    heroAlt: 'Holistic care setting for complementary therapies',
    title: 'Cupping Therapy',
    eyebrow: 'Traditional complementary therapy',
    headline: 'A considered approach to cupping, guided by your comfort and care history.',
    intro: 'Cupping uses suction cups placed on the skin as a complementary therapy. The practitioner discusses the approach and expected skin marks before treatment.',
    icon: 'bubble_chart',
    approachTitle: 'Informed, individualized sessions',
    approach: 'Your practitioner reviews your health history, skin condition, medications, and goals to decide whether cupping is suitable and how a session should be adapted.',
    highlights: [
      { icon: 'health_and_safety', title: 'Suitability review', text: 'Discuss your health history and any skin sensitivities before treatment.' },
      { icon: 'tune', title: 'Adjustable technique', text: 'Cup placement, suction, and session length are selected for individual comfort.' },
      { icon: 'info', title: 'Clear expectations', text: 'Learn about temporary circular marks and aftercare before choosing to proceed.' },
    ],
    steps: ['Review your goals, health history, and any precautions.', 'Discuss cup placement, technique, and expected marks.', 'Check in during the session and review aftercare together.'],
  },
  physiotherapy: {
    heroImage: CHIROPRACTIC_IMAGES.doctor,
    heroAlt: 'Practitioner supporting a movement and rehabilitation plan',
    title: 'Physiotherapy',
    eyebrow: 'Movement & rehabilitation',
    headline: 'Work toward stronger, more confident everyday movement.',
    intro: 'Physiotherapy combines movement assessment, education, and guided exercise to support mobility and function after injury or during ongoing physical concerns.',
    icon: 'sprint',
    approachTitle: 'Progress at a useful pace',
    approach: 'Your physiotherapist discusses your goals and assesses movement before building a plan. Exercises and activity guidance can be adjusted as your comfort and ability change.',
    highlights: [
      { icon: 'accessibility_new', title: 'Movement assessment', text: 'Discuss the activities that matter to you and review relevant movement patterns.' },
      { icon: 'fitness_center', title: 'Guided exercises', text: 'Practice movements selected for your current level and functional goals.' },
      { icon: 'trending_up', title: 'Progress reviews', text: 'Track changes and adapt your plan as you build confidence and capacity.' },
    ],
    steps: ['Talk through your symptoms, history, and everyday goals.', 'Review movement and agree on a focused care plan.', 'Practice and progress exercises with regular check-ins.'],
  },
};

export default SERVICE_PAGE_CONTENT;
