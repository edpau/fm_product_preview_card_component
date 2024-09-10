import shoppingCartLogo from "../assets/images/icon-cart.svg";

const Card = ({ product }) => {
  const {
    productId,
    category,
    productName,
    description,
    discountedPrice,
    originalPrice,
    image,
    imgAlt,
  } = product;

  return (
    <article
      className="max-w-[91%] overflow-hidden rounded-xl bg-neutral-primary sm:flex sm:max-w-[37.5rem]"
      aria-labelledby={`product-name-${productId}`}
    >
      <picture>
        <source srcSet={image.desktop} media="(min-width: 640px)" />
        <img
          className=""
          src={image.mobile}
          alt={imgAlt}
          width="686"
          height="480"
        />
      </picture>
      <section className="p-6 sm:max-w-[50%] sm:p-8">
        <p className="font-category text-xs font-medium uppercase tracking-[0.3125rem] text-neutral-primary">
          {category}
        </p>
        <h2
          id={`product-name-${productId}`}
          className="mt-3 font-heading text-[2rem] font-bold leading-8 text-neutral-secondary sm:mt-5"
        >
          {productName}
        </h2>
        <p className="mt-4 font-body text-paragraph font-medium leading-[1.4375rem] text-neutral-primary sm:mt-6">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-5 sm:mt-[29px]">
          <p className="font-priceTag text-[2rem] font-bold leading-8 text-brand-primary">
            {discountedPrice}
          </p>
          <s className="font-body text-[0.8125rem] font-medium leading-6 text-neutral-primary">
            <span className="sr-only">Original Price:</span>
            {originalPrice}
          </s>
        </div>
        <button className="mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-brand-secondary font-body text-paragraph font-bold text-onbrand-primary transition duration-300 ease-in-out hover:bg-brand-secondary-hover sm:mt-[29px]">
          <img src={shoppingCartLogo} alt="" /> Add to Cart
        </button>
      </section>
    </article>
  );
};

export default Card;
