export type NavigationProps = {
  onBack: () => void;
  onNext: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
};