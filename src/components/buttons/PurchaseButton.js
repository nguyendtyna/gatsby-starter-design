import React from "react"
import styled from "styled-components"

export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title || "Get Pro Access"}</Title>
      <Subtitle>{subtitle || "$19 per month"}</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.p``

const Subtitle = styled.p``
