import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding-bottom: 16px;
  padding-top: 16px;
  min-width: 56px;
  height: 53px;
  width: 100%;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--white);
  

  &:hover {
    background: var(--twitter-dark-hover);
    border-bottom: 2px solid var(--twitter);
    color: var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

flex-shrink: 0;
`;