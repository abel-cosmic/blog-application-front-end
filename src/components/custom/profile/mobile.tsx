const MobileProfile: React.FC = () => {
  //   const userStorageData = localStorage.getItem("user");
  //   const user = userStorageData ? JSON.parse(userStorageData) : null;

  return (
    <div className="flex flex-row items-center gap-4 ml-2">
      <div>
        {/* {user?.profile_picture ? (
          <img
            src={baseUrl + user?.profile_picture}
            alt={user?.first_name}
            className="w-20 h-20 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-12 h-12 font-medium rounded-full cursor-pointer bg-secondary dark:bg-primary text-primary dark:text-slate-50">
            {user?.first_name?.at(0)}
          </div>
        )} */}
      </div>
      <div className="flex flex-col items-start">
        <p className="font-bold text-md">Welcome</p>
        {/* <h1>{user?.first_name}</h1> */}
      </div>
    </div>
  );
};
export default MobileProfile;
