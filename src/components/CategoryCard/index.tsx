import { FC } from 'react';

import { Category } from '../../@types/Category';

import { Text } from '../Text';
import { Container, Image } from './styles';

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  category,
  onPress,
}) => {
  const getCategoryImage = (categoryName: string) => {
    switch (categoryName) {
    case 'Grocery':
      return require('../../assets/icons/category/breadIcon.png');
    case 'Work':
      return require('../../assets/icons/category/briefcaseIcon.png');
    case 'Design':
      return require('../../assets/icons/category/designIcon.png');
    case 'Health':
      return require('../../assets/icons/category/heartbeatIcon.png');
    case 'Home':
      return require('../../assets/icons/category/homeIcon.png');
    case 'Social':
      return require('../../assets/icons/category/megaphoneIcon.png');
    case 'Music':
      return require('../../assets/icons/category/musicIcon.png');
    case 'Sport':
      return require('../../assets/icons/category/sportIcon.png');
    case 'Study':
      return require('../../assets/icons/category/universityIcon.png');
    case 'Movie':
      return require('../../assets/icons/category/videoCameraIcon.png');
    }
  };

  return (
    <Container
      backgroundColor={category.name}
      onPress={onPress}
    >
      <Image
        source={getCategoryImage(category.name)}
      />
      <Text color='#010101'>{category.name}</Text>
    </Container>
  );
};
