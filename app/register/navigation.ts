export type NavigationProps = {
  onBack: () => void;
  onNext: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  profileId?: string | null;
  onProfileSaved?: (profileId: string) => void;
};
