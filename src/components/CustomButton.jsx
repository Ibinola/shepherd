function CustomButton({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#207DF7] text-white py-2 px-4 rounded-xl`}
    >
      + Create New
    </button>
  );
}

export default CustomButton;
