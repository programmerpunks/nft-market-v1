import GeneralButton from "./GeneralButton"

const AddToCartButton = ({ button_style, p_style }) => {
  return (
    <>
      <GeneralButton
        text='Add to Cart'
        button_style={button_style}
        p_style={p_style}
      />
    </>
  )
}
export default AddToCartButton
