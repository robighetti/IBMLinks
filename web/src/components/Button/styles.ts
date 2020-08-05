import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #6c63ff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  margin-top: 16px;
  transition: transform 0.2s;

  &:hover {
    background: ${shade(0.2, '#6C63FF')};
    transform: scale(1.02);
  }
`;
