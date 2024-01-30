import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

/**
 * useAppDispatch
 *
 * A custom hook that wraps around the useDispatch hook from react-redux.
 * It provides the AppDispatch type from the store for better type safety and autocompletion
 * when dispatching actions in components.
 *
 * By using this hook, you can ensure that all dispatch calls in your application are using
 * the typed dispatch function specific to your Redux store's configuration.
 *
 * Usage:
 * const dispatch = useAppDispatch();
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()
