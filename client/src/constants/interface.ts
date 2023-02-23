import { HTMLAttributes } from "react";

export interface IFormField extends HTMLAttributes<HTMLElement> {
    LabelName?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    handleChange?: any;
    isSurpriseMe?: boolean;
    handleSurpriseMe?: any;
  }