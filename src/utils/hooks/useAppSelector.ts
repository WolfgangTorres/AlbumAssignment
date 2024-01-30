import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

/**
 * useAppSelector
 *
 * A custom hook that is a typed version of the useSelector hook from react-redux. It allows you
 * to select data from the store's state with TypeScript type support, ensuring that you are selecting
 * data in a type-safe manner.
 *
 * The hook uses the RootState type from the store, which represents the state structure of your
 * entire Redux store. This means you get autocomplete and compile-time error checking when accessing
 * state properties.
 *
 * Usage:
 * const value = useAppSelector(state => state.someSlice.value);
 *
 * This will return the specific slice of state with its correct TypeScript type.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
