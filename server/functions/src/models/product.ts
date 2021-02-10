import ITranslatedText from './translatedText';

export default interface IProduct {
    id: string;
    name: string | ITranslatedText[];
    descr: string;
    images: string[];
    price: number;
    createdAt: Date;
    modifiedAt: Date;
}

