const GeneralButton = ({ text, button_style, p_style }) => {
  return (
    <button className={`${button_style}`}>
      <p className={`${p_style}`}>{text}</p>
    </button>
  )
}
export default GeneralButton
