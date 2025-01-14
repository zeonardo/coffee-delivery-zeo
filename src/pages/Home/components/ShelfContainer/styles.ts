import styled from 'styled-components'

export const ShelfStylesContainer = styled.section`
width: 100%;
height: auto;
position: absolute;
left: 0;
padding-left: 5%;

h1 {
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  color: ${props => props.theme.subtitle};
  margin-bottom: 3.4rem;
}

.product-container {
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  .coffee-item {
    width: 256px;
    height: 310px;

    /* Base/Card */

    background: ${props => props.theme.purpleLight};
    border-radius: 6px 36px;

    img {
      display: block;
      position: relative;
      top: -20px;
      width: 120px;
      margin: 0 auto;
    }

    .cathegory-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;

      .coffee-cathegory {
        font-family: "Roboto", sans-serif;
        font-size: 0.62rem;
        line-height: 0.81rem;
        color: ${props => props.theme.yellowDark};
        text-transform: uppercase;
        
  
        /* Shape */
  
        width: 5rem;
        height: auto;
        padding: .25rem .5rem;
        border-radius: 100px;
        background-color: ${props => props.theme.yellowLight};
        margin-right: .25rem;
      }
    }

    .coffee-name {
      font-family: "Baloo 2", sans-serif;
      text-align: center;
      color: ${props => props.theme.subtitle};
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
    }

    .description {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${props => props.theme.label};
      text-align: center;
      padding: 0.25rem 1rem;
    }

    .prod-card-footer {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .price {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;

        span {
          font-family: "Roboto", sans-serif;
          color: ${props => props.theme.text};
          font-size: 1rem;
        }
      }

      .product-quantity-selector {
        width: 60%;
        height: 2.38rem;
        display: flex;

        .decrease, .increase {
          background-color: ${(props) => props.theme.button};
          color: ${props => props.theme.purple};
          width: 18%;
          height: 2.38rem;
          border: none;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
        }

        #input-quantity {
          width: 35%;
          height: 2.38rem;
          border: none;
          background-color: ${(props) => props.theme.button};
          text-align: center;
  
          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
  
          /* Firefox */
          &[type=number] {
            -moz-appearance: textfield;
          }
        }
  
        .push-to-cart {
          width: 2.38rem;
          height: 2.38rem;
          padding: .5rem;
          margin-left: 4%;
  
          background-image: url("../../../../src/assets/cart-white.png");
          background-repeat: no-repeat;
          background-position: center;
          background-color: ${props => props.theme.purpleDark};
  
          border: none;
          border-radius: 6px;
        }
      }
    }
  }
}

`