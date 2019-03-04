import React from 'react';
import styled from 'styled-components';

import { ContentColumnContainer, ContentContainer } from './StyledComponents';

import hoodImage1 from '../../assets/hood.png';
import hoodImage2 from '../../assets/Hood-Green.jpg';

const ProductFilterContainer = styled.div`
  display: flex;
  
  & h1 {
    flex-grow: 1;
  }
`;

const ProductSortContainer = styled.div`
  display: flex;
`;

const CollectionSortContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  flex-grow: 1;
  margin: 1%;
  flex-basis: 23%;

  display: flex;
  flex-direction: column;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
`;

const Image = styled.img``

const ProductImageContainer = styled.div`
  & ${ Image } {
    max-width: 100%;
    display: flex;
  }
`;

const ProductInfoContainer = styled.div`
  border-top: 1px solid red;
  margin-top: auto;
  background: white;
`;

const DummyContent = (
  <React.Fragment>
    <h2>Column</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
  </React.Fragment>
);

const content = (
  <React.Fragment>
    <ContentColumnContainer>
      { DummyContent }
    </ContentColumnContainer>
    <ContentColumnContainer isMain>
      <ProductFilterContainer>
        <h1>Jackets</h1>
        <ProductSortContainer>
          <CollectionSortContainer>
            <label>Filter by:</label>
            <select>
              <option value='/'>All Jackets</option>
            </select>
          </CollectionSortContainer>
          <CollectionSortContainer>
            <label>Sort by:</label>
            <select>
              <option value='/'>Featured</option>
            </select>
          </CollectionSortContainer>
        </ProductSortContainer>
      </ProductFilterContainer>
      <ProductContainer>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage1 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
        <ProductCard>
          <ProductImageContainer>
            <Image src={ hoodImage2 } />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
          </ProductInfoContainer>
        </ProductCard>
      </ProductContainer>
    </ContentColumnContainer>
    <ContentColumnContainer>
      { DummyContent }
    </ContentColumnContainer>
  </React.Fragment>
);

const Content = () => (content ? (
  <ContentContainer>
    { content }
  </ContentContainer>
) : null);

export default Content;
