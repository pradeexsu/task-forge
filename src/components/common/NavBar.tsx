import { Add } from '@mui/icons-material';
import { ClassNameType } from '../../typeings';
import { useAuthStore } from '../../store';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  className?: ClassNameType;
}

function NavBar({ className = '' }: NavBarProps) {
  const navigate = useNavigate();
  const { userMetaData, unAuthenticate } = useAuthStore();

  function openModal() {
    const modal = document?.getElementById('my_modal_2') as HTMLDialogElement;
    if (modal) {
      modal?.showModal();
    }
  }
  const handleLogout = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userMetaData');
    unAuthenticate();
    navigate(0);
  };

  return (
    <div className={'navbar bg-base-100' + className}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={openModal}>
          <Add />
          Add Task
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={`https://gravatar.com/avatar/${userMetaData?.id}?d=identicon`}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#" className="justify-between">
                {userMetaData?.username} Pradeep Suthar
              </a>
            </li>
            <li>
              <a href="#" className="justify-between" onClick={handleLogout}>
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
