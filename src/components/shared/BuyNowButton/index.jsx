import GeneralButton from "../GeneralButton"

const BuyNowButton = ({ button_style, p_style }) => {
  return (
    <>
      <GeneralButton 
        text='Buy Now'
        button_style={button_style}
        p_style={p_style}
      />
    </>
  )
}
export default BuyNowButton
