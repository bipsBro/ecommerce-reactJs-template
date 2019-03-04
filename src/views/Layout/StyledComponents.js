import styled from 'styled-components';

// START main lay-out container
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  flex: 1;
  flex-direction: row;
  
  background-color: #F1F1F1;
  text-align: center;
  
  margin-bottom: 10px;
  padding: 10px;
`;

const NavigationMenuContainer = styled.div`
  flex: 1;
  
  overflow: hidden;
  background-color: #333;
  
  & > a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  & > a:hover {
    background-color: #ddd;
    color: black;
  }
  
  margin-bottom: 10px;
`;

const ContentColumnContainer = styled.div`
  align-items: stretch;
  width: 100px;
  
  background-color: #f1f1f1;
  
  line-height: 75px;
  font-size: 30px;
  flex-grow: ${ ({ isMain }) => (isMain ? 8 : 1) };

  padding: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: stretch;
  /* not last child */
  & > ${ ContentColumnContainer }:not(:last-child) {
    margin-right: 10px;
  }
`;

const FooterContainer = styled.div`
  flex: 1;
  flex-direction: row;
  
  background-color: #F1F1F1;
  text-align: center;
  
  margin-top: 10px;
  padding: 10px;
`;
// END main lay-out container

export {
  ContentColumnContainer,
  ContentContainer,
  LayoutContainer,
  FooterContainer,
  HeaderContainer,
  NavigationMenuContainer,
};
