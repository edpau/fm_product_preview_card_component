import perfumeMobileImg from "../assets/images/image-product-perfume-mobile.jpg"
import perfumeDesktopImg from "../assets/images/image-product-perfume-desktop.jpg"

export const products = [
    {
        id: 1,
        category: "Perfume",
        productName: "Gabrielle Essence Eau De Parfum",
        description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        discountedPrice: "$149.99",
        originalPrice: "$169.99",
        image: {
            desktop: perfumeDesktopImg,
            mobile: perfumeMobileImg,
        },
        imgAlt: "Square glass bottle of Gabrielle Chanel perfume with a sleek gold cap, placed beside green leaves on a neutral surface.",
    }
]