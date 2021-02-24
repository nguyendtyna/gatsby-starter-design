import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  /* By default, grid is set to rows
      - grid-template-columns allows for control of the size of each column
  */
  display: grid;
  grid-template-columns: 53px auto;
  /* Align content to the middle vertically:
      - align-content works best with a single element smaller than the container size,
      - align-items works best with multiple columns and multiple rows
  */
  align-items: center;
  gap: 20px;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`
const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  /* Enable CSS grid, align horizontally and vertically */
  display: grid;
  justify-content: center;
  align-content: center;
`
