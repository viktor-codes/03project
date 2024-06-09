const Button = ({buttonText, reqType, setreqType}) => {
  return (
      <button
          className="w-1/3 p-2 text-base text-center focus:bg-black focus:text-white border-solid border-2"
          type="button"
          onClick={() => setreqType(buttonText)}
      >
          {buttonText}
      </button>
  );
}

export default Button
