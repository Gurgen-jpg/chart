export type ChartSliceType = {
    chartTitle: ECategoryName | ''
    products: ProductType[]
    status: EStatus | null
    error: any
}
export type ProductType = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}
export enum EStatus {
    idle = "idle",
    loading = "loading",
    success = "success",
    failed = "failed"
}
export enum ECategoryName {
    smartphones = "smartphones",
    laptops = "laptops"
}