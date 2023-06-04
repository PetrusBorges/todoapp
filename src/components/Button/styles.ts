import styled from 'styled-components/native';

interface ContainerProps {
  isOutlined?: boolean;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: ${({ isOutlined }) => isOutlined ? 'transparent' : '#8875FF'};
  border: ${({ isOutlined }) => isOutlined ? '1px' : 'transparent'};
  border-color: ${({ isOutlined }) => isOutlined ? '#8E7CFF' : 'transparent'};
  opacity: ${({ disabled }) => disabled ? 0.2 : 1};
`;
