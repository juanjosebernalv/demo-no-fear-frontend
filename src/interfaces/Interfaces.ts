export interface CurrentUserContextType {
  example: string;
  verifyData: (data: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}