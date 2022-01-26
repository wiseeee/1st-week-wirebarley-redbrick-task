import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 20px;
  width: 300px;
`;

export const TabMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Tab = styled.li`
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-bottom: ${(props) =>
    props.isActive ? '2px solid white' : '2px solid black'};
  padding: 6px;
  font-size: 14px;
  vertical-align: middle;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;

  &:nth-child(6) {
    border-right: 2px solid black;
  }
`;

export const TabContent = styled.div`
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  padding: 16px;
`;
