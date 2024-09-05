const Footer = (): JSX.Element => {
  return (
    <footer
      id="footer"
      className="fixed bottom-0 bg-[#f2f2f2] py-4 w-full mt-8"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://picsum.photos/75/100"
              alt="لوگو گلستان"
            />
            <h6 className="pr-3">ساخته شده توسط واحد بهبود عملیات </h6>
          </div>
          <p className="pr-3 select-none pt-4 sm:pt-0">
            تمامی حق و حقوقات محفوظ می باشد. ©
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
