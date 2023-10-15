import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tag={image.tags}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </Gallery>
  );
};
