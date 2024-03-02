import Text from './Text';

function NavBar() {
  return (
    <div className="navbar">
      <div className="flex-1 p-3 bg-gray-200">
        <Text
          size="2xl"
          fontWeight="semibold"
          className="text-gray-800 dark:text-white"
        >
          Task Forge
        </Text>
      </div>
    </div>
  );
}

export default NavBar;
