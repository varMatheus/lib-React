import React from "react";
import styled from "styled-components"

export interface TagProps {
  texto?: string
}

const TagEstilizada = styled.div`
  padding: 24px 32px;
  background-color: #EB9B00;
  width: fit-content;
  font-weight: 700;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
  & p {
    color: #FFF;
  }
`
export const AbTag = ({ texto }: TagProps) => {
  return (
    <TagEstilizada>
      <p>{texto}</p>
    </TagEstilizada>
  );
}
