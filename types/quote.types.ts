export interface Quote {
  quoteId: string;
  fileName: string;
  size: number;
  uploadDate: string;
  clientUrl: string;
}

export interface Message {
  type: "success" | "error";
  text: string;
}
