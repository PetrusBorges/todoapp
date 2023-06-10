import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

interface CategoryCardProps {
  Grocery: boolean;
  Work: boolean;
  Design: boolean;
  Health: boolean;
  Home: boolean;
  Social: boolean;
  Music: boolean;
  Sport: boolean;
  Study: boolean;
  Movie: boolean;
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

export const Overlay = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  width: 100%;
  border-radius: 16px;
  background-color: #363636;
  padding: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  opacity: ${({ disabled }) => disabled ? '0.2' : '1'};
`;

export const Image = styled.Image``;

export const DetailsTask = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AlignDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const CategoryContainer = styled.View`
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CategoryCard = styled.TouchableOpacity<CategoryCardProps>`
  width: 95px;
  height: 95px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({
    Grocery,
    Work,
    Design,
    Health,
    Home,
    Social,
    Music,
    Sport,
    Study,
    Movie,
  }) => {
    if (Grocery) return categoryColors.Grocery;
    if (Work) return categoryColors.Work;
    if (Design) return categoryColors.Design;
    if (Health) return categoryColors.Health;
    if (Home) return categoryColors.Home;
    if (Social) return categoryColors.Social;
    if (Music) return categoryColors.Music;
    if (Sport) return categoryColors.Sport;
    if (Study) return categoryColors.Study;
    if (Movie) return categoryColors.Movie;
    return '#000000';
  }};
`;

export const DificultContainer = styled.View`
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DificultCard = styled.TouchableOpacity`
  width: 95px;
  height: 95px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  gap: 5px;
  background-color: #272727;
`;
