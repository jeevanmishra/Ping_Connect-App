
const NoDataAvailable = ({message}) => {
    return (
        <div className="flex flex-col items-center">
        <img
          src="https://ik.imagekit.io/pb97gg2as/Ping-Connnect/undraw_empty.svg?updatedAt=1687183185476"
          className=" w-60 h-60"
          alt="no_data"
        />
        <h3 className="w-auto text-2xl font-extrabold tracking-tight text-center text-gray-600 dark:text-gray-100 ">
          {message}
        </h3>
      </div>
    );
};

export default NoDataAvailable;