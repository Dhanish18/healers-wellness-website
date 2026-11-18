export type ModalityPath =
  | 'home'
  | 'naturopathy'
  | 'yoga'
  | 'diet-nutrition'
  | 'acupuncture'
  | 'massage'
  | 'cupping'
  | 'chiropractic'
  | 'physiotherapy'
  | 'book-consultation'
  | 'therapies'
  | 'doctors'
  | 'profile';

export interface NavItem {
  label: string;
  drawerLabel?: string;
  path: ModalityPath;
  route: string;
}

export interface ModalityCard {
  id: ModalityPath;
  title: string;
  description: string;
  tag: string;
  icon: string;
  route: string;
}

export interface CarePillar {
  title: string;
  description: string;
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ClinicalMilestone {
  icon: string;
  title: string;
  description: string;
}

export interface TreatmentService {
  title: string;
  category: string;
  description: string;
  icon?: string;
  iconHighlighted?: boolean;
}

export interface ConditionChip {
  icon: string;
  label: string;
}

export interface AcupunctureCondition {
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
}

export interface ChiropracticCondition {
  icon: string;
  title: string;
  subtitle: string;
}

export interface DeQiStage {
  key: 'insertion' | 'activation' | 'release';
  tabLabel: string;
  description: string;
}

export interface SpineZone {
  key: 'cervical' | 'thoracic' | 'lumbar';
  buttonLabel: string;
  title: string;
  description: string;
  icon: string;
}
