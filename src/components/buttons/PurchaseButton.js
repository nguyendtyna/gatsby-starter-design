import React from "react"
import styled from "styled-components"

export default function PurchaseButton(props) {
  return (
    <Wrapper>
      <Title>{props.title || "Get Pro Access"}</Title>
      <Subtitle>{props.subtitle || "$19 per month"}</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.p``

const Subtitle = styled.p``
