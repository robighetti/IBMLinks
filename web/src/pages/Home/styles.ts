import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100vh;
  width: 100%;

  display: flex;
`;

export const Sidebar = styled.div`
  flex: 0, 0, 30%;
  border-right: 2px solid rgba(108, 99, 255, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h1 {
    color: #6c63ff;
    text-transform: uppercase;
    margin: 24px 0;
  }

  img {
    width: 50%;
  }

  hr {
    width: 90%;
  }

  form {
    width: 100%;
    padding: 16px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
`;

export const Content = styled.div`
  flex: 0 0 70%;
  padding: 24px;
`;

export const List = styled.ul`
  li {
    display: flex;

    list-style: none;
    margin: 16px 16px;

    div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 18px;
      }

      a {
        text-decoration: none;
        color: #6c63ff;
      }
    }
  }
`;
