import { ClassNameType } from '../typings';
import authStore from '../modules/Auth/auth.store';
import { observer } from 'mobx-react-lite';
import Button from './common/Button';
import Text from './common/Text';

interface NavBarProps {
  className?: ClassNameType;
}

function NavBar({ className = '' }: NavBarProps) {
  const { userMetaData, logoutUser } = authStore;

  return (
    <div className={'navbar bg-success' + className}>
      <div className="flex-1">
        <Button className="btn glass ">
          <Text className="text-sm"> Task Forge</Text>
        </Button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end ">
          <div role="button" className="btn btn-ghost btn-circle avatar ">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={`https://gravatar.com/avatar/${userMetaData?.id}?d=identicon`}
              />
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52">
            <li>
              <a href="#" className="justify-between">
                {userMetaData?.username}
              </a>
            </li>
            <li>
              <a href="#" className="justify-between" onClick={logoutUser}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default observer(NavBar);
