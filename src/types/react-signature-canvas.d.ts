declare module 'react-signature-canvas' {
  import { Component } from 'react';
  interface SignatureCanvasProps {
    penColor?: string;
    canvasProps?: React.HTMLAttributes<HTMLCanvasElement>;
    ref?: any;
  }
  export default class SignatureCanvas extends Component<SignatureCanvasProps> {}
}