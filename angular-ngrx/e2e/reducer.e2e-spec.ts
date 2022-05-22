import { LoadProvidersAction } from "src/app/providers/providers.action";
import { reducer } from "../src/app/providers/providers.reducer";

describe('Providers Reducer', () => {
  it('LOAD_PROVIDERS sets loading to true', () => {
    const result = reducer(undefined, new LoadProvidersAction());
    expect(result.loading).toEqual(true);
  });
});
