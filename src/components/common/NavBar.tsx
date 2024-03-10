import { PendingActions } from '@mui/icons-material';
import { ClassNameType } from '../../typeings';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';

interface NavBarProps {
  className?: ClassNameType;
}

function NavBar({ className = '' }: NavBarProps) {
  const navigate = useNavigate();
  const { unAuthenticate } = useAuthStore();

  const handleLogout = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userMetaData');
    unAuthenticate();
    navigate(0);
  };
  return (
    <div className={'navbar bg-base-100' + className}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Task Forge</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              {<PendingActions />}
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="btn btn-link" onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
