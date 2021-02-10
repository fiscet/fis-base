import ITranslatedText from './translatedText';
import IProduct from './product';

export default interface Offer {
    id: string;
    sellerId: string;
    title: string | ITranslatedText[];
    description: string | ITranslatedText[];
    products: IProduct[];
    validFrom: Date;
    validTo: Date;
    deliveryDate: Date;
    deliveryPlace: string;
    minBuyers: number;
    maxBuyers: number;
    deliveryType: 'pickup-point' | 'home-delivery'
    createdAt: Date;
    modifiedAt: Date;
}