import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from '../redux/store';

export function UseAuth () {
  const {email, id, token} = useSelector((state: RootState) => state.auth)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}