import styled from 'styled-components/native';

interface CategoryCardProps {
  backgroundColor: keyof typeof categoryColors;
}

const categoryColors = {
  Grocery: '#CCFF80',
  Work: '#FF9680',
  Design: '#80FFFF',
  Health: '#80FFA3',
  Home: '#FF8080',
  Social: '#FF80EB',
  Music: '#FC80FF',
  Sport: '#80FFFF',
  Study: '#809CFF',
  Movie: '#80D1FF',
};

export const Container = styled.TouchableOpacity<CategoryCardProps>`
  width: 95px;
  height: 95px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => categoryColors[backgroundColor] || '#000000'}
`;

export const Image = styled.Image``;
