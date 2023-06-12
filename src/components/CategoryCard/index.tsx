import { FC } from 'react';
import { useGetCategoryImage } from '../../hooks/useGetCategoryImage';

import { Text } from '../Text';
import { Container, Image } from './styles';

import { Category } from '../../@types/Category';

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  category,
  onPress,
}) => {
  const { getCategoryImage } = useGetCategoryImage();

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
