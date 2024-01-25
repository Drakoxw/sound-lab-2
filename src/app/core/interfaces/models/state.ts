import { ItemsModel } from './item';

export interface InitialStateItems {
  loading: boolean;
  itemsList: ReadonlyArray<ItemsModel>;
}

export interface AuthInitialState {
  tokenString: string
}
