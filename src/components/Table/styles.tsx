import styled from "styled-components";

export const TableWrapper = styled.table`
    width: 100%;
    max-height: 100%;
    border: 1px solid;
    border-collapse: collapse;
    border-radius: 8px;

  & thead > tr > td {
    background-color: ${props => props.theme.background.secondary};
  }


  & td {
    border: 1px solid;
    padding: 6px 12px;
  }
`;
