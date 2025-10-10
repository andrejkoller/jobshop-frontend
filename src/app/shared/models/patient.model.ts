export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  diagnosis: string;
  admissionDate: Date;
  dischargeDate?: Date;
}
