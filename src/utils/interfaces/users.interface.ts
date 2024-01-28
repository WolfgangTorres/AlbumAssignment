export interface User {
  id: number
  name: string
  username: string
}

export interface UsersState {
  users: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}
