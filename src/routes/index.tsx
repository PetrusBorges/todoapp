import useAuth from '../hooks/useAuth';
import AuthenticatedStack from './AuthenticatedStack';
import UnauthenticatedStack from './UnauthenticatedStack';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </>
  );
};

export default Routes;
