export interface MatrixRate {
  min: number;
  max: number | null;
  rate: number;
}

export interface Settings {
  enabled: boolean;
  markupType: 'flat' | 'percentage' | 'matrixPercentage' | 'matrixFlat';
  flatRate: number;
  percentage: number;
  showIndicator: boolean;
  matrixRates: MatrixRate[];
}

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
}

export interface MatrixInputProps {
  rates: MatrixRate[];
  onChange: (rates: MatrixRate[]) => void;
} 