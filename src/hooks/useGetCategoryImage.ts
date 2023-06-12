export const useGetCategoryImage = () => {
  const getCategoryImage = (categoryName: string) => {
    switch (categoryName) {
    case 'Grocery':
      return require('../assets/icons/category/breadIcon.png');
    case 'Work':
      return require('../assets/icons/category/briefcaseIcon.png');
    case 'Design':
      return require('../assets/icons/category/designIcon.png');
    case 'Health':
      return require('../assets/icons/category/heartbeatIcon.png');
    case 'Home':
      return require('../assets/icons/category/homeIcon.png');
    case 'Social':
      return require('../assets/icons/category/megaphoneIcon.png');
    case 'Music':
      return require('../assets/icons/category/musicIcon.png');
    case 'Sport':
      return require('../assets/icons/category/sportIcon.png');
    case 'Study':
      return require('../assets/icons/category/universityIcon.png');
    case 'Movie':
      return require('../assets/icons/category/videoCameraIcon.png');
    }
  };

  return {
    getCategoryImage
  };
};
