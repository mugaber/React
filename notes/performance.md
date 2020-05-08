# Performance

## Lazy & Suspense & Code splitting

when making importing the bundler webpack bundles all the imports\
into one big chuck so the app can be served from the server\
the very first load of the app then is way hevieer than it should be\
if there is a lot of modules to be imported

however this can be solved by lazy loading the modules into the app\
so whenever we hit a specific route where a module needs to be imported\
we import it asyncrounsly ending up with multiple bundles and the first \
bundle is way smaller as it should be improving the app first load time

in-order to make this work we import modules as following

```
const HomePage = lazy(() => import('path/to/module'))
```

however now we will se an error because at first the HomePage is `undefined` \
making React trying to render `undefined` value, so a solutino for this is\
using `Suspense` whick renders a `fallback` as long as the module being loaded\
and we wrap `Suspense` with one or multiple modules if we want showing a `fallback`

```
<Suspense fallback={<Spinner />}>
<HomePage />
</Suspense>
```
