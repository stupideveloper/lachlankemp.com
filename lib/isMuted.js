import { atomWithStorage } from 'jotai/utils'

const isMutedAtom = atomWithStorage('isMuted', false)
export default isMutedAtom