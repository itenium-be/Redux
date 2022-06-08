## Providers ChangeLog

Copy the pptx to another location before doing checkouts.


```
git checkout 0.Original
```


### Keep State Minimal

- Derive Additional Values
- Use Selector Functions to Read from Store State

Sus Files:

- `activeProviders.reducer.ts` & `activeProviders.action.ts`


```
git diff 0.Original..96fcc2d
git checkout 96fcc2d
```



### Organize State Structure Based on Data Types, Not Components


Sus Files:

- `provider-details.component.ts`
- `provider-details.sandbox.ts`
- `providerDetails.action.ts`


```
git diff 1.ActiveProviders..56cdef6
git checkout 56cdef6
```



### Put as Much Logic as Possible in Reducers

- For example mapping from form.value to WebApi model or, alternatively, use Selectors
- Don't reload all data! `this.providerService.loadProviders()`
- Was keeping a store property `adding` which was nowhere used

Sus Files:

- `providers.reducer.ts`
- `add-provider.sandbox.ts`


```
git diff 2.MappersInReducerOrAvoid..27517f0
git checkout 27517f0
```




### Structure Files as Feature Folders

```
git checkout 3.FeatureFolders
```

Move everything `Providers` into a `/providers` folder...



### Model Actions as Events, Not Setters

- Do not use setter-like Actions (SET_SORTING, SET_PAGING, RESET_PAGE, SET_FILTERS, ...)
- Use event-like Actions (SET_FILTERS)

Sus Files

- `providers.action.ts`
- `providers.reducer.ts`

```
git diff 3.FeatureFolders..ebafd31
git checkout master
```
