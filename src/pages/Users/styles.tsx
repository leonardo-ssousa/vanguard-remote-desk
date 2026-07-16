import styled from "styled-components";

export const UsersPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;
  
  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  & > main {
    height: 100%;
  }
`;
