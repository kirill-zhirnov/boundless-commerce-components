import '../styles/styles.scss';

import Products from './components/Products';
import Product from './components/Products/Product';
import ProductListImage from './components/Products/ProductItem/ProductListImage';
import ProductPrice from './components/Products/ProductItem/ProductPrice';
import ProductLabels from './components/Products/ProductItem/ProductLabels';
import {IBasicSettings} from './@types/settings';
import useFormatCurrency from './hooks/useFormatCurrency';
import VwItem from './components/VwItem';
import {IPriceForTpl} from './@types/products';
import {getPriceForTpl, findSellingPrice, findPriceByAlias} from './lib/product';
import ProductAttrs from './components/Products/ProductItem/ProductAttrs';
import ManufacturerCharacteristic from './components/Products/ProductItem/ProductAttrs/ManufacturerCharacteristic';
import ImgThumb from './components/ImgThumb';
import SizeAndWeight from './components/Products/ProductItem/ProductAttrs/SizeAndWeight';
import NoImage from './components/NoImage';
import {findAvailableVariants, isValueSuitsCombination} from './lib/variant';

export {
	Products,
	Product,
	ProductListImage,
	ProductPrice,
	ProductLabels,
	VwItem,
	ProductAttrs,
	ManufacturerCharacteristic,
	ImgThumb,
	NoImage,
	SizeAndWeight,
	useFormatCurrency,
	IBasicSettings,
	IPriceForTpl,
	getPriceForTpl,
	findSellingPrice,
	findPriceByAlias,
	findAvailableVariants,
	isValueSuitsCombination
};