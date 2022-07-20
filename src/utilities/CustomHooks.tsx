import * as React from 'react';

export const useSuspense = <T extends {}>(Component: React.ComponentType<T>) => {
    return (props?: T) => <React.Suspense fallback={<div>Loading</div>}>
        <Component {...props ?? {} as T} />
    </React.Suspense>
}