import { LoadProvidersAction } from "src/app/shared/store/actions/providers.action";
import { reducer } from "../src/app/shared/store/reducers/providers.reducer";

describe('Providers Reducer', () => {
  it('LOAD_PROVIDERS sets loading to true', () => {
    const result = reducer(undefined, new LoadProvidersAction());
    expect(result.loading).toEqual(true);
  });
});
