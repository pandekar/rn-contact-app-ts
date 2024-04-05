import type {Contact, VoidIdFunction} from '../../types/index.types';

export type Props = {
  contacts: Array<Contact>;
  readContact: (item: Contact) => void;
  updateContact: VoidIdFunction;
  deleteAlert: VoidIdFunction;
};
