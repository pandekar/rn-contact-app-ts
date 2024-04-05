export type VoidFunction = () => void;
export type VoidIdFunction = (id: string) => void;

export type NewContact = {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
};

export type Contact = {
  id: string;
} & NewContact;

export type InitialState = {
  datas: Array<Contact>;
  dataAdd: NewContact;
  loading: boolean;
  error: any;
  dataUpdate: Contact;
};

export type RouterStackParamList = {
  home: undefined;
  contact_add: undefined;
  contact_detail: undefined;
};
