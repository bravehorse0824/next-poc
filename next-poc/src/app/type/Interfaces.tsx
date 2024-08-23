export interface BidProductSearchResult {
  result?: Result;
  resProducts?: Array<BidProductSearchResultResProductsInner>;
}

export interface Result {
  success: boolean;
  message: string;
  code: number;
}

export interface BidProductSearchResultResProductsInner {
  [key: string]: any;
  pricingWrapper?: Pricing;
  productWrapper?: ProductWrapper;
  totalQtyInStock?: number;
}

export interface Pricing {
  [key: string]: any;
  standardDealerPrice?: number;
  publicPrice?: number;
  promoDealerPrice?: number;
  bucket1_DealerPrice?: number;
  bucket2_DealerPrice?: number;
  bucket3_DealerPrice?: number;
  bucke4_DealerPrice?: number;
}

export interface ProductWrapper {
  [key: string]: any;
  storage?: string;
  screenSize?: string;
  ram?: string;
  projectName?: string;
  productType?: string;
  productModel?: string;
  productLine?: string;
  productId?: string;
  productFamily?: string;
  partNumber?: string;
  osType?: string;
  osCategory?: string;
  gpu?: string;
  ean?: string;
  cpuFamily?: string;
  cpuBrand?: string;
  businessUnit?: string;
  battery?: string;
}

export interface BidProductAvailabilityResult {
  result?: Result;
  productWrapper?: ProductWrapper;
  availabilityConfig?: Array<BidProductAvailabilityResultAvailabilityConfigInner>;
}

export interface BidProductAvailabilityResultAvailabilityConfigInner {
  [key: string]: any;
  accountId?: string;
  accountName?: string;
  ecpCode?: string;
  qtyInStock?: number;
  qtyInTransit?: number;
}
export interface BidBidsListResult {
  result?: Result;
  quotesList?: Array<BidBidsListResultQuotesListInner>;
}

export interface BidBidsListResultQuotesListInner {
  [key: string]: any;
  totalPrice?: number;
  totalDiscount?: number;
  sfdcQuoteId?: string;
  quantity?: number;
  name?: string;
  expirationDate?: string;
}

export interface ProductProductInfoResult {
  [key: string]: any;
  partNumber?: string;
  ram?: string;
  storage?: string;
  cpuBrand?: string;
  cpuFamily?: string;
  osCategory?: string;
  screenSize?: string;
  productType?: string;
  businessUnit?: string;
  osType?: string;
  minPrice?: string;
  maxPrice?: string;
  minStock?: string;
  maxStock?: string;
}
