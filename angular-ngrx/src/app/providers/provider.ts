import { IPaging, ISorting } from "../shared/interfaces";

export interface Provider {
  code: string;
  name: string;
  active: boolean;
}

export type ProvidersFilter = ISorting & IPaging & {
  search: string;
  active: boolean;
}
