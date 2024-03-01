import {
  ArrowDropDownRounded,
  MenuRounded,
  Notifications,
  Umbrella,
} from '@mui/icons-material';
import ButtonIcon from './experimental/ButtonIcon';
import Avatar from './experimental/Avatar';

export default function Header() {
  return (
    <header className="z-40 flex items-center justify-between w-full h-16">
      <ButtonIcon className="lg:hidden block ml-6 ">
        <MenuRounded />
      </ButtonIcon>
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative flex items-center justify-end w-full p-1 space-x-4">
          <ButtonIcon>
            <Umbrella />
          </ButtonIcon>
          <ButtonIcon>
            <Notifications />
          </ButtonIcon>
          <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
          <Avatar url={''} />
          <button className="flex items-center text-gray-500 dark:text-white text-md">
            Pradeep
            <ArrowDropDownRounded fontSize="medium" />
          </button>
        </div>
      </div>
    </header>
  );
}
