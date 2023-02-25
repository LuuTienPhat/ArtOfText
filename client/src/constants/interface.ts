import { HTMLAttributes } from "react";

export interface IFormFieldProps extends HTMLAttributes<HTMLElement> {
  LabelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: any;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: any;
}

export interface ICardProps {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
}
