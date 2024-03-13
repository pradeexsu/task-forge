import { Add } from '@mui/icons-material';
import { ClassNameType } from '../../typings';
import { useAuthStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';

interface NavBarProps {
  className?: ClassNameType;
}

function NavBar({ className = '' }: NavBarProps) {
  const navigate = useNavigate();
  const { userMetaData, unAuthenticate } = useAuthStore();
  const { openCreateTaskModal } = useModal();

  const handleLogout = () => {
    sessionStorage.removeItem('userToken');
    unAuthenticate();
    navigate(0);
  };

  return (
    <div className={'navbar bg-success ' + className}>
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl text-white"
          onClick={openCreateTaskModal}
        >
          <Add fontSize="large" />
          Add Task
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-10 rounded-full">
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
              <a
                tabIndex={0}
                href="#"
                className="justify-between"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
