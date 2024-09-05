import { Link } from "react-router-dom";
import Button from "../../../atoms/button/Button";
import RoutesPath from "../../../../routers/RoutesEnum";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="bg-white py-[10px] relative">
        <div className="container">
          <div className="flex justify-between items-center relative">
            <Link to={``}>
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://picsum.photos/50/50"
                alt=""
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                className="bg-[#2b75ffdf] text-white rounded-lg py-[6px] px-3 text-sm"
                to={""}
              >
                لیست کاربران
              </Link>
              <Button
                // onClick={() => {
                //   setIsShowAccountModal(!isShowAccountModal);
                //   setIsShowOverlay(true);
                // }}
                className="bg-primary text-white rounded-lg py-[6px] px-3 text-sm"
                title="حساب کاربری"
              />
            </div>
            <div
              className={`${"opacity-0 hidden"} transition-all bg-white rounded-lg rounded-tl-sm shadow-primary_shadow absolute left-0 top-12 z-50 min-w-max px-6 py-3 flex flex-col items-center font-vazir_medium`}
            >
              <h5> نام تستی </h5>
              <Button
                onClick={() => {
                  localStorage.clear();
                  window.location.replace(RoutesPath.LOGIN);
                }}
                className="text-secondary mt-3"
                title=" خروج"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
